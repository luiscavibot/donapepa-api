import { Cliente } from "../models";
// export const crearProducto = async (req, res) => {
//     try {
      
//       // create tutorial
//       const producto = new Producto({
//         nombre: req.body.nombre,
//         presentacion: req.body.presentacion,
//         codigo: req.body.codigo,
//         marca: req.body.marca,
//         precioUnitario: req.body.precioUnitario,
//         habilitado: req.body.habilitado
//       });
  
//       // Saving the task in the Database
//       const productoSaved = await producto.save();
  
//       // Responding to the client
//       return res.json(productoSaved);
//     } catch (error) {
//       res.status(500).json({
//         message: error.message || "Something went wrong creating the Task",
//       });
//     }
// };
export const consultarCliente = async (req, res) => {
    try {
        // const { keyword, busquedaPorNombre, busquedaPorPresentacion } = req.query;

        // let condition = keyword
        //   ? { nombre: { $regex: `${keyword}`, $options: 'i'}}
        //   : {};

        // condition = busquedaPorNombre ? { nombre: busquedaPorNombre }:condition;
        // condition = busquedaPorPresentacion?
        //             {nombre: busquedaPorNombre, presentacion: busquedaPorPresentacion}
        //             :condition;
        const data = await Cliente.find();
    
        return res.json(data);

    } catch (error) {
        res.status(500).json({
        message: error.message || "Something went wrong retrieving the tasks",
        });
    }
};

// export const listaProductosPorDescripcion = async (req, res) => {
//   try {
           
//       const data = await Producto.distinct('nombre');
  
//       return res.json(data);

//   } catch (error) {
//       res.status(500).json({
//       message: error.message || "Something went wrong retrieving the tasks",
//       });
//   }
// };

// export const borrarTodosProductos = async (req, res) => {
//   try {
//     const data = await Producto.deleteMany({});
//     res.json({
//       message: `${data.deletedCount} Task were deleted Successfully`,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message:
//         error.message || "Some error ocurred while removing all tutorials",
//     });
//   }
// };