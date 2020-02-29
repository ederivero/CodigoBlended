from flask import Flask, jsonify, request
# jsonif => para convertir un diccionario en json
# request => para extraer todo lo enviado por el front
# pip install mysqlclient
# pip install flask_mysqldb
from flask_mysqldb import MySQL
from flask_cors import CORS
# pip install flask-cors

app = Flask(__name__)
CORS(app)
# CREDENCIALES PARA CONECTARME CON LA BD
# app.config['MYSQL_HOST']="remotemysql.com"
app.config['MYSQL_HOST']="localhost"
# 192.168.1.25
# app.config['MYSQL_USER']="4wMUUtAQ8j"
app.config['MYSQL_USER']="root"
# app.config['MYSQL_PASSWORD']="l7bfYNhXnE"
app.config['MYSQL_PASSWORD']="root"
# app.config['MYSQL_DB']="4wMUUtAQ8j"
app.config['MYSQL_DB']="codigoblended"
# CREAR VINCULO CON LA BASE DE DATOS DESDE MI API
conexionMYSQL = MySQL(app=app)
# HABILITAR LOS ACCESOS EXTERNOS A NUESTRO SERVIDOR
# ALTER USER 'USUARIO'@'URL' IDENTIFIED WITH mysql_native_password by 'PASSWORD';
# ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by 'root';
@app.route('/', methods=['GET'])
def inicio():
    return 'La API esta funcionando exitosamente 😎😎'

@app.route('/productos')
def traer_productos():
    # ABRIR UNA CONEXION CON LA BASE DE DATOS, NUNCA SE OLVIDEN DE CERRAR LA CONEXION
    conexion = conexionMYSQL.connection.cursor()
    # SENTENCIA EN NUESTRA BASE DE DATOS
    sentencia = "SELECT * FROM t_producto"
    conexion.execute(sentencia)
    # CAPTURAR LA DATA QUE NOS LLEGA COMO RESULTADO
    informacion = conexion.fetchall()
    data=[]
    for producto in informacion:
        productodic={
            'id':producto[0],
            'nombre':producto[1],
            'id categoria': producto[2]
        }
        # print(productodic)
        data.append(productodic)
    conexion.close()
    # automaticamente me va a convertir un diccionario en un JSON
    return jsonify(data)

@app.route('/producto/agregar', methods=['POST'])
def agregar_producto():
    # hay dos metodos de pasar informacion al back => BODY, PARAMS
    # Este metodo automaticamente transforma el JSON en un diccionario
    contenido = request.get_json()
    print(contenido)
    conexion = conexionMYSQL.connection.cursor()
    conexion.execute("INSERT INTO t_producto (prod_nom, cat_id) VALUES(%s,%s)",(contenido['nombre'], contenido['categoria']))
    # El metodo commit sirve para guardar todos los cambios efectuados en la base de datos.
    # Se usa mucho para el manejo de TRANSACCIONES (TRANSACT-SQL)
    conexionMYSQL.connection.commit()
    conexion.close()
    return jsonify({
        'message':'Se registro el producto exitosamente',
        'contenido':contenido
    }),201


@app.route('/categoria/<string:palabra>', methods=['GET'])
def devolver_categoria(palabra):
    conexion = conexionMYSQL.connection.cursor()
    conexion.execute(f"SELECT * from t_categoria where cat_nom ='{palabra}'")
    data = conexion.fetchone()
    # fetchall => retornar una lista de resultados, entonces tendria que iterarla
    # fetchone => retornar la primera coincidencia
    conexion.close()
    if data:
        return jsonify({
            'message':'ok',
            'data':{
                'id':data[0],
                'nombre':data[1]
            }
        })
    else:
        return 'No existe esa categoria'

# Generar rutas para:
# Ruta para Ingresar una persona (7min)
# Ruta para Mostrar la lista de productos de esa persona (use el JOIN) enviada por la url (nombre de la persona) (20min)
# Ruta para Traer la lista de todas las personas mujeres (6min)
# Ruta para Traer la lista de todos los productos de una categoria enviada por el url (JOIN) (6min)
# Ruta para Ingresar una relacion de una persona con el producto y su cantidad (5min)


if __name__ =="__main__":
    # significa que se va a ejecutar siempre y cuando estemos en nuestra ventana principal del proyecto
    app.run(debug=True)
