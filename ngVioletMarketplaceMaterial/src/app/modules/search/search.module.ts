import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ResultsComponent } from './components/results/results.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchEffects } from './state/search.effects';
import { reducer } from './state/search.reducer';



@NgModule({
  declarations: [
    ResultsComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('search', reducer),
    EffectsModule.forFeature([SearchEffects])
  ],
  exports: [
    ResultsComponent
  ]
})
export class SearchModule { }
