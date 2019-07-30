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
bbbfly.morph.aegis.medium = {};
/** @ignore */
bbbfly.morph.aegis.medium.img = {};

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
      bbbfly.morph.aegis.medium.ContentGrid(def,imgs);
    break;
    //wrapper
    case 'bbbfly.morph.ContentWrapper':
      bbbfly.morph.aegis.medium.ContentWrapper(def,imgs);
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
bbbfly.morph.aegis.medium.ContentGrid = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Shade: bbbfly.Morph.shade.light,
      Frame: imgs.Frame.Outer
    }
  });
};

/** @ignore */
bbbfly.morph.aegis.medium.ContentWrapper = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Shade: bbbfly.Morph.shade.light,
      Frame: imgs.Frame.Outer
    }
  });
};

/** @ignore */
bbbfly.morph.aegis.medium.img.PanelFrame = function(anchor){
  return {
    LeftTop: { L:0, DL:30, T:0, W:2, H:2, Src:{Img:'frame', Anchor:anchor} },
    Top: { L:0, T:0, DT:30, H:2, Src:{Img:'frame_h', Anchor:anchor} },
    RightTop: { L:26, DL:56, T:0, W:2, H:2, Src:{Img:'frame', Anchor:anchor} },
    Left: { L:0, DL:30, T:0, W:2, Src:{Img:'frame_v', Anchor:anchor} },
    Right: { L:26, DL:56, T:0, W:2, Src:{Img:'frame_v', Anchor:anchor} },
    LeftBottom: { L:0, DL:30, T:26, W:2, H:2, Src:{Img:'frame', Anchor:anchor} },
    Bottom: { L:0, T:26, DT:56, H:2, Src:{Img:'frame_h', Anchor:anchor} },
    RightBottom: { L:26, DL:56, T:26, W:2, H:2, Src:{Img:'frame', Anchor:anchor} }
  };
};

/** @ignore */
bbbfly.morph.aegis.medium.img.HLineFrame = function(anchor){
  return {
    Left: { L:0, DL:30, T:12, W:3, H:3, Src:{Img:'frame', Anchor:anchor} },
    Center: { L:0, T:0, DT:5, H:3, Src:{Img:'frame_h', Anchor:anchor} },
    Right: { L:25, DL:55, T:12, W:3, H:3, Src:{Img:'frame', Anchor:anchor} }
  };
};

/** @ignore */
bbbfly.morph.aegis.medium.img.VLineFrame = function(anchor){
  return {
    Top: { L:12, DL:42, T:0, W:3, H:3, Src:{Img:'frame', Anchor:anchor} },
    Center: { L:0, DL:5, T:0, W:3, Src:{Img:'frame_v', Anchor:anchor} },
    Bottom: { L:12, DL:42, T:25, W:3, H:3, Src:{Img:'frame', Anchor:anchor} }
  };
};

/** @ignore */
bbbfly.morph.aegis.Medium = {
  ID: 'morph-aegis',
  Lib: 'bbbfly-cjs-morph-aegis',
  Prefix: 'aegis-',

  Sources: {
    frame: {
      Path: 'medium/png/morph-medium-frame.png?1',
      Anchors: {
        frame_outer_light: { L:0, T:0 },
        frame_outer_dark: { L:0, T:30 },
        frame_inner_light: { L:0, T:60 },
        frame_inner_dark: { L:0, T:90 },
        line_outer_light: { L:0, T:120 },
        line_outer_dark: { L:0, T:150 },
        line_inner_light: { L:0, T:180 },
        line_inner_dark: { L:0, T:210 }
      }
    },
    frame_h: {
      Path: 'medium/png/morph-medium-frame_h.png?1',
      Anchors: {
        frame_outer_light: { L:0, T:0 },
        frame_outer_dark: { L:0, T:60 },
        frame_inner_light: { L:0, T:120 },
        frame_inner_dark: { L:0, T:180 },
        line_outer_light: { L:0, T:240 },
        line_outer_dark: { L:0, T:250 },
        line_inner_light: { L:0, T:260 },
        line_inner_dark: { L:0, T:270 }
      }
    },
    frame_v: {
      Path: 'medium/png/morph-medium-frame_v.png?1',
      Anchors: {
        frame_outer_light: { L:0, T:0 },
        frame_outer_dark: { L:60, T:0 },
        frame_inner_light: { L:120, T:0 },
        frame_inner_dark: { L:180, T:0 },
        line_outer_light: { L:240, T:0 },
        line_outer_dark: { L:250, T:0 },
        line_inner_light: { L:260, T:0 },
        line_inner_dark: { L:270, T:0 }
      }
    }
  },
  Images: {
    Frame: {
      Outer: {
        Light: bbbfly.morph.aegis.medium.img.PanelFrame('frame_outer_light'),
        Dark: bbbfly.morph.aegis.medium.img.PanelFrame('frame_outer_dark')
      },
      Inner: {
        Light: bbbfly.morph.aegis.medium.img.PanelFrame('frame_inner_light'),
        Dark: bbbfly.morph.aegis.medium.img.PanelFrame('frame_inner_dark')
      }
    },
    Line: {
      Outer: {
        Horizontal:{
          Light: bbbfly.morph.aegis.medium.img.HLineFrame('line_outer_light'),
          Dark: bbbfly.morph.aegis.medium.img.HLineFrame('line_outer_dark')
        },
        Vertical:{
          Light: bbbfly.morph.aegis.medium.img.VLineFrame('line_outer_light'),
          Dark: bbbfly.morph.aegis.medium.img.VLineFrame('line_outer_dark')
        }
      },
      Inner: {
        Horizontal:{
          Light: bbbfly.morph.aegis.medium.img.HLineFrame('line_inner_light'),
          Dark: bbbfly.morph.aegis.medium.img.HLineFrame('line_inner_dark')
        },
        Vertical:{
          Light: bbbfly.morph.aegis.medium.img.VLineFrame('line_inner_light'),
          Dark: bbbfly.morph.aegis.medium.img.VLineFrame('line_inner_dark')
        }
      }
    }
  },

  OnCreateControl: bbbfly.morph.aegis.medium._onCreateControl
};

if(bbbfly.Morph && Function.isFunction(bbbfly.Morph.RegisterTheme)){
  bbbfly.Morph.RegisterTheme(bbbfly.morph.aegis.Medium);
}