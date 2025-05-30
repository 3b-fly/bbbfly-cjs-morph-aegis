﻿/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage theme-medium-dark
 */

if(bbbfly.Morph){
  bbbfly.Morph.RegisterTheme({
    ID: 'morph-aegis-dark',
    Lib: 'bbbfly-cjs-morph-aegis',
    ImgDir: 'theme/controls/medium/dark/imgs/',
    Prefix: 'aegis-dark-',

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