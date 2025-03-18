// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Guardando la variable
let amigos =[];
const minimoIngresosDeNombres = 6; //Se coloca un mínimo para iniciar el sorteo
const maximoIngresoDeNombres =12; //Se Coloca un maximo para ingresar amigos.

//Creando función para agregar amigos

function agregarAmigo(){
    let nombreIngresado = document.getElementById('amigo');
    let nombreAmigo = nombreIngresado.value.trim();

    // Validando que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    //Validando si el nombre ya existe en la prueba
    if(amigos.includes(nombreAmigo)){
        alert('El nombre que ingreso, ya existe!. Ingrese otro nombre')
        return;
    }

    
    // Validar el máximo de amigos permitidos
    if (amigos.length >= maximoIngresoDeNombres) {
        alert(`Se ha alcanzado el límite de amigos permitidos ${maximoIngresoDeNombres}. No puede agregar más amigos.`);
        return;
    }

    // Agregando el nombre al array de amigos
    amigos.push(nombreAmigo);

    // Limpiando el campo de entrada
    nombreIngresado.value = '';

    console.log('Lista de amigos:', amigos);
    visualizarLista();
  
}



function visualizarLista(){
    let lista = document.getElementById('lista_de_amigos');
    lista.innerHTML='';

    // Iterando sobre el array de amigos y creando elementos <li>
    for (let i = 0; i < amigos.length; i++) {
            let li = document.createElement('li');
            li.textContent = amigos[i]; // Asignando el nombre del amigo
            lista.appendChild(li); // Agregando el <li> a la lista <ul>
    }
}



// Función para sortear un amigo secreto
function sortearAmigo() {

    // Validando que haya al menos 6 amigos antes de sortear
    if (amigos.length < minimoIngresosDeNombres) {
        alert(`Debes ingresar al menos ${minimoIngresosDeNombres} amigos para realizar el sorteo.`);
        return; // Termina la función si no se cumple la condición
    }
    

    // Validando que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generando un índice aleatorio dentro del rango del array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obteniendo el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrando el resultado en la página
    document.getElementById("resultado_del_sorteo").innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎁`;

}


