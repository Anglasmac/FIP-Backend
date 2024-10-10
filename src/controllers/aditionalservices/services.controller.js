export class ServicesController {
  constructor ({ servicesModel }) {
    this.servicesModel = servicesModel
  }

  get = async (req, res) => {
    try {
      const data = await this.servicesModel.get()
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los servicios' })
    }
  }

  getById = async (req, res) => {
    try {
      const data = await this.servicesModel.getById(req.params.id)
      if (!data) {
        return res.status(404).json({ error: 'servicio no encontrado' })
      }
      res.status(200).json(data)
    } catch {
      res.status(500).json({ error: 'Error al obtener el servicio' })
    }
  }

  post = async (req, res) => {
    try {
      const data = await this.servicesModel.post(req.body)
      res.status(201).json(data)
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el servicio' })
    }
  }

  put = async (req, res) => {
    try {
      const data = await this.servicesModel.put(req.params.id, req.body)
      if (!data) {
        return res.status(404).json({ error: 'servicio no encontrado' })
      }
      res.status(200).json(data)
    } catch {
      res.status(500).json({ error: 'Error al actualizar el servicio' })
    }
  }

  delete = async (req, res) => {
    try {
      const data = await this.servicesModel.delete(req.params.id)
      if (!data) {
        return res.status(404).json({ error: 'servicio no encontrado' })
      }
      res.status(200).json({ error: 'servicio  eliminado correctamente' })
    } catch {
      res.status(500).json({ error: 'Error al eliminar el servicio' })
    }
  }
}
