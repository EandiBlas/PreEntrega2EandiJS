
//Simulador de baja y alta de usuarios de internet


class Usuario{
    constructor(nombre,apellido,dni,empresa){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.empresa = empresa;
    }
}

//clientes ya existentes
const richard = new Usuario("Richard", "Watterson", 39033487, "Fibertel"); 
const juan = new Usuario("Juan", "Perez", 41832387, "Telecentro")
const lucas = new Usuario("Lucas", "Patinson", 50432287, "Claro")
const esteban = new Usuario("Esteban", "Pasitozki", 38832287, "Movistar")

const usuarios = [richard,juan,lucas,esteban];

//opciones a elegir
function menu(){
    alert("Bienvenido señor usuario");
    let opciones = parseInt(prompt(` Ingrese los datos para darse de alta en su empresa de internet preferida
     1) Ingrese 1 para darse de alta en nuestro sistema
     2) Ingrese 2 para darse de baja en nuestro sistema
     3) Ingrese 3 para modificar datos de usuario en nuestro sistema
     4) Consultar Usuario 
     5) Salir del sistema`));
    return opciones;
}
//alta de usuarios
function AltaDeUsuarios(){
    let nombre = prompt("Ingrese su Nombre");
    let apellido = prompt("Ingrese su Apellido");
    let dni = parseInt (prompt("Ingrese DNI"));
    let empresa = prompt("Ingrese su empresa actual");
    let cliente = new Usuario(nombre,apellido,dni,empresa);
    usuarios.push(cliente);
    alert(`
    Nombre del usuario: ${nombre}
    Apellido del usuario: ${apellido} 
    DNI del usuario: ${dni} 
    Empresa del usuario: ${empresa}`);
    console.log(usuarios);
}
//baja de usuarios
function BajaDeUsuarios(){
    let dni = parseInt(prompt("Ingrese el DNI del cliente a darse de baja: "));
    let cliente = usuarios.find (cliente => cliente.dni === dni);
    let indice = usuarios.indexOf(cliente);
    usuarios.splice(indice, 1);
    alert(`
    Nombre del usuario: ${cliente.nombre}
    Apellido del usuario: ${cliente.apellido} 
    DNI del usuario: ${cliente.dni} 
    Empresa del usuario: ${cliente.empresa}`);
    console.log(usuarios);
}

//modificacion de usuarios
function modificacionUsuario(){
    let dni = parseInt(prompt("Ingrese el DNI del usuario"));
    let cliente = usuarios.find(cliente => cliente.dni === dni);
    let indice = usuarios.indexOf(cliente);
    let nombre = prompt("Ingrese el nuevo nombre del usuario");
    let apellido = prompt("Ingrese el nuevo apellido del usuario");
    let empresa = prompt("Ingrese empresa a cambiar");
    let usuarioModif = new Usuario(nombre,apellido,dni,empresa);
    usuarios.splice(indice, 1, usuarioModif);
    alert(`
    Su nueva modificacion es:
    Nombre del usuario: ${usuarioModif.nombre}
    Apellido del usuario: ${usuarioModif.apellido} 
    DNI del usuario: ${usuarioModif.dni} 
    Empresa del usuario: ${usuarioModif.empresa}`);
    console.log(usuarios);
}

//consultar un usuario
function verificarUsuario(){
    let dni = parseInt(prompt("Ingrese su DNI"));
    let cliente = usuarios.find(cliente => cliente.dni === dni);
    alert(`
    Nombre del usuario: ${cliente.nombre} 
    Apellido del usuario: ${cliente.apellido} 
    DNI del usuario: ${cliente.dni} 
    Empresa del usuario: ${cliente.empresa}`);
}

//opcion de salir
function salirDelPanel(){
    alert("Hasta luego vuelva pronto");
}

//opcion incorrecta
function incorrectaOpcion(){
    alert("Por favor ingrese una opción correcta");
}

let opciones = menu();

switch (opciones){
    case 1:
        AltaDeUsuarios();
        break;
    case 2:
        BajaDeUsuarios();
        break;
    case 3:
        modificacionUsuario();
        break;
    case 4:
        verificarUsuario();
        break;
    case 5:
        salirDelPanel();
        break;
    default:
        incorrectaOpcion();
        break;
}

