import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { LoadedComponent } from './shared/loaded/loaded.component';
import { MainHeaderComponent } from './shared/main-header/main-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBannerComponent,
    LoadedComponent,
    MainHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
