import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
@Entity({name:"t_usuario"})
export class Usuario{
    @PrimaryGeneratedColumn({name:"usu_id"})
    usuId: number;
    @Column("varchar",{name:"usu_email",length:45})
    usuEmail: string;
    @Column("varchar",{name:"usu_nombre",length:45})
    usuNombre: string;
    @Column("varchar",{name:"usu_apellido", length:45})
    usuApellido:string;
    @Column("text",{name:"usu_hash"})
    usuHash:string;
    @Column("text")
    usuSalt:string;

    setearPassword(password:string){
        this.usuSalt = crypto.randomBytes(16).toString('hex');
        this.usuHash = crypto.pbkdf2Sync(password, this.usuSalt, 1000, 64, 'sha512').toString('hex');
    }
    
    validarPassword(password:string){
        let hash_temporal = crypto.pbkdf2Sync(password, this.usuSalt, 1000, 64, 'sha512').toString('hex');
        if(hash_temporal === this.usuHash){
            return true;
        }else{
            return false;
        }
    }

    generarJWT(){
        let payload ={
            usuEmail: this.usuEmail,
            usuNombre: this.usuNombre
        }
        var token = jwt.sign(payload, 'codigoblended',{expiresIn:'1h'}, {algorithm:'RS256'});
        return token;
    }
}