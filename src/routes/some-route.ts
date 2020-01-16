import { route, GET, POST, before } from 'awilix-koa' // or `awilix-router-core`
 
@route('/absolute')
export default class UserAPI {

  @route('/test')
  @GET()
  async getUser(ctx: any) {
    ctx.body = "Yeah, you done it"
  }

}