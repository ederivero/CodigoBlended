from flask_restful import Resource, reqparse
from models.Categoria import CategoriaModel
# Resource => es la clase que nos va a permitir definir la clase como un metodo de acceso para el usuario, nos da los metodos para sobreescribir como get post put delete
# reqparse => funciona como un filtro para definir que parametros debemos de recibir, y en el caso que no se llegasen a recibir, automaticamente devolver un error
class Categoria (Resource):
    parser = reqparse.RequestParser()
    parser.add_argument(
        'nombre',
        type=str,
        required=True,
        help="Falta el nombre de la categoria"
    )
    def get(self, nombre):
        # SELECT * FROM T_CATEGORIA WHERE CAT_DESC = NOMBRE
        cat = CategoriaModel.query.filter_by(descripction = nombre).first()
        return {'resultado':'Ok','data':cat.json() }, 200
    def post(self):
        data = self.parser.parse_args()
        cat = CategoriaModel(data['nombre'])
        try:
            cat.guardar_en_bd()
        except:
            return {'resultado':'Hubo un error al guardar en la base de datos'},500
        return {
            'resultado':'ok',
            'mensaje':'Categoria guardada con exito'
        },201

