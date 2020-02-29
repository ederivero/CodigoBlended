from flask import Flask, jsonify, request
# jsonif => para convertir un diccionario en json
# request => para extraer todo lo enviado por el front
# pip install mysqlclient
# pip install flask_mysqldb
from flask_mysqldb import MySQL
app = Flask(__name__)
# CREDENCIALES PARA CONECTARME CON LA BD
app.config['MYSQL_HOST']="127.0.0.1"
app.config['MYSQL_USER']="root"
app.config['MYSQL_PASSWORD']="root"
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
    print(informacion)
    return 'Procesando la informacion . . .'













if __name__ =="__main__":
    # significa que se va a ejecutar siempre y cuando estemos en nuestra ventana principal del proyecto
    app.run(debug=True)
