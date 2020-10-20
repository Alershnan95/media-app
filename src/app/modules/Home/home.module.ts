import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContentComponent } from './Components/home-content/home-content.component';
import { IndexComponent } from './Pages/index/index.component';


@NgModule({
  declarations: [HomeContentComponent, IndexComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
