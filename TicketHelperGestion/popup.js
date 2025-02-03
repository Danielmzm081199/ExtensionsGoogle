document.addEventListener('DOMContentLoaded', () => {
  // Función para copiar mensaje al portapapeles
  function copyMessage(message) {
      navigator.clipboard.writeText(message).then(() => {
          console.log("Mensaje copiado al portapapeles: " + message);
      }).catch(err => {
          console.error('Error al copiar al portapapeles', err);
      });
  }

  // Función para asignar eventos a todos los botones con la misma clase
  function assignEventToClass(className, message) {
      document.querySelectorAll(`.${className}`).forEach(button => {
          button.addEventListener('click', () => copyMessage(message));
      });
  }

  // Asignar eventos a los botones
  assignEventToClass('infoButton', 'Cordial saludo.\nSe solicita más información acerca del requerimiento.\nSaludos!');
  assignEventToClass('closeButton', 'Cordial saludo.\nSe evalúa y se da solución a este requerimiento, por favor realizar la respectiva validación.\nSaludos!');
  assignEventToClass('transferButton', 'Cordial saludo.\nEl ticket ha sido trasladado al área correspondiente.');
  assignEventToClass('UserReferButton', 'Cordial saludo.\nSe solicita un usuario de referencia para el registro en SEUS.\nSaludos!');
  assignEventToClass('deleteUserButton', 'Buen día,\nSe depuran satisfactoriamente los usuarios en SEUS Customer e Index.\n¡Cordial saludo!');
  assignEventToClass('createUserButton', 'Buen día,\nSe procede con la creación del usuario en SEUS Customer e Index, por favor verificar el correcto funcionamiento:\nhttps://seus.emtelco.co/otrs/index.pl\nhttps://seus.emtelco.co/otrs/customer.pl\n¡Cordial saludo!');
  assignEventToClass('permiCola', 'Cordial saludo.\nEl ticket ha sido trasladado al área correspondiente.');
  assignEventToClass('permiUser', 'Cordial saludo.\nSe solicita un usuario de referencia para el registro en SEUS.\nSaludos!');
  assignEventToClass('changePriority', 'Cordial saludo.\nSe solicita un usuario de referencia para el registro en SEUS.\nSaludos!');
});