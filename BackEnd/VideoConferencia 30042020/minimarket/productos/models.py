from django.db import models

# Create your models here.

class Categoria(models.Model):
    id = models.AutoField(primary_key=True, db_column="cat_id")
    nombre = models.CharField(max_length=30, db_column="cat_nom", verbose_name="Nombre Categoria")

    def __str__(self):
        return self.nombre


    class Meta:
        db_table = "t_categoria"
        verbose_name_plural="Categorias"

class Producto(models.Model):
    id=models.AutoField(primary_key=True, db_column="prod_id")
    nombre = models.CharField(max_length=25, db_column="prod_nom", verbose_name="Nombre Producto")
    categoria = models.ForeignKey(Categoria, on_delete=models.PROTECT, related_name="productos")

    def __str__(self):
        return self.nombre
    
    class Meta:
        db_table = "t_producto"
        verbose_name_plural ="Productos"