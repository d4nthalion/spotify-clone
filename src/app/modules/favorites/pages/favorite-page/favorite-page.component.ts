import { Component } from '@angular/core';
import { PlayListBodyComponent } from '@shared/components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from '@shared/components/play-list-header/play-list-header.component';

@Component({
  selector: 'app-favorite-page',
  standalone: true,
  imports: [PlayListHeaderComponent, PlayListBodyComponent],
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent {

}
