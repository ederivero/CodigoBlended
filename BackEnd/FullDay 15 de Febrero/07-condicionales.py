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

# for x in range(0,10):
#     print(x)

tareas= ['Matematica', 'Biologia', 'Comunicacion','Musica']
# for tarea in tareas:
#     print(tarea)

# print(ord("a"))
# primera_letra=input("Ingrese una letra: ")
# ultima_letra= input("Ingrese otra letra: ")
# for letra in range(ord(primera_letra),ord(ultima_letra)):
#     print(chr(letra))

# Se desea ingresar un numero inicial y un numero final y ver cuantos numeros son pares y cuantos impares
# 20 - 28
# 3 pares y 4 impares
# inicio = int(input("Ingrese el inicio: "))
# limite = int(input("Ingrese el tope: "))
# pares = 0
# impares = 0
# for numero in range(inicio,limite+1):
#     if(numero % 2==0):
#         pares += 1
#     else:
#         impares += 1
# print("Hay {} numeros pares y {} numeros impares".format(pares,impares))

# break => para parar el ciclo principal, ahi muere
# for numero in range(0,100):
#     if (numero==25):
#         print("chau")
#         break
#     if (numero==10):
#         print("es el diez")
#     print(numero)

# continue => para parar solamente esa iteracion
# for numero in range(0,20):
#     if (numero==10):
#         continue
#     print(numero)

# while => mientras que una condicion sea cierta, siempre se va a repetir 
valor_inicial=1
valor_final=10
while(valor_inicial<valor_final):
    print(valor_inicial)
    # en el while siempre tenemos que tener una forma de parar sino se generara un bucle infinito
    valor_inicial+=1

# en python no existe el do-while => hacer mientras que
# pass => no hace nada pero como en python no existe las llaves y todo se maneja por bloques de identacion la unica forma de dejar un if, else, while, for o funciones vacias es declarando la palabra reservada pass
for i in range(0,200):
    pass
print("Eso es todo por las condicionales")
# NOTA: El switch case no existe en python, en su lugar se usa mayormente el if con elif, el elif no existe en JavaScript