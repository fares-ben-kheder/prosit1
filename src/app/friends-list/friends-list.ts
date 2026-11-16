import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends-list',
  imports: [FormsModule],          // needed for ngModel
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css'
})
export class FriendsList {
  name = signal('Ahmed');
  friends = signal([
    { id: 1, name: 'Sami' },
    { id: 2, name: 'Sarra' },
    { id: 3, name: 'Amine' }
  ]);

  onType(event: Event) {
    this.name.set((event.target as HTMLInputElement).value);
  }
}