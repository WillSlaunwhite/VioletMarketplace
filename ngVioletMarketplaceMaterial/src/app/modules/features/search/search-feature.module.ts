import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../../ui/shared/shared.module';
import { SearchContainerComponent } from './containers/search-container/search-container.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchEffects } from './state/search.effects';
import { reducer } from './state/search.reducer';



@NgModule({
  declarations: [
    SearchContainerComponent
  ],
  imports: [
    SearchRoutingModule,
    StoreModule.forFeature('search', reducer),
    EffectsModule.forFeature([SearchEffects]),  
    SharedModule,
  ],
  exports: [
    SearchContainerComponent
  ]
})
export class SearchFeatureModule { }
