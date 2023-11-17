// h1 {corlor : red} si fuera css
// .parrafito {..} si fuera css
// #pid {...} si fuera css

//const h1 = document.querySelector('h1');//Seleccionamos las etiquetas html
//const p = document.querySelector('p');
//const parrafito = document.getElementsByClassName('parrafito');//Selecciona x clase
//const pid = document.getElementById('pid');//Selecciona por id
//const input = document.querySelector('input');


// console.log(input.value);
// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// });

//h1.innerHTML = 'Test con <br> InnerHTML';//Permite modificar la etiqueta del elemento HTML que se selecciono con el queryselector
//h1.innerText = 'Test con <br> InnerText';//Permite modificar la etiqueta del elemento solo texto que se selecciono con el queryselector
//console.log (h1.getAttribute ('pantalla')); //Ayuda a leer los atributos de nuestro elemento
//h1.setAttribute ('pantalla', 'testsetAttribute');//ayuda modificar atributos

//h1.classList.add('testsetAttribute');//agrega una clase al atributo
//h1.classList.remove('testsetAttribute');//elimina la clase del atributo
//h1.classList.toggle('testsetAttribute');//Cada que se ejecuta agrega o quita una clase
//h1.classList.contains('testsetAttribute');//devuelve true or false si tiene la clase


//input.value = "456"; //modifica el input values desde JS

//const img = document.createElement('img');
//img.setAttribute('src', 'https://media.istockphoto.com/id/1455658894/es/foto/alerta-de-advertencia-de-pirateado-del-sistema-en-el-port%C3%A1til-ataque-cibern%C3%A9tico-a-la-red.jpg?s=1024x1024&w=is&k=20&c=PGW_1sy-Nq2hB-RnXWcXZyeD9JRZ11uf6pRYeLTxByA=');
//console.log (img);

//pid.innerHTML = "";
//pid.appendChild(img);

//funcion para limpiar la pantalla 
// window.onload = function(){
// input1.value = '';
// input2.value = '';
// };

//Agregamos las nuevas variables
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pRsult = document.querySelector('#result');

//Al boton le pasamos la funcion addEventListener asi no la llamamos de HTML
//btn.addEventListener('click',btnOnClick);


//Al formulario le pasamos la funcion addEventListener asi no la llamamos de HTML
form.addEventListener('click',btnOnClick);

//Funcion Onclick
function btnOnClick(event){
    //console.log(event);
    event.preventDefault();
    //console.log('Escuchando el evento de click');
    //obtener los valores como números
    const valor1 = parseFloat(input1.value);
    const valor2 = parseFloat(input2.value);

    //verificamos si los números son números validos
    if (!isNaN(valor1) && !isNaN(valor2)) {
        const resultado = valor1 + valor2;
        pRsult.innerText = "Resultado = "+ resultado;

        console.log(resultado);    
    }else{
        console.log('Ingrese números validos en ambos lados');
    }    
}












