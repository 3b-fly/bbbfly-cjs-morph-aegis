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
bbbfly.morph.aegis.medium._onCreateControl = function(def){
  var imgs = bbbfly.morph.aegis.Medium.ImageDefs;

  switch(def.Type){
    case 'bbbfly.morph.ContentFrame':
      bbbfly.morph.aegis.medium.ContentFrame(def,imgs);
    break;
    case 'bbbfly.morph.InputFrame':
      bbbfly.morph.aegis.medium.InputFrame(def,imgs);
    break;
    case 'bbbfly.morph.ContentSeparator':
      bbbfly.morph.aegis.medium.ContentSeparator(def,imgs);
    break;
    case 'bbbfly.morph.ContentGrid':
      bbbfly.morph.aegis.medium.ContentGrid(def,imgs);
    break;
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
bbbfly.morph.aegis.Medium = {
  ID: 'morph-aegis',
  Lib: 'bbbfly-cjs-morph-aegis',
  Prefix: 'aegis-',

  Images: [
    'medium/png/morph-medium-frame.png?4',
    'medium/png/morph-medium-frame_h.png?4',
    'medium/png/morph-medium-frame_v.png?4'
  ],
  ImageDefs: {
    Frame: {
      Outer: {
        Light: {
          LeftTop: { L:0, DL:30, T:0, W:2, H:2, Src:0 },
          Top: { L:0, T:0, DT:30, H:2, Src:1 },
          RightTop: { L:26, DL:56, T:0, W:2, H:2, Src:0 },
          Left: { L:0, DL:30, T:0, W:2, Src:2 },
          Right: { L:26, DL:56, T:0, W:2, Src:2 },
          LeftBottom: { L:0, DL:30, T:26, W:2, H:2, Src:0 },
          Bottom: { L:0, T:26, DT:116, H:2, Src:1 },
          RightBottom: { L:26, DL:56, T:26, W:2, H:2, Src:0 }
        },
        Dark: {
          LeftTop: { L:0, DL:30, T:30, W:2, H:2, Src:0 },
          Top: { L:0, T:60, DT:90, H:2, Src:1 },
          RightTop: { L:26, DL:56, T:30, W:2, H:2, Src:0 },
          Left: { L:60, DL:90, T:0, W:2, Src:2 },
          Right: { L:86, DL:116, T:0, W:2, Src:2 },
          LeftBottom: { L:0, DL:30, T:56, W:2, H:2, Src:0 },
          Bottom: { L:0, T:86, DT:116, H:2, Src:1 },
          RightBottom: { L:26, DL:56, T:56, W:2, H:2, Src:0 }
        }
      },
      Inner: {
        Light: {
          LeftTop: { L:0, DL:30, T:60, W:2, H:2, Src:0 },
          Top: { L:0, T:120, DT:150, H:2, Src:1 },
          RightTop: { L:26, DL:56, T:60, W:2, H:2, Src:0 },
          Left: { L:120, DL:150, T:0, W:2, Src:2 },
          Right: { L:146, DL:176, T:0, W:2, Src:2 },
          LeftBottom: { L:0, DL:30, T:86, W:2, H:2, Src:0 },
          Bottom: { L:0, T:146, DT:176, H:2, Src:1 },
          RightBottom: { L:26, DL:56, T:86, W:2, H:2, Src:0 }
        },
        Dark: {
          LeftTop: { L:0, DL:30, T:90, W:2, H:2, Src:0 },
          Top: { L:0, T:180, DT:210, H:2, Src:1 },
          RightTop: { L:26, DL:56, T:90, W:2, H:2, Src:0 },
          Left: { L:180, DL:210, T:0, W:2, Src:2 },
          Right: { L:206, DL:236, T:0, W:2, Src:2 },
          LeftBottom: { L:0, DL:30, T:116, W:2, H:2, Src:0 },
          Bottom: { L:0, T:206, DT:236, H:2, Src:1 },
          RightBottom: { L:26, DL:56, T:116, W:2, H:2, Src:0 }
        }
      }
    },
    Line: {
      Outer: {
        Horizontal:{
          Light: {
            Left: { L:0, DL:30, T:132, W:3, H:3, Src:0 },
            Center: { L:0, T:240, DT:245, H:3, Src:1 },
            Right: { L:25, DL:55, T:132, W:3, H:3, Src:0 }
          },
          Dark: {
            Left: { L:0, DL:30, T:162, W:3, H:3, Src:0 },
            Center: { L:0, T:250, DT:255, H:3, Src:1 },
            Right: { L:25, DL:55, T:162, W:3, H:3, Src:0 }
          }
        },
        Vertical:{
          Light: {
            Top: { L:12, DL:42, T:120, W:3, H:3, Src:0 },
            Center: { L:240, DL:245, T:0, W:3, Src:2 },
            Bottom: { L:12, DL:42, T:145, W:3, H:3, Src:0 }
          },
          Dark: {
            Top: { L:12, DL:42, T:130, W:3, H:3, Src:0 },
            Center: { L:250, DL:255, T:0, W:3, Src:2 },
            Bottom: { L:12, DL:42, T:175, W:3, H:3, Src:0 }
          }
        }
      },
      Inner: {
        Horizontal:{
          Light: {
            Left: { L:0, DL:30, T:192, W:3, H:3, Src:0 },
            Center: { L:0, T:260, DT:265, H:3, Src:1 },
            Right: { L:25, DL:55, T:192, W:3, H:3, Src:0 }
          },
          Dark: {
            Left: { L:0, DL:30, T:222, W:3, H:3, Src:0 },
            Center: { L:0, T:270, DT:275, H:3, Src:1 },
            Right: { L:25, DL:55, T:222, W:3, H:3, Src:0 }
          }
        },
        Vertical:{
          Light: {
            Top: { L:12, DL:42, T:180, W:3, H:3, Src:0 },
            Center: { L:260, DL:265, T:0, W:3, Src:2 },
            Bottom: { L:12, DL:42, T:205, W:3, H:3, Src:0 }
          },
          Dark: {
            Top: { L:12, DL:42, T:210, W:3, H:3, Src:0 },
            Center: { L:270, DL:275, T:0, W:3, Src:2 },
            Bottom: { L:12, DL:42, T:235, W:3, H:3, Src:0 }
          }
        }
      }
    }
  },

  OnCreateControl: bbbfly.morph.aegis.medium._onCreateControl
};

if(bbbfly.Morph && Function.isFunction(bbbfly.Morph.RegisterTheme)){
  bbbfly.Morph.RegisterTheme(bbbfly.morph.aegis.Medium);
}