import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const numeracionSchema = new Schema(
    
    {    
        tipoComprobante: String,
        serie: String,
        numeroActual: Number
    }
    ,{
        versionKey: false,
        timestamps: true,
    }       
);

// Change the '_id' property name to 'id'
numeracionSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

numeracionSchema.plugin(mongoosePaginate);

export default model("Numeracion", numeracionSchema);