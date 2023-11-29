const fechaActual = () => {
  const pFecha = document.querySelector("#pFecha");
  const fecha = new Date();
  const nombreDias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const nombreMeses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  //nombre del dia
  let diaHoy = nombreDias[fecha.getDay()];
  //numero del dia
  let numDia = fecha.getDate();
  //nombre mes
  let nombreMes = nombreMeses[fecha.getMonth()];
  //Año
  let anio = fecha.getFullYear();
  pFecha.innerHTML = `${diaHoy} ${numDia} de ${nombreMes} del ${anio}`;

};

const horaActual = () => {
  const h2Hora = document.querySelector("#h2Hora");
  const horaDelDia = new Date();
  horas = horaDelDia.getHours();
  min = horaDelDia.getMinutes();
  seg = horaDelDia.getSeconds();

  if (horas < 10) {
    horas = "0" + `${horas}`;
  }
  if (min < 10) {
    min = "0" + `${min}`;
  }
  if (seg < 10) {
    seg = "0" + `${seg}`;
  }

  if(horas > 0 && horas < 12){
    h2Hora.innerHTML = `${horas} : ${min} : ${seg} AM`;
  }else if(horas > 12 && horas < 24 ){
    h2Hora.innerHTML = `${horas} : ${min} : ${seg} PM`;
  }
  
};

setTimeout(fechaActual, 1000);
setInterval(horaActual, 1000);
