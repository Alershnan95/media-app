import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { IndexComponent } from './Pages/index/index.component';
import { GalleryContentComponent } from './Components/gallery-content/gallery-content.component';


@NgModule({
  declarations: [IndexComponent, GalleryContentComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
