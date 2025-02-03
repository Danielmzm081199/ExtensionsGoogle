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
  assignEventToClass('asigLic', 'Buen día\nSe actualiza inventario de licencias Office 365. Por favor me pueden colaborar asignando una licencia ---NOMBRE LICENCIA--- al siguiente usuario: \n--TABLA CON INFO DEL USUARIO— \nNota: Favor diligenciar el campo código postal con la cedula del usuario Nota: Posteriormente a la asignación de la licencia 365 pasar a Administración de usuarios ya que el usuario rsanabrg cuenta con licencia en Zimbra, por lo cual esta deberá ser eliminada una vez el usuario tenga 365. \nCordial saludo! ');
  
  
  assignEventToClass('closeButton', 'Buen día\nSe actualiza inventario de licencias Office 365, de su ayuda proceder con el retiro de la licencia office 365 del usuario \n---Tabla---\nSaludos! ');


  assignEventToClass('transferButton', 'Buen día.\nSe actualiza inventario de licencias Office 365. Por favor me pueden colaborar con el siguiente traslado: \nOffice 365-- --- de -usuario origen- a -usuario destino- \nEl usuario destino debe quedar de la siguiente manera:\n--INSERTE TABLA CON LA INFO DEL USUARIO— \nNota: Favor diligenciar el campo código postal con la cedula del usuario \nSaludos! \n<b>Nota:</b> Posteriormente a la asignación de la licencia 365 pasar a Administración de usuarios ya que el usuario rsanabrg cuenta con licencia en Zimbra, por lo cual esta deberá ser eliminada una vez el usuario tenga 365.');

  assignEventToClass('transferSiButton', 'Buen día.\nSe actualiza inventario de licencias Office 365, se traslada del usuario jsanchre al usuario dgonzap. Por favor me pueden colaborar asignando una licencia Office 365 E1 al siguiente usuario: \nOffice 365-- --- de -usuario origen- a -usuario destino- \nEl usuario destino debe quedar de la siguiente manera: \n--INSERTE TABLA CON LA INFO DEL USUARIO— \n<b>Nota</b>: Favor diligenciar el campo código postal con la cedula del usuario \nSaludos! Nota:\nPosteriormente a la asignación de la licencia 365 pasar a Administración de usuarios ya que el usuario rsanabrg cuenta con licencia en Zimbra, por lo cual esta deberá ser eliminada una vez el usuario tenga 365.');

  assignEventToClass('UserReferButton', 'Cordial saludo.\nSe solicita un usuario de referencia para el registro en SEUS.\nSaludos!');
  assignEventToClass('deleteUserButton', 'Buen día,\nSe depuran satisfactoriamente los usuarios en SEUS Customer e Index.\n¡Cordial saludo!');
  assignEventToClass('createUserButton', 'Buen día,\nSe procede con la creación del usuario en SEUS Customer e Index, por favor verificar el correcto funcionamiento:\nhttps://seus.emtelco.co/otrs/index.pl\nhttps://seus.emtelco.co/otrs/customer.pl\n¡Cordial saludo!');
  assignEventToClass('permiCola', 'Cordial saludo.\nEl ticket ha sido trasladado al área correspondiente.');
  assignEventToClass('permiUser', 'Cordial saludo.\nSe solicita un usuario de referencia para el registro en SEUS.\nSaludos!');
  assignEventToClass('changePriority', 'Cordial saludo.\nSe solicita un usuario de referencia para el registro en SEUS.\nSaludos!');
});