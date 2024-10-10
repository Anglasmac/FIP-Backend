import { Router } from 'express'
import { ServicesController } from '../../controllers/aditionalservices/services.controller.js'

export const createServicesRouter = ({ servicesModel }) => {
  const servicesRouter = Router()

  const servicesController = new ServicesController({ servicesModel })

  // Obtener todos los servicios
  servicesRouter.get('/', servicesController.get)

  // Obtener un servicio por ID
  servicesRouter.get('/:id', servicesController.getById) // Cambiado a getById

  // Crear un servicio
  servicesRouter.post('/', servicesController.post)

  // Actualizar un servicio por ID
  servicesRouter.put('/:id', servicesController.put)

  // Eliminar un servicio por ID
  servicesRouter.delete('/:id', servicesController.delete)

  return servicesRouter
}
