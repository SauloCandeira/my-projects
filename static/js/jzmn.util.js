/*Private Selector Function*/
function $$ (els) {
	var t = document.querySelectorAll(els);
	return (t.length > 1) ? t : ((t.length) ? t[0] : null);
}
var jzmn = {
	
	/*Utility Functions*/
	util: {
		removeClass : function rc (el,cname) {
			if (el) {
			    if (el.nodeType) {
						if (el.classList && cname.search(" ") < 0) el.classList.remove(cname);
						else if (el.className) el.className = el.className.replace(new RegExp('(^|\\b)' + cname.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			    }
			    else if (el.length) return this.each(el,function(el,i) { rc(el,cname) });
		    }	
		},
		addClass : function ac (el,cname) {
			if (el) {
			    if (el.nodeType) {
			       	if (el.classList && cname.search(" ") < 0) el.classList.add(cname);
						else if (el.className) el.className += ' ' + cname;
			    }
			    else if (el.length) return this.each(el,function(el,i) { ac(el,cname) });
			}
		},
		each : function (elst,fxn) {
			if (elst) {
			    if (elst.nodeType) fxn(elst,0); 
				else if (elst.length) {
				    var i, n = elst.length;
				    for (i=0; i < n; i++) fxn(elst[i],i);
				}
			}
		}
	}
};