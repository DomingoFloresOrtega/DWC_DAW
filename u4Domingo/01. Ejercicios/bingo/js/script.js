'use strict';

var usedNums = new Array(76); // valores usados
usedNums.fill(false);

function generaNumeroDelBingo(){

    var bingoNumElem = document.getElementById('bingoNum');
    bingoNumElem.innerHTML = getNewNum(75);
}

// funcion que se llama cada 3 segundos
setInterval( generaNumeroDelBingo, 3000);

// devuelve un numero del 1 al 15
function getNewNum() {

    var tmpRandom = Math.floor( Math.random() * 15) + 1;
    return tmpRandom;
}

function checkWin(){
    var setSquares = 0;

    var currentSquare;
    var currentSquareDOMelem;
    for (let i = 0; i < 24;i++){
        // celda actual
        currentSquare = "square" + i;

        currentSquareDOMelem = document.getElementById(currentSquare);

        if (currentSquareDOMelem.className == "pickedBG"){
            // 2 elevado a i
            setSquares = setSquares | Math.pow(2,i);
        }

        if ( (setSquares & 31) == 31) {
            console.log('Has ganado');

            // asigno el color verde a todas las celdas
            for (let i = 0; i < 24; i++){
                // celda actual
                currentSquare = "square" + i;
                document.getElementById(currentSquare).className = "";
                document.getElementById(currentSquare).bgColor = 'green';
            }
        }
        
    }

    console.log('Numero decimal del valor de celdas seleccionada: ', setSquares);
}

// funcion que cambia la clase de la celda
function toggleColor(e){

    e.preventDefault();

    var thisSquare;
    
    if (e){
        thisSquare = e.target;
    } else {
        thisSquare = window.event.srcElement;
    }

    // elemento sobre el que se hace click
    console.log(thisSquare.className);

    if (thisSquare.className == ""){
        thisSquare.className = "pickedBG"; // asigno esta clase css
    } else {
        thisSquare.className = "";
    }
    
    // comprobar si ha ganado (he realizado linea - una de las combinaciones ganadoras)
    checkWin();

}

function setSquare(thisSquare){

    // celda actual
    var currentSquare = "square" + thisSquare;
    // matriz de multiplicador
    var colSpace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
    var colBasis = colSpace[thisSquare] * 15;
    
    var newNum;

    // repite mientas haya sido usado
    do{
        newNum = colBasis + getNewNum();
    } while (usedNums[newNum]);

    // indico si ha salido
    usedNums[newNum] = true;

    // asigno el numero
    document.getElementById(currentSquare).innerHTML = newNum;

    // trabajar con css (asignar clases)

    // asigno el manejador de eventos
    document.getElementById(currentSquare).addEventListener('click', toggleColor);


    // si el valor no ha salido
    /*
    if (!usedNums[newNum]){
        usedNums[newNum] = true;

        // asigno el numero
        document.getElementById(currentSquare).innerHTML = newNum;
    } else {
        // numero que ya ha salido
        console.log("Casilla:" + newNum);
    }
    */
}

function initAll(){

    for (let i = 0; i < 24; i++){
        setSquare(i);
    }

    var reloadElement = document.getElementById('reload');
    reloadElement.addEventListener('click', function(e){

        e.preventDefault();

        initAll();

    });
}

window.onload = initAll;