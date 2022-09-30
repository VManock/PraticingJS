let display = document.getElementById('display');

let memoria = document.getElementById('memoria');

let operador = document.getElementById('operador');

let buttons = Array.from(document.getElementsByClassName('button'));

// function checarUltimoDigito(ultimoDigito){
//     if((ultimoDigito == '-') || (ultimoDigito == '+') || (ultimoDigito == '/') || (ultimoDigito == '*') || (ultimoDigito == '.')){
//         return true;
//     }
//     return false;
// }

// function numeroSemVirgula(innerText){
//     var ultimoNumero = getUltimoNumero(innerText);
//     if(ultimoNumero.includes('.')){
//         return false;
//     }
//     return true;
// }

// function getUltimoNumero(innerText){
//     var inicioDoUltimoNumero = innerText.indexOf('+');
//     var ultimoNumero = innerText.slice(inicioDoUltimoNumero, innerText.lenght);
//     return ultimoNumero;
// }

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            
            case 'C':
                display.innerText = '';
                break;

            case '⬅': 
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            
            case '+':
                if(display.innerText){
                    if(memoria.innerText){
                        memoria.innerText = parseInt(memoria.innerText) + parseInt(display.innerText);
                        operador.innerText = '+';
                        display.innerText = '';
                        console.log("operação realizada")
                    } else {
                    memoria.innerText = display.innerText;
                    operador.innerText = '+';
                    display.innerText = '';
                    console.log("display não nulo")
                    }
                } else {
                    operador.innerText = '+';
                    console.log("display nulo")
                }
                break;

            case '-':
                if(display.innerText){
                    if(memoria.innerText){
                        memoria.innerText = parseInt(memoria.innerText) - parseInt(display.innerText);
                        operador.innerText = '-';
                        display.innerText = '';
                        console.log("operação realizada")
                    } else {
                    memoria.innerText = display.innerText;
                    operador.innerText = '-';
                    display.innerText = '';
                    console.log("display não nulo")
                    }
                } else {
                    operador.innerText = '-';
                    console.log("display nulo")
                }
                break;

            case '/':
                if(display.innerText){
                    if(memoria.innerText){
                        memoria.innerText = parseInt(memoria.innerText) / parseInt(display.innerText);
                        operador.innerText = '/';
                        display.innerText = '';
                        console.log("operação realizada")
                    } else {
                    memoria.innerText = display.innerText;
                    operador.innerText = '/';
                    display.innerText = '';
                    console.log("display não nulo")
                    }
                } else {
                    operador.innerText = '/';
                    console.log("display nulo")
                }
                break;  
            
            case '*':
                if(display.innerText){
                    if(memoria.innerText){
                        memoria.innerText = parseInt(memoria.innerText) * parseInt(display.innerText);
                        operador.innerText = '*';
                        display.innerText = '';
                        console.log("operação realizada")
                    } else {
                    memoria.innerText = display.innerText;
                    operador.innerText = '*';
                    display.innerText = '';
                    console.log("display não nulo")
                    }
                } else {
                    operador.innerText = '*';
                    console.log("display nulo")
                }
                break;
        
            case '.':
                //checar se existe ponto no display, caso não existe, colocar, caso já exista, não fazer nada
            break;
                
            case '=':

            break;
                
            default:
                display.innerText += e.target.innerText;
        }
    })
})