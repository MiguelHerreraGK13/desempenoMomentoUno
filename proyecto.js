// Inicializa el saldo del usuario
let saldo = 100000;
let opcion = 0; // Variable para almacenar la opción seleccionada por el usuario
let nuevoSaldo; // Variable para calcular el nuevo saldo

console.log('Bienvenido a su Banco N-migo \n Que acción quiere realizar el día de hoy?');

// Bucle do-while para mostrar el menú y procesar la opción seleccionada
do {
    // Mostrar menú de opciones y capturar la opción seleccionada
    opcion = (parseInt(prompt('Digite según su preferencia \n 1 para Depósito \n 2 para Retiro \n 3 para Saldo \n 4 para Finalizar')));

    // Procesar la opción seleccionada
    switch (opcion) {
        case 1:
            // Opción para realizar un depósito
            let consignacion = (parseInt(prompt('Digite cantidad de dinero a consignar: ')));
            nuevoSaldo = consignacion + saldo; // Calcular el nuevo saldo
            saldo = nuevoSaldo; // Actualizar el saldo
            console.log('Su nuevo saldo es: ' + saldo + "$");
            break;

        case 2:
            // Opción para realizar un retiro
            let retiro;
            do {
                retiro = (parseInt(prompt('Digite monto del retiro: '))); // Capturar monto del retiro
                console.log('Su retiro es de ' + retiro + '$');
                
                // Verificar si hay saldo suficiente para el retiro
                if (retiro > saldo) {
                    console.log("Saldo insuficiente \n Por favor, digite una nueva cantidad");
                }
            } while (retiro > saldo); // Repetir hasta que el retiro sea válido

            nuevoSaldo = saldo - retiro; // Calcular el nuevo saldo
            saldo = nuevoSaldo; // Actualizar el saldo
            console.log('Su nuevo saldo es: ' + saldo + "$");
            break;

        case 3:
            // Opción para consultar el saldo
            console.log('Consulta de saldo');
            console.log('Su saldo actual es ' + saldo + '$');
            break;

        default:
            // Opción no válida
            console.log('Por favor, intente nuevamente');
            break;
    }

} while (opcion !== 4); // Repetir hasta que el usuario seleccione finalizar