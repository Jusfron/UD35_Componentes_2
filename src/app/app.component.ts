import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UD35_Componentes_2';
  contactos = [{nombre: "Wickinsons", email: "pamolo@cuneto.pom", mensaje: "Porque estas aqui"}];

  actualizarContactos (contacto : {nombre: string, email: string, mensaje: string}) {
    this.contactos.push(contacto);
  }
}
