import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { SearchComponent } from './components/search/search.component';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NotificationComponent } from './components/notification/notification.component';
import { RouteStrategy } from './router/route-strategy';
import { RouteReuseStrategy } from '@angular/router';
import { RoutingModule } from './router/routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AuthComponent,
    MovieDetailsComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: RouteStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
