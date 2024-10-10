import { Schema, model } from 'mongoose'
const customersSchema = new Schema({
  id: Number,
  NombreCompleto: String,
  Distintivo: Number,
  CategoriaCliente: String,
  Direccion: String,
  Celular: Number,
  Correo: String,
  Observaciones: String,
  Estado: Boolean
})

export const CustomersSchema = model('Customers', customersSchema)
