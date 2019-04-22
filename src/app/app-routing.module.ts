import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [{ path: 'dashboard', component: DashboardComponent },
                        { path: 'heroes', loadChildren: './heroes/heroes.module#HeroesModule' },
                        { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
