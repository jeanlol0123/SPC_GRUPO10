var valor_compra=1000000;
var plazo_meses=96;
var tasa_interes=2.5420;
var saldo_array=[];
var intereses_array=[];
var cuota_array=[];

function amortizacion () {
valor_amortizacion=Math.round(valor_compra/plazo_meses);
return valor_amortizacion;
}




function saldo (i){
    if (i===1){
        resultado=valor_compra-amortizacion()
    }else {
        resultado=saldo_array[i-2]-amortizacion()         
    }
return resultado
}



function intereses(i){
    conver_tasa_interes=tasa_interes/100;
    switch (i){
        case 1:
            resultado=0
            break;
        case 2: 
            resultado=Math.round(valor_compra*conver_tasa_interes+saldo_array[i-2]*conver_tasa_interes)
            break;
        default:
            resultado=Math.round(saldo_array[i-2]*conver_tasa_interes);
    }
return resultado;
}



// Cuerpo del script
for (var i = 1; i <= plazo_meses; i++){
    saldo_array.push(saldo(i))
    intereses_array.push(intereses(i))
    cuota_array.push(intereses(i)+amortizacion())
    console.log("saldo"+saldo(i));
    console.log("Intereses"+intereses(i));
    console.log("Cuota"+cuota_array[i-1]);
}

