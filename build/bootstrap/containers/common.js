"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
const database_1 = __importDefault(require("../../core/infrastructure/store/database"));
function register(container) {
    return container.register({
        database: awilix_1.asFunction(database_1.default).singleton(),
    });
}
exports.default = register;
