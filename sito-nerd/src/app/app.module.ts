import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericComponent } from './generic/generic.component';
import { XantchaComponent } from './xantcha/xantcha.component';
import { KlementComponent } from './klement/klement.component';
import { HallarComponent } from './hallar/hallar.component';
import { RoccoComponent } from './rocco/rocco.component';
import { AleshaComponent } from './alesha/alesha.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericComponent,
    XantchaComponent,
    KlementComponent,
    HallarComponent,
    RoccoComponent,
    AleshaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
