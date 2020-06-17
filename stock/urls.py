from django.urls import path
from django.contrib import admin

from . import views

name = "stock"
urlpatterns = [
    path('', views.index, name='index'),
    path('manage', views.manage, name='manage'),
    path('history', views.history, name='history'),
    path('manage/<int:pkey>', views.deleted, name='deleted'),
    path('detail-id-<int:pk>', views.detail, name='detail'),
]