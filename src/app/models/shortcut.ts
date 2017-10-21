
export class Shortcut {
	_id :string;
	buttons : String[];
	description : string ; 
	maker : string ; 
	rates : number;
	views : number;
	gif : string; 

  constructor(_id,buttons , description , maker , rates , views , gif) {
  	this._id = _id ;
  	this.buttons = buttons;
	this.description = description;
	this.maker = maker;
	this.rates = rates;
	this.views = views;
	this.gif = gif;
  }

}