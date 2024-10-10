import { ServicesSchema } from '../../schemas/mongodb/aditionalservices/services.schema.js'
import { ObjectId } from 'mongodb' // Asegúrate de importar ObjectId

export class ServicesModel {
  async get () {
    const data = await ServicesSchema.find()
    return data
  }

  async getById (id) {
    // Convertir el id a ObjectId antes de buscar
    const objectId = new ObjectId(id)
    const data = await ServicesSchema.findOne({ _id: objectId })
    return data
  }

  async post (obj) {
    const data = await new ServicesSchema(obj).save()
    return data
  }

  async put (id, obj) {
    const objectId = new ObjectId(id)
    const data = await ServicesSchema.findOneAndUpdate({ _id: objectId }, obj, { new: true }) // Devolver el documento actualizado
    return data
  }

  async delete (id) {
    const objectId = new ObjectId(id)
    const data = await ServicesSchema.findOneAndDelete({ _id: objectId })
    return data
  }
}
