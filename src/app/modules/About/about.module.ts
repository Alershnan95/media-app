import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { IndexComponent } from './Pages/index/index.component';
import { AboutContentComponent } from './Components/about-content/about-content.component';


@NgModule({
  declarations: [IndexComponent, AboutContentComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
