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


}
