const cron = require("node-cron");
const {getVentas} = require('./functions/consultaVentasDia')
const {formatearFecha} = require('./functions/formatearFecha')
const {registrarLiquidacion} = require('./functions/registrarLiquidacion')


const main = ()=>{
    console.log("Script para liquidación diaria activado...");
    cron.schedule("36 6 */1 */1 *", async () => {
        //57 11 */1 */1 *
        const fechaActual = new Date()
        let sumaTotal = 0
        fechaActual.setHours(fechaActual.getHours()-5); //Hora Peruana
        let resArray = await getVentas(formatearFecha(fechaActual));
        console.log("El siguiente Script de actualización de la liquidación diaria se corresponde con la siguiente fecha/hora: ",formatearFecha(fechaActual));
        // let resArray = await getVentas("1-02-2021");
        resArray.forEach((value,index) =>{
            sumaTotal += (value.total*1.0);
            console.log(`Cantidad ${index+1}:`,value.total);
        })
        console.log("Se liquida en: ",sumaTotal);
        registrarLiquidacion({
            user: "UsuarioPrueba",
            fecha: fechaActual,
            montoLiquidadoBoletas: 0,
            montoLiquidadoFacturas: 0,
            montoLiquidadoNotasVentas: 0,
            montoLiquidacion: sumaTotal
        })
    });
}

main()

