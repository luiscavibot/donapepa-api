const axios = require("axios");
const registrarLiquidacion = async (documento)=>{
    try {
        let res= await axios.post('http://46.183.113.134:3000/api/liquidaciones', documento);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}

exports.registrarLiquidacion = registrarLiquidacion;