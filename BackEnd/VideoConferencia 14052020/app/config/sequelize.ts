import { Sequelize, ModelType } from 'sequelize';
import { producto_model } from '../models/Producto';
export const conexion = new Sequelize(
    'miw6qki7lgggxn0j', 'orpxldfl5c8h32mn', 'h9qdswfny5aclgmf',{
        host: 'qn66usrj1lwdk1cc.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        dialect: 'mysql',
        // para que no se muestre la sentencia sql 
        logging: false,
        dialectOptions: {
            typeCast: true
        },
        timezone: '-05:00'
    }
)

export const Producto: ModelType = producto_model(conexion);