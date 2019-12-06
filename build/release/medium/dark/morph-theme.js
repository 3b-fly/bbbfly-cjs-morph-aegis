/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.aegis=bbbfly.morph.aegis||{};bbbfly.morph.aegis.medium=bbbfly.morph.aegis.medium||{};bbbfly.morph.aegis.medium._onInit=function(){bbbfly.morph.theme.frame.medium.Images&&(this.Sources=bbbfly.morph.theme.frame.medium.Images.Sources,this.Images=bbbfly.morph.theme.frame.medium.Images.Images())};bbbfly.morph.aegis.medium._onCreateControl=function(a){bbbfly.morph.theme.frame.medium.controls.SkinControl(a,this.Images)};
bbbfly.morph.aegis.medium.Dark={ID:"morph-aegis-dark",Lib:"bbbfly-cjs-morph-aegis",ImgDir:"medium/dark/png/",Prefix:"aegis-dark-",Sources:null,Images:null,OnInit:bbbfly.morph.aegis.medium._onInit,OnCreateControl:bbbfly.morph.aegis.medium._onCreateControl};bbbfly.Morph&&Function.isFunction(bbbfly.Morph.RegisterTheme)&&bbbfly.Morph.RegisterTheme(bbbfly.morph.aegis.medium.Dark);
