import sequelize, { Model, DataTypes } from 'sequelize';
import { Table, PrimaryKey, AutoIncrement, Column, Length } from 'sequelize-typescript'

@Table({
    tableName: 'product'
})
export default class ProductModel extends Model<ProductModel> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataTypes.INTEGER)
    id: number;

    @Length({ min: 0, max: 1000})
    @Column(DataTypes.STRING)
    name: string;

    @Column(DataTypes.BOOLEAN)
    deleted: boolean;
}