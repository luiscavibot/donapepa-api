const formatearFecha = (fechaActual)=>{
    let dia = (fechaActual.getDate()<10)?`0${fechaActual.getDate()}`:fechaActual.getDate();
    let mes =(fechaActual.getMonth()<9)?`0${fechaActual.getMonth()+1}`:fechaActual.getMonth()+1;
    let ano =fechaActual.getFullYear();
    return (`${dia}-${mes}-${ano}`)
}

exports.formatearFecha = formatearFecha;