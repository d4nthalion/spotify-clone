import { Component, OnInit, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-section-generic',
  standalone: false,
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css'
})
export class SectionGenericComponent implements OnInit{
  @Input() title:string = ''
  @Input() mode: 'small' | 'big' = 'big'
  @Input() dataTracks: Array<TrackModel> = []
  constructor() {}

  ngOnInit(): void {
      
  }

}
