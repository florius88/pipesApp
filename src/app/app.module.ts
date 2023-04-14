import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Modulo personalizado
/* No se esta usando en este modulo
import { PrimeNGModule } from './prime-ng/prime-ng.module' */

// Cambiar el local de la app
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs);
registerLocaleData(localFr);


@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'es' }
    ],
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
