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
bbbfly.morph.aegis.medium = bbbfly.morph.aegis.medium || {};
/** @ignore */
bbbfly.morph.aegis.medium.img = {};

/** @ignore */
bbbfly.morph.aegis.medium.img._padding = function(padding){
  if(Object.isObject(padding)){
    ng_MergeVar(padding,{L:0,T:0,R:0,B:0});
  }
  else if(Number.isInteger(padding)){
    padding = {L:padding,T:padding,R:padding,B:padding};
  }
  else{
    padding = {L:0,T:0,R:0,B:0};
  }
  return padding;
};

/** @ignore */
bbbfly.morph.aegis.medium.img._image = function(src,anchor,padding){
  padding = bbbfly.morph.aegis.medium.img._padding(padding);

  return {
    T:(0+padding.T),
    L:(0+padding.L),oL:(30+padding.L),
    SL:(60+padding.L), oSL:(90+padding.L),
    DL:(120+padding.L), DSL:(150+padding.L),
    W:(28-padding.L-padding.R), H:(28-padding.T-padding.B),
    Src:{Img:src, Anchor:anchor}
  };
};

/** @ignore */
bbbfly.morph.aegis.medium.img.Image = function(anchor,padding){
  return bbbfly.morph.aegis.medium.img._image('image',anchor,padding);
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
    LeftTop: { L:0, oL:30, SL:60, oSL:90, DL:120, DSL:150, T:0, W:3, H:3, Src:{Img:'button', Anchor:anchor} },
    Top: { L:0, T:0, oT:30, ST:60, oST:90, DT:120, DST:150, H:3, Src:{Img:'button_h', Anchor:anchor} },
    RightTop: { L:25, oL:55, SL:85, oSL:115, DL:145, DSL:175, T:0, W:3, H:3, Src:{Img:'button', Anchor:anchor} },
    Left: { L:0, oL:30, SL:60, oSL:90, DL:120, DSL:150, T:0, W:3, Src:{Img:'button_v', Anchor:anchor} },
    Right: { L:25, oL:55, SL:85, oSL:115, DL:145, DSL:175, T:0, W:3, Src:{Img:'button_v', Anchor:anchor} },
    LeftBottom: { L:0, oL:30, SL:60, oSL:90, DL:120, DSL:150, T:25, W:3, H:3, Src:{Img:'button', Anchor:anchor} },
    Bottom: { L:0, T:25, oT:55, ST:85, oST:115, DT:145, DST:175, H:3, Src:{Img:'button_h', Anchor:anchor} },
    RightBottom: { L:25, oL:55, SL:85, oSL:115, DL:145, DSL:175, T:25, W:3, H:3, Src:{Img:'button', Anchor:anchor} }
  };
};

/** @ignore */
bbbfly.morph.aegis.medium.img.ButtonImage = function(anchor,indent){
  var img = bbbfly.morph.aegis.medium.img._image(
    'button',anchor,indent
  );
  bbbfly.Renderer.RecalcImageState(
    img,bbbfly.Renderer.stateattr.invalid,{ T:(30+indent) }
  );
  return img;
};

/** @ignore */
bbbfly.morph.aegis.medium.img.ButtonIcon = function(anchor,padding){
  padding = bbbfly.morph.aegis.medium.img._padding(padding);
  var icons = {};

  for(var name in bbbfly.morph.aegis.medium.img.icon){
    var index = bbbfly.morph.aegis.medium.img.icon[name];
    if(!Number.isInteger(index)){index = -1;}

    icons[name] = {
      T:(0+(index*60)+padding.T),
      L:(0+padding.L), oL:(30+padding.L),
      SL:(60+padding.L), oSL:(90+padding.L),
      DL:(120+padding.L), DSL:(120+padding.L),
      W:(28-padding.L-padding.R),
      H:(28-padding.T-padding.B),
      Src:{Img:'icon', Anchor:anchor}
    };
  }
  return icons;
};

