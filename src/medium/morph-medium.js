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
  var imgs = bbbfly.morph.aegis.Medium.Images;

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

  Sources: {
    frame: {
      Path: 'medium/png/morph-medium-frame.png?4',
      Anchors: {
        frame_outer: { L:0, T:0 },
        frame_inner: { L:0, T:60 },
        line_outer: { L:0, T:120 },
        line_inner: { L:0, T:180 }
      }
    },
    frame_h: {
      Path: 'medium/png/morph-medium-frame_h.png?4',
      Anchors: {
        frame_outer: { L:0, T:0 },
        frame_inner: { L:0, T:120 },
        line_outer: { L:0, T:240 },
        line_inner: { L:0, T:260 }
      }
    },
    frame_v: {
      Path: 'medium/png/morph-medium-frame_v.png?4',
      Anchors: {
        frame_outer: { L:0, T:0 },
        frame_inner: { L:120, T:0 },
        line_outer: { L:240, T:0 },
        line_inner: { L:260, T:0 }
      }
    }
  },
  Images: {
    Frame: {
      Outer: {
        Light: {
          LeftTop: { L:0, DL:30, T:0, W:2, H:2, Src:{Img:'frame', Anchor:'frame_outer'} },
          Top: { L:0, T:0, DT:30, H:2, Src:{Img:'frame_h', Anchor:'frame_outer'} },
          RightTop: { L:26, DL:56, T:0, W:2, H:2, Src:{Img:'frame', Anchor:'frame_outer'} },
          Left: { L:0, DL:30, T:0, W:2, Src:{Img:'frame_v', Anchor:'frame_outer'} },
          Right: { L:26, DL:56, T:0, W:2, Src:{Img:'frame_v', Anchor:'frame_outer'} },
          LeftBottom: { L:0, DL:30, T:26, W:2, H:2, Src:{Img:'frame', Anchor:'frame_outer'} },
          Bottom: { L:0, T:26, DT:56, H:2, Src:{Img:'frame_h', Anchor:'frame_outer'} },
          RightBottom: { L:26, DL:56, T:26, W:2, H:2, Src:{Img:'frame', Anchor:'frame_outer'} }
        },
        Dark: {
          LeftTop: { L:0, DL:30, T:30, W:2, H:2, Src:{Img:'frame', Anchor:'frame_outer'} },
          Top: { L:0, T:60, DT:90, H:2, Src:{Img:'frame_h', Anchor:'frame_outer'} },
          RightTop: { L:26, DL:56, T:30, W:2, H:2, Src:{Img:'frame', Anchor:'frame_outer'} },
          Left: { L:60, DL:90, T:0, W:2, Src:{Img:'frame_v', Anchor:'frame_outer'} },
          Right: { L:86, DL:116, T:0, W:2, Src:{Img:'frame_v', Anchor:'frame_outer'} },
          LeftBottom: { L:0, DL:30, T:56, W:2, H:2, Src:{Img:'frame', Anchor:'frame_outer'} },
          Bottom: { L:0, T:86, DT:116, H:2, Src:{Img:'frame_h', Anchor:'frame_outer'} },
          RightBottom: { L:26, DL:56, T:56, W:2, H:2, Src:{Img:'frame', Anchor:'frame_outer'} }
        }
      },
      Inner: {
        Light: {
          LeftTop: { L:0, DL:30, T:0, W:2, H:2, Src:{Img:'frame', Anchor:'frame_inner'} },
          Top: { L:0, T:0, DT:30, H:2, Src:{Img:'frame_h', Anchor:'frame_inner'} },
          RightTop: { L:26, DL:56, T:0, W:2, H:2, Src:{Img:'frame', Anchor:'frame_inner'} },
          Left: { L:0, DL:30, T:0, W:2, Src:{Img:'frame_v', Anchor:'frame_inner'} },
          Right: { L:26, DL:56, T:0, W:2, Src:{Img:'frame_v', Anchor:'frame_inner'} },
          LeftBottom: { L:0, DL:30, T:26, W:2, H:2, Src:{Img:'frame', Anchor:'frame_inner'} },
          Bottom: { L:0, T:26, DT:56, H:2, Src:{Img:'frame_h', Anchor:'frame_inner'} },
          RightBottom: { L:26, DL:56, T:26, W:2, H:2, Src:{Img:'frame', Anchor:'frame_inner'} }
        },
        Dark: {
          LeftTop: { L:0, DL:30, T:30, W:2, H:2, Src:{Img:'frame', Anchor:'frame_inner'} },
          Top: { L:0, T:60, DT:90, H:2, Src:{Img:'frame_h', Anchor:'frame_inner'} },
          RightTop: { L:26, DL:56, T:30, W:2, H:2, Src:{Img:'frame', Anchor:'frame_inner'} },
          Left: { L:60, DL:90, T:0, W:2, Src:{Img:'frame_v', Anchor:'frame_inner'} },
          Right: { L:86, DL:116, T:0, W:2, Src:{Img:'frame_v', Anchor:'frame_inner'} },
          LeftBottom: { L:0, DL:30, T:56, W:2, H:2, Src:{Img:'frame', Anchor:'frame_inner'} },
          Bottom: { L:0, T:86, DT:116, H:2, Src:{Img:'frame_h', Anchor:'frame_inner'} },
          RightBottom: { L:26, DL:56, T:56, W:2, H:2, Src:{Img:'frame', Anchor:'frame_inner'} }
        }
      }
    },
    Line: {
      Outer: {
        Horizontal:{
          Light: {
            Left: { L:0, DL:30, T:12, W:3, H:3, Src:{Img:'frame', Anchor:'line_outer'} },
            Center: { L:0, T:0, DT:5, H:3, Src:{Img:'frame_h', Anchor:'line_outer'} },
            Right: { L:25, DL:55, T:12, W:3, H:3, Src:{Img:'frame', Anchor:'line_outer'} }
          },
          Dark: {
            Left: { L:0, DL:30, T:42, W:3, H:3, Src:{Img:'frame', Anchor:'line_outer'} },
            Center: { L:0, T:10, DT:15, H:3, Src:{Img:'frame_h', Anchor:'line_outer'} },
            Right: { L:25, DL:55, T:42, W:3, H:3, Src:{Img:'frame', Anchor:'line_outer'} }
          }
        },
        Vertical:{
          Light: {
            Top: { L:12, DL:42, T:120, W:3, H:3, Src:{Img:'frame', Anchor:'line_outer'} },
            Center: { L:0, DL:5, T:0, W:3, Src:{Img:'frame_v', Anchor:'line_outer'} },
            Bottom: { L:12, DL:42, T:145, W:3, H:3, Src:{Img:'frame', Anchor:'line_outer'} }
          },
          Dark: {
            Top: { L:12, DL:42, T:130, W:3, H:3, Src:{Img:'frame', Anchor:'line_outer'} },
            Center: { L:10, DL:15, T:0, W:3, Src:{Img:'frame_v', Anchor:'line_outer'} },
            Bottom: { L:12, DL:42, T:175, W:3, H:3, Src:{Img:'frame', Anchor:'line_outer'} }
          }
        }
      },
      Inner: {
        Horizontal:{
          Light: {
            Left: { L:0, DL:30, T:192, W:3, H:3, Src:{Img:'frame', Anchor:'line_inner'} },
            Center: { L:0, T:0, DT:5, H:3, Src:{Img:'frame_h', Anchor:'line_inner'} },
            Right: { L:25, DL:55, T:192, W:3, H:3, Src:{Img:'frame', Anchor:'line_inner'} }
          },
          Dark: {
            Left: { L:0, DL:30, T:222, W:3, H:3, Src:{Img:'frame', Anchor:'line_inner'} },
            Center: { L:0, T:10, DT:15, H:3, Src:{Img:'frame_h', Anchor:'line_inner'} },
            Right: { L:25, DL:55, T:222, W:3, H:3, Src:{Img:'frame', Anchor:'line_inner'} }
          }
        },
        Vertical:{
          Light: {
            Top: { L:12, DL:42, T:180, W:3, H:3, Src:{Img:'frame', Anchor:'line_inner'} },
            Center: { L:0, DL:5, T:0, W:3, Src:{Img:'frame_v', Anchor:'line_inner'} },
            Bottom: { L:12, DL:42, T:205, W:3, H:3, Src:{Img:'frame', Anchor:'line_inner'} }
          },
          Dark: {
            Top: { L:12, DL:42, T:30, W:3, H:3, Src:{Img:'frame', Anchor:'line_inner'} },
            Center: { L:10, DL:15, T:0, W:3, Src:{Img:'frame_v', Anchor:'line_inner'} },
            Bottom: { L:12, DL:42, T:55, W:3, H:3, Src:{Img:'frame', Anchor:'line_inner'} }
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