import { Component, HostListener, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'category-filter-menu',
  templateUrl: './category-filter-menu.component.html',
  styleUrls: ['./category-filter-menu.component.scss']
})
export class CategoryFilterMenuComponent implements OnInit {
  public slideCategory = [
    { id: 1, icon: 'fa-bed', name: 'Hotels' },
    { id: 2, icon: 'fa-home', name: 'Vacation Rentals' },
    { id: 3, icon: 'fa-cutlery', name: 'Restaurants' },

    { id: 4, icon: 'fa-plane', name: 'Flights' },
    { id: 5, icon: 'fa-ship', name: 'Cruises' },
    { id: 6, icon: 'fa-car', name: 'Rent Cars' },
    { id: 7, icon: 'fa-globe', name: 'Travel Stories' },
    { id: 8, icon: 'fa-ellipsis-h', name: 'More' },
  ];

  public innerWidth: number = 0;

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;

  }





  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }

}
