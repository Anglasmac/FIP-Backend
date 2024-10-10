import { Schema, model } from 'mongoose'

const reservationsSchema = new Schema({
  date_time: { type: Date, required: true },
  number_people: { type: Number, required: true },
  matter: { type: String },
  number_tables: { type: Number, required: true },
  timeDurationR: { type: Number, required: true },
  additional_services: { type: String },
  decoration_amount: { type: Number, default: 0 },
  remaining: { type: Number, default: 0 },
  event_type: { type: String },
  pass: { type: Number, required: true },
  total_pay: { type: Number, required: true },
  payment_method: { type: String },
  status: { type: String, required: true }
})

export const ReservationsSchema = model('Reservations', reservationsSchema)
