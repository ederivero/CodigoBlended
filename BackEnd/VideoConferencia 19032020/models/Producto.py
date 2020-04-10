from base_de_datos import db

class ProductoModel(db.Model):
    __tablename__="t_producto"
    id = db.Column("prod_id", db.Integer, primary_key=True)
    descripcion = db.Column("prod_desc", db.String(35))
    # RELACIONES
    cat_id = db.Column(db.Integer, db.ForeignKey('t_categoria.cat_id'), nullable=False)
    # RELATIONSHIP
    categoria = db.relationship('CategoriaModel')
    def __init__(self, descripcion, categoria_id):
        self.descripcion=descripcion
        self.cat_id = categoria_id
    def guardar_en_bd(self):
        db.session.add(self)
        db.session.commit()