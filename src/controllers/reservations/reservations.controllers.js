export class ReservationsController {
  constructor ({ reservationsModel }) {
    this.reservationsModel = reservationsModel
  }

  // Obtener todas las reservas
  get = async (req, res) => {
    try {
      const data = await this.reservationsModel.get()
      res.status(200).json(data)
    } catch (error) {
      console.error('Error al obtener las reservas:', error)
      res.status(500).json({ error: 'Error al obtener las reservas' })
    }
  }

  // Obtener una reserva por ID
  getById = async (req, res) => {
    try {
      const data = await this.reservationsModel.getById(req.params.id)
      if (!data) {
        return res.status(404).json({ error: 'Reserva no encontrada' })
      }
      res.status(200).json(data)
    } catch (error) {
      console.error('Error al obtener la reserva:', error)
      res.status(500).json({ error: 'Error al obtener la reserva' })
    }
  }

  // Crear una nueva reserva
  post = async (req, res) => {
    try {
      const data = await this.reservationsModel.post(req.body)
      res.status(201).json(data)
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la reserva' })
    }
  }

  // Actualizar una reserva existente
  put = async (req, res) => {
    try {
      const data = await this.reservationsModel.put(req.params.id, req.body)
      if (!data) {
        return res.status(404).json({ error: 'Reserva no encontrada' })
      }
      res.status(200).json(data)
    } catch (error) {
      console.error('Error al actualizar la reserva:', error)
      res.status(500).json({ error: 'Error al actualizar la reserva' })
    }
  }

  // Eliminar una reserva por ID
  delete = async (req, res) => {
    try {
      const data = await this.reservationsModel.delete(req.params.id)
      if (!data) {
        return res.status(404).json({ error: 'Reserva no encontrada' })
      }
      res.status(200).json({ message: 'Reserva eliminada correctamente' })
    } catch (error) {
      console.error('Error al eliminar la reserva:', error)
      res.status(500).json({ error: 'Error al eliminar la reserva' })
    }
  }
}
