import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const clienteSchema = new Schema(
  {
    tipoDocumento: String,
    nroDocumento: String,
    tipo: String,
    nombre: String,
    edad: Number,
    rangoEdad: String,
    fechaCumple: Date,
    celular: String,
    email: String,
    familia: String,
    edadHijos: String,
    direccion: String,
    distrito: String,
    referencias: String,
    provincia: String,
    codigoPostal: String,
    entretenimiento1: String,
    entretenimiento2: String,
    entretenimiento3: String,
    haceDeportes: String,
    deportes: String,
    deseaPublicidad: Boolean
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// Change the '_id' property name to 'id'
clienteSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

clienteSchema.plugin(mongoosePaginate);

export default model("Cliente", clienteSchema);