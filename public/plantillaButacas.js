function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function plantillaButacas(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (butacas, cine, filas, hora, sala) {pug_html = pug_html + ("\u003Cdiv class=\"modal\" tabindex=\"-1\" role=\"dialog\"\u003E\u003Cdiv class=\"modal-dialog\"\u003E\u003Cdiv class=\"modal-content\"\u003E\u003Cdiv class=\"modal-header\"\u003E\u003Ch3 class=\"modal-title\"\u003ESeleccionar butacas\u003C\u002Fh3\u003E\u003Cbutton class=\"close\" type=\"button\"\u003E\u003Cspan\u003E&times;\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"modal-body\"\u003E\u003Cspan class=\"badge badge-primary\"\u003E" + (pug_escape(null == (pug_interp = cine) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"badge badge-secondary\"\u003E" + (pug_escape(null == (pug_interp = sala) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"badge badge-success\"\u003E" + (pug_escape(null == (pug_interp = hora) ? "" : pug_interp)));
var butacasFila = butacas/filas;
var butaca = 0
// iterate filas
;(function(){
  var $$obj = filas;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var fila = $$obj[pug_index0];
while (butaca < butacasFila) {
pug_html = pug_html + "\u003Cspan class=\"badge badge-primary\"\u003E\u003C\u002Fspan\u003E";
butaca++;
}
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var fila = $$obj[pug_index0];
while (butaca < butacasFila) {
pug_html = pug_html + "\u003Cspan class=\"badge badge-primary\"\u003E\u003C\u002Fspan\u003E";
butaca++;
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"modal-footer\"\u003E\u003Cbutton class=\"btn btn-primary\" type=\"button\"\u003EConfirmar\u003C\u002Fbutton\u003E\u003Cbutton class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\"\u003EClose\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"butacas" in locals_for_with?locals_for_with.butacas:typeof butacas!=="undefined"?butacas:undefined,"cine" in locals_for_with?locals_for_with.cine:typeof cine!=="undefined"?cine:undefined,"filas" in locals_for_with?locals_for_with.filas:typeof filas!=="undefined"?filas:undefined,"hora" in locals_for_with?locals_for_with.hora:typeof hora!=="undefined"?hora:undefined,"sala" in locals_for_with?locals_for_with.sala:typeof sala!=="undefined"?sala:undefined));;return pug_html;}