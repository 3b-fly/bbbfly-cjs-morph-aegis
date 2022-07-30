/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage style-map
 */

if(bbbfly.Morph){
  bbbfly.Morph.RegisterStyle({
    ID: 'morph-aegis-map',
    Lib: 'bbbfly-cjs-morph-aegis',
    ImgDir: 'style/map/imgs/',
    Prefix: 'aegis-map-',

    Sources: null,
    Images: null,

    OnInit: function(){
      this.Sources = bbbfly.morph.style.map.Images.Sources();
      this.Images = bbbfly.morph.style.map.Images.Images();
    }
  });
}