"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function productRepository({ productModel }) {
    async function addProduct(newProduct) {
        try {
            console.error('WE ARE HERE');
            const product = await productModel.create({
                name: newProduct.name
            });
            return product;
        }
        catch (e) {
            console.log(e);
        }
    }
    async function getProductById(id) {
        return await productModel.findOne({
            where: {
                id,
                deleted: null
            },
            raw: true
        });
    }
    async function getProducts() {
        return await productModel.findAll({
            where: {
                deleted: null
            },
            raw: true
        });
    }
    async function updateProduct(id, newProduct) {
        const product = await productModel.findByPk(id);
        await product.update({
            name: newProduct.name
        });
        return product;
    }
    async function deleteProduct(id) {
        const product = await productModel.findByPk(id);
        await product.update({ deleted: true });
    }
    return {
        addProduct,
        getProductById,
        getProducts,
        updateProduct,
        deleteProduct
    };
}
exports.default = productRepository;
