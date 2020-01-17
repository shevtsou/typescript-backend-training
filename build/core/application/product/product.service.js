"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_mapper_1 = require("./product.mapper");
function ProductService({ productDomain }) {
    const addProduct = async (newProduct) => {
        const product = await productDomain.addProduct(newProduct);
        return product_mapper_1.toProductDto(product);
    };
    const getProducts = async () => {
        return await productDomain.getProducts();
    };
    const getProduct = async (id) => {
        return product_mapper_1.toProductDto(await productDomain.getProductById(id));
    };
    const updateProduct = async (id, newProduct) => {
        return product_mapper_1.toProductDto(await productDomain.updateProduct(id, newProduct));
    };
    const deleteProduct = async (id) => {
        await productDomain.deleteProduct(id);
    };
    return {
        addProduct,
        getProducts,
        getProduct,
        updateProduct,
        deleteProduct
    };
}
exports.default = ProductService;
