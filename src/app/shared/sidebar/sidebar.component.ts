import { Component, OnInit } from '@angular/core';

import { AppRoutingModule } from '../../app.routing.module';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [`
    li {
      cursor:pointer;
    }
  `]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
