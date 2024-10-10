import { Schema, model } from 'mongoose'
const servicesSchema = new Schema({
  id_services: Number,
  name: String,
  state: Boolean
})

export const ServicesSchema = model('Services', servicesSchema)
