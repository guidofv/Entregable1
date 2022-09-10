let exchangeRateSell = 135;
let exchangeRateBuy = 130;
let usDollarsIn;
let usDollarsOut;;
function argPesosIn(exchangeRateSell, usDollarsOut) {
    return argPesosIn = exchangeRateSell * usDollarsOut;
}
function impuestoPais(argPesosIn) {
    return impuestoPais = argPesosIn * 0.35;
}
function retGanancias(argPesosIn) {
    return retGanancias = argPesosIn * 0.30;
}
function argPesosInFinal(argPesosIn, impuestoPais, retGanancias) {
    return argPesosInFinal = Number(argPesosIn + impuestoPais + retGanancias);
}
function argPesosOut(exchangeRateBuy, usDollarsIn) {
    return argPesosOut = exchangeRateBuy * usDollarsIn;
}
let operacion = prompt('Por favor, indique qué tipo de operación desea realizar: (C) AR$ a U$S (V) U$S a AR$').toUpperCase();
while (operacion != 'C' && operacion != 'V') {
    operacion = prompt('La opción ingresada es inválida. (C) AR$ a U$S (V) U$S a AR$').toUpperCase();
}
switch (operacion) {
    case 'C':
        usDollarsOut = Number(prompt(`Actualmente el tipo de cambio es AR$ ${exchangeRateSell.toFixed(2)} por dólar para la venta. Ingrese la cantidad de dólares que desea comprar`));
        while (usDollarsOut > 200 || isNaN(usDollarsOut)) {
            usDollarsOut = Number(prompt('No podemos procesar su operación. Por favor, ingrese la cantidad de dólares a comprar respetando el formato numérico y el cupo de U$S 200.'));
        }
        alert(`Para comprar U$S ${usDollarsOut.toFixed(2)} deberá desembolsar AR$ ${argPesosIn(exchangeRateSell, usDollarsOut).toFixed(2)} más impuesto PAIS de AR$ ${impuestoPais(argPesosIn).toFixed(2)} y retención a cuenta de ganancias por AR$ ${retGanancias(argPesosIn).toFixed(2)}`)
        alert(`Se debitará un total de AR$ ${argPesosInFinal(argPesosIn, impuestoPais, retGanancias).toFixed(2)} de su cuenta.`);
        alert('Operación exitosa. No olvide que por haber comprado dólares en el MULC, el BCRA le impide vender títulos contra dólares durante los próximos 90 días.');
        break;
    case 'V':
        usDollarsIn = Number(prompt(`Actualmente el tipo de cambio es AR$ ${exchangeRateBuy.toFixed(2)} por dólar para la compra. Ingrese la cantidad de dólares que desea vender`));
        alert(`Acreditaremos en su cuenta un total de AR$ ${argPesosOut(exchangeRateBuy, usDollarsIn).toFixed(2)} a cambio de sus U$S ${usDollarsIn.toFixed(2)} . Su Banco Central le agradece la gentileza.`);
        break;
}