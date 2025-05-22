import { Component, OnInit } from '@angular/core';
import { SharedModule } from "../../../../shared/shared.module";

@Component({
  selector: 'app-tracks-page',
  imports: [SharedModule],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit {
  mockTracksList = [
    {
      name: 'Seek & Destroy'
    },
    {
      name: 'Seek & Destroy'
    },
    {
      name: 'Seek & Destroy'
    }
  ]

  constructor() {}
  ngOnInit(): void {
      
  }
}
