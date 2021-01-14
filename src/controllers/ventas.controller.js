import { Venta } from "../models";
// import { getPagination } from "../libs/getPagination";

export const crearVenta = async (req, res) => {
    try {
      
      // create tutorial
      const venta = new Venta({
        usuario: req.body.usuario,
        serie: req.body.usuario,
        numero: req.body.numero,
        lista : req.body.lista,
        tipoRegalo: req.body.tipoRegalo,
        cantidadRegalo: req.body.CantidadRegalo,
        tipoDocumentoCliente: req.body.tipoDocumentoCliente,
        numeroDocumentoCliente: req.body.numeroDocumentoCliente,
        fechaEmision: req.body.fechaEmision,
        nombreCliente: req.body.nombreCliente,
        tipoMoneda: req.body.tipoMoneda,
        igv: req.body.igv,
        email: req.body.email,
        celular: req.body.celular,
        condicionPago: req.body.condicionPago ,
        numeroOperacion: req.body.numeroOperacion,  
        provincia: req.body.provincia ,
        canalVenta: req.body.canalVenta,
        delivery: req.body.delivery ,
        direccion: req.body.direccion ,
        referencias: req.body.referencias ,
        gravada: req.body.gravada,
        descuento: req.body.descuento,
        totalIgv: req.body.totalIgv,
        totalDelivery: req.body.totalDelivery,
        totalPagar: req.body.totalPagar,
      });
  
      // Saving the task in the Database
      const ventaSaved = await venta.save();
  
      // Responding to the client
      return res.json(ventaSaved);
    } catch (error) {
      res.status(500).json({
        message: error.message || "Something went wrong creating the Task",
      });
    }
};

export const consultarVentas = async (req, res) => {
  try {
    
    const ventas = await Venta.find();
    return res.json(ventas);

  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong retrieving the tasks",
    });
  }
};

export const numeroUltimaVenta = async (req, res) => {
  try {
    
    const ultimo = await Venta.find().sort({$natural:-1}).limit(1);
    
    
    return res.json({ultimo: ultimo.[0].numero});
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong retrieving the tasks",
    });
  }
};