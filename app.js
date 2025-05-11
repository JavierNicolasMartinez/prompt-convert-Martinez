let indicacion;
let history = [];

function convertCurrency(pesos) {
    return pesos/1300;
}

while (indicacion !== "2") {
    indicacion = prompt("1.Convertir Pesos -> Dolar (Divisa): \n 2. Salir.");

    switch(indicacion){
        case "1":
            let pesos = Number(prompt("Ingrese su monto en pesos para hacer la conversión: "));
            let usd = convertCurrency(pesos);
            alert("Su monto ingresado es: "+pesos+" ARS. \n - El monto en Dolares es: "+usd.toFixed(2)+" USD.");
            let historial = {
                tipo: "Divisa",
                entrada: "Monto ingresado: "+pesos+" ARS.",
                salida: "Conversión: "+usd.toFixed(2)+" USD.", //Agregado el Tofixed que me sirve para usar solo dos decimales
                fecha: new Date().toLocaleString() //buscado.
            };

            history.push(historial)
            break;

            case "2": 
            console.log("Historial de todas las conversiones: ");
            console.table(history);
            alert("Gracias")
            break;

            default:
                alert("El número es invalido.");

    }
}