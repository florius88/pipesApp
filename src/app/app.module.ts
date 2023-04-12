import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Modulo personalizado
/* No se esta usando en este modulo
import { PrimeNGModule } from './prime-ng/prime-ng.module' */


@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        /* PrimeNGModule, */
        AppRouterModule,
        SharedModule,
        VentasModule
    ]
})
export class AppModule { }
