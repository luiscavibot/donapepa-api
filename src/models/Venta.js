import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const ventaSchema = new Schema(
  {
    usuario: String,
    operacion: String,
    tipo_de_comprobante: Number,
    serie: String,
    numero: Number,
    sunat_transaction: Number,
    cliente_tipo_de_documento: Number,
    cliente_numero_de_documento: String,
    cliente_denominacion: String,
    cliente_direccion: String,
    cliente_email: String,
    cliente_email_1: String,
    cliente_email_2: String,
    fecha_de_emision: String,
    fecha_de_vencimiento: String,
    moneda: Number,
    tipo_de_cambio: String,
    porcentaje_de_igv: Number,
    descuento_global: String,
    total_descuento: String,
    total_anticipo: String,
    total_gravada: Number,
    total_inafecta: String,
    total_exonerada: String,
    total_igv: Number,
    total_gratuita: String,
    total_otros_cargos: String,
    total: Number,
    percepcion_tipo: String,
    percepcion_base_imponible: String,
    total_percepcion: String,
    total_incluido_percepcion: String,
    total_impuestos_bolsas: String,
    detraccion: Boolean,
    observaciones: String,
    documento_que_se_modifica_tipo: String,
    documento_que_se_modifica_serie: String,
    documento_que_se_modifica_numero: String,
    tipo_de_nota_de_credito: String,
    tipo_de_nota_de_debito: String,
    enviar_automaticamente_a_la_sunat: Boolean,
    enviar_automaticamente_al_cliente: Boolean,
    condiciones_de_pago: String,
    medio_de_pago: String,
    placa_vehiculo: String,
    orden_compra_servicio: String,
    formato_de_pdf: String,
    generado_por_contingencia: String,
    bienes_region_selva: String,
    servicios_region_selva: String,
    items: Array,
    //****VALORES EXTRA */
    tipoRegalo: String,
    cantidadRegalo: Number,
    celular:String,
    numeroOperacion:String,
    provincia: String,
    canalVenta: String,
    clienteReferencias: String,
    clienteDepartamento: String,
    clienteProvincia: String,  
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// Change the '_id' property name to 'id'
ventaSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

ventaSchema.plugin(mongoosePaginate);

export default model("Venta", ventaSchema);