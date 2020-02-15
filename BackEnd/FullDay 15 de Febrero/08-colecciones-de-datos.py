# listas
colores = ["Azul", "Rojo", "Verde", "Amarillo"]
# print(colores)

# imprimir una posicion determinada
# print(colores[1])

# imprimir el ultimo item de la lista
# print(colores[-1])

# imprimir desde la posicion 1 hasta la 3
# print(colores[1:3])

# imprimir desde la posicion 2 hasta el final
# print(colores[2:])

colores[2] = "Indigo"
# print(colores)
# Todas las formas de impresion mas NO DE EDICION de las listas tambien sirven para los str
texto = "Ya son las 12"
# print(texto[3:])

# Metodos de Edicion de listas
colores.append("Violeta")
# print(colores)

# Metodo para quitar un elemento de la lista
colores.remove("Indigo")
# print(colores)

# Metodo para limpiar toda la lista, elimina todos los items
colores.clear()
# print(colores)

# Teniendo la siguiente lista
combinada = [1, "Eduardo", 14.5, True, "Arequipa"]
# se dese saber cuantos elementos son int, float, str y bool y al final limpiar la lista
# Rpta => en la lista hay 1 int, 1 float, 2 str, 1 bool
# Hint => use el metodo type()
entero = 0
flotante = 0
booleano = 0
string = 0
otro_dato = 0
for elemento in combinada:
    if (type(elemento) == int):
        entero += 1
    elif (type(elemento) == float):
        flotante += 1
    elif (type(elemento) == bool):
        booleano += 1
    elif (type(elemento) == str):
        string += 1
    else:
        otro_dato += 1
# print("en la lista hay {} enteros, {} flotantes, {} booleanos, {} string y {} elementos de otro tipo de dato".format(entero,flotante,booleano,string,otro_dato))

# a = 5
# print(type(a))
# if (type(a) == str):
#     print("Es entero")


# Tuplas => coleccion de elementos ordenada QUE NO SE PUEDE MODIFICAR, es inalterable y sirve para usar elementos que nunca se van a modificar
tupla_datos = (18, 3.1415, "root", True, 18)
# print(tupla_datos[1])

# Para sacar la longitud de la tupa
# print(len(tupla_datos))

# Para ver cuantas veces repetidas hay un dato
# print(tupla_datos.count("root"))

# print(type(tupla_datos))

# Conjuntos => Coleccion de elementos DESORDENADA, osea, no tiene indice para acceder a sus elementos
temporadas = {"otoño", "invierno", "primavera", "verano"}
# for temporada in temporadas:
#     print(temporada)
# temporadas.add("otra temporada")
# print(temporadas)

# Diccionarios => por que tiene una gran similitud con los JSON (JavaScript Object Notation) SOAP y es la mejor forma de pasar los datos del frontend al backend, son colecciones de datos INDEXADOS, tiene una llave y un valor, no estan ordenados y se puede modificar sus valores
dias_semana= {
    "lunes" : "aburrido",
    "martes" : "cine",
    "miercoles" : "pollo frito",
    "jueves" : "pizza",
    "viernes" : "fiesta",
    "sabado" : "codigo",
    "domingo" : "repaso"
}
print(dias_semana)
# para ver el valor de una clave en especifico
print(dias_semana["lunes"])

# para ver todas sus llaves (keys)
print(dias_semana.keys())

# para ver todos sus valores (values)
print(dias_semana.values())

# para agregar una nueva llave y su valor
dias_semana["otro_dia"]="No hay no existe"
print(dias_semana)



print(dias_semana.items())
for llave, valor in dias_semana.items():
    print("El dia de la semana es {} y significa {}".format(llave, valor))
