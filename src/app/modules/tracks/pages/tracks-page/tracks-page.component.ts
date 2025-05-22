import { Component, OnInit } from '@angular/core';
import { SharedModule } from "../../../../shared/shared.module";
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-tracks-page',
  imports: [SharedModule],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit {
  mockTracksList:Array<TrackModel> = []

  constructor() {}
  ngOnInit(): void {
    const { data }:any = (dataRaw as any).default
    this.mockTracksList = data
  }
}
