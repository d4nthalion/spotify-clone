import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  standalone: false,
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy{
  mockCover:TrackModel = {
    cover: 'https://i.scdn.co/image/ab67616d0000b27320292e6cce666a69ba5a86fb',
    album: 'Metallica',
    name: 'Seek & Destroy',
    url: 'http://localhost/track.mp3',
    _id: 1,
    duration: {
      start: 0,
      end: 250
    }
  }

  listObservers$:Subscription[] = []
  
  constructor(private _multimediaService:MultimediaService) {

  }

  ngOnInit(): void {
    const observer1$: Subscription = this._multimediaService.callback.subscribe(
      (response:TrackModel) => {
        console.log('Receiving song...', response)
      }
    )

    this.listObservers$.push(observer1$)
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach((s => s.unsubscribe))
  }
}
