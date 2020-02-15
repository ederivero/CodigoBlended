# Ejercicio 1: Teniendo una lista vacia, ingresar 5 numeros por el teclado e indicar cuales de ellos son primos
# primo => si solamente es divisible entre si y entre 1
# 1 3 5 7 11 13 17 19 23 ....
# https://matematicasies.com/Averiguar-si-un-numero-es-primo
# hint=> use un for con un range como tope el numero en cuestion

numeros=[]
for i in range(1,6):
    numeros.append(int(input("Ingrese un numero para la posicion {}: ".format(i))))
for numero in numeros:
    primo = 0
    for dividendo in range(2,numero):
        if (numero % dividendo == 0):
            primo = 1
            break
        else:
            primo = 0
    if primo == 0:
        print("El numero {} es primo".format(numero))
    else:
        print("El numero {} no es primo".format(numero))

# Ejercicio 2: Graficar un triangulo recto en consola dependiendo del numero de niveles ingresado por teclado
# ingreso: 3
# *
# **
# ***

# ingreso: 6
# *
# **
# ***
# ****
# *****
# ******

# Ejercicio 3: Hacer una calculadora que me de un menu de opciones las cuales sean: sumar, restar, multiplicar y que me indique el resultado y si quiero seguir haciendo operaciones o escribir "salir" para salir del bucle