import { Producto} from "../models";
export const crearProducto = async (req, res) => {
    try {
      
      // create tutorial
      const producto = new Producto({
        nombre: req.body.nombre,
        presentacion: req.body.presentacion,
        codigo: req.body.codigo,
        marca: req.body.marca,
        precioUnitario: req.body.precioUnitario,
        habilitado: req.body.habilitado
      });
  
      // Saving the task in the Database
      const productoSaved = await producto.save();
  
      // Responding to the client
      return res.json(productoSaved);
    } catch (error) {
      res.status(500).json({
        message: error.message || "Something went wrong creating the Task",
      });
    }
};
export const consultarProducto = async (req, res) => {
    try {
        const { keyword } = req.query;
    
        const condition = keyword
          ? { nombre: { $regex: `${keyword}`, $options: 'i'}}
          : {};
    
        const data = await Producto.find(condition);
    
        return res.json(data);

    } catch (error) {
        res.status(500).json({
        message: error.message || "Something went wrong retrieving the tasks",
        });
    }
};