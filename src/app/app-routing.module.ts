import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeModule } from './modules/Home/home.module';
import { AboutModule } from './modules/About/about.module';
import { GalleryModule } from './modules/Gallery/gallery.module';

const loadAboutModule = () => AboutModule;
const loadGalleryModule = () => GalleryModule;

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', loadChildren: loadAboutModule },
  { path: 'gallery', loadChildren: loadGalleryModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
