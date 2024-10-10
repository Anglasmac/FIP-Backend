import { Router } from 'express'
import { CustomersController } from '../../controllers/customers/customers.controllers.js'

export const createCustomersRouter = ({ customersModel }) => {
  const customersRouter = Router()

  const customersController = new CustomersController({ customersModel })

  customersRouter.get('/', customersController.get)
  customersRouter.get('/:id', customersController.getById)
  customersRouter.post('/', customersController.post)
  customersRouter.put('/:id', customersController.put)
  customersRouter.delete('/:id', customersController.delete)

  return customersRouter
}
