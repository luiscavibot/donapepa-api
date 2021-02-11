import { Venta } from "../models";
import axios from "axios";
import { response } from "express";
// import { getPagination } from "../libs/getPagination";

const tokenNubeFactEmsion = "7a6189b3debb4677b13b5ade5b4ccbf664e9cf15e03149ca848d9aaa2770def1";
const apiUrlNubeFactEmsion = "https://api.nubefact.com/api/v1/8e5b9739-af50-4eb9-911b-678592a8a0eb";

export const crearVenta = async (req, res) => {
          const config = {
              headers: { 
                'Authorization': `Bearer ${tokenNubeFactEmsion}`,
                "Content-Type" : "application/json"
              }
          };
          const bodyParameters = {
            operacion: req.body.operacion,
            tipo_de_comprobante: req.body.tipo_de_comprobante,
            serie: req.body.serie,
            numero:req.body.numero,
            sunat_transaction: req.body.sunat_transaction,
            cliente_tipo_de_documento: req.body.cliente_tipo_de_documento,
            cliente_numero_de_documento: req.body.cliente_numero_de_documento,
            cliente_denominacion: req.body.cliente_denominacion,
            cliente_direccion: req.body.cliente_direccion,
            cliente_email: req.body.cliente_email,
            cliente_email_1: req.body.cliente_email_1,
            cliente_email_2: req.body.cliente_email_2,
            fecha_de_emision: req.body.fecha_de_emision,
            fecha_de_vencimiento: req.body.fecha_de_vencimiento,
            moneda: req.body.moneda,
            tipo_de_cambio: req.body.tipo_de_cambio,
            porcentaje_de_igv: req.body.porcentaje_de_igv,
            descuento_global: req.body.descuento_global,
            total_descuento: req.body.total_descuento,
            total_anticipo: req.body.total_anticipo,
            total_gravada: req.body.total_gravada,
            total_inafecta: req.body.total_inafecta,
            total_exonerada: req.body.total_exonerada,
            total_igv: req.body.total_igv,
            total_gratuita: req.body.total_gratuita,
            total_otros_cargos: req.body.total_otros_cargos,
            total: req.body.total,
            percepcion_tipo: req.body.percepcion_tipo,
            percepcion_base_imponible: req.body.percepcion_base_imponible,
            total_percepcion: req.body.total_percepcion,
            total_incluido_percepcion: req.body.total_incluido_percepcion,
            total_impuestos_bolsas: req.body.total_impuestos_bolsas,
            detraccion: req.body.detraccion,
            observaciones: req.body.observaciones,
            documento_que_se_modifica_tipo: req.body.documento_que_se_modifica_tipo,
            documento_que_se_modifica_serie: req.body.documento_que_se_modifica_serie,
            documento_que_se_modifica_numero: req.body.documento_que_se_modifica_numero,
            tipo_de_nota_de_credito: req.body.tipo_de_nota_de_credito,
            tipo_de_nota_de_debito: req.body.tipo_de_nota_de_debito,
            enviar_automaticamente_a_la_sunat: req.body.enviar_automaticamente_a_la_sunat,
            enviar_automaticamente_al_cliente: req.body.enviar_automaticamente_al_cliente,
            condiciones_de_pago: req.body.condiciones_de_pago,
            medio_de_pago: req.body.medio_de_pago,
            placa_vehiculo: req.body.placa_vehiculo,
            orden_compra_servicio: req.body.orden_compra_servicio,  
            formato_de_pdf: req.body.formato_de_pdf,
            generado_por_contingencia: req.body.generado_por_contingencia,
            bienes_region_selva: req.body.bienes_region_selva,
            servicios_region_selva: req.body.servicios_region_selva,
            items: req.body.items,
            guias: req.body.guias,     
          };
          
          await axios.post( 
            apiUrlNubeFactEmsion,
            bodyParameters,
            config
          )
          .then(function (paquete) {
            return res.json(paquete.data);
          })
          .catch(function (paquete) {
            return res.json(paquete.response.data);
          })
};
export const registrarVenta = async (req, res) => {
  try {
      
    // create tutorial
    const venta = new Venta(
      { 
        usuario: req.body.usuario,
        operacion: req.body.operacion,
        tipo_de_comprobante: req.body.tipo_de_comprobante,
        serie: req.body.serie,
        numero:req.body.numero,
        sunat_transaction: req.body.sunat_transaction,
        cliente_tipo_de_documento: req.body.cliente_tipo_de_documento,
        cliente_numero_de_documento: req.body.cliente_numero_de_documento,
        cliente_denominacion: req.body.cliente_denominacion,
        cliente_direccion: req.body.cliente_direccion,
        cliente_email: req.body.cliente_email,
        cliente_email_1: req.body.cliente_email_1,
        cliente_email_2: req.body.cliente_email_2,
        fecha_de_emision: req.body.fecha_de_emision,
        fecha_de_vencimiento: req.body.fecha_de_vencimiento,
        moneda: req.body.moneda,
        tipo_de_cambio: req.body.tipo_de_cambio,
        porcentaje_de_igv: req.body.porcentaje_de_igv,
        descuento_global: req.body.descuento_global,
        total_descuento: req.body.total_descuento,
        total_anticipo: req.body.total_anticipo,
        total_gravada: req.body.total_gravada,
        total_inafecta: req.body.total_inafecta,
        total_exonerada: req.body.total_exonerada,
        total_igv: req.body.total_igv,
        total_gratuita: req.body.total_gratuita,
        total_otros_cargos: req.body.total_otros_cargos,
        total: req.body.total,
        percepcion_tipo: req.body.percepcion_tipo,
        percepcion_base_imponible: req.body.percepcion_base_imponible,
        total_percepcion: req.body.total_percepcion,
        total_incluido_percepcion: req.body.total_incluido_percepcion,
        total_impuestos_bolsas: req.body.total_impuestos_bolsas,
        detraccion: req.body.detraccion,
        observaciones: req.body.observaciones,
        documento_que_se_modifica_tipo: req.body.documento_que_se_modifica_tipo,
        documento_que_se_modifica_serie: req.body.documento_que_se_modifica_serie,
        documento_que_se_modifica_numero: req.body.documento_que_se_modifica_numero,
        tipo_de_nota_de_credito: req.body.tipo_de_nota_de_credito,
        tipo_de_nota_de_debito: req.body.tipo_de_nota_de_debito,
        enviar_automaticamente_a_la_sunat: req.body.enviar_automaticamente_a_la_sunat,
        enviar_automaticamente_al_cliente: req.body.enviar_automaticamente_al_cliente,
        condiciones_de_pago: req.body.condiciones_de_pago,
        medio_de_pago: req.body.medio_de_pago,
        placa_vehiculo: req.body.placa_vehiculo,
        orden_compra_servicio: req.body.orden_compra_servicio,  
        formato_de_pdf: req.body.formato_de_pdf,
        generado_por_contingencia: req.body.generado_por_contingencia,
        bienes_region_selva: req.body.bienes_region_selva,
        servicios_region_selva: req.body.servicios_region_selva,
        items: req.body.items,
        //****VALORES EXTRA */
        tipoRegalo: req.body.tipoRegalo,
        cantidadRegalo: req.body.cantidadRegalo,
        celular:req.body.celular,
        numeroOperacion:req.body.numeroOperacion,  
        provincia: req.body.provincia,
        canalVenta: req.body.canalVenta,
        clienteReferencias: req.body.clienteReferencias,
        clienteDepartamento: req.body.clienteDepartamento,
        clienteProvincia: req.body.clienteProvincia
      }                
    );

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
    
    
    return res.json({ultimo: ultimo[0].numero});
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong retrieving the tasks",
    });
  }
};

