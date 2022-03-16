/*Most of my javascript explorations are encapsulated in a jzmn object*/
;var jzmn = jzmn || {};

jzmn.createEl = function (tag,attributes,children) {
	/*Create Element*/
	var element = document.createElement(tag);

	/*Apply Attributes to Element.*/
	for (var attr in attributes) {
		if (attributes.hasOwnProperty(attr)) {
			var attrVal = attributes[attr] instanceof Array ? attributes[attr].join(" ") : attributes[attr]; /*If array, concatenate*/
			element.setAttribute(attr,attrVal);
		}
	}	

	/*Append Children to Element. Can be Node, String, or Array*/
	function appendChildren(child) {
		if (child) {
			if (child.nodeType) { element.appendChild(child); }	
			else if (child === child.toString()) { element.innerHTML += child; }
			else if (child.length) {	Array.prototype.forEach.call(child,appendChildren,child); } 
		}
	}
	appendChildren(children);

	return element;
}
/*usage ex: jzmn.createEl("div",{"class":"foo","id":"bar"},document.querySelector(".baz"))*/