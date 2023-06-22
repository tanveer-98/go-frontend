export interface IRoomDesign {
  id: number;
  type: string;
  quantity: number;
}

export interface IPackagePicked {
  id: number;
  title: string;
}

export interface IGetQuote {
  name: number;
  email: string;
  phoneno: number;
  sendtowhatsapp: boolean;
  propertyname: string;
}
export interface IBHKDetails{
  id : number;
  bhkType : string ; 
  bhkSize : string|null;
}
export interface IInitialState {
  bhkDetails: IBHKDetails | null;
  RoomDesign: IRoomDesign[] | null;
  PackagePicked: IPackagePicked | null;
  getQuote: IGetQuote | null;
}