import { Cliente } from "../models";

export const crearCliente = async (req, res) => {
    try {
      
      // create tutorial
      const cliente = new Cliente({
        tipoDocumento: req.body.tipoDocumento,
        nroDocumento: req.body.nroDocumento,
        tipo: req.body.tipo,
        nombre: req.body.nombre,
        edad: req.body.edad,
        rangoEdad: req.body.rangoEdad,
        fechaCumple: req.body.fechaCumple,
        celular: req.body.celular,
        email: req.body.email,
        familia: req.body.familia,
        edadHijos: req.body.edadHijos,
        direccion: req.body.direccion,
        distrito: req.body.distrito,
        referencias: req.body.referencias,
        provincia: req.body.provincia,
        codigoPostal: req.body.codigoPostal,
        entretenimiento1: req.body.entretenimiento1,
        entretenimiento2: req.body.entretenimiento2,
        entretenimiento3: req.body.entretenimiento3,
        haceDeportes: req.body.haceDeportes,
        deportes: req.body.deportes,
        deseaPublicidad: req.body.deseaPublicidad,
      });
  
      // Saving the task in the Database
      const clienteSaved = await cliente.save();
  
      // Responding to the client
      return res.json(clienteSaved);
    } catch (error) {
      res.status(500).json({
        message: error.message || "Something went wrong creating the Task",
      });
    }
};

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