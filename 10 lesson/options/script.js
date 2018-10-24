'use strict';

class options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;

	} 
	createDiv(text) {
		let res = document.createElement("div");
		 res.textContent = text;
		 res.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg};  font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
		}
}
		
	let newDiv = new options("30px","130px","yellow","14px","center");
	newDiv.createDiv("Работает"); 