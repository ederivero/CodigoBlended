import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {Producto} from './Producto'
@Entity({name:"t_categoria"})
export class Categoria{
    @PrimaryGeneratedColumn({name:"cat_id"})
    catId: number;
    @Column("varchar",{name:"cat_nombre",length:45})
    catNombre: string;
    @OneToMany(type=>Producto, prod=>prod.catId)
    productos: Producto[];
}