/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage theme-medium-light
 */

if(bbbfly.Morph){
  bbbfly.Morph.RegisterTheme({
    ID: 'morph-aegis-light',
    Lib: 'bbbfly-cjs-morph-aegis',
    ImgDir: 'theme/controls/medium/light/imgs/',
    Prefix: 'aegis-light-',

    Sources: null,
    Images: null,

    OnInit: function(){
      this.Sources = bbbfly.morph.theme.frame.medium.Images.Sources();
      this.Images = bbbfly.morph.theme.frame.medium.Images.Images();
    },

    OnCreateControl: function(def){
      bbbfly.morph.theme.frame.medium.controls.SkinControl(def,this.Images);
    }
  });
}