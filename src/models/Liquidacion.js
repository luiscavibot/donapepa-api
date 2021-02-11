import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const liquidacionSchema = new Schema(
    
    {    
        user: String,
        fecha: Date,
        montoLiquidadoBoletas: Number,
        montoLiquidadoFacturas: Number,
        montoLiquidadoNotasVentas: Number,
        montoLiquidacion: Number
    }
    ,{
        versionKey: false,
        timestamps: true,
    }       
);

// Change the '_id' property name to 'id'
liquidacionSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

liquidacionSchema.plugin(mongoosePaginate);

export default model("Liquidacion", liquidacionSchema);