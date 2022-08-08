import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async index({inertia}: HttpContextContract) {
    return inertia.render('Index')
  }
}
