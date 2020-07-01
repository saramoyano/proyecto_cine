function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function plantillaPases(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (listaPases) {pug_html = pug_html + "\u003Cdiv class=\"card-deck\"\u003E";
// iterate listaPases 
;(function(){
  var $$obj = listaPases ;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var pase = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"col-3\" margin=\"50px\"\u003E       \u003Cdiv class=\"card border-primary\"\u003E\u003Cimg" + (pug_attrs(pug_merge([{"class": "card-img-top","height": "250px"},{"src":pase.poster}]), false)) + "\u002F\u003E\u003Cdiv class=\"card-header\"\u003E    \u003C\u002Fdiv\u003E";
var vinculo = "https://www.youtube.com/results?search_query="+pase.titulo
{
pug_html = pug_html + "\u003Ca" + (" class=\"card-title\""+pug_attr("href", vinculo, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = pase.titulo) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003Cp class=\"card-text\"\u003E" + (pug_escape(null == (pug_interp = pase.cine) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cp class=\"card-text\"\u003E" + (pug_escape(null == (pug_interp = pase.sala) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cdiv class=\"row\"\u003E";
// iterate pase.horas    
;(function(){
  var $$obj = pase.horas    ;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var hora = $$obj[pug_index1];
pug_html = pug_html + "\u003Cbutton class=\"btn btn-primary\" type=\"button\"\u003E" + (pug_escape(null == (pug_interp = hora) ? "" : pug_interp)) + "   \u003C\u002Fbutton\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var hora = $$obj[pug_index1];
pug_html = pug_html + "\u003Cbutton class=\"btn btn-primary\" type=\"button\"\u003E" + (pug_escape(null == (pug_interp = hora) ? "" : pug_interp)) + "   \u003C\u002Fbutton\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var pase = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"col-3\" margin=\"50px\"\u003E       \u003Cdiv class=\"card border-primary\"\u003E\u003Cimg" + (pug_attrs(pug_merge([{"class": "card-img-top","height": "250px"},{"src":pase.poster}]), false)) + "\u002F\u003E\u003Cdiv class=\"card-header\"\u003E    \u003C\u002Fdiv\u003E";
var vinculo = "https://www.youtube.com/results?search_query="+pase.titulo
{
pug_html = pug_html + "\u003Ca" + (" class=\"card-title\""+pug_attr("href", vinculo, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = pase.titulo) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003Cp class=\"card-text\"\u003E" + (pug_escape(null == (pug_interp = pase.cine) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cp class=\"card-text\"\u003E" + (pug_escape(null == (pug_interp = pase.sala) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cdiv class=\"row\"\u003E";
// iterate pase.horas    
;(function(){
  var $$obj = pase.horas    ;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var hora = $$obj[pug_index2];
pug_html = pug_html + "\u003Cbutton class=\"btn btn-primary\" type=\"button\"\u003E" + (pug_escape(null == (pug_interp = hora) ? "" : pug_interp)) + "   \u003C\u002Fbutton\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var hora = $$obj[pug_index2];
pug_html = pug_html + "\u003Cbutton class=\"btn btn-primary\" type=\"button\"\u003E" + (pug_escape(null == (pug_interp = hora) ? "" : pug_interp)) + "   \u003C\u002Fbutton\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";}.call(this,"listaPases" in locals_for_with?locals_for_with.listaPases:typeof listaPases!=="undefined"?listaPases:undefined));;return pug_html;}