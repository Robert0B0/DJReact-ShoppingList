from django.urls import path
from . import views

urlpatterns = [
    path('', views.ApiOverview, name='backend-overview'),
    path('item-list/', views.ItemList, name='item-list'),
    path('item-details/<str:pk>/', views.ItemDetails, name='item-details'),
    path('item-create/', views.ItemCreate, name='item-create'),
    path('item-update/<str:pk>/', views.ItemUpdate, name='item-update'),
    path('item-delete/<str:pk>/', views.ItemDelete, name='item-delete'),

]
