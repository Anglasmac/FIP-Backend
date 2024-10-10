export class CustomersController {
  constructor ({ customersModel }) {
    this.customersModel = customersModel
  }

  // Obtener todos los clientes
  get = async (req, res) => {
    try {
      const data = await this.customersModel.get()
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los clientes' })
    }
  }

  // Obtener un cliente por ID
  getById = async (req, res) => {
    try {
      const data = await this.customersModel.getById(req.params.id)
      if (!data) {
        return res.status(404).json({ error: 'Cliente no encontrado' })
      }
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el cliente' })
    }
  }

  // Crear un nuevo cliente
  post = async (req, res) => {
    try {
      const data = await this.customersModel.post(req.body)
      res.status(201).json(data)
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el cliente' })
    }
  }

  // Actualizar un cliente existente
  put = async (req, res) => {
    try {
      const data = await this.customersModel.put(req.params.id, req.body)
      if (!data) {
        return res.status(404).json({ error: 'Cliente no encontrado' })
      }
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el cliente' })
    }
  }

  // Eliminar un cliente por ID
  delete = async (req, res) => {
    try {
      const data = await this.customersModel.delete(req.params.id)
      if (!data) {
        return res.status(404).json({ error: 'Cliente no encontrado' })
      }
      res.status(200).json({ message: 'Cliente eliminado correctamente' })
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el cliente' })
    }
  }
}
