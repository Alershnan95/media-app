import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import Store from './store';

import { HomeModule } from './modules/Home/home.module';
import { AboutModule } from './modules/About/about.module';
import { GalleryModule } from './modules/Gallery/gallery.module';
import { SharedModule } from './shared/components/shared.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    AboutModule,
    GalleryModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
