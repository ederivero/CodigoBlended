from flask import Flask, jsonify, request
from flask_mysqldb import MySQL

app = Flask(__name__)
# CONFIGURAR LAS CREDENCIALES A MI BASE DE DATOS
app.config['MYSQL_HOST']= 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'supermercados'

mysql = MySQL(app)

@app.route('/')
def inicio():
    return 'La api funciona exitosamente!'

@app.route('/saludar', methods=['POST'])
def saludar():
    informacion = request.get_json()
    print(informacion['nombre'])
    return 'Hola '+informacion['nombre']+" tienes "+str(informacion['edad']) +"años"

# SI YO NO DE FINO QUE METODO VOY A UTILIZAR POR DEFAULT ES EL METODO GET
@app.route('/supermercados/traer', methods=['GET'])
def traer_super():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * from supermercado")
    informacion = cur.fetchall()
    cur.close()
    if informacion:
        resultado=[]
        for supermercado in informacion:
            diccionario_temporal={
                'id':supermercado[0],
                'nombre':supermercado[1],
                'direccion':supermercado[2]
            }
            resultado.append(diccionario_temporal)
        return jsonify(resultado)
    else:
        return 'Por el momento no hay supermercados creados, vuelva mas tarde', 404

@app.route('/supermercados/agregar', methods=['POST'])
def agregar_super():
    informacion = request.get_json()
    if (informacion['nombre'] and informacion['direccion']):
        cur = mysql.connection.cursor()
        cur.execute('INSERT INTO SUPERMERCADO(SUP_NOM, SUP_DIR) VALUES(%s, %s)',(informacion['nombre'],informacion['direccion']))
        mysql.connection.commit()
        cur.close()
        return jsonify(
            {
                'mensaje':'Se agrego el supermercado con exito',
                'contenido': informacion
            }
        ), 201
    else:
        return jsonify(
            {
                'message':'Faltan valores'
            }
        ), 400

@app.route('/supermercados/traer/<int:id>/<string:nombre>')
def buscar_super(id,nombre):
    return 'Estas buscando el supermercado {},{}'.format(id,nombre)

if __name__=='__main__':
    app.run(debug=True)