import { Liquidacion } from "../models";

export const crearLiquidacion = async (req, res) => {
    try {
      // create tutorial
      const liquidacion = new Liquidacion({
        user: req.body.user,
        fecha: req.body.fecha,
        montoLiquidadoBoletas:req.body.montoLiquidadoBoletas,
        montoLiquidadoFacturas: req.body.montoLiquidadoFacturas,
        montoLiquidadoNotasVentas:req.body.montoLiquidadoNotasVentas,
        montoLiquidacion: req.body.montoLiquidacion
      });
  
      // Saving the task in the Database
      const liquidacionSaved = await liquidacion.save();
  
      // Responding to the client
      return res.json(liquidacionSaved);
    } catch (error) {
      res.status(500).json({
        message: error.message || "Something went wrong creating the number",
      });
    }
};
export const obtenerLiquidaciones = async (req, res) => {
    try {
        
        const data = await Liquidacion.find();
    
        return res.json(data);

    } catch (error) {
      res.status(500).json({
        message: error.message || "Something went wrong creating the number",
      });
    }
};