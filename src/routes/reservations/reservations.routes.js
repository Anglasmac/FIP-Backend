import { Router } from 'express'
import { ReservationsController } from '../../controllers/reservations/reservations.controllers.js'

export const createReservationsRouter = ({ reservationsModel }) => {
  const reservationsRouter = Router()

  const reservationsController = new ReservationsController({ reservationsModel })

  reservationsRouter.get('/', reservationsController.get)
  reservationsRouter.get('/:id', reservationsController.getById)
  reservationsRouter.post('/', reservationsController.post)
  reservationsRouter.put('/:id', reservationsController.put)
  reservationsRouter.delete('/:id', reservationsController.delete)

  return reservationsRouter
}
