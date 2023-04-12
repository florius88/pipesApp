import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: []
})
export class BasicosComponent {

  nombreLower: string = 'flor';
  nombreUpper: string = 'FLOR';
  nombreCompleto: string = 'flOr sAntoS';

}
