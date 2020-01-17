import Koa from 'koa'
import { asClass, createContainer } from 'awilix'
import cors from 'kcors';
import { loadControllers, scopePerRequest } from 'awilix-koa'
import configureContainer from './bootstrap'
import { IDatabase } from './core/infrastructure/store/database'
import { IProductService } from './core/application/product'
import { ProductModel } from './core/infrastructure/store/database/models'
import Router from 'koa-router'
const koaBody = require('koa-bodyparser');

(async () => {
  const app = new Koa()
  app.use(cors())
  app.use(koaBody())
  const container = configureContainer()
  const db = container.resolve<IDatabase>('database');
  const sequelize = await db.connectDb();
  await sequelize.sync({ force: true });
  app.use(scopePerRequest(container))
  app.use(loadControllers('presentation/api/product/*.{ts,js}', { cwd: __dirname }))
  console.log('SERVER STARTED') 
  app.listen(4000)
})()
