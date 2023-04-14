import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: []
})
export class NoComunesComponent {

  // i18nSelect
  nombreFem: string = 'Flor';
  generoUno: string = 'femenino';
  nombreMas: string = 'Fernando';
  generoDos: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
    'other': 'invitarle'
  }
  
  // i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Juan', 'Nacho'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona(){
    this.nombreFem = this.nombreMas;
    this.generoUno = this.generoDos;
  }

  borrarCliente(){
    this.clientes.pop();
  }

  // KeyValuePipe
  persona = {
    nombre: 'Flor',
    edad: 34,
    direccion: 'Argamasilla, Ciudad Real'
  }

   // JsonPipe
   heroes = [
    {
      nombre: 'Spiderman',
      vuela: false
    },
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
   ]

}
