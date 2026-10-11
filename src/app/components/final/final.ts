import { Component } from '@angular/core';

@Component({
  selector: 'app-final',
  standalone: true,
  imports: [],
  templateUrl: './final.html',
  styleUrl: './final.scss'
})
export class Final {
  videoRevealed = false;

  openSurprise(): void {
    this.videoRevealed = true;
  }
}