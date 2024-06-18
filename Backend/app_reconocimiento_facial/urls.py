from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from app_reconocimiento_facial import views

router_usuario = routers.DefaultRouter()
router_usuario.register(r'usuario', views.UsuarioView, 'usuario') 

urlpatterns = [
    path('v1/', include(router_usuario.urls)),
    path('docs/', include_docs_urls(title='Reconocimiento facial API')),
]