import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {


  // i18nSelect
  public name: string = 'Flor';
  public gender: 'male' | 'female' = 'female';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
    'other': 'invitarle'
  }

  changeClient() {
    this.name = 'Fernando';
    this.gender = 'male';
  }



  /* 
    
    
    // i18nPlural
    clientes: string[] = ['María', 'Pedro', 'Juan', 'Nacho'];
  
    clientesMapa = {
      '=0': 'no tenemos ningún cliente esperando',
      '=1': 'tenemos un cliente esperando',
      'other': 'tenemos # clientes esperando'
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
  
     // AsyncPipe
     miObservable = interval(500); // crea un intervalo de numeros
  
     valorPromesa = new Promise( (resolve, reject) => {
      setTimeout(()=> {
        resolve('Tenemos data de promesa');
      }, 6000 );
     } );
   */

}
