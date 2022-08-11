
from django.contrib import admin
from django.urls import path
from .views import index, post, delete
urlpatterns = [
    path('admin/', admin.site.urls),
    path('post', post),
    path('delete', delete),
    path('', index),
]
