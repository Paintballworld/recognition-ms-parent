import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  isCollapsed: boolean = false;

  @Output()
  isCollapsedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  changeState(): void {
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsedChange.emit(this.isCollapsed);
  }

}
