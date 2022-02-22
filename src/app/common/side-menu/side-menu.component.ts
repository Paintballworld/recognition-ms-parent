import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  linkedIdConnected: boolean = false;
  userProfileImage: string = "./assets/user-profile-image-1.png";
  userInitials: string = "AE";

  @Input()
  isCollapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
