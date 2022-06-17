function calcData(fatorData) {
  let data = new Date(1997, 9, 7);
  data.setDate(data.getDate() + fatorData)
    
  let dia = data.getDate();
  if (dia < 10) {
    dia = "0" + dia;
  }

  let mes = data.getMonth() + 1;
  if (mes < 10) {
    mes = "0" + mes;
  }

  let ano = data.getFullYear();
  let dataFormatada = dia + "/" + mes + "/" + ano;

  return dataFormatada;
}

module.exports = calcData;
