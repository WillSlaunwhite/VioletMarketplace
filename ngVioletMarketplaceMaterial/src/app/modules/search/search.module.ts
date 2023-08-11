import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ResultsComponent } from './components/results/results.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchEffects } from './state/search.effects';
import { reducer } from './state/search.reducer';
import { TokenModule } from '../tokens/token.module';
import { MaterialModule } from '../material/material.module';
import { TokenResultsComponent } from './components/results/token-results/token-results.component';
import { UserResultsComponent } from './components/results/user-results/user-results.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DropdownTileComponent } from './components/dropdown/dropdown-tile/dropdown-tile.component';
import { DropdownContainerComponent } from './components/dropdown/dropdown-container/dropdown-container.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { LoginModule } from '../features/login/login.module';
import { UserModule } from '../features/user/user.module';



@NgModule({
  declarations: [
    ResultsComponent,
    TokenResultsComponent,
    UserResultsComponent,
    SearchBarComponent,
    DropdownTileComponent,
    DropdownContainerComponent,
    SearchContainerComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    StoreModule.forFeature('search', reducer),
    EffectsModule.forFeature([SearchEffects]),
    MaterialModule,
    TokenModule, 
    UserModule,
  ],
  exports: [
    ResultsComponent,
    SearchBarComponent,
    DropdownTileComponent,
    DropdownContainerComponent,
  ]
})
export class SearchModule { }
