"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1({ productRepository }) {
    async function addProduct(newProduct) {
        const product = await productRepository.addProduct(newProduct);
        return product;
    }
    async function updateProduct(id, newProduct) {
        const updatedProduct = await productRepository.updateProduct(id, newProduct);
        return updatedProduct;
    }
    async function getProductById(productId) {
        return await productRepository.getProductById(productId);
    }
    async function getProducts() {
        return await productRepository.getProducts();
    }
    async function deleteProduct(id) {
        await productRepository.deleteProduct(id);
    }
    return {
        addProduct,
        updateProduct,
        getProductById,
        getProducts,
        deleteProduct
    };
}
exports.default = default_1;
