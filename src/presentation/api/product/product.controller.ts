import { before, DELETE, GET, POST, PUT, route } from 'awilix-koa';
import { Context } from 'koa';
import { productIdValidation, productPayloadValidation } from './product.validation'
import bodyParser from 'koa-bodyparser'

const validate = require('koa2-validation')

import { IProductService, ProductDto } from '../../../core/application/product';

interface ServiceType {
    productService: IProductService;
}

@route('/(v2)?')
export default class ProductController {
  productService: IProductService;

  constructor({ productService }: ServiceType) {
    this.productService = productService;
  }

  @route('/products')
  @GET()
  async getAllProducts(ctx: Context) {
    const products: ProductDto[] = await this.productService.getProducts();
    ctx.response.body =  products
  }

  @route('/products/:id')
  @GET()
  @before([validate(productIdValidation)])
  async getProduct(ctx: Context) {
    const { id } = ctx.params;
    const product: ProductDto = await this.productService.getProduct(id);
    return ctx.response.body = product;
  }

  @route('/products')
  @POST()
  async insertFarm(ctx: Context) {
    const products = await this.productService.addProduct(
      ctx.request.body,
    );
    return ctx.response.body = (products);
  }

  @route('/products/:id')
  @PUT()
  async updateProduct(ctx: Context) {
    const { id } = ctx.params;
    const product = await this.productService.updateProduct(id, ctx.request.body);
    return ctx.response.body = product
  }

  @route('/products/:id')
  @DELETE()
  @before([validate(productIdValidation)])
  async deleteProduct(ctx: Context) {
    const { id } = ctx.params;
    await this.productService.deleteProduct(id);
    return ctx.response.body = 'ok'
  }
}
