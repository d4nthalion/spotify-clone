import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json'
import { TracksModule } from '@modules/tracks/tracks.module';
import { TrackModel } from '@core/models/tracks.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-play-list-body',
  imports: [CommonModule],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent implements OnInit{
  tracks: Array<TrackModel> = []

  constructor() { }

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default
    this.tracks = data;
  }

}