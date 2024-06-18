# Los serializer convierten los tipos de datos de django a json

from rest_framework import serializers
from .models import Usuario, Ficha

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'

class FichaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ficha
        fields = '__all__'