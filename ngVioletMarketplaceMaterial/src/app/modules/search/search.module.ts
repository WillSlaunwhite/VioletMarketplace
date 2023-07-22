import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ResultsComponent } from './components/results/results.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchEffects } from './state/search.effects';
import { reducer } from './state/search.reducer';
import { TokenModule } from '../tokens/token.module';
import { UserModule } from '../user/user.module';
import { MaterialModule } from '../material/material.module';
import { TokenResultsComponent } from './components/results/token-results/token-results.component';
import { UserResultsComponent } from './components/results/user-results/user-results.component';



@NgModule({
  declarations: [
    ResultsComponent,
    TokenResultsComponent,
    UserResultsComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    StoreModule.forFeature('search', reducer),
    EffectsModule.forFeature([SearchEffects]),
    TokenModule,
    UserModule,
    MaterialModule,
  ],
  exports: [
    ResultsComponent
  ]
})
export class SearchModule { }
