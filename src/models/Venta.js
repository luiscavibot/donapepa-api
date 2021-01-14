import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const ventaSchema = new Schema(
  {
    usuario: String,
    serie: String,
    numero: Number,
    type: Number,
    lista : Array,
    tipoRegalo:String,
    cantidadRegalo:Number,
    tipoDocumentoCliente:String,
    numeroDocumentoCliente:Number,
    fechaEmision:Date,
    nombreCliente:String,
    tipoMoneda:String,
    igv:Number,
    email:String,
    celular:Number,
    condicionPago: String,
    numeroOperacion:String,  
    provincia: String,
    canalVenta: String,
    delivery: Boolean,
    direccion: String,
    referencias: String,
    gravada:Number,
    descuento:Number,
    totalIgv:Number,
    totalDelivery:Number,
    totalPagar:Number
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