import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerManagerComponent } from './player-manager/player-manager.component';
import { FilterComponent } from './filter/filter.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerComponent } from './player/player.component';
import { PlayerFormComponent } from './player-form/player-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerManagerComponent,
    FilterComponent,
    PlayerListComponent,
    PlayerComponent,
    PlayerFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
