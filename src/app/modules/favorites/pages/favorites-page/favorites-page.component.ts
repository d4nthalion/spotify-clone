console.log("aaaaaaaaaaaa");
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayListBodyComponent } from "../../../../shared/components/play-list-body/play-list-body.component";
import { PlayListHeaderComponent } from "../../../../shared/components/play-list-header/play-list-header.component";

@Component({
  selector: 'app-favorites-page',
  imports: [CommonModule, PlayListBodyComponent, PlayListHeaderComponent],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.css'
})
export class FavoritesPageComponent {
  
}
