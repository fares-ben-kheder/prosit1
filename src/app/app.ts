import { Component } from '@angular/core';
import { Header } from './header/header';
import { Menu } from './menu/menu';
import { UserProfile } from './user-profile/user-profile';
import { FriendsList } from './friends-list/friends-list';
import { Notifications } from './notifications/notifications';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Menu, UserProfile, FriendsList, Notifications, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}