let indicacion;
let history = [];

while (indicacion != "2") {
    indicacion = prompt("1.Convertir Pesos -> Dolar (Divisa): \n 2. Salir.");

    switch(indicacion){
        case "1":
            let pesos = Number(prompt("Ingrese su monto en pesos para hacer la conversión: "));
            let usd = pesos/1300;
            alert("Su monto ingresado es: "+pesos+"ARS - El monto en Dolares es: "+usd+"USD.");
    }
}