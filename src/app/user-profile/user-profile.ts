import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  name = signal('Ahmed');
email = signal('ahmed@email.com');
}
