import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from "../../../../shared/shared.module";
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  imports: [SharedModule],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending:Array<TrackModel> = []
  tracksRandom:Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private _trackService: TrackService) {}

  ngOnInit(): void {
    this._trackService.getAllTracks$()
                      .subscribe(response => {
                        
                      })
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(s => s.unsubscribe)
  }
}
