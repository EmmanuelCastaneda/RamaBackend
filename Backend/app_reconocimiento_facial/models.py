from djongo import models
from django.contrib.auth.models import AbstractUser
from django.db import models

tipoUsuario = [
    ('Administrativo', 'Administrativo'),
    ('Instructor', 'Instructor')
]

class Usuario(models.Model):
    nombres = models.CharField(max_length=30)
    apellidos = models.CharField(max_length=30)
    numero_documento = models.CharField(max_length=20, unique=True)
    correo_electronico = models.CharField(max_length=50, unique=True)
    genero = models.CharField(max_length=9)

    def __str__(self) -> str:
        return self.nombres

class Ficha(models.Model):
    numero_ficha = models.CharField(max_length=10, unique=True)
    aprendices_actuales = models.IntegerField()
    aprendices_matriculados = models.IntegerField()
    jornada = models.CharField(max_length=6)
    tipo_formacion = models.CharField(max_length=10)

    def __str__(self) -> str:
        return self.numero_ficha

class User(AbstractUser):
    userTipo = models.CharField(
        max_length=15, choices=tipoUsuario)

    fechaHoraCreacion = models.DateTimeField(auto_now_add=True
                                             )
    fechaHoraActualizacion = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.username