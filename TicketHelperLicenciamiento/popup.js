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
  assignEventToClass('asigLic', 'Buen día\n Se actualiza inventario de licencias Office 365. Por favor me pueden colaborar asignando una licencia ---NOMBRE LICENCIA--- al siguiente usuario: \n--TABLA CON INFO DEL USUARIO— \nNota: Favor diligenciar el campo código postal con la cedula del usuario Nota: Posteriormente a la asignación de la licencia 365 pasar a Administración de usuarios ya que el usuario rsanabrg cuenta con licencia en Zimbra, por lo cual esta deberá ser eliminada una vez el usuario tenga 365. \n\nCordial saludo! ');
  
  assignEventToClass('removeLic', 'Buen día\n Se actualiza inventario de licencias Office 365, de su ayuda proceder con el retiro de la licencia office 365 del usuario \n---Tabla---\nSaludos! ');

  assignEventToClass('transferLic365', 'Buen día.\n Se actualiza inventario de licencias Office 365. Por favor me pueden colaborar con el siguiente traslado: \nOffice 365-- --- de -usuario origen- a -usuario destino- \nEl usuario destino debe quedar de la siguiente manera:\n--INSERTE TABLA CON LA INFO DEL USUARIO— \nNota: Favor diligenciar el campo código postal con la cedula del usuario \nSaludos! \n**Nota:** Posteriormente a la asignación de la licencia 365 pasar a Administración de usuarios ya que el usuario rsanabrg cuenta con licencia en Zimbra, por lo cual esta deberá ser eliminada una vez el usuario tenga 365.');

  assignEventToClass('transferifRecover', 'Buen día.\n Se actualiza inventario de licencias Office 365, se traslada del usuario jsanchre al usuario dgonzap. Por favor me pueden colaborar asignando una licencia Office 365 E1 al siguiente usuario: \nOffice 365-- --- de -usuario origen- a -usuario destino- \nEl usuario destino debe quedar de la siguiente manera: \n--INSERTE TABLA CON LA INFO DEL USUARIO— \n**Nota:** Favor diligenciar el campo código postal con la cedula del usuario \nSaludos! \nNota:Posteriormente a la asignación de la licencia 365 pasar a Administración de usuarios ya que el usuario rsanabrg cuenta con licencia en Zimbra, por lo cual esta deberá ser eliminada una vez el usuario tenga 365.');

  assignEventToClass('forValidate', 'Cordial saludo.\n De su ayuda validar la información anterior e indicarnos como proceder.\nSaludos!');
  
  assignEventToClass('forValidateTransfer', 'Buen día.\n De su ayuda validar el traslado de la licencia Office 365 E1, del usuario origen lgarmari a su reemplazo agomlond favor indicarnos si procedemos con el traslado.\nSaludos!\nBuen día.\n De su ayuda validar la información anterior e indicarnos como proceder teniendo en cuenta que el usuario de origen tiene una licencia disponible para ser trasladada favor indicarnos si procedemos con el traslado.\nSaludos!!');

  assignEventToClass('validateofficeSTD', 'Buen día, \n De su ayuda validar la información anterior e indicarnos el equipo origen para proceder con el traslado teniendo en cuenta que el equipo PORTADM-63811 no tiene licencia Office asignada.\nSaludos!\nBuen día.\n De su ayuda validar la información anterior e indicarnos como proceder teniendo en cuenta que el equipo PORTADM-86922 no tiene licencia Office asignada, favor indicar el equipo Origen asignado o en su defecto una nueva asignación.\nSaludos! \nBuen día,\nTeniendo en cuenta que el equipo PORTADM-67254 no tiene licencia Office asignada, de su ayuda validar posible traslado de licencia ya que la solicitud viene de un traslado, favor validar e indicar equipo anterior del usuario.\nSaludos!');

  assignEventToClass('validateNeed', 'Buen día. \n De su ayuda identificar la necesidad de la licencia Office 365, validar si es un crecimiento o un traslado y en caso de requerirla indicar que tipo de licencia debe ser asignada.\nSaludos!');

  assignEventToClass('ifUserCE', 'Buen día.\n De su ayuda identificar la necesidad de la licencia Office Std, teniendo en cuenta lo indicado en la nota#1 favor validar, adicional brindarnos la justificación por la cual es requerida la asignación del licenciamiento ya que su cargo es CE.\nSaludos!');

  assignEventToClass('hastaaquivamos', 'Dije, Que no pulsaras sap@ 🤬🤬🤬');
});