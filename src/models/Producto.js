import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productoSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    presentacion: {
      type: String,
      trim: true,
    },
    codigo: {
      type: String,
      trim: true,
    },
    marca: {
      type: String,
      trim: true,
    },
    precioUnitario:{
      type: Number,
      trim: true,
    },
    habilitado:{
      type: Boolean
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// Change the '_id' property name to 'id'
productoSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

productoSchema.plugin(mongoosePaginate);

export default model("Producto", productoSchema);