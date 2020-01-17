"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
const product_1 = require("../../core/domain/product");
exports.default = (container) => container.register({
    productDomain: awilix_1.asFunction(product_1.productDomain).singleton()
});
