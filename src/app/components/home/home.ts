
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  candlesLit = true;
  wishMade = false;

  constructor(private router: Router) {}

  memories = [
    {
      image: '/assets/images/memory1.jpg',
      caption: 'Little moments, big memories ♡',
      date: 'The beginning',
      rotation: '-5deg'
    },
    {
      image: '/assets/images/memory2.jpg',
      caption: 'My favourite smile 🌷',
      date: 'A happy pose',
      rotation: '4deg'
    },
    {
      image: '/assets/images/memory3.jpg',
      caption: 'Partners in crime ✨',
      date: 'Our playtime',
      rotation: '-3deg'
    },
    {
      image: '/assets/images/memory4.jpg',
      caption: 'Forever my favourite human',
      date: 'A memory to keep',
      rotation: '5deg'
    },
    {
      image: '/assets/images/memory5.jpg',
      caption: 'The laughs you keep always 💕',
      date: 'The good times',
      rotation: '-4deg'
    },
    {
      image: '/assets/images/memory6.jpg',
      caption: 'Our little piece of happiness',
      date: 'One for the album',
      rotation: '3deg'
    },
    {
      image: '/assets/images/memory7.jpg',
      caption: 'Us, being us ♡',
      date: 'Always together',
      rotation: '-6deg'
    },
    {
      image: '/assets/images/memory8.jpg',
      caption: '13/10/2007...',
      date: 'Your Day1',
      rotation: '4deg'
    }
  ];

  makeWish(): void {
    if (this.wishMade) {
      return;
    }

    this.candlesLit = false;
    this.wishMade = true;
  }

  openMessages(): void {
    this.router.navigate(['/messages']);
  }
}