export const buscarProducto = async (req, res) => {
  try {
    
    const ultimo = await Venta.find().sort({$natural:-1}).limit(1);
    
    
    return res.json({ultimo: ultimo[0].numero});
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong retrieving the tasks",
    });
  }
};

export const borrarTodasVentas = async (req, res) => {
  try {
    const data = await Venta.deleteMany({});
    res.json({
      message: `${data.deletedCount} Task were deleted Successfully`,
    });
  } catch (error) {
    res.status(500).json({
      message:
        error.message || "Some error ocurred while removing all tutorials",
    });
  }
};

export const filtroVentas = async (req, res) => {
  try {
    const { pago, general, delivery, fecha_inicial, fecha_final, producto } = req.query;
    
    //Si 1 es delivery y 2 es sin delivery 

    let c_pago = pago ? { medio_de_pago: { $regex: `${pago}`, $options: 'i'}} : {};

    let c_delivery = delivery ? delivery == 1 ? { "items.descripcion" : new RegExp(".*delivery.*", "i")} : { "items.descripcion" : { $not: { $regex: ".*delivery.*" , $options: 'i'} } }  : {};
    
    let c_general = general ? {$or: [
      { "serie" : new RegExp(".*"+general+".*", "i")},
      { "cliente_denominacion" : new RegExp(".*"+general+".*", "i")},
      { "tipo_de_comprobante" : new RegExp(".*"+general+".*", "i")},
      { "numero" : new RegExp(".*"+general+".*", "i")},
      { "items.total" : {$regex: `${general}`, $options: 'i'}},
      { "items.subtotal" : {$regex: `${general}`, $options: 'i'}},
    ]}  : {};

    let c_fecha = fecha_inicial && !fecha_final ? { fecha: {$eq: new Date(fecha_inicial)} } : !fecha_inicial && fecha_final ? { fecha: {$eq: new Date(fecha_final)} } : { fecha: {$gte: new Date(fecha_inicial), $lte: new Date(fecha_final)} };
    
    let c_producto = producto ? { medio_de_pago: { $regex: `${produto}`, $options: 'i'} } : {};

    const data = await Venta.find({$and:[c_pago,c_delivery,c_general,c_fecha,c_producto]});

    return res.json(data);

  } catch (error) {
      res.status(500).json({
      message: error.message || "Something went wrong retrieving the tasks",
      });
  }
};