import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionListComponent } from './collection-list/collection-list.component';
import { CollectionDetailComponent } from './collection-detail/collection-detail.component';



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
