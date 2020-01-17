"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
let ProductModel = class ProductModel extends sequelize_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column(sequelize_1.DataTypes.INTEGER)
], ProductModel.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Length({ min: 0, max: 1000 }),
    sequelize_typescript_1.Column(sequelize_1.DataTypes.STRING)
], ProductModel.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_1.DataTypes.BOOLEAN)
], ProductModel.prototype, "deleted", void 0);
ProductModel = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'product'
    })
], ProductModel);
exports.default = ProductModel;
