import { Server } from './models/server.js'
// routes
import { createCustomersRouter } from './routes/customers/customers.routes.js'
import { createReservationsRouter } from './routes/reservations/reservations.routes.js'
import { createServicesRouter } from './routes/aditionalservices/services.routes.js'

// models
import { ReservationsModel } from './models/reservations/reservations.model.js'
import { ServicesModel } from './models/aditionalservices/services.model.js'
import { CustomersModel } from './models/customers/customers.model.js'
import './config/db.mongo.js'

const server = new Server()
// const authModel = new AuthModel();
const customersModel = new CustomersModel()
const reservationsModel = new ReservationsModel()
const servicesModel = new ServicesModel()

// server.app.use('/auth', createAuthRouter({ authModel }));
server.app.use('/customers', createCustomersRouter({ customersModel }))
server.app.use('/reservations', createReservationsRouter({ reservationsModel }))
server.app.use('/aditionalservices', createServicesRouter({ servicesModel }))
server.dbConnection()
server.listen()
