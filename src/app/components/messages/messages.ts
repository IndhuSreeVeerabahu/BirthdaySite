import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface FamilyMessage {
  id: number;
  name: string;
  relation: string;
  emoji: string;
  message: string;
  audio: string;
  opened: boolean;
}

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [],
  templateUrl: './messages.html',
  styleUrl: './messages.scss'
})
export class Messages {
  constructor(private router: Router) {}

  selectedMessage: FamilyMessage | null = null;

  familyMessages: FamilyMessage[] = [
    {
      id: 1,
      name: 'Amma',
      relation: 'Always loves you',
      emoji: '🌷',
      message: 'Happy birthday, dharani Nalla padi enga ponalum safe a poitu bathrama va! 💗',
      audio: '/assets/audio/amma.m4a',
      opened: false
    },
    {
      id: 2,
      name: 'Appa',
      relation: 'Always protects you',
      emoji: '💗',
      message: 'எனது பிரியமான இனிய பிறந்தநாள் வாழ்த்துகள்! 🎂 தரணிசுபா.V',
      audio: '/assets/audio/appa.m4a',
      opened: false
    },
    {
      id: 3,
      name: 'Indhu akka',
      relation: 'Always by your side',
      emoji: '🧸',
      message: 'Happy birthday, dharani!!!! No matter what happens, you are loved by me from day1 to moon and back.Be happy and healthy!!! ✨',
      audio: '/assets/audio/indhu.m4a',
      opened: false
    }
  ];

  openMessage(message: FamilyMessage): void {
    message.opened = true;
    this.selectedMessage = message;
  }

  closeMessage(): void {
    this.selectedMessage = null;
  }

  goToFinal(): void {
    this.router.navigate(['/final']);
  }

  backToHome(): void {
    this.router.navigate(['/home']);
  }
}