/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage core
 */

/** @ignore */
var bbbfly = bbbfly || {};
/** @ignore */
bbbfly.morph = bbbfly.morph || {};
/** @ignore */
bbbfly.morph.aegis = bbbfly.morph.aegis || {};
/** @ignore */
bbbfly.morph.aegis.medium =  bbbfly.morph.aegis.medium || {};

/** @ignore */
bbbfly.morph.aegis.medium._onInit = function(){
  if(bbbfly.morph.aegis.medium.img){
    this.Sources = bbbfly.morph.aegis.medium.img.sources;
    this.Images = bbbfly.morph.aegis.medium.img.images;
  }
};

/** @ignore */
bbbfly.morph.aegis.medium._getButtonIcon = function(){
  if(String.isString(this.Icon)){
    var imgs = bbbfly.morph.aegis.Medium.Images.Icon.Button;

    this.Icon = {
      Light: imgs.Light[this.Icon],
      Dark: imgs.Dark[this.Icon]
    };
  }
  return this.GetIcon.callParent();
};

/** @ignore */
bbbfly.morph.aegis.medium._onCreateControl = function(def){
  var imgs = bbbfly.morph.aegis.Medium.Images;

  switch(def.Type){
    //panel
    case 'bbbfly.morph.ContentFrame':
      bbbfly.morph.aegis.medium.ContentFrame(def,imgs);
    break;
    case 'bbbfly.morph.InputFrame':
      bbbfly.morph.aegis.medium.InputFrame(def,imgs);
    break;
    case 'bbbfly.morph.ContentSeparator':
      bbbfly.morph.aegis.medium.ContentSeparator(def,imgs);
    break;
    //grid
    case 'bbbfly.morph.ContentGrid':
      bbbfly.morph.aegis.medium.ContentFrame(def,imgs);
    break;
    //wrapper
    case 'bbbfly.morph.ContentWrapper':
      bbbfly.morph.aegis.medium.ContentFrame(def,imgs);
    break;
    //button
    case 'bbbfly.morph.ButtonPanel':
      bbbfly.morph.aegis.medium.ButtonPanel(def,imgs);
    break;
    case 'bbbfly.morph.ContentButton':
      bbbfly.morph.aegis.medium.ContentButton(def,imgs);
    break;
    case 'bbbfly.morph.LargeContentButton':
      bbbfly.morph.aegis.medium.LargeContentButton(def,imgs);
    break;
    case 'bbbfly.morph.ContentFlatButton':
      bbbfly.morph.aegis.medium.ContentFlatButton(def,imgs);
    break;
    case 'bbbfly.morph.ContentIconButton':
      bbbfly.morph.aegis.medium.ContentIconButton(def,imgs);
    break;
    case 'bbbfly.morph.ContentCheckBox':
      bbbfly.morph.aegis.medium.ContentCheckBox(def,imgs);
    break;
    case 'bbbfly.morph.ContentRadioButton':
      bbbfly.morph.aegis.medium.ContentRadioButton(def,imgs);
    break;
    //menu
    case 'bbbfly.morph.PopupMenu':
      bbbfly.morph.aegis.medium.PopupMenu(def,imgs);
    break;
  }
};

/** @ignore */
bbbfly.morph.aegis.medium.ContentFrame = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Shade: bbbfly.Morph.shade.light,
      Frame: imgs.Frame.Outer
    }
  });
};

/** @ignore */
bbbfly.morph.aegis.medium.InputFrame = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Shade: bbbfly.Morph.shade.light,
      Frame: imgs.Frame.Inner
    }
  });
};

/** @ignore */
bbbfly.morph.aegis.medium.ContentSeparator = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Shade: bbbfly.Morph.shade.light,
      Frame: imgs.Line.Inner
    }
  });
};

/** @ignore */
bbbfly.morph.aegis.medium.ButtonPanel = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Shade: bbbfly.Morph.shade.light,
      Frame: imgs.Button.Panel,
      Indent: -3
    },
    Methods: {
      GetIcon: bbbfly.morph.aegis.medium._getButtonIcon
    }
  });
};

/** @ignore */
bbbfly.morph.aegis.medium.ContentButton = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Shade: bbbfly.Morph.shade.light,
      Frame: imgs.Button.Std,
      Indent: -3
    },
    Methods: {
      GetIcon: bbbfly.morph.aegis.medium._getButtonIcon
    }
  });
};

/** @ignore */
bbbfly.morph.aegis.medium.ContentFlatButton = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Shade: bbbfly.Morph.shade.light,
      Frame: imgs.Button.Flat,
      Indent: -3
    },
    Methods: {
      GetIcon: bbbfly.morph.aegis.medium._getButtonIcon
    }
  });
};

/** @ignore */
bbbfly.morph.aegis.medium.ContentIconButton = function(def,imgs){
  ng_MergeDef(def,{
    W:28,H:28,
    Data: {
      Shade: bbbfly.Morph.shade.light,
      Frame: imgs.Button.Icon
    },
    Methods: {
      GetIcon: bbbfly.morph.aegis.medium._getButtonIcon
    }
  });
};

/** @ignore */
bbbfly.morph.aegis.medium.LargeContentButton = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Shade: bbbfly.Morph.shade.light,
      Frame: imgs.Button.Std,
      Indent: 11
    },
    Methods: {
      GetIcon: bbbfly.morph.aegis.medium._getFullIcon
    }
  });
};

/** @ignore */
bbbfly.morph.aegis.medium.ContentCheckBox = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Shade: bbbfly.Morph.shade.light,
      Icon: imgs.Button.Check
    }
  });
};

/** @ignore */
bbbfly.morph.aegis.medium.ContentRadioButton = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Shade: bbbfly.Morph.shade.light,
      Icon: imgs.Button.Radio
    }
  });
};

/** @ignore */
bbbfly.morph.aegis.medium.PopupMenu = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Shade: bbbfly.Morph.shade.dark,
      ShadeFrame: imgs.Frame.Outer,
      SubMenuImg: imgs.Image.Menu.SubMenu,
      CheckImg: imgs.Image.Menu.Check
    }
  });
};

/** @ignore */
bbbfly.morph.aegis.Medium = {
  ID: 'morph-aegis',
  Lib: 'bbbfly-cjs-morph-aegis',
  Prefix: 'aegis-',

  Sources: null,
  Images: null,

  OnInit: bbbfly.morph.aegis.medium._onInit,
  OnCreateControl: bbbfly.morph.aegis.medium._onCreateControl
};

if(bbbfly.Morph && Function.isFunction(bbbfly.Morph.RegisterTheme)){
  bbbfly.Morph.RegisterTheme(bbbfly.morph.aegis.Medium);
}