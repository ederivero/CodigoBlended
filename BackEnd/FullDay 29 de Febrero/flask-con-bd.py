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
@app.route('/persona', methods=['POST'])
def agregar():
    data = request.get_json()
    conexion = conexionMYSQL.connection.cursor()
    conexion.execute("INSERT INTO t_persona (per_nom, per_ape_pa, per_ape_ma, per_sexo) VALUES (%s,%s,%s,%s)",(data['nombre'],data['ape_paterno'],data['ape_materno'],data['sexo']))
    # Si es una clausula INSERT, UPDATE o DELETE tenemos que hacer commit para que los cambios tengan efecto en la BD
    conexionMYSQL.connection.commit()
    # Si es una clausula de LECTURA DE DATOS, tengo que usar el fetchone o el fetchall
    conexion.close()
    return jsonify({
        'mensaje':'Creado con exito',
        'contenido':data
    }), 201
    # Validar si en mi data tengo nombre, ape_paterno, ape_materno, sexo y si no tengo que me retorne un mensaje que faltan campos

# Ruta para Mostrar la lista de productos de esa persona (use el JOIN) enviada por la url (nombre de la persona) (20min)
@app.route('/persona/productos/<int:id>', methods=['GET'])
def productos_persona(id):
    conexion = conexionMYSQL.connection.cursor()

    sentencia = f"""SELECT PER_NOM, PER_APE_PA, PER_APE_MA, PERPRO_CANT, PROD_NOM
                    FROM T_PERSONA
                    INNER JOIN T_PER_PRO ON T_PERSONA.PER_ID=t_per_pro.per_id
                    INNER JOIN T_PRODUCTO ON t_per_pro.prod_id= T_PRODUCTO.PROD_ID
                    WHERE T_PERSONA.PER_ID={id};"""
    conexion.execute(sentencia)
    informacion = conexion.fetchall()
    resultadofinal=[]
    for resultado in informacion:
        diccionario={
            'nombre':resultado[0],
            'ape_pat':resultado[1],
            'ape_mat':resultado[2],
            'producto':resultado[3],
            'cantidad':resultado[4]
        }
        resultadofinal.append(diccionario)
    print(informacion)
    conexion.close()
    # Hacer una validacion, si no hay productos para mostrar que retorne que no hay productos, caso contrario que retorne:
    return jsonify({
        'mensaje':'Los productos son',
        'contenido':resultadofinal
    })
# Ruta para Traer la lista de todas las personas mujeres (6min)
@app.route('/personas/sexo/<string:sexo>', methods=['GET'])
def personas_sexo(sexo):
    conexion = conexionMYSQL.connection.cursor()
    sentencia = f"select * from t_persona where per_sexo ='{sexo}';"
    conexion.execute(sentencia)
    informacion = conexion.fetchall()
    resultadofinal = []
    for persona in informacion:
        diccionario = {
            'id':persona[0],
            'nombre':persona[1],
            'apellidos': persona[2]+' '+persona[3]
        }
        resultadofinal.append(diccionario)
    return jsonify({
        'mensaje':f'Las personas con el sexo {sexo} son',
        'contenido':resultadofinal
    })
# Ruta para Traer la lista de todos los productos de una categoria enviada por el url (JOIN) (6min)
@app.route('/categoria/<string:categoria>/productos', methods=['GET'])
def categoria_productos(categoria):
    pass
# Ruta para Ingresar una relacion de una persona con el producto y su cantidad (5min)
@app.route('/persona/producto', methods=['POST'])
def persona_producto():
    pass

if __name__ =="__main__":
    # significa que se va a ejecutar siempre y cuando estemos en nuestra ventana principal del proyecto
    app.run(debug=True)
