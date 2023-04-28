import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericComponent } from './generic/generic.component';
import { AleshaComponent } from './alesha/alesha.component';
import { HallarComponent } from './hallar/hallar.component';
import { KlementComponent } from './klement/klement.component';
import { RoccoComponent } from './rocco/rocco.component';
import { XantchaComponent } from './xantcha/xantcha.component';

const routes: Routes = [
  { path: 'generic/:id', component: GenericComponent },
  { path: 'alesha', component: AleshaComponent },
  { path: 'hallar', component: HallarComponent },
  { path: 'klement', component: KlementComponent },
  { path: 'rocco', component: RoccoComponent },
  { path: 'xantcha', component: XantchaComponent },
  {path: '', redirectTo: '/rocco', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
