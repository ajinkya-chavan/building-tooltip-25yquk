import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navItems = ['Home', 'Contact', 'About us'];

  constructor() { }

  ngOnInit(): void {
  }

}
