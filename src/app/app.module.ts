import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';

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
        SharedModule
    ]
})
export class AppModule { }
