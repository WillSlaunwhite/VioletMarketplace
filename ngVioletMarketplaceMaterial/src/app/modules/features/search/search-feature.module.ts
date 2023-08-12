import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchContainerComponent } from './containers/search-container/search-container.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SearchRoutingModule } from './search-routing.module';
import { SearchEffects } from './state/search.effects';
import { reducer } from './state/search.reducer';
import { SharedModule } from '../../ui/shared/shared.module';



@NgModule({
  declarations: [
    SearchContainerComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    StoreModule.forFeature('search', reducer),
    EffectsModule.forFeature([SearchEffects]),  
    SharedModule,
  ]
})
export class SearchFeatureModule { }
