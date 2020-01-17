import { Sequelize } from 'sequelize-typescript';
import { DataTypes } from 'sequelize/types'
import { ProductModel } from './models';

export interface IDatabase {
    instance: Sequelize | null;
    connectDb(): Promise<Sequelize>;
    disconnectDb(): Promise<void>;
}

let instance: Sequelize = null;
 
export default function(): IDatabase {
    /***
     * create in-memory database connection  
    */
   const connectDb = async (): Promise<Sequelize> => {
    //@ts-ignore
      instance = new Sequelize({
        database: 'some_db',
        dialect: 'sqlite',
        username: 'root',
        password: '',
        storage: ':memory:',
        models: [ProductModel],
      });
      return instance;
   };

   const disconnectDb = async(): Promise<void> => {
       await instance.close()
   }
   return {
       instance,
       connectDb,
       disconnectDb
   }
}



// console.log(sequelize.models)

// console.log('STARTED')

// (async () => {
//     await sequelize.sync({ force: true });
//     ProductModel.create({name: 'test', deleted: false});
//     console.log(await ProductModel.findAll())
//   })();
