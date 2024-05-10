function entrar(){
    let resultadoElemento = document.querySelector('.resultado')
    let mainContenedor = document.querySelector('.contenedor')
    let filaID = 1;


    //Generar un random
    let animal;
    let palabraRandom=(min, max)=>{
        return Math.floor(Math.random()* (max - min)) + min;
    }

    // Definicion de animales 
    
    switch (palabraRandom(0,40)){
    case 1:
        animal="MOJARRA"; 
        break;
    case 2:
        animal="CABALLO";
        break;
    case 3:
        animal="ORCA";
        break;
    case 4:
        animal="ESTRELLA";  
        break;
    case 5:
        animal="ERIZO";
        break;
    case 6:
        animal="SALMON"; 
        break;
    case 7:
        animal="CALAMAR";    
        break;
    case 8:
        animal="FOCA";  
        break;
    case 9:
        animal="TIBURON";
        break;
    case 10:
        animal="DELFIN";      
        break;
    case 11:
        animal="CANGREJO";  
        break;
    case 12:
        animal="TORTUGA";  
        break;
    case 13:
        animal="CAMARON";
        break;
    case 14:
        animal="ATUN";
        break;
    case 15:
        animal="PIRAÑA";
        break;
    case 16:
        animal="BACALAO";
        break;
    case 17:
        animal="ALMEJA";
        break;
     case 18:
        animal="LANGOSTA";
        break;
    case 19:
        animal="ESPONJA";
        break;
    case 20:
        animal="SARDINA";
        break;     
    case 21:
        animal="PULPO"
        break;
    case 22:
        animal="AJOLOTE"
        break;
    case 23: 
        animal="MORZA";
        break;
    case 24:
        animal="MEDUSA"
        break;
    case 25:
        animal="BAGRE"
        break;
    case 26:
        animal="ANGUILA";
        break;
    case 27:
        animal="PINGUINO";
        break; 
    case 28:
        animal="OSTRA";
        break;
    case 29:
        animal="MORZA";
        break;
    case 30:
        animal="CARACOL";
        break;
    case 31:
        animal="ARAÑA";
        break;
    case 32:
        animal="CUERVO";
        break;
    case 33:
        animal="PALOMA"
        break;
    case 34:
        animal="VACA";
        break;
    case 35:
        animal="GATO";
        break;
    case 36:
        animal="PERRO"
        break;
    case 37:
        animal="ZORRO";
        break;
    case 38:
        animal="PATO";
        break;
    case 39:
        animal="CONEJO";
        break;
    case 40:
        animal="BUHO"
        break;
    case 41:
        animal="CERDO"
        break;
    case 42:
        animal="CABRA"
        break;
    case 43:
        animal="ABEJA"
        break;
    case 44:
        animal="RANA";
        break;
    case 45:
        animal="LAGARTO";
        break;
    case 46:
        animal="GEKO";
        break;
    case 47:
        animal="AGUILA";
        break;
    case 48: 
        animal="OSO";
        break;
    case 49:
        animal="HAMSTER";
        break;
    case 50:
        animal="SERPIENTE";
        break;
    case 51:
        animal="COYOTE";
        break;
    case 52:
        animal="LEON";
        break;
    case 53:
        animal="GALLINA";
        break;
    case 54:
        animal="PAVOREAL";
        break;
    case 55:
        animal="PAVO";
        break;
    case 56:
        animal="LEOPARDO";
        break;
    case 57:
        animal="PUMA";
        break;
    case 58:
        animal="MONO";
        break;
    case 59:
        animal="PANDA"
        break;
    case 60:
        animal="BORREGO";
        break;
    }


    let palabraArray = animal.toUpperCase().split('');
    console.log(palabraArray);

    let filaActual = document.querySelector('.fila')

    dibujarCuadros(filaActual);
    listenInput(filaActual);

    agregarFocus(filaActual);
    
    function listenInput(filaActual){
        let cuadros = filaActual.querySelectorAll('.cuadro');
        cuadros = [...cuadros]

        let usuIN = []

        cuadros.forEach(element=>{
            element.addEventListener('input', event=>{
                // si no se ha borrado seguir con los arreglos 
                if(event.inputType !== 'deleteContentBackward'){
                usuIN.push(event.target.value.toUpperCase())
                console.log(usuIN);

                if(event.target.nextElementSibling){
                    event.target.nextElementSibling.focus();
                }else{
                    let cuadrosLlenos = document.querySelectorAll('.cuadro')
                    cuadrosLlenos = [...cuadrosLlenos]
                    let ultimoCuadroLLeno = cuadrosLlenos.slice(-palabraArray.length);
                    let finalUsuIn = []
                    ultimoCuadroLLeno.forEach(element =>{
                        finalUsuIn.push( element.value.toUpperCase());
                    })
                    console.log(usuIN)
                    console.log(finalUsuIn)


                    // compararar arreglos para cambiar de color 
                    let elementosIguales = compararArrays(palabraArray, finalUsuIn);
                    console.log(elementosIguales)
                    elementosIguales.forEach(element =>{
                        cuadros[element].classList.add('verde')
                    });

                // cambiar estilos por css
                if(elementosIguales.length==palabraArray.length){
                    mostrarResultado('GANASTE!!!')
                    return;
                }

                // cambiar el color a amarillo para cuando si existan las palabras pero no en la posicion 
                let exisPalaArg = palabraExistente(palabraArray, finalUsuIn)
                exisPalaArg.forEach(element =>{
                    cuadros[element].classList.add('amarillo')
                })

                console.log(exisPalaArg)
                    // crear una nueva fila 
                    let filaActual= crearFila()
                    dibujarCuadros(filaActual);
                    listenInput(filaActual);
                    agregarFocus(filaActual)
                }
                }else{
                    usuIN.pop();
                }

                console.log(usuIN);
            })
        })
    }

    //funciones 
    function compararArrays(arg1, arg2){
        let igualesIndex = [];
        arg1.forEach((element,index)=>{
            if(element == arg2[index]){
                igualesIndex.push(index);
            }
        })
        return igualesIndex;
    }

    function palabraExistente(arg1, arg2){
        let exisPalaArg = [];
        arg2.forEach((element, index)=>{
            if(arg1.includes(element)){
                exisPalaArg.push(index);
            }
        })
        return exisPalaArg;
    }
    
    function crearFila(){
        filaID++;
        if (filaID <= 5){
            let nuevaFila = document.createElement('div');
            nuevaFila.classList.add('fila');
            nuevaFila.setAttribute('id', filaID);
            mainContenedor.appendChild(nuevaFila);
            return nuevaFila;
        }else{
            mostrarResultado(`Perdiste Suerte en la proxima :c la respuesta correcta era "${animal.toUpperCase()}"`)
        }
    }

    function dibujarCuadros(filaActual){
        palabraArray.forEach((item, index)=>{
            if(index === 0){
                filaActual.innerHTML += '<input type="text" maxlength="1" class="cuadro focus">'
            }else{
                filaActual.innerHTML += '<input type="text" maxlength="1" class="cuadro ">'
            }
        })
    }

    function agregarFocus(filaActual){
        let focusElem = filaActual.querySelector('.focus')
    focusElem.focus();

    }

    function mostrarResultado(textMSJ){
        resultadoElemento.innerHTML= `<p>${textMSJ}</P>
        <button class="button">REINICIAR</button>`
        let reiniciarBTN = document.querySelector('.button')
            reiniciarBTN.addEventListener('click', ()=>{
        location.reload();
        })
    }
}