/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.aegis = bbbfly.morph.aegis || {};
bbbfly.morph.aegis.medium = {};
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
bbbfly.morph.aegis.medium.ContentFrame = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Shade: bbbfly.Morph.shade.light,
      Frame: imgs.Frame.Outer
    }
  });
};
bbbfly.morph.aegis.medium.InputFrame = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Shade: bbbfly.Morph.shade.light,
      Frame: imgs.Frame.Inner
    }
  });
};
bbbfly.morph.aegis.medium.ContentSeparator = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Shade: bbbfly.Morph.shade.light,
      Frame: imgs.Line.Inner
    }
  });
};
bbbfly.morph.aegis.medium.ContentGrid = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Shade: bbbfly.Morph.shade.light,
      Frame: imgs.Frame.Outer
    }
  });
};
bbbfly.morph.aegis.medium.ContentWrapper = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Shade: bbbfly.Morph.shade.light,
      Frame: imgs.Frame.Outer
    }
  });
};
bbbfly.morph.aegis.Medium = {
  ID: 'morph-aegis',
  Lib: 'bbbfly-cjs-morph-aegis',
  Prefix: 'aegis-',

  Images: [
    'medium/png/morph-medium.png?4',
    'medium/png/morph-medium_h.png?4',
    'medium/png/morph-medium_v.png?4'
  ],
  ImageDefs: {
    Frame: {
      Outer: {
        Light: {
          LeftTop: { L:0, DL:60, T:0, W:2, H:2, Src:0 },
          Top: { L:0, T:0, DT:60, H:2, Src:1 },
          RightTop: { L:26, DL:86, T:0, W:2, H:2, Src:0 },
          Left: { L:0, DL:60, T:0, W:2, Src:2 },
          Right: { L:26, DL:86, T:0, W:2, Src:2 },
          LeftBottom: { L:0, DL:60, T:26, W:2, H:2, Src:0 },
          Bottom: { L:0, T:26, DT:86, H:2, Src:1 },
          RightBottom: { L:26, DL:86, T:26, W:2, H:2, Src:0 }
        },
        Dark: {
          LeftTop: { L:30, DL:90, T:0, W:2, H:2, Src:0 },
          Top: { L:0, T:30, DT:90, H:2, Src:1 },
          RightTop: { L:56, DL:116, T:0, W:2, H:2, Src:0 },
          Left: { L:30, DL:90, T:0, W:2, Src:2 },
          Right: { L:56, DL:116, T:0, W:2, Src:2 },
          LeftBottom: { L:30, DL:90, T:26, W:2, H:2, Src:0 },
          Bottom: { L:0, T:56, DT:116, H:2, Src:1 },
          RightBottom: { L:56, DL:116, T:26, W:2, H:2, Src:0 }
        }
      },
      Inner: {
        Light: {
          LeftTop: { L:0, DL:60, T:30, W:2, H:2, Src:0 },
          Top: { L:0, T:120, DT:180, H:2, Src:1 },
          RightTop: { L:26, DL:86, T:30, W:2, H:2, Src:0 },
          Left: { L:120, DL:180, T:0, W:2, Src:2 },
          Right: { L:146, DL:206, T:0, W:2, Src:2 },
          LeftBottom: { L:0, DL:60, T:56, W:2, H:2, Src:0 },
          Bottom: { L:0, T:146, DT:206, H:2, Src:1 },
          RightBottom: { L:26, DL:86, T:56, W:2, H:2, Src:0 }
        },
        Dark: {
          LeftTop: { L:30, DL:90, T:30, W:2, H:2, Src:0 },
          Top: { L:0, T:150, DT:210, H:2, Src:1 },
          RightTop: { L:56, DL:116, T:30, W:2, H:2, Src:0 },
          Left: { L:150, DL:210, T:0, W:2, Src:2 },
          Right: { L:176, DL:236, T:0, W:2, Src:2 },
          LeftBottom: { L:30, DL:90, T:56, W:2, H:2, Src:0 },
          Bottom: { L:0, T:176, DT:236, H:2, Src:1 },
          RightBottom: { L:56, DL:116, T:56, W:2, H:2, Src:0 }
        }
      }
    },
    Line: {
      Outer: {
        Horizontal:{
          Light: {
            Left: { L:0, DL:60, T:72, W:3, H:3, Src:0 },
            Center: { L:0, T:240, DT:250, H:3, Src:1 },
            Right: { L:25, DL:85, T:72, W:3, H:3, Src:0 }
          },
          Dark: {
            Left: { L:30, DL:90, T:72, W:3, H:3, Src:0 },
            Center: { L:0, T:245, DT:255, H:3, Src:1 },
            Right: { L:55, DL:115, T:72, W:3, H:3, Src:0 }
          }
        },
        Vertical:{
          Light: {
            Top: { L:12, DL:72, T:60, W:3, H:3, Src:0 },
            Center: { L:240, DL:250, T:0, W:3, Src:2 },
            Bottom: { L:12, DL:72, T:85, W:3, H:3, Src:0 }
          },
          Dark: {
            Top: {L:42, DL:102, T:60, W:3, H:3, Src:0 },
            Center: { L:245, DL:255, T:0, W:3, Src:2 },
            Bottom: { L:42, DL:102, T:85, W:3, H:3, Src:0 }
          }
        }
      },
      Inner: {
        Horizontal:{
          Light: {
            Left: { L:0, DL:60, T:102, W:3, H:3, Src:0 },
            Center: { L:0, T:260, DT:270, H:3, Src:1 },
            Right: { L:25, DL:85, T:102, W:3, H:3, Src:0 }
          },
          Dark: {
            Left: { L:30, DL:90, T:102, W:3, H:3, Src:0 },
            Center: { L:0, T:265, DT:275, H:3, Src:1 },
            Right: { L:55, DL:115, T:102, W:3, H:3, Src:0 }
          }
        },
        Vertical:{
          Light: {
            Top: { L:12, DL:72, T:90, W:3, H:3, Src:0 },
            Center: { L:260, DL:270, T:0, W:3, Src:2 },
            Bottom: { L:12, DL:72, T:115, W:3, H:3, Src:0 }
          },
          Dark: {
            Top: {L:42, DL:102, T:90, W:3, H:3, Src:0 },
            Center: { L:265, DL:275, T:0, W:3, Src:2 },
            Bottom: { L:42, DL:102, T:115, W:3, H:3, Src:0 }
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