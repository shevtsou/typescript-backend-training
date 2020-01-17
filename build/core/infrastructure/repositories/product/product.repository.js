"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function productRepository({ productModel }) {
    async function addProduct(newProduct) {
        console.log('PRODUCT CREATED');
        // const product = await productModel.create({
        //     name: newProduct.name,
        // })
        const product = null;
        return product;
    }
    async function getProductById(id) {
        return await productModel.findOne({
            where: {
                id,
                deleted: false,
            },
            raw: true,
        });
    }
    async function getProducts() {
        return await productModel.findAll({
            where: {
                deleted: false,
            },
            raw: true,
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
        deleteProduct,
    };
}
exports.default = productRepository;
