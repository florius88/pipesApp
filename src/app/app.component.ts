import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pipesApp';

  nombre: string = 'flOr';
  valor: number = 1000;
  obj = {
    nombre: 'Flor',
    edad: 34
  }

  // Para tener acceso a toda la configuración de PrimeNG
  constructor(private primeNgConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primeNgConfig.ripple = true;    
  }

  mostrarNombre() {
     console.log(this.nombre);
     console.log(this.valor);
     console.log(this.obj);
  }
}
