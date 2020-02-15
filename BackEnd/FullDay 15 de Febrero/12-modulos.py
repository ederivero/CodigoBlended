# la forma de añadir un modulo es mediante la palabra reservada import los nombre de los modulos no pueden empezar con numeros ni caracteres especiales, por buenas practicas las importaciones siempre se hacen al inicio para ser utilizadas en todo el documento
# import milibreria

# resultado = milibreria.sumar(5,8)
# print(resultado)

# segunda forma con un alias
# import milibreria as lib

# resultado = lib.sumar(5,8)
# print(resultado)

# tercera forma seleccionando metodos especificos
from milibreria import saludar, sumar as sumatoria
saludar("Guido")
sumatoria(5,2)

