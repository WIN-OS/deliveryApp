import { Component } from '@angular/core';
import { faCoffee, faCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent {
  faCoffee = faCoffee;
  faCircle = faCircle;
  cities  = ["Chennai", "Mumbai", "Delhi", "Toronto", "Calgary", "Vancouver" ];
  selectedCity = "";
}
