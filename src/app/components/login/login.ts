import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  enteredName = '';
  enteredPassword = '';
  errorMessage = '';

  // We can personalize these later.
  private readonly birthdayName = 'Dharani Subha V';
  private readonly birthdayPassword = '2007-10-13';

  constructor(private router: Router) {}

  unlockSurprise(): void {
    const nameMatches =
      this.enteredName.trim().toLowerCase() ===
      this.birthdayName.toLowerCase();

    const passwordMatches =
      this.enteredPassword === this.birthdayPassword;

    if (nameMatches && passwordMatches) {
      this.errorMessage = '';
      this.router.navigate(['/home']);
    } else {
      this.errorMessage =
        'Hmm… that is not quite right. Try again, birthday star! 💗';
    }
  }
}