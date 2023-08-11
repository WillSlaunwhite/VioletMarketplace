import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserModule } from '../features/user/user.module';
import { MaterialModule } from '../material/material.module';
import { TokenDisplayModule } from "../ui/tokens/token-display.module";
import { DropdownContainerComponent } from './components/dropdown/dropdown-container/dropdown-container.component';
import { DropdownTileComponent } from './components/dropdown/dropdown-tile/dropdown-tile.component';
import { ResultsComponent } from './components/results/results.component';
import { TokenResultsComponent } from './components/results/token-results/token-results.component';
import { UserResultsComponent } from './components/results/user-results/user-results.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchEffects } from './state/search.effects';
import { reducer } from './state/search.reducer';



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
    exports: [
        ResultsComponent,
        SearchBarComponent,
        DropdownTileComponent,
        DropdownContainerComponent,
    ],
    imports: [
        CommonModule,
        SearchRoutingModule,
        StoreModule.forFeature('search', reducer),
        EffectsModule.forFeature([SearchEffects]),
        MaterialModule,
        UserModule,
        TokenDisplayModule
    ]
})
export class SearchModule { }
