import camelcase
# palabra_uno => palabraUno
camello = camelcase.CamelCase()
texto = "hola buenas tardes"
print(camello.hump(texto))

# pypi es a python como npm es a node