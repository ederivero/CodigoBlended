# condicional if-else si-sino
a=4
b=3.1
# si la condicion es Verdadera, entra al if, caso contrario entrara al else
# if(a>b):
#     print("a es mayor que b")
# elif(a==b):
#     print("a es igual a b")
# else:
#     print("b es mayor que a")

# soltero=True
# if(soltero):
#     print("Bienvenido a la solteria")
# else:
#     print("Mi mas sentido pesame")

# nombre="juan"
# bd_nombre="juancito"
# if(nombre==bd_nombre):
#     print("Si es la persona")
# else:
#     print("No es la persona")

# Ingresar un numero por teclado y que me diga si es multiplo de dos o par o impar
# numero = int(input("Ingrese un numero: "))
# if(numero % 2 == 0):
#     print("Tu numero es par")
# else:
#     print("Tu numero es impar")

# Ingresar un numero y que me diga si es positivo, cero o negativo
# numero = int(input("Ingrese un numero: "))
# if(numero > 0):
#     print("Es positivo")
# elif(numero < 0):
#     print("Es negativo")
# else:
#     print("Es cero")

# FOR => es usado para iterar sobre una secuencia de elementos
texto= "Hoy es sabado y ayer fue san valentin"
# print(texto[2])
# texto[2]="x"
contador=0
for letra in texto:
    # Para salto de linea \n y para tabulacion \t
    # print(letra, end=",")
    if letra=="o":
        contador+=1
# en javascript funciona asi => for(i=0; i<10; i++){}
# print("La frase tiene {} letras 'o'".format(contador))

# range => es un metodo que como primer parametro le ponemos el inicio, como segundo parametro el tope o fin y como tercer parametro en cuantas unidades se va a incrementar en cada ciclo o decrementar, PERO si solo se le pone un valor ese sera el limite y por defecto iniciara en 0 y su incremento en una unidad
# for i in range(100,10,-1):
#     print(i)

for x in range(0,10):
    print(x)

tareas= ['Matematica', 'Biologia', 'Comunicacion','Musica']
for tarea in tareas:
    print(tarea)

print(ord("a"))
primera_letra=input("Ingrese una letra: ")
ultima_letra= input("Ingrese otra letra: ")
for letra in range(ord(primera_letra),ord(ultima_letra)):
    print(chr(letra))

# Se desea ingresar un numero inicial y un numero final y ver cuantos numeros son pares y cuantos impares
# 20 - 28
# 3 pares y 4 impares
inicio = int(input("Ingrese el inicio: "))
limite = int(input("Ingrese el tope: "))
pares = 0
impares = 0
