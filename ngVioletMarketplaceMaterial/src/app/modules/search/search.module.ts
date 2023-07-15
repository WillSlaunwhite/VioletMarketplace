import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './components/results/results.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TokenEffects } from '../tokens/state/tokens.effects';
import { reducer } from './state/search.reducer';
import { SearchEffects } from './state/search.effects';



@NgModule({
  declarations: [
    ResultsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('search', reducer),
    EffectsModule.forFeature([SearchEffects])
  ],
  exports: [
    ResultsComponent
  ]
})
export class SearchModule { }
