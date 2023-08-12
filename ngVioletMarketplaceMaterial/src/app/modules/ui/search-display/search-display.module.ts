import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results/results.component';
import { TokenResultsComponent } from './results/token-results/token-results.component';
import { UserResultsComponent } from './results/user-results/user-results.component';
import { DropdownContainerComponent } from './dropdown/dropdown-container/dropdown-container.component';
import { DropdownTileComponent } from './dropdown/dropdown-tile/dropdown-tile.component';
import { UserModule } from '../../features/user/user.module';
import { TokenDisplayModule } from '../tokens/token-display.module';
import { SharedModule } from '../shared/shared.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';



@NgModule({
  declarations: [
    ResultsComponent,
    TokenResultsComponent,
    UserResultsComponent,
    DropdownTileComponent,
    DropdownContainerComponent,
    SearchBarComponent,
  ],
  imports: [
    UserModule,
    TokenDisplayModule,
    SharedModule,
  ],
  exports: [
    ResultsComponent,
    TokenResultsComponent,
    UserResultsComponent,
    DropdownTileComponent,
    DropdownContainerComponent,
    SearchBarComponent,
  ]
})
export class SearchDisplayModule { }
