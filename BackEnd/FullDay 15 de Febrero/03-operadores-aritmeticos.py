# OPERADORES ARITMETICOS
# + SUMA
# - RESTA
# * MULTIPLICACION
# / DIVISION
# % MODULO
# ** EXPONENTE
# // COCIENTE
numero1 = int(input("Por favor ingresa el primer numero: "))
numero2 = int(input("Por favor ingresa el segundo numero: "))
numero3 = numero1 + numero2
print("La suma es {}".format(numero3))
numero3 = numero1 - numero2
print("La resta es {}".format(numero3))
numero3 = numero1 * numero2
print("La multiplicacion es : {}".format(numero3))
numero3 = numero1 / numero2
print(f"La division es: {numero3}")
numero3 = numero1 % numero2
print(f"El modulo es: {numero3}")
numero3 = numero1 ** numero2
print(f"El resultado de {numero1} elevado a {numero2} es: {numero3}")
numero3 = numero1 // numero2
print(f"El cociente de la division entre {numero1} y {numero2} es {numero3}")