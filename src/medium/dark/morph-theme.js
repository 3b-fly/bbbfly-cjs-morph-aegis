/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage medium-dark
 */

/** @ignore */
var bbbfly = bbbfly || {};
/** @ignore */
bbbfly.morph = bbbfly.morph || {};
/** @ignore */
bbbfly.morph.aegis = bbbfly.morph.aegis || {};
/** @ignore */
bbbfly.morph.aegis.medium = bbbfly.morph.aegis.medium || {};

/** @ignore */
bbbfly.morph.aegis.medium._onInit = function(){
  if(bbbfly.morph.theme.frame.medium.Images){
    this.Sources = bbbfly.morph.theme.frame.medium.Images.Sources;
    this.Images = bbbfly.morph.theme.frame.medium.Images.Images();
  }
};

/** @ignore */
bbbfly.morph.aegis.medium._onCreateControl = function(def){
  bbbfly.morph.theme.frame.medium.controls.SkinControl(def,this.Images);
};

/** @ignore */
bbbfly.morph.aegis.medium.Dark = {
  ID: 'morph-aegis-dark',
  Lib: 'bbbfly-cjs-morph-aegis',
  ImgDir: 'medium/dark/png/',
  Prefix: 'aegis-dark-',

  Sources: null,
  Images: null,

  OnInit: bbbfly.morph.aegis.medium._onInit,
  OnCreateControl: bbbfly.morph.aegis.medium._onCreateControl
};

if(bbbfly.Morph && Function.isFunction(bbbfly.Morph.RegisterTheme)){
  bbbfly.Morph.RegisterTheme(bbbfly.morph.aegis.medium.Dark);
}