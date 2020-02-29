-- Aqui va un comentario
/*
Aqui
vamos a
crear nuestras
base de datos
*/
# Otro tipo de comentario
# Tipos de Datos de la Base de Datos
# NUMERICOS
# int que acepta valores entre -2147483648 a 2147483647
# tinyint -128 a 127 (tambien se utiliza para tipos de datos booleanos cuando es 1
# es true y cuando es 0 es false)
# smallint -32768 a 32767
# float(m,d) m=> es la cantidad de numeros que vamos a tener en nuestro campo y 
# d => es la cantidad de decimales que vamos a usar, ejemplo = 14.578 => m=5 y d=3

# TIEMPO Y FECHA
# date su formato es YYYY-MM-DD desde el 1000-01-01 hasta el 9999-12-31
# datetime su formato es YYYY-MM-DD HH:MM:SS.mmmm
# timestamp no usa guiones ni en el campo hora usa dos puntos por lo que su formato
# es YYYYMMDDHHMMSS
# time solamente guarda HH:MM:SS.mmmm

# TEXTO (STRING)
# char(long) un campo que guarda cualquier tipo de valor y lo que se define entre 
# los parentesis es su longitud, si no ponen nada, por defecto toma la longitud de
# 1 y puede tener una longitud maxima de 65535
# varchar(long): a diferencia del char el tamaño es variable y su longitud es el 
# tamaño maximo de almacenamiento 
# text es el tipo con el numero de espacio almacenable mas grande que puede guardar
# la base de datos, no tiene limite y su espacio es variable, generalmente se usa
# para el almacenamiento de contraseñas

# Como crear una base de datos
create database codigoBlended;
# create schema
# para alternar en el uso de las bases de datos
use codigoBlended;
# Como eliminar una base de datos
drop database codigoBlended;

# Como crear una tabla
# para nosotros crear una tabla necesitamos saber 2 
# 1. Nombre de la tabla (sin espacios y se recomienda en vez del espacio usar _)
# el nombre de la tabla tiene que ser facil de entender
# 2. Los atributos de la tabla (los campos) con sus tipos de datos respectivamente
# 3. OPCIONAL sus relaciones
# EJEMPLO
/*
create table nombre_tabla(
	campo1 char(10) not null ,
    campo2 int auto_increment
)
*/
# Aparte de definir el tipo de dato del campo puedo dar configuracion adicional
# NOT NULL => significa que no puede admitir valores nulos
# AUTO_INCREMENT => este campo va a ser auto incrementable y solamente se usa en
# campos numericos y se usa mayormente en las primary keys para no ingresarlas 
# manualmente 
# UNIQUE => se usa para cuando no queremos que se repita en otro registro, se 
# usa en las pk mayormente

# FORMAS DE DEFINIR UNA PRIMARY KEY (LLAVE PRIMARIA)
# 1. nom_col int primary key => ponerla al lado de la definicion de la columna
# 2. al final de declarar todos los campos se comienzan a declarar todas sus relaciones
# PRIMARY KEY(nom_col)

# FORMAS DE DEFINIR UNA FOREIGN KEY (LLAVE FORANEA)
# al final de declarar todos los campos colocar:
# FOREIGN KEY (nom_col_fk) REFERENCES NOM_TABLA(nom_col_pk) => por ende tiene que tener el mismo tipo de dato que la 
# clave primaria

create table t_persona(
per_id int not null auto_increment primary key,
per_nom varchar(20),
per_ape_pa varchar(20),
per_ape_ma varchar(20),
per_sexo varchar(10)
);
create table t_categoria(
cat_id int not null auto_increment primary key,
cat_nom varchar(45)
);
create table t_producto(
prod_id int not null auto_increment primary key,
prod_nom varchar(45),
cat_id int,
FOREIGN KEY (cat_id) REFERENCES t_categoria(cat_id)
);
create table t_per_pro(
perpro_id int not null auto_increment primary key,
perpro_cant int,
per_id int,
prod_id int,
FOREIGN KEY (per_id) references t_persona(per_id),
foreign key (prod_id) references t_producto(prod_id)
);
