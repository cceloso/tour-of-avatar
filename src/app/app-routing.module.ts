import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { BendingsComponent } from './bendings/bendings.component';
import { BendingDetailComponent } from './bending-detail/bending-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:name', component: CharacterDetailComponent},
  { path: 'bendings', component: BendingsComponent },
  { path: 'bendings/:name', component: BendingDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
