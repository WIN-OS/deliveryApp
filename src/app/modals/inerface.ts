 export interface Icategory {
    "id": number,
    "name": string,
    "title"?: string,
    "url"?: string,
    "thumbnailUrl"?: string
  }

  export interface ImainMenu {
    mainmenuTitle : string;
    mainmenuUrl? : string;
    routerId?: string; 
    subTitle? : IsubTitleMenu [];
  } 

  export interface IsubTitleMenu {
    subMenuTitle? : string;
    subMenuUrl? : string;
    subMenuRouterId? : string
  }

  export interface Iorder {
    orderDate?: string;
    orderID: number;
    deliveryDate?: string;
    deliveryTime?: string;
    occasionDetails?: IOccasion;
    orderDetails?: IproductDetails[];
    address?:Iaddress;
    deliveryNotes?: string;
  } 

  export interface IproductDetails {
    orderType? : string;
    productTumbnailImg?: string;
    productName?: string;
    productID?: number;
    productQuantity?: string;
    productDescription? : string;
  }

  export interface Iaddress {
    streetno: number;
    streetname?: string;
    streetnameline1?: string;
    city: string;
    state: string;
    country: string;
  }

export interface IOccasion {
 occasionName?: string;
 giftedBy?: string;
 giftReceviedBy? : string;
 occasionDate?: string; 
 toPersonRelation?: string;
 greetingMessage?: string;
}