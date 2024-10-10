import { CustomersSchema } from '../../schemas/mongodb/customers/customers.schema.js'
import { ObjectId } from 'mongodb'

export class CustomersModel {
  async get () {
    const data = await CustomersSchema.find()
    return data
  }

  async getById (id) {
    const objectId = new ObjectId(id) // Convertir el id a ObjectId
    const data = await CustomersSchema.findOne({ _id: objectId }) // Usar _id
    return data
  }

  async post (obj) {
    const data = await new CustomersSchema(obj).save()
    return data
  }

  async put (id, obj) {
    const objectId = new ObjectId(id) // Convertir el id a ObjectId
    const data = await CustomersSchema.findOneAndUpdate({ _id: objectId }, obj, { new: true }) // Actualización y retorno del documento actualizado
    return data
  }

  async delete (id) {
    const objectId = new ObjectId(id) // Convertir el id a ObjectId
    const data = await CustomersSchema.findOneAndDelete({ _id: objectId }) // Usar _id
    return data
  }
}
