import { Venta } from "../models";
import axios from "axios";
import { response } from "express";
// import { getPagination } from "../libs/getPagination";

const tokenNubeFactEmsion = "1b4c96ce6f1d4e9e9430a9b521bc21ed51dfdb1a9ddf42238e98b25b3fea6009";
const apiUrlNubeFactEmsion = "https://api.nubefact.com/api/v1/8c7f8647-d998-470a-a9b2-13ebdc4b1150";

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
            // console.log(paquete.data.aceptada_por_sunat);
            // cargarBaseDatos()  
            // if (paquete.data) {
            //   console.log(paquete.data.aceptada_por_sunat);
            //   cargarBaseDatos()    
            // }
            return res.json(paquete.data);
          })
          .catch(function (paquete) {
            return res.json(paquete.response.data);
          })
          // const cargarBaseDatos = () => {
          //   const venta = new Venta({
          //     usuario: req.body.adicionales.usuario,
          //     serie: req.body.nubefact.serie,
          //     numero: req.body.nubefact.numero,
          //     items : req.body.nubefact.items,
          //     tipoRegalo: req.body.adicionales.regalo.tipoRegalo,
          //     cantidadRegalo: req.body.adicionales.regalo.cantidad,
          //     tipoDocumentoCliente: req.body.nubefact.cliente_tipo_de_documento,
          //     numeroDocumentoCliente: req.body.nubefact.cliente_numero_de_documento,
          //     fechaEmision: req.body.nubefact.fecha_de_emision,
          //     nombreCliente: req.body.nubefact.cliente_denominacion,
          //     tipoMoneda:req.body.nubefact.moneda,
          //     igv:req.body.nubefact.total_igv,
          //     email:req.body.nubefact.cliente_email,
          //     celular:req.body.adicionales.celularCliente,
          //     condicionPago: req.body.nubefact.medio_de_pago,
          //     numeroOperacion:req.body.adicionales.numeroOperacion,  
          //     provincia: req.body.adicionales.provincia,
          //     canalVenta: req.body.adicionales.canalVenta,
          //     delivery: req.body.adicionales.delivery,
          //     direccion: req.body.nubefact.cliente_direccion,
          //     referencias: req.body.adicionales.referencias,
          //     gravada:req.body.nubefact.total_gravada,
          //     descuento:req.body.nubefact.total_descuento,
          //     totalIgv:req.body.nubefact.total_igv,
          //     totalPagar:req.body.nubefact.total
          //   });
        
          //   // Saving the task in the Database
          //   // const ventaSaved = await venta.save();
          //   venta.save();
          // }
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
    const productoSaved = await venta.save();

    // Responding to the client
    return res.json(productoSaved);
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
