
export class Shortcut {
	id :number;
	buttons : String[];
	description : string ; 
	maker : string ; 
	rates : number;
	views : number;
	gif : string; 

  constructor(id,buttons , description , maker , rates , views , gif) {
  	this.id = id ;
  	this.buttons = buttons;
	this.description = description;
	this.maker = maker;
	this.rates = rates;
	this.views = views;
	this.gif = gif;
  }

}