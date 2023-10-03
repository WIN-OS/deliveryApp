import { Injectable } from '@angular/core';
import { ImainMenu, IsubTitleMenu } from '../modals/inerface';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor() {

   }

   expDeliveryMenuarray : IsubTitleMenu[] = [
    {
      "subMenuTitle" : "Same Day Delivery",
      "subMenuUrl" : "/expressdelivery/all",
      "subMenuRouterId" : "samedayall"
    },
    {
      "subMenuTitle" : "Same Day Flower Delivery",
      "subMenuUrl" : "/expressdelivery/flowers",
      "subMenuRouterId" : "samedayflowers"
    },  
    {
      "subMenuTitle" : "Same Day Cake Delivery",
      "subMenuUrl" : "/expressdelivery/cakes",
      "subMenuRouterId" : "samedaycakes"
    },  
    {
      "subMenuTitle" : "Same Day Delivery",
      "subMenuUrl" : "/expressdelivery/combo",
      "subMenuRouterId" : "samedaycombos"
    },    
    ]
  
   menuArray :ImainMenu[] = [
    {
      "mainmenuTitle": "ExpressDelivery",
      "mainmenuUrl": "/expressdelivery",
      "routerId": "expressdelivery",
      "subTitle" : this.expDeliveryMenuarray
    },
    {
      "mainmenuTitle": "Cakes",
      "mainmenuUrl": "/cakes",
      "routerId": "cakes"
    },
    {
      "mainmenuTitle": "Flowers",
      "mainmenuUrl": "/Flower",
      "routerId": "flower"
    },
    {
      "mainmenuTitle": "Combo",
      "mainmenuUrl": "/Combo",
      "routerId": "combo"
    },
    {
      "mainmenuTitle": "Plants",
      "mainmenuUrl": "/plants",
      "routerId": "plants"
    },
    {
      "mainmenuTitle": "Gifts",
      "mainmenuUrl": "/Gifts",
      "routerId": "Gifts"
    },
    {
      "mainmenuTitle": "Anniversary",
      "mainmenuUrl": "/anniversary",
      "routerId": "anniversary"
    },
    {
      "mainmenuTitle": "Birthday",
      "mainmenuUrl": "/birthday",
      "routerId": "birthday"
    },
    {
      "mainmenuTitle": "Occasions",
      "mainmenuUrl": "/occasions",
      "routerId": "occasions"
    },
  ]

}
