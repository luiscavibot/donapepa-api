
const axios = require("axios");

const getVentas = async ( fechaActualFormateada ) =>{
    try {
        console.log(`Activando request al endpoint dedicado a Ventas`);
        let res = await axios.get(`http://46.183.113.134:3000/api/ventas?fechaEmision=${fechaActualFormateada}`);
        return res.data
        // console.log("Lista obtenida por consulta a BORRADOR",res.data);
        // setListaLiquidacion(res.data);
        // let suma = sumaTotalLiquidacion(res.data);
        // console.log("El objeto que tiene todas las sumas es: ",suma);
        // setTotalLiquidacion(suma);
    } catch (error) {
        console.error(error);
    }
}

exports.getVentas = getVentas;