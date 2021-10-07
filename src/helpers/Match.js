//import {Card} from '../components/Card.js'
//import data from '../data/webdev/webdev.js'

/*export const Match = () => {
   
    let eventClick = document.querySelectorAll('.viewCardsActive');
    console.log(eventClick);
    for(let i = 0; i < eventClick.length; i++){
        eventClick[i].addEventListener('click', function() {
            console.log(eventClick[i]);
            let idAttribute = eventClick[i].getAttribute('id');
            //let findTechnology = data.items.find((toolName) => {})
                return idAttribute;
            //console.log(idAttribute); 
        })
    }
}
*/

// REGLAS DEL JUEGO 
            // ==================================
            // 1 Las tarjetas ya seleccionadas no pueden ser clickable
                // 1.1 Definir como hariamos para hacer cumplir esta regla??
            // 2. FIN DEL JUEGO
                // 2.1 SI la longitud de la variable "matches" es igual 
                //a la cantidad de tarjetas entre 2 
                // (matches.length == data.length)
                // 2.2 Mostrar un mensaje al usuario de "JUEGO TERMINADO"

            // 1. Creacion e inicializacion de variables
            //  1.1 Crear un arreglo "selectedElements" para guardar la primera y 
            //segunda seleccion de tarjetas
          
            //  1.2 crear una variable "matches" para contabilizar los aciertos 
            //e inicializarla en 0. 
                    

            // 2. Seleccion de tarjetas
            //  El usuario hace click a las tarjetas
    
            // 2.1 Si el arreglo tiene menos de 2 elementos seleccionados
            
                // 2.1.1 Guardar el ID del elemento seleccionado en la posicion disponible del 
                //arreglo "selectedElements"
                
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
    

 