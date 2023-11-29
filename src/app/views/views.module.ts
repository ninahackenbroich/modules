import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';
import { ModsHomeComponent } from './mods-home/mods-home.component';


@NgModule({
  declarations: [
    ViewsHomeComponent,
    StatisticsComponent,
    ListComponent,
    ModsHomeComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
