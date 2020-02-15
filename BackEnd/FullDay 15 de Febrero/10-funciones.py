# Para definir una funcion en Python se una la palabra reserva def=> definition

def saludar_bonito():
    """Funcion que imprime por pantalla un saludo cordial, no recibe parametros"""
    print("Hola amigos muy buenas tardes")

def saludar_con_nombre(nombre):
    """Funcion que recibe un nombre y te saluda personalizadamente"""
    print(f"Hola {nombre} muy buenas tardes")

def sumar(a,b):
    """Funcion que recibe dos parametros y devuelve su sumatoria"""
    resultado = a + b 
    return resultado, a, b

# saludar_bonito()
# saludar_con_nombre("eduardo")

sumatoria, primer_numero, segundo_numero = sumar(5,10)
# print(sumatoria)
# print(segundo_numero)

def restar(x,y):
    respuesta = x- y
    return respuesta

resta = restar(x=5,y=4)
# Aunque en python es posible sobre escribir metodos como print() o int() no se recomienda puesto que puede generar errores futuros
# def int(i):
#     print("Hola")
#     return i
# x = int(7)

# Las variables que se crean en las funciones solo existen en ellas y no pueden ser llamadas afuera
# print(respuesta)

# Si una variable es creada afuera de la funcion y luego se altera su valor, no tendra efecto puesto que es una variable completamente diferente
# mi_variable = 5

# def modificar(nuevo_valor):
#     mi_variable = nuevo_valor

# modificar(10)
# print(mi_variable)

# la variable *args => arguments es una lista dinamica ilimitada de elementos que pueden ser almacenados
def sumatoria_infinita(a,b,*args):
    print(a)
    print(b)
    print(args)
    for elemento in args:
        print(elemento)

# sumatoria_infinita(5,4,10,20,"Feriado",True,40.5, False)

# **kwargs => keywords arguments es una variable para recibir un numero ilimitado de parametros pero usando diccionarios
diccionario = {
    "clave":"valor"
}
def indeterminadosKwargs(**kwargs):
    print(kwargs["numero"])
    print(kwargs)

# indeterminadosKwargs(numero=5, nombre="juan",lista=[0,1,2,3,4], otra=80)

def indeterminadaMix(*args,**kwargs):
    print(args)
    print(kwargs)

indeterminadaMix(10,20,40,50,True,"Sabado",mensaje="Buenas tardes",remitente="Eduardo",pUnit=10)

