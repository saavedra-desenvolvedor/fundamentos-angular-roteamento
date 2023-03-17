import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadingComponent } from './lazy-loading.component';
import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadingRoutingModule

  ],
  declarations: [LazyLoadingComponent]
})
export class LazyLoadingModule { }
