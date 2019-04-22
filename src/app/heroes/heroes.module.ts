import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {HeroesRoutingModule} from './heroes-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ]
})
export class HeroesModule {}
