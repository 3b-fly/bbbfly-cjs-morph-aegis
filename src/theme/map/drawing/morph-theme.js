/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage theme-map-drawing
 */

if(bbbfly.Morph){
  bbbfly.Morph.RegisterTheme({
    ID: 'morph-aegis-map',
    Lib: 'bbbfly-cjs-morph-aegis',
    ImgDir: 'theme/map/drawing/imgs/',
    Prefix: 'aegis-map-',

    Colors: {
      none: { Value: null, Order: -1 },
      shadow: { Value: null, Order: 0 },
      gray: { Value: '#6c6c6c', Order: 1 },
      blue: { Value: '#004f7e', Order: 2 },
      orange: { Value: '#de7600', Order: 3 },
      green: { Value: '#3f7e00', Order: 4 },
      red: { Value: '#e80000', Order: 5 },
      magenta: { Value: '#b528b5', Order: 6 },
      cyan: { Value: '#2aa7a7', Order: 7 },
      brown: { Value: '#946323', Order: 8 },
      violet: { Value: '#5c2d7c', Order: 9 },
      pine: { Value: '#214f44', Order: 10 },
      yellow: { Value: '#bccc18', Order: 11 }
    },

    Sources: null,
    Images: null,

    OnInit: function(){
      this.Sources = bbbfly.morph.theme.map.drawing.Images.Sources();
      this.Images = bbbfly.morph.theme.map.drawing.Images.Images(this.Colors);
    },

    OnCreateObject: function(obj){
      bbbfly.morph.theme.map.drawing.objects.SkinObject(
        obj,this.Colors,this.Images
      );
    }
  });
}