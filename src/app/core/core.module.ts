import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports: [ CommonModule, RouterModule ],
  exports: [ SidebarComponent ],
  declarations: [ SidebarComponent ],
  providers: [ ]
})
export class CoreModule { }
