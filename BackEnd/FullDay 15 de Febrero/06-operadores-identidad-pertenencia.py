# Operadores de Identidad
# is => si es
# is not => no es
# sirve para ver si estan apuntando en la misma direccion de memoria
frutas = ["manzana","pera"]
frutas2 = frutas
print(frutas2 is frutas)
print(frutas2 is not frutas)

# Operadores de Pertenencia
# in => si esta
# not in => si no esta
verduras = ["Beterraga", "Zanahoria", "Coliflor"]
verdura = "Zanahoria"
print(verdura in verduras)
print(verdura not in verduras)