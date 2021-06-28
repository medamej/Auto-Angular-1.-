import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ScriptGenComponent } from './scriptGene/scriptGen.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ConversionComponent } from './conversion/conversion.component';
import { MotsComponent } from './mots/mots.component';
import { AnalyseimpactComponent } from './analyseimpact/analyseimpact.component';
import { CouvertureComponent } from './couverture/couverture.component';




const routes: Routes = [
  { path: 'scriptGene', component: ScriptGenComponent },
  { path: 'conversion', component: ConversionComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'mots', component: MotsComponent },
  { path: 'analyseimpact', component: AnalyseimpactComponent },
  { path: 'couverture', component: CouvertureComponent },



];

@NgModule({
  declarations: [ScriptGenComponent, ButtonsComponent,ConversionComponent,MotsComponent,AnalyseimpactComponent,CouvertureComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
  ]
})
export class BasicUiModule { }
