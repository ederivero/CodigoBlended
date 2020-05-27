import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name:"t_usuario"})
export class Usuario{
    @PrimaryGeneratedColumn({name:"usu_id"})
    usuId: number;
    @Column("varchar",{name:"usu_nombre",length:45})
    usuNombre: string;
    @Column("varchar",{name:"usu_apellido", length:45})
    usuApellido:string;
    @Column("text",{name:"usu_hash"})
    usuHash:string;
    @Column("text")
    usuSalt:string;

}