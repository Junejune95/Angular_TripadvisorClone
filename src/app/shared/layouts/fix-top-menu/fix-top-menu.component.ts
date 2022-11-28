import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fix-top-menu',
  templateUrl: './fix-top-menu.component.html',
  styleUrls: ['./fix-top-menu.component.scss']
})
export class FixTopMenuComponent implements OnInit {

  isShown:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
