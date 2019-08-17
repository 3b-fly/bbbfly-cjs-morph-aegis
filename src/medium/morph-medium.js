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
bbbfly.morph.aegis.medium.ButtonPanel = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Shade: bbbfly.Morph.shade.light,
      Frame: imgs.Button.Panel,
      Indent: -3
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
      SubMenuImg: imgs.Icon.Menu.SubMenu,
      CheckImg: imgs.Icon.Menu.Check
    }
  });
};

/** @ignore */
bbbfly.morph.aegis.medium.img.Icon = function(anchor,padding){
  var defP = {L:0,T:0,R:0,B:0};

  if(Object.isObject(padding)){ng_MergeVar(padding,defP);}
  else{padding = defP;}

  return {
    L:(0+padding.L),oL:(30+padding.L),
    SL:(60+padding.L), oSL:(90+padding.L),
    DL:(120+padding.L), oDL:(150+padding.L),
    DSL:(180+padding.L), oDSL:(210+padding.L),
    W:(28-padding.L-padding.R),
    H:(28-padding.T-padding.B),
    T:(0+padding.T),
    Src:{Img:'icon', Anchor:anchor}
  };
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
bbbfly.morph.aegis.medium.img.ButtonFrame = function(anchor){
  return {
    LeftTop: { L:0, oL:30, SL:60, oSL:90, DL:120, oDL:150, DSL:180, oDSL:210, T:0, W:3, H:3, Src:{Img:'button', Anchor:anchor} },
    Top: { L:0, T:0, oT:30, ST:60, oST:90, DT:120, oDT:150, DST:180, oDST:210, H:3, Src:{Img:'button_h', Anchor:anchor} },
    RightTop: { L:25, oL:55, SL:85, oSL:115, DL:145, oDL:175, DSL:205, oDSL:235, T:0, W:3, H:3, Src:{Img:'button', Anchor:anchor} },
    Left: { L:0, oL:30, SL:60, oSL:90, DL:120, oDL:150, DSL:180, oDSL:210, T:0, W:3, Src:{Img:'button_v', Anchor:anchor} },
    Right: { L:25, oL:55, SL:85, oSL:115, DL:145, oDL:175, DSL:205, oDSL:235, T:0, W:3, Src:{Img:'button_v', Anchor:anchor} },
    LeftBottom: { L:0, oL:30, SL:60, oSL:90, DL:120, oDL:150, DSL:180, oDSL:210, T:25, W:3, H:3, Src:{Img:'button', Anchor:anchor} },
    Bottom: { L:0, T:25, oT:55, ST:85, oST:115, DT:145, oDT:175, DST:205, oDST:235, H:3, Src:{Img:'button_h', Anchor:anchor} },
    RightBottom: { L:25, oL:55, SL:85, oSL:115, DL:145, oDL:175, DSL:205, oDSL:235, T:25, W:3, H:3, Src:{Img:'button', Anchor:anchor} }
  };
};

/** @ignore */
bbbfly.morph.aegis.medium.img.ButtonImage = function(anchor,indent){
  var img = {
    L:(0+indent), oL:(30+indent),
    SL:(60+indent), oSL:(90+indent),
    DL:(120+indent), oDL:(150+indent),
    DSL:(180+indent), oDSL:(210+indent),
    W:(28-2*indent), H:(28-2*indent),
    T:(0+indent), Src:{Img:'button', Anchor:anchor}
  };
  bbbfly.Renderer.RecalcImageState(
    img,bbbfly.Renderer.stateattr.invalid,{ T:(30+indent) }
  );
  return img;
};

/** @ignore */
bbbfly.morph.aegis.Medium = {
  ID: 'morph-aegis',
  Lib: 'bbbfly-cjs-morph-aegis',
  Prefix: 'aegis-',

  Sources: {
    icon: {
      Path: 'medium/png/morph-medium-icon.png?1',
      Anchors: {
        list_check_light: { L:0, T:0 },
        list_check_dark: { L:0, T:30 },
        list_tree_light: { L:0, T:60 },
        list_tree_dark: { L:0, T:90 },
        menu_check_light: { L:0, T:120 },
        menu_check_dark: { L:0, T:150 },
        menu_tree_light: { L:0, T:180 },
        menu_tree_dark: { L:0, T:210 },
        menu_sub_light: { L:0, T:240 },
        menu_sub_dark: { L:0, T:270 },
        edit_drop_light: { L:0, T:300 },
        edit_drop_dark: { L:0, T:330 }
      }
    },
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
    },
    button: {
      Path: 'medium/png/morph-medium-button.png?1',
      Anchors: {
        button_panel_light: { L:0, T:0 },
        button_panel_dark: { L:0, T:30 },
        button_std_light: { L:0, T:60 },
        button_std_dark: { L:0, T:90 },
        button_flat_light: { L:0, T:120 },
        button_flat_dark: { L:0, T:150 },
        button_check_light: { L:0, T:180 },
        button_check_dark: { L:0, T:240 },
        button_radio_light: { L:0, T:300 },
        button_radio_dark: { L:0, T:360 }
      }
    },
    button_h: {
      Path: 'medium/png/morph-medium-button_h.png?1',
      Anchors: {
        button_panel_light: { L:0, T:0 },
        button_panel_dark: { L:0, T:240 },
        button_std_light: { L:0, T:480 },
        button_std_dark: { L:0, T:720 },
        button_flat_light: { L:0, T:960 },
        button_flat_dark: { L:0, T:1200 }
      }
    },
    button_v: {
      Path: 'medium/png/morph-medium-button_v.png?1',
      Anchors: {
        button_panel_light: { L:0, T:0 },
        button_panel_dark: { L:240, T:0 },
        button_std_light: { L:480, T:0 },
        button_std_dark: { L:720, T:0 },
        button_flat_light: { L:960, T:0 },
        button_flat_dark: { L:1200, T:0 }
      }
    }
  },
  Images: {
    Icon: {
      List: {
        Check: {
          Light: bbbfly.morph.aegis.medium.img.Icon('list_check_light',{R:6}),
          Dark: bbbfly.morph.aegis.medium.img.Icon('list_check_dark',{R:6})
        },
        Tree: {
          Light: bbbfly.morph.aegis.medium.img.Icon('list_tree_light',{L:4,R:4}),
          Dark: bbbfly.morph.aegis.medium.img.Icon('list_tree_dark',{L:4,R:4})
        }
      },
      Menu: {
        Check: {
          Light: bbbfly.morph.aegis.medium.img.Icon('menu_check_light',{R:6,T:2,B:2}),
          Dark: bbbfly.morph.aegis.medium.img.Icon('menu_check_dark',{R:6,T:2,B:2})
        },
        Tree: {
          Light: bbbfly.morph.aegis.medium.img.Icon('menu_tree_light',{L:4,R:4,T:2,B:2}),
          Dark: bbbfly.morph.aegis.medium.img.Icon('menu_tree_dark',{L:4,R:4,T:2,B:2})
        },
        SubMenu: {
          Light: bbbfly.morph.aegis.medium.img.Icon('menu_sub_light',{L:4,R:4,T:2,B:2}),
          Dark: bbbfly.morph.aegis.medium.img.Icon('menu_sub_dark',{L:4,R:4,T:2,B:2})
        }
      },
      Edit: {
        DropDown: {
          Light: bbbfly.morph.aegis.medium.img.Icon('edit_drop_light'),
          Dark: bbbfly.morph.aegis.medium.img.Icon('edit_drop_dark')
        }
      }
    },
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
    },
    Button: {
      Panel: {
        Light: bbbfly.morph.aegis.medium.img.ButtonFrame('button_panel_light'),
        Dark: bbbfly.morph.aegis.medium.img.ButtonFrame('button_panel_dark')
      },
      Std: {
        Light: bbbfly.morph.aegis.medium.img.ButtonFrame('button_std_light'),
        Dark: bbbfly.morph.aegis.medium.img.ButtonFrame('button_std_dark')
      },
      Flat: {
        Light: bbbfly.morph.aegis.medium.img.ButtonFrame('button_flat_light'),
        Dark: bbbfly.morph.aegis.medium.img.ButtonFrame('button_flat_dark')
      },
      Check: {
        Light: bbbfly.morph.aegis.medium.img.ButtonImage('button_check_light',4),
        Dark: bbbfly.morph.aegis.medium.img.ButtonImage('button_check_dark',4)
      },
      Radio: {
        Light: bbbfly.morph.aegis.medium.img.ButtonImage('button_radio_light',3),
        Dark: bbbfly.morph.aegis.medium.img.ButtonImage('button_radio_dark',3)
      }
    }
  },

  OnCreateControl: bbbfly.morph.aegis.medium._onCreateControl
};

if(bbbfly.Morph && Function.isFunction(bbbfly.Morph.RegisterTheme)){
  bbbfly.Morph.RegisterTheme(bbbfly.morph.aegis.Medium);
}