import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {AuthGuard} from '../service/auth.guard';
/*
const routes: Routes = [{ path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent }];
*/
// children here for sub route and keep the parent element as well, / for HeroesComponent, /search for HeroesComponent+ HeroSearchComponent
const routes: Routes = [{ path: '', component: HeroesComponent, children: [{ path: 'search', component: HeroSearchComponent}]},
                        { path: 'detail/:id', component: HeroDetailComponent, canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
