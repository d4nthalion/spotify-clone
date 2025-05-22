import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-card-player',
  standalone: false,
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent implements OnInit{
  @Input() mode: 'small' | 'big' = 'small'
  @Input() track: TrackModel = {
    _id: 0,
    name: '',
    album: '',
    url: '',
    cover: '',
    duration: {
      start: 0,
      end: 0
    }
  }
  constructor() {}

  ngOnInit(): void {
      
  }
}
