import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionListComponent } from './components/collection-list/collection-list.component';
import { CollectionDetailComponent } from './components/collection-detail/collection-detail.component';



@NgModule({
  declarations: [
    CollectionListComponent,
    CollectionDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CollectionsModule { }
