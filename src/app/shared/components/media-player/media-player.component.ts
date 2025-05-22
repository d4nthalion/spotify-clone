import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  standalone: false,
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit{
  mockCover:any = {
    cover: 'https://i.scdn.co/image/ab67616d0000b27320292e6cce666a69ba5a86fb',
    album: 'Metallica',
    name: 'Seek & Destroy'
  }
  constructor() {}

  ngOnInit(): void {
      
  }
}
