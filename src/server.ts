import Koa from 'koa'
import { asClass, createContainer } from 'awilix'
import { loadControllers, scopePerRequest } from 'awilix-koa'
 
const app = new Koa()
const container = createContainer().register({
})
app.use(scopePerRequest(container))
// Loads all controllers in the `routes` folder
// relative to the current working directory.
// This is a glob pattern.
app.use(loadControllers('routes/*.js', { cwd: __dirname }))
 
app.listen(3000)