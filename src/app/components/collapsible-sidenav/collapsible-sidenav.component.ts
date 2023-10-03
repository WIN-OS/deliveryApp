import { Component, Input, inject } from '@angular/core';
import { ImainMenu, IsubTitleMenu } from 'src/app/modals/inerface';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-collapsible-sidenav',
  templateUrl: './collapsible-sidenav.component.html',
  styleUrls: ['./collapsible-sidenav.component.css']
})
export class CollapsibleSidenavComponent {
private rs= inject(RouterService);
expDeliveryMenuarray : IsubTitleMenu[] = this.rs.expDeliveryMenuarray;
menuArray :ImainMenu[] = this.rs.menuArray;

}
