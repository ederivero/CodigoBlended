from base_de_datos import db
class CategoriaModel (db.Model):
    # https://docs.sqlalchemy.org/en/13/
    #https://docs.sqlalchemy.org/en/13/core/type_basics.html?highlight=datatypes

    # si yo no defino un nombre para la tabla, su nombre sera el nombre de la clase 
    __tablename__="t_categoria"
    id = db.Column("cat_id", db.Integer, primary_key=True)
    # varchar(30)
    descripcion = db.Column("cat_desc", db.String(30))
    # RELATIONSHIP
    producto = db.relationship('ProductoModel')
    def __init__(self, desc):
        self.descripcion = desc
    def guardar_en_bd(self):
        db.session.add(self)
        db.session.commit()
