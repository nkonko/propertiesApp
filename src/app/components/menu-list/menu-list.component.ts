import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  @Output() menuClose = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  closeMenu(): void {
  this.menuClose.emit();
  }

}
