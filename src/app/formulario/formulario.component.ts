import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() contactoOutput = new EventEmitter;
  errorNombre : string = "";
  errorEmail : string = "";
  errorMensaje : string = "";
  errorRespuesta : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  enviarContacto(nombre: string, email: string, mensaje: string, respuesta: string) {
    let contacto = {nombre, email, mensaje}
    if(this.comprobarDatos(nombre, email, mensaje, respuesta)) {
      this.contactoOutput.emit(contacto);
    }
    
  }

  comprobarDatos(nombre: string, email: string, mensaje: string, respuesta: string ) {
    let correcto : boolean = true;

    if (nombre == "") {
      this.errorNombre = "Introduzca su nombre y apellido";
      correcto = false;
    } else if ( !(nombre.match(/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/)) ) {  //nombre regex
      this.errorNombre = "Introduzca un nombre valido";           
      correcto = false;
    } else {
      this.errorNombre = "";
    }
    if (email == "" )  {   //email regex
      this.errorEmail = "Introduzca un email";
      correcto = false;
    } else if (!(email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))) {
      this.errorEmail = "Introduzca un email valido";
      correcto = false;
    } else {
      this.errorEmail = "";
    }
    if (mensaje == "") {
      this.errorMensaje = "Introduzca un mensaje";
      correcto = false;
    } else {
      this.errorMensaje = "";
    }
    if (respuesta != "8") {
      this.errorRespuesta = "Valoracion anti-spam incorrecta";
      correcto = false;
    } else {
      this.errorRespuesta = "";
    }

    return correcto;
  }


}
