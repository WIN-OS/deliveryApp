import { Component, Output, inject } from '@angular/core';
import { ImainMenu, IsubTitleMenu } from 'src/app/modals/inerface';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
constructor() {}

private rs = inject(RouterService);
expDeliveryMenuarray : IsubTitleMenu[] = this.rs.expDeliveryMenuarray;
menuArray :ImainMenu[] = this.rs.menuArray;
}
 

