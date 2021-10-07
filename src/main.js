import Header from './components/header/Header.js';
import { App } from './components/App.js';
//import { Result } from './components/Result.js';

const rootElement = document.getElementById('root');
const containHeader = Header();
rootElement.appendChild(containHeader);
rootElement.appendChild(App());

let selectedElements = [];
let matches = 0;
let eventClick = document.querySelectorAll('.viewCardsActive');
//let secondClick = document.querySelectorAll('.viewCardsActive')
// console.log(eventClick);
for (let i = 0; i < eventClick.length; i++) {
    eventClick[i].addEventListener('click', function (event) {
        let idAttribute = event.currentTarget;
        //console.log(idAttribute);
        if(idAttribute.className === 'viewCardsActive'){
            selectedElements.push(idAttribute);
            if (selectedElements.length === 2) {
                console.log(selectedElements[0],selectedElements[1]);
                if (selectedElements[0].getAttribute('id') === selectedElements[1].getAttribute('id')) {
                    matches++;
                    selectedElements[0].className = 'disabledCard';
                    selectedElements[1].className = 'disabledCard';
                    console.log('son iguales', matches); 
                } else {
                    console.log('no son iguales');
                }
                selectedElements = [];
            }
        }
    })
}



          // REGLAS DEL JUEGO 
            // ==================================
            // 1 Las tarjetas ya seleccionadas no pueden ser clickable
                // 1.1 Definir como hariamos para hacer cumplir esta regla??
            // 2. FIN DEL JUEGO
                // 2.1 SI la longitud de la variable "matches" es igual 
                //a la cantidad de tarjetas entre 2 
                // (matches.length == data.length)
                // 2.2 Mostrar un mensaje al usuario de "JUEGO TERMINADO"

                // 2.1.2 Añadir un color al borde del elemento seleccionado.
            // 2.2 Si el arreglo ya tienen 2 elementos seleccionados
                // 2.2.1 bloquear ese evento
            // 2.3 Si elemento 0 del arreglo coincide con el elemento 1 del mismo arerglo
                // 2.3.1 Incrementar la variable "matches" en 1 (matches +1).
                // 2.3.2 Cambiar el color de borde a las tarjetas que hicieron match
                // 2.3.3 Deshabilitar el evento click a las tarjetas que hicieron match
            // 2.4  Si elemento 0 del arreglo NO coincide con el elemento 1 del mismo arerglo
                // 2.4.1 Remove el color de borde de las tarjetas previamente seleccionadas.
            // 2.5 Reasignar el valor de la variable "selectedElements" a un arreglo vacio ([])


