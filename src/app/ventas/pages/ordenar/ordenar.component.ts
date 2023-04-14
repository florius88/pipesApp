import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: []
})
export class OrdenarComponent {

  enMayusculas: boolean = false;

  toggleMayus() {
    this.enMayusculas = !this.enMayusculas;
  }

}
