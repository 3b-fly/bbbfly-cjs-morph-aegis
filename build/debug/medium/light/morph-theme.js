/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.aegis = bbbfly.morph.aegis || {};
bbbfly.morph.aegis.medium = bbbfly.morph.aegis.medium || {};
bbbfly.morph.aegis.medium._onInit = function(){
  if(bbbfly.morph.theme.frame.medium.Images){
    this.Sources = bbbfly.morph.theme.frame.medium.Images.Sources;
    this.Images = bbbfly.morph.theme.frame.medium.Images.Images();
  }
};
bbbfly.morph.aegis.medium._onCreateControl = function(def){
  bbbfly.morph.theme.frame.medium.controls.SkinControl(def,this.Images);
};
bbbfly.morph.aegis.medium.Light = {
  ID: 'morph-aegis-light',
  Lib: 'bbbfly-cjs-morph-aegis',
  ImgDir: 'medium/light/png/',
  Prefix: 'aegis-light-',

  Sources: null,
  Images: null,

  OnInit: bbbfly.morph.aegis.medium._onInit,
  OnCreateControl: bbbfly.morph.aegis.medium._onCreateControl
};

if(bbbfly.Morph && Function.isFunction(bbbfly.Morph.RegisterTheme)){
  bbbfly.Morph.RegisterTheme(bbbfly.morph.aegis.medium.Light);
}