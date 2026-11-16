import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  
})
export class Menu {
  items = signal(['Accueil', 'Profil', 'Conférences', 'Amis', 'Notifications', 'Admin']);
active = signal('Accueil');
select(item: string) { this.active.set(item); }
}
