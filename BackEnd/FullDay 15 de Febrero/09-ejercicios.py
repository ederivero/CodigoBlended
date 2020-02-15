# Ejercicio 1: Teniendo una lista vacia, ingresar 5 numeros por el teclado e indicar cuales de ellos son primos
# primo => si solamente es divisible entre si y entre 1
# 1 3 5 7 11 13 17 19 23 ....
# https://matematicasies.com/Averiguar-si-un-numero-es-primo
# hint=> use un for con un range como tope el numero en cuestion

# numeros=[]
# for i in range(1,6):
#     numeros.append(int(input("Ingrese un numero para la posicion {}: ".format(i))))
# for numero in numeros:
#     primo = 0
#     for dividendo in range(2,numero):
#         if (numero % dividendo == 0):
#             primo = 1
#             break
#         else:
#             primo = 0
#     if primo == 0:
#         print("El numero {} es primo".format(numero))
#     else:
#         print("El numero {} no es primo".format(numero))

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
# hint => usar un for, un while
# ingreso = int(input("Ingrese la altura: "))
# for altura in range(1, ingreso+1):
#     for ancho in range(0, altura):
#         print("*", end="")
#     print()

# Ejercicio 3: Hacer una calculadora que de un menu de opciones las cuales sean: sumar, restar, multiplicar y que me indique el resultado y si quiero seguir haciendo operaciones o escribir "salir" para salir del bucle
# hint => use break

# 1. Sumar
# 2. Restar
# 3. Multiplicar
# Salir
# ingrese el numero 1:
# ingrese el numero 2:
# La <operacion> es: 

while(True):
    print("1. Sumar \n2. Restar \n3. Multiplicacion \nSalir")
    opcion = input("Ingrese su opcion: ")
    if opcion != "Salir":
        numero1 = int(input("Ingrese el primer numero: "))
        numero2 = int(input("ingrese el segundo numero: "))
        if opcion == '1':
            print("La suma es {}".format(numero1+numero2))
        elif opcion == '2':
            print("La Resta es {}".format(numero1-numero2))
        else:
            print("La multiplicacion es {}".format(numero1*numero2))
    else:
        print("Hasta la vista, baby")
        break

