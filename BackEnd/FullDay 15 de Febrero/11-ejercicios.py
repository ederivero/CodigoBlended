# EJERCICIO 1 Crear una funcion en la cual reciba el nombre y la edad y me indique si puedo votar o no puedo votar o si es opcional el voto
def votacion(nombre, edad):
    if edad >=65:
        print("{} puedes votar pero no es obligatorio".format(nombre))
    elif edad>=18:
        print("{} puedes votar".format(nombre))
    else:
        print("{} no puedes votar".format(nombre))

nombre = input("Ingresa tu nombre: ")
edad = int(input("Ingresa tu edad: "))
votacion(nombre,edad)

# EJERCICIO 2 Crear una funcion en la cual reciba un texto y me diga si es capicua/palindroma
# 2002
# anita lava la tina
# somos o no somos
# hint => copiar el texto a una lista y eliminar sus espacios con codigo ascii