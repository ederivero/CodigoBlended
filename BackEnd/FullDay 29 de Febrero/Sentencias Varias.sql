# ctrl+T
use CodigoBlended;
#INSERT INTO nomb_tabla (campo1,campo2,campo3...) VALUES (val1,val2,val3,...)
# El numero de campos tiene que ser igual al numero de valores
# Si un registro incumple con las condiciones del campo, nada se ingresa
# O TODO ESTA BIEN O NADA SE INGRESA
insert into t_persona (per_nom, per_ape_pa, per_ape_ma, per_sexo) VALUES 
					  ("Juan",   "Ortiz",    "Sihuinta", "Masculino"),
                      ("Rosa",   "Sanchez",  "Paredes",  "Femenino");

# SELECCION
# select campos | * from nom_tabla;
select * from t_persona;
# ingresen 3 cat, 5 prod, 3 relaciones prod-per
insert into t_categoria (cat_nom) values ("Verduras"),("Carnes"),("Frutas");
insert into t_producto (prod_nom, cat_id) values ("Kion",1),("Pollo",2),
("Cerdo",2),("Fresa",3),("Calabacin",1);
select * from t_producto;
insert into t_per_pro (perpro_cant, per_id, prod_id) values
						(10,			1,		7),
                        (2,				1,		9),
                        (4,				2,		10);
                        
# usar clausulas de condicion para filtrar datos
select * from t_per_pro where prod_id=10;
# decorar los campos o poner un alias, va con comillas si el alias tiene 
# espacios de por medio
select 
	perpro_cant as Cantidad, 
    per_id as "Id de la persona", 
	prod_id as "Id del producto"
from t_per_pro;

insert into t_categoria (cat_nom) values ("Menestras");
insert into t_producto(prod_nom) values ("Hielo");
# Traer dos o mas tablas y las compara mediante un campo en comun (Generalmente su
# fk) y segun el tipo (INNER, LEF, RIGHT) devuelve la intereseccion de ambas.
# INNER JOIN => JOIN (automaticamente se entiende que es un inner join)
SELECT * 
from t_producto 
INNER JOIN t_categoria on t_producto.cat_id=t_categoria.cat_id;
# LEFT JOIN
SELECT * 
from t_producto 
LEFT JOIN t_categoria on t_producto.cat_id=t_categoria.cat_id;
# RIGHT JOIN
SELECT * 
from t_producto 
RIGHT JOIN t_categoria on t_producto.cat_id=t_categoria.cat_id;
# MODIFICACIONES DE CONTENIDO
# DESHABILITAR EL MODO SEGURO PARA EL SERVIDOR
set sql_safe_updates=0;

update t_producto set cat_id=2 where prod_nom="Hielo";