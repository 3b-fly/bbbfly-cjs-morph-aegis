/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.2
 * @license see license in 'LICENSE' file
*/


if(bbbfly.Morph){
  bbbfly.Morph.RegisterTheme({
    ID: 'morph-aegis-map',
    Lib: 'bbbfly-cjs-morph-aegis',
    ImgDir: 'theme/map/drawing/imgs/',
    Prefix: 'aegis-map-',

    Sources: null,
    Images: null,

    OnInit: function(){
      this.Sources = bbbfly.morph.theme.map.drawing.Images.Sources();
      this.Images = bbbfly.morph.theme.map.drawing.Images.Images();
    },

    OnCreateObject: function(obj){

    }
  });
}