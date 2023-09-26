//Parte1:Manipulacion de Cadenas

//1
function capitalizarPalabras(cadena){

    let cadenaNueva = "";
    let validacion = false;
    cadenaNueva += cadena.charAt(0).toLocaleUpperCase();
    for(let i = 1; i< cadena.length; i++){
        if(validacion == false){
            cadenaNueva += cadena.charAt(i);
            if(cadena.charAt(i) == ' '){
                validacion = true;
            }
        }else{
            cadenaNueva += cadena.charAt(i).toLocaleUpperCase();
            validacion = false;
        }
    }
    return cadenaNueva;
}

console.log(capitalizarPalabras("hola mundo"));

//2
function invertirCadena(cadena){
    cadenaInvertida = "";

    for(let i = cadena.length-1; i >= 0;i--){
        cadenaInvertida += cadena.charAt(i);
    }
    return cadenaInvertida;
}

console.log(invertirCadena("JavaScript"));

//3
function contarVocales(cadena){
    let vocales = "aeiou";
    let contadorVocales = 0;
    cadena = cadena.toLocaleLowerCase();

    for(let i = 0; i < vocales.length;i++){
        for(let j = 0; j < cadena.length;j++){
            if(vocales.charAt(i) == cadena.charAt(j)){
                contadorVocales++;
            }
        }
    }
    return contadorVocales;
}
console.log(contarVocales("cAsa"));

//4
function eliminarDuplicados(cadena){
    let duplicados = " ";
    let cadenaNueva = "";
;

    for(let i = 0; i < cadena.length; i++){
        if(cadenaNueva.includes(cadena.charAt(i))){
            duplicados += cadena.charAt(i);
        }else{
            cadenaNueva += cadena.charAt(i);
        }
    }

    return cadenaNueva;
}

console.log(eliminarDuplicados("programming"));


//Parte 2:Validaicon de formatos

//5
function validarEmail(cadena){
    validacion = false;
    if(cadena.charAt(0) != '@' && cadena.includes('@gmail.com')){
        validacion = true;
    }
    return validacion;
}

console.log(validarEmail("hermeramos02@gmail.com"));

//6
function esTelefono(cadena){
    validacion = false;
    if(cadena.charAt(0) == '(' && cadena.charAt(4) == ')' && cadena.charAt(8) == '-' && cadena.length == 13){
        validacion = true;
    }else if(cadena.length == 10){
        validacion = true;
    }

    return validacion;
}

console.log(esTelefono("(123)456-7890"));

//8
function esPalindromoFrase(cadena){
    let validacion = false;
    cadena = cadena.trim();
    let cadenaLimpia = "";

    for(let i = 0; i < cadena.length;i++){
        if(cadena.charAt(i) != '.' && cadena.charAt(i) != ';' && cadena.charAt(i) != ':'){
            cadenaLimpia += cadena.charAt(i);
        }
    }

    cadenaLimpia = cadenaLimpia.toLocaleLowerCase();

    let cadenaInvertida = "";

    for(let i = cadenaLimpia.length-1; i >= 0;i--){
        cadenaInvertida += cadenaLimpia.charAt(i);
    }


   
    cadenaLimpia = cadenaLimpia.replaceAll(' ','');
    cadenaInvertida = cadenaInvertida.replaceAll(' ','');



    if(cadenaLimpia == cadenaInvertida){
        validacion = true;
    }

    return validacion;
    
}
console.log(esPalindromoFrase("Anita lava la tina"))

//9

