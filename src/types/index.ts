export interface IRoomDesign{
    livingRoom : number ;
    kitchen : number ;
    bedroom : number; 
    bathroom : number;
    dining: number ;
  }
  
  export interface IPackagePicked{
    id : number ;
    title : string ; 
  }
  
  export interface IGetQuote{
    name : number ; 
    email : string ;  
    phoneno : number ;
    sendtowhatsapp: boolean; 
    propertyname : string ; 
  }
  
  export interface IInitialState {
    bhkType : string |null; 
    bhkTypeSize : string | null;
    RoomDesign : IRoomDesign | null;
    PackagePicked : IPackagePicked |null;
    getQuote : IGetQuote |null;
  }