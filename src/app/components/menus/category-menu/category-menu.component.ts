import { Component } from '@angular/core';
import { Icategory } from 'src/app/modals/inerface';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent {
  userArray :Icategory[] = [
    {
      "id": 1,
      "name": "Flowers",
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "/assets/images/1flowers/flower1101.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
      "id": 2,
      "name": "Custom Gifts",
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "/assets/images/2gifts/gift2107.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "id": 3,
      "name" : "Cakes",
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "/assets/images/3cakes/cake3107.jpeg", 
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "id": 4,
      "name": "Chocolates & Nuts",
      "title": "natus nisi omnis corporis facere molestiae rerum in",
      "url": "/assets/images/4foodpackage/food4107.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
      "id": 5,
      "name": "Plants",
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "/assets/images/5plants/plant5107.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    }
  ]
}
