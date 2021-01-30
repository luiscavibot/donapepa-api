import { Numeracion } from "../models";
export const crearNumeracion = async (req, res) => {
    try {
      // create tutorial
      const numeracion = new Numeracion({
        tipoComprobante: req.body.tipoComprobante,
        serie: req.body.serie,
        numeroActual: req.body.numeroActual
      });
  
      // Saving the task in the Database
      const numeracionSaved = await numeracion.save();
  
      // Responding to the client
      return res.json(numeracionSaved);
    } catch (error) {
      res.status(500).json({
        message: error.message || "Something went wrong creating the number",
      });
    }
};
export const leerNumeracion = async (req, res) => {
    try {
      // create tutorial
        const { tipoComprobante, serie } = req.query;

        let condition = tipoComprobante?{tipoComprobante: tipoComprobante, serie: serie} :{};
        const data = await Numeracion.find(condition);
    
        return res.json(data);

    } catch (error) {
      res.status(500).json({
        message: error.message || "Something went wrong creating the number",
      });
    }
};
export const borrarNumeraciones = async (req, res) => {
    try {
      const data = await Numeracion.deleteMany({});
      res.json({
        message: `${data.deletedCount} todas las numeraciones fueron borradas`,
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message || "Some error ocurred while removing all tutorials",
      });
    }
};
export const actualizarNumeracion = async (req, res) => {
    try {
        // create tutorial
        const { tipoComprobante, serie, numeroActual } = req.query;

        let condition = tipoComprobante?{tipoComprobante: tipoComprobante, serie: serie}:{};


        const data = await Numeracion.updateOne(condition,{$set:{"numeroActual": numeroActual}});
      
        return res.json(data);
  
    } catch (error) {
        res.status(500).json({
          message: error.message || "Something went wrong creating the number",
        });
    }
};