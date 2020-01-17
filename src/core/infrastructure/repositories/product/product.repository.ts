import { ProductModel } from "../../store/database/models";
import { IProductRepository } from "../../../domain/product/product.interface";
import { NewProduct } from "../../../domain/product/product.type";

type ServiceType = {
  productModel: typeof ProductModel;
};

export default function productRepository({
  productModel
}: ServiceType): IProductRepository {
  async function addProduct(newProduct: NewProduct): Promise<ProductModel> {
      try {
          console.error('WE ARE HERE')
          const product = await productModel.create({
            name: newProduct.name
          });
          return product;
      } catch(e) {
          console.log(e)
      }
  }

  async function getProductById(id: number): Promise<ProductModel> {
    return await productModel.findOne({
      where: {
        id,
        deleted: null
      },
      raw: true
    });
  }
  async function getProducts(): Promise<ProductModel[]> {
    return await productModel.findAll({
      where: {
        deleted: null
      },
      raw: true
    });
  }

  async function updateProduct(
    id: number,
    newProduct: NewProduct
  ): Promise<ProductModel> {
    const product = await productModel.findByPk(id);
    await product.update({
      name: newProduct.name
    });
    return product;
  }

  async function deleteProduct(id: number): Promise<void> {
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
