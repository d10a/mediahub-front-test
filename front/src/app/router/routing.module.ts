import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../components/auth/auth.component';
import { MovieDetailsComponent } from '../components/movie-details/movie-details.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { SearchComponent } from '../components/search/search.component';
import { AuthTokenGuard } from './routing.guard';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },

  { path: 'search', component: SearchComponent, canActivate: [AuthTokenGuard], data: { reuseComponent: true } },
  { path: 'movie-details/:id', component: MovieDetailsComponent, canActivate: [AuthTokenGuard], data: { reuseComponent: false } },
  { path: 'auth', component: AuthComponent, data: { reuseComponent: false } },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthTokenGuard]
})
export class RoutingModule { }
