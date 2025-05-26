import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { PlayListBodyComponent } from '@shared/components/play-list-body/play-list-body.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    PlayListBodyComponent,
    HistoryPageComponent
  ]
})
export class HistoryModule { }