/** @ignore */
bbbfly.morph.aegis.medium.img.sources = {
  image: {
    Path: 'medium/png/morph-medium-image.png?1',
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
      button_input_light: { L:0, T:180 },
      button_input_dark: { L:0, T:240 },

      button_check_light: { L:0, T:300 },
      button_check_dark: { L:0, T:360 },
      button_radio_light: { L:0, T:420 },
      button_radio_dark: { L:0, T:480 }
    }
  },
  button_h: {
    Path: 'medium/png/morph-medium-button_h.png?1',
    Anchors: {
      button_panel_light: { L:0, T:0 },
      button_panel_dark: { L:0, T:180 },
      button_std_light: { L:0, T:360 },
      button_std_dark: { L:0, T:540 },
      button_flat_light: { L:0, T:720 },
      button_flat_dark: { L:0, T:900 },
      button_input_light: { L:0, T:1080 },
      button_input_dark: { L:0, T:1260 }
    }
  },
  button_v: {
    Path: 'medium/png/morph-medium-button_v.png?1',
    Anchors: {
      button_panel_light: { L:0, T:0 },
      button_panel_dark: { L:180, T:0 },
      button_std_light: { L:360, T:0 },
      button_std_dark: { L:540, T:0 },
      button_flat_light: { L:720, T:0 },
      button_flat_dark: { L:900, T:0 },
      button_input_light: { L:1080, T:0 },
      button_input_dark: { L:1260, T:0 }
    }
  },
  icon: {
    Path: 'medium/png/morph-medium-icon.png?1',
    Anchors: {
      misc_light: { L:0, T:0 },
      misc_dark: { L:0, T:30 }
    }
  }
};

/** @ignore */
bbbfly.morph.aegis.medium.img.icon = {
  none: -1,
  plus: 0,
  minus: 1,
  add: 2,
  remove: 3,
  up: 4,
  down: 5,
  left: 6,
  right: 7,
  close: 8,
  refresh: 9,
  edit: 10,
  delete: 11,
  settings: 12,
  search: 13,
  filter: 14,
  layers: 15,
  copyright: 16,
  drop: 17,
  circle: 18,
  set: 19
};

/** @ignore */
bbbfly.morph.aegis.medium.img.images = {
  Image: {
    List: {
      Check: {
        Light: bbbfly.morph.aegis.medium.img.Image('list_check_light',{R:6,T:4,B:4}),
        Dark: bbbfly.morph.aegis.medium.img.Image('list_check_dark',{R:6,T:4,B:4})
      },
      Tree: {
        Light: bbbfly.morph.aegis.medium.img.Image('list_tree_light',{L:4,R:4,T:4,B:4}),
        Dark: bbbfly.morph.aegis.medium.img.Image('list_tree_dark',{L:4,R:4,T:4,B:4})
      }
    },
    Menu: {
      Check: {
        Light: bbbfly.morph.aegis.medium.img.Image('menu_check_light',{R:6,T:2,B:2}),
        Dark: bbbfly.morph.aegis.medium.img.Image('menu_check_dark',{R:6,T:2,B:2})
      },
      Tree: {
        Light: bbbfly.morph.aegis.medium.img.Image('menu_tree_light',{L:4,R:4,T:2,B:2}),
        Dark: bbbfly.morph.aegis.medium.img.Image('menu_tree_dark',{L:4,R:4,T:2,B:2})
      },
      SubMenu: {
        Light: bbbfly.morph.aegis.medium.img.Image('menu_sub_light',{L:4,R:4,T:2,B:2}),
        Dark: bbbfly.morph.aegis.medium.img.Image('menu_sub_dark',{L:4,R:4,T:2,B:2})
      }
    },
    Edit: {
      DropDown: {
        Light: bbbfly.morph.aegis.medium.img.Image('edit_drop_light'),
        Dark: bbbfly.morph.aegis.medium.img.Image('edit_drop_dark')
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
  ButtonFrame: {
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
    Input: {
      Light: bbbfly.morph.aegis.medium.img.ButtonFrame('button_input_light'),
      Dark: bbbfly.morph.aegis.medium.img.ButtonFrame('button_input_dark')
    }
  },
  Button: {
    Panel: {
      Light: {
        Center: bbbfly.morph.aegis.medium.img.ButtonImage('button_panel_light')
      },
      Dark: {
        Center: bbbfly.morph.aegis.medium.img.ButtonImage('button_panel_dark')
      }
    },
    Flat: {
      Light: {
        Center: bbbfly.morph.aegis.medium.img.ButtonImage('button_flat_light')
      },
      Dark: {
        Center: bbbfly.morph.aegis.medium.img.ButtonImage('button_flat_dark')
      }
    },
    Check: {
      Light: bbbfly.morph.aegis.medium.img.ButtonImage('button_check_light',4),
      Dark: bbbfly.morph.aegis.medium.img.ButtonImage('button_check_dark',4)
    },
    Radio: {
      Light: bbbfly.morph.aegis.medium.img.ButtonImage('button_radio_light',3),
      Dark: bbbfly.morph.aegis.medium.img.ButtonImage('button_radio_dark',3)
    }
  },
  Icon: {
    Button: {
      Light: bbbfly.morph.aegis.medium.img.ButtonIcon('misc_light'),
      Dark: bbbfly.morph.aegis.medium.img.ButtonIcon('misc_dark')
    }
  }
};