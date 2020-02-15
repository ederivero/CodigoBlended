# excepsiones => try ... except .. else ... finally
try:
    numero = int(input("Ingrese un numero"))
    numero2 = int(input("Ingrese otro numero"))
    division = numero / numero2
    print(division)
except ValueError:
    print("Ingrese solamente numeros!!!!!!")
except ZeroDivisionError:
    print("no se puede divir entre ceros!!")
except:
    # para ver que error se cometio
    print(EnvironmentError)
    print("Ocurrio otro error")
# el else se va a ejecutar siempre y cuando no entre a ninguna excepcion
else:
    print("la division funciono ok!")
# finally no le importa si funciono correctamente o no, siempre se va a ejecutar
finally:
    print("Yo siempre me voy a ejecutar")

# no es OBLIGATORIO que siempre vaya else y finally, puede ir uno, ninguno o los dos pero SI en ese orden y ademas OBLIGATORIAMENTE va el try de la mano con el except

# EJERCICIO 1
# Crear una funcion que reciba dos numeros y los multiplique, si se ingresa un caracter o algo que no sea un numero que vuelva a pedir los numeros hasta que los dos sean numeros
# hint => usar un while