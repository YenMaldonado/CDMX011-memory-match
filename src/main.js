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
                    matches ===8 ? alert('Bien Hecho!, El juego ha terminado'):
                    console.log('son iguales', matches);

                    switch(selectedElements[0].getAttribute('id')){
                        case 'js':
                            alert('JS: JavaScript es un lenguaje de programación basada en prototipos, multiparadigma, de un solo hilo, dinámico, con soporte para programación orientada a objetos, imperativa y declarativa (por ejemplo programación funcional).');
                            break;
                        case 'css':
                            alert('CSS: es el lenguaje de estilos utilizado para describir la presentación de documentos HTML o XML (en-US) (incluyendo varios languages basados en XML como SVG, MathML o XHTML). CSS describe como debe ser renderizado el elemento estructurado en la pantalla, en papel, en el habla o en otros medios.');
                            break;
                        case 'github':
                            alert('GITHUB: Se trata de una de las principales plataformas para crear proyectos abiertos de herramientas y aplicaciones, y se caracteriza sobre todo por sus funciones colaborativas que ayudan a que todos puedan aportar su granito de arena para mejorar el código.');
                            break;
                        case 'html':
                            alert('HTML: no es un lenguaje de programación; es un lenguaje de marcado que define la estructura de tu contenido. HTML consiste en una serie de elementos que usarás para encerrar diferentes partes del contenido para que se vean o comporten de una determinada manera. Las etiquetas de encierre pueden hacer de una palabra o una imagen un hipervínculo a otro sitio, se pueden cambiar palabras a cursiva, agrandar o achicar la letra, etc. ');   
                            break;
                        case 'yarn':
                            alert('YARN: es un gestor de paquetes para tu código. Te permite usar y compartir código con otros desarrolladores de cualquier parte del mundo.');
                            break;
                        case 'npm':  
                            alert('NPM o Node Package Manager:es el administrador de paquetes predeterminado para el tiempo de ejecución de JavaScript Node.js.');
                            break;
                        case 'angular':
                            alert('ANGULAR: es un framework opensource desarrollado por Google para facilitar la creación y programación de aplicaciones web de una sola página, las webs SPA (Single Page Application).');
                            break;
                        case 'react':
                            alert('REACT: React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.');
                            break;
                            default:
                    }
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


