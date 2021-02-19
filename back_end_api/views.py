from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ItemSerializer

from .models import Item


@api_view(['GET'])
def ApiOverview(request):
    api_urls = {
        'List': '/item-list/',
        'Create': '/item-create/',
        'Details': '/item-details/<str:pk>/',
        'Update': '/item-update/<str:pk>/',
        'Delete': '/item-delete/<str:pk>/',
    }

    return Response(api_urls)


@api_view(['GET'])
def ItemList(request):
    items = Item.objects.all()
    serializer = ItemSerializer(items, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def ItemDetails(request, pk):
    item = Item.objects.get(id=pk)
    serializer = ItemSerializer(item, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def ItemCreate(request):
    serializer = ItemSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['POST'])
def ItemUpdate(request, pk):
    item = Item.objects.get(id=pk)
    serializer = ItemSerializer(instance=item, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['DELETE'])
def ItemDelete(reqiest, pk):
    item = Item.objects.get(id=pk)
    item.delete()
    return Response('Item successfully removed.')
