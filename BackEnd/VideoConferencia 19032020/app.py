from flask import Flask
# pip install flask-restful
from flask_restful import Api
from base_de_datos import db
# from models.Categoria import CategoriaModel
from controllers.Categoria import Categoria
from models.Producto import ProductoModel

app = Flask(__name__)
#"mysql://username:password@servidor/nombre_bd"
app.config['SQLALCHEMY_DATABASE_URI']="mysql://root:root@localhost/libreria"
api = Api(app)

# PARA LA CREACION DE LAS TABLAS TIENE QUE HACERSE UNA CONSULTA A LA API
@app.before_first_request
def creacion_tablas():
    db.init_app(app)
    # con esta llamada al metodo se crea todas las tablas basandose en la conexion definida en app.config
    db.create_all(app=app)

@app.route('/')
def inicio():
    return 'La api funciona'

api.add_resource(Categoria,'/categoria/add')

if __name__=='__main__':
    app.run(debug=True)