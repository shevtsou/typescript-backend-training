"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toProductDto = (product) => {
    return {
        id: product.id,
        name: product.name
    };
};
exports.toProductListDto = (products) => products.map((product) => exports.toProductDto(product));
