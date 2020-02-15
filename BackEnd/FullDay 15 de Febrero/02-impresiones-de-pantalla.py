curso= "Backend"
print(curso)
# Texto con variables, MODO I
print("Estoy en el curso de:",curso, "y es genial")
# MODO II
numero = 9
print("Son las {} en el curso de {}".format(numero, curso))
# MODO III modificar el orden de las variables a imprimir
print("En el curso de {1} son las {0}".format(numero, curso))
# MODO IV
print(f"En el curso de {curso} son las {numero}")
# MODO V
pi = 3.140184234982734923847
# restringir la cantidad de decimales de una variable
print(f"El valor de pi es: {pi:1.5f}")
# MODO VI
# concatenando variables con texto
print("Son las "+format(numero))