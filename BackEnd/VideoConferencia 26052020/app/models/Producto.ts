import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import { Categoria } from './Categoria';

@Entity({name:"t_producto"})
export class Producto{
    @PrimaryGeneratedColumn({name:"prod_id"})
    prodId: number;
    @Column("varchar",{name:"prod_nombre",length:45})
    prodNombre: string;
    @ManyToOne(type=>Categoria, cat=>cat.catId,{
        onDelete:'RESTRICT'
    })
    @JoinColumn({name:"cat_id"})
    catId: Categoria;
}