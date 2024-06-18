from rest_framework import viewsets
from .serializer import UsuarioSerializer, FichaSerializer
from .models import Usuario, Ficha

# Create your views here.
class UsuarioView(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()  

class FichaView(viewsets.ModelViewSet):
    serializer_class = FichaSerializer
    queryset = Ficha.objects.all()