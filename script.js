(function(){
    var script = {
 "mouseWheelEnabled": true,
 "downloadEnabled": false,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "id": "rootPlayer",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "width": "100%",
 "overflow": "visible",
 "paddingRight": 0,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "paddingLeft": 0,
 "backgroundPreloadEnabled": true,
 "minHeight": 20,
 "definitions": [{
 "id": "camera_A89720CD_B75E_2C7B_4191_33D1594E64F2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -158.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "cardboardMenu": "this.Menu_A8012070_B75E_2C29_41E4_B412391872A9",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "BEDROOM 1 VIEW2",
 "id": "panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13",
 "thumbnailUrl": "media/panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13_t.jpg",
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": -47.91,
   "panorama": "this.panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3",
   "yaw": 21.51,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_AEE19CD9_B6CE_741A_419C_102798C146C0"
 ],
 "hfovMax": 130,
 "partial": false
},
{
 "id": "panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "cardboardMenu": "this.Menu_A8012070_B75E_2C29_41E4_B412391872A9",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "BEDROOM 1 VIEW1",
 "id": "panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3",
 "thumbnailUrl": "media/panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3_t.jpg",
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": 21.51,
   "panorama": "this.panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13",
   "yaw": -47.91,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -23.91,
   "panorama": "this.panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5",
   "yaw": 47.37,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_A165B023_B6CA_2C28_41C1_19252D9FE813",
  "this.overlay_A13ACDC1_B6CE_346B_41CB_4754CAD361D5",
  "this.overlay_AD11523F_B736_2C18_41C7_83722A726449"
 ],
 "hfovMax": 130,
 "partial": false
},
{
 "id": "panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "fontColor": "#FFFFFF",
 "fontFamily": "Arial",
 "selectedBackgroundColor": "#202020",
 "class": "Menu",
 "opacity": 0.4,
 "label": "Media",
 "id": "Menu_A8012070_B75E_2C29_41E4_B412391872A9",
 "children": [
  {
   "label": "Livingroom_View02",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "MenuItem"
  },
  {
   "label": "Livingroom_View01",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "MenuItem"
  },
  {
   "label": "Livingroom_View03",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "MenuItem"
  },
  {
   "label": "Kitchen_View02",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "MenuItem"
  },
  {
   "label": "Kitchen_View01",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "MenuItem"
  },
  {
   "label": "BEDROOM 1 VIEW1",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "MenuItem"
  },
  {
   "label": "BEDROOM 1 VIEW2",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "MenuItem"
  },
  {
   "label": "BEDROOM 1 VIEW3",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "MenuItem"
  },
  {
   "label": "BEDROOM 2 VIEW1",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "MenuItem"
  },
  {
   "label": "BEDROOM 2 VIEW2",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "MenuItem"
  },
  {
   "label": "BEDROOM 2 VIEW3",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "MenuItem"
  },
  {
   "label": "BEDROOM3  VIEW1",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "MenuItem"
  },
  {
   "label": "BEDROOM3  VIEW2",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "MenuItem"
  },
  {
   "label": "BEDROOM3  VIEW3",
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "MenuItem"
  },
  {
   "label": "Passage View01",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "MenuItem"
  },
  {
   "label": "Passage View02",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "MenuItem"
  },
  {
   "label": "3000",
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "MenuItem"
  }
 ],
 "rollOverBackgroundColor": "#000000",
 "rollOverOpacity": 0.8,
 "rollOverFontColor": "#FFFFFF",
 "backgroundColor": "#404040",
 "selectedFontColor": "#FFFFFF"
},
{
 "id": "camera_977021A8_B75E_2C38_41E1_BFBAAA2F24FA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -141.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "camera_A85840A2_B75E_2C29_41E2_50EF81A732E9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 52.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "camera_9752E188_B75E_2CF8_41E0_3D67CFF32D3B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 166.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "camera_A8B4B0E2_B75E_2C28_4182_7956B0E45483",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 12.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "camera_A8D99102_B75E_2DE8_418A_780DC89F00A6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 14.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "camera_A8C87119_B75E_2C18_41E0_BE521F594626",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 76.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "cardboardMenu": "this.Menu_A8012070_B75E_2C29_41E4_B412391872A9",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Livingroom_View03",
 "id": "panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC",
 "thumbnailUrl": "media/panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_t.jpg",
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": -127.04,
   "panorama": "this.panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10",
   "yaw": 48.06,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -118.24,
   "panorama": "this.panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE",
   "yaw": -38.36,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -44.38,
   "panorama": "this.panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1",
   "yaw": 144.79,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -41.57,
   "panorama": "this.panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85",
   "yaw": -165.72,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_A2414B6E_B6CA_1C38_419F_835D34C62016",
  "this.overlay_A379FF23_B6F6_1428_41B4_1844FB29E3D5",
  "this.overlay_A39A7903_B6F6_1DE8_41D4_B65945359C88",
  "this.overlay_A07C2EFC_B6D6_7418_41B7_CD7E83CAB6C6"
 ],
 "hfovMax": 130,
 "partial": false
},
{
 "id": "panorama_BD051E6A_B6CA_F438_41E4_3EB54AF07A2D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "camera_97408198_B75E_2C18_41DF_4B679AEAFF17",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -122.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "camera_A842B0AC_B75E_2C39_41C7_D1A4CB2F8F3C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 61.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "camera_97228177_B75E_2C28_41DD_2BF89F8F2C46",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -163.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "camera_A823D08D_B75E_2CFB_41D4_EF53D3FAB5F6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 50.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 9.8,
  "class": "PanoramaCameraPosition",
  "pitch": 1.51
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "camera_9766F1B9_B75E_2C18_41E6_42DC5BFAF6E7",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 143.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "camera_A8AAE0F8_B75E_2C18_41DE_27EC2897687A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 141.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "cardboardMenu": "this.Menu_A8012070_B75E_2C29_41E4_B412391872A9",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "BEDROOM 1 VIEW3",
 "id": "panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5",
 "thumbnailUrl": "media/panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5_t.jpg",
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": 47.37,
   "panorama": "this.panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3",
   "yaw": -23.91,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_AEE6AB45_B6CE_1C68_41D4_24523BB18F83"
 ],
 "hfovMax": 130,
 "partial": false
},
{
 "cardboardMenu": "this.Menu_A8012070_B75E_2C29_41E4_B412391872A9",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "BEDROOM3  VIEW1",
 "id": "panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319",
 "thumbnailUrl": "media/panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319_t.jpg",
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": 3.19,
   "panorama": "this.panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF",
   "yaw": -129.8,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 16.12,
   "panorama": "this.panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA",
   "yaw": -67.4,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -13.55,
   "panorama": "this.panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B",
   "yaw": 57.18,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_ADF39580_B73A_F4E9_41CF_22832C7E448A",
  "this.overlay_ACEC2CD4_B73E_F469_41A7_82A8BFE562BE",
  "this.overlay_AB1A22ED_B73E_2C38_41AA_D96672BE61DE"
 ],
 "hfovMax": 130,
 "partial": false
},
{
 "cardboardMenu": "this.Menu_A8012070_B75E_2C29_41E4_B412391872A9",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Passage View01",
 "id": "panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10",
 "thumbnailUrl": "media/panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10_t.jpg",
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": -167.48,
   "panorama": "this.panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF",
   "yaw": 0.33,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 48.06,
   "panorama": "this.panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC",
   "yaw": -127.04,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_A1AE68C6_B6CA_1C69_41CB_12AEC9C93EF0",
  "this.overlay_AE7EE070_B6CE_6C28_41E6_B2F91A2D8558"
 ],
 "hfovMax": 130,
 "partial": false
},
{
 "cardboardMenu": "this.Menu_A8012070_B75E_2C29_41E4_B412391872A9",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "BEDROOM 2 VIEW1",
 "id": "panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325",
 "thumbnailUrl": "media/panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325_t.jpg",
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": 38.54,
   "panorama": "this.panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1",
   "yaw": -57.52,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -36.5,
   "panorama": "this.panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131",
   "yaw": 59.25,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_AE7B4479_B737_F41B_41C0_506790FAEB02",
  "this.overlay_AEFA1272_B736_2C29_41DF_D7764E780656"
 ],
 "hfovMax": 130,
 "partial": false
},
{
 "id": "panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "camera_A8EF3134_B75E_2C28_41CD_A0A04EF82020",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 112.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85_camera"
  },
  {
   "media": "this.panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1_camera"
  },
  {
   "media": "this.panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_camera"
  },
  {
   "media": "this.panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE_camera"
  },
  {
   "media": "this.panorama_BD051E6A_B6CA_F438_41E4_3EB54AF07A2D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BD051E6A_B6CA_F438_41E4_3EB54AF07A2D_camera"
  },
  {
   "media": "this.panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3_camera"
  },
  {
   "media": "this.panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13_camera"
  },
  {
   "media": "this.panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5_camera"
  },
  {
   "media": "this.panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325_camera"
  },
  {
   "media": "this.panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131_camera"
  },
  {
   "media": "this.panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1_camera"
  },
  {
   "media": "this.panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319_camera"
  },
  {
   "media": "this.panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA_camera"
  },
  {
   "media": "this.panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B_camera"
  },
  {
   "media": "this.panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10_camera"
  },
  {
   "media": "this.panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_camera"
  },
  {
   "media": "this.panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "id": "panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "camera_97337166_B75E_2C28_41C5_3D0206FA2BB0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -176.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "camera_A8FFC124_B75E_2C28_41B7_47589F8B2876",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -132.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "cardboardMenu": "this.Menu_A8012070_B75E_2C29_41E4_B412391872A9",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "BEDROOM 2 VIEW3",
 "id": "panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1",
 "thumbnailUrl": "media/panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1_t.jpg",
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": -57.52,
   "panorama": "this.panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325",
   "yaw": 38.54,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_ADC48693_B73A_34E8_41E1_43CA001D7D28",
  "this.overlay_ADBD281D_B73B_FC18_41E3_04E0935A83C2"
 ],
 "hfovMax": 130,
 "partial": false
},
{
 "cardboardMenu": "this.Menu_A8012070_B75E_2C29_41E4_B412391872A9",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "BEDROOM3  VIEW2",
 "id": "panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA",
 "thumbnailUrl": "media/panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA_t.jpg",
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": -67.4,
   "panorama": "this.panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319",
   "yaw": 16.12,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_AC79DC40_B73E_F469_41DF_C0C25919DB68",
  "this.overlay_ACCE1040_B73E_2C68_41E3_B2C8C539B36B"
 ],
 "hfovMax": 130,
 "partial": false
},
{
 "id": "camera_A8A420ED_B75E_2C38_41D2_CCD77A66DF0A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -131.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "camera_A839B083_B75E_2CEF_41E4_CF1783C79411",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "cardboardMenu": "this.Menu_A8012070_B75E_2C29_41E4_B412391872A9",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD051E6A_B6CA_F438_41E4_3EB54AF07A2D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD051E6A_B6CA_F438_41E4_3EB54AF07A2D_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD051E6A_B6CA_F438_41E4_3EB54AF07A2D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD051E6A_B6CA_F438_41E4_3EB54AF07A2D_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD051E6A_B6CA_F438_41E4_3EB54AF07A2D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD051E6A_B6CA_F438_41E4_3EB54AF07A2D_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD051E6A_B6CA_F438_41E4_3EB54AF07A2D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD051E6A_B6CA_F438_41E4_3EB54AF07A2D_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD051E6A_B6CA_F438_41E4_3EB54AF07A2D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD051E6A_B6CA_F438_41E4_3EB54AF07A2D_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD051E6A_B6CA_F438_41E4_3EB54AF07A2D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD051E6A_B6CA_F438_41E4_3EB54AF07A2D_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD051E6A_B6CA_F438_41E4_3EB54AF07A2D_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Kitchen_View01",
 "id": "panorama_BD051E6A_B6CA_F438_41E4_3EB54AF07A2D",
 "thumbnailUrl": "media/panorama_BD051E6A_B6CA_F438_41E4_3EB54AF07A2D_t.jpg",
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_A45D936D_B6D5_EC38_41C2_26E7DB3D2C18"
 ],
 "hfovMax": 130,
 "partial": false
},
{
 "cardboardMenu": "this.Menu_A8012070_B75E_2C29_41E4_B412391872A9",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "BEDROOM 2 VIEW2",
 "id": "panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131",
 "thumbnailUrl": "media/panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131_t.jpg",
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": 59.25,
   "panorama": "this.panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325",
   "yaw": -36.5,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_AD778F55_B73A_7468_41C8_8A5A13A1F4E3"
 ],
 "hfovMax": 130,
 "partial": false
},
{
 "cardboardMenu": "this.Menu_A8012070_B75E_2C29_41E4_B412391872A9",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "BEDROOM3  VIEW3",
 "id": "panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B",
 "thumbnailUrl": "media/panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B_t.jpg",
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": 57.18,
   "panorama": "this.panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319",
   "yaw": -13.55,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_AC0C5369_B73D_EC38_41E4_C905A424D8B7"
 ],
 "hfovMax": 130,
 "partial": false
},
{
 "id": "camera_971D0145_B75E_2C68_41CE_A2EFC2901BC2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -35.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "camera_A87260B7_B75E_2C17_41E4_6F1595B16EBE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 135.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "camera_970D2155_B75E_2C68_417F_4497920614BB",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 177.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "camera_A867B0C1_B75E_2C6B_41CE_955491942DED",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 138.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "cardboardMenu": "this.Menu_A8012070_B75E_2C29_41E4_B412391872A9",
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "3000",
 "id": "panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D",
 "thumbnailUrl": "media/panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "partial": false
},
{
 "cardboardMenu": "this.Menu_A8012070_B75E_2C29_41E4_B412391872A9",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Passage View02",
 "id": "panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF",
 "thumbnailUrl": "media/panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_t.jpg",
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 0.33,
   "panorama": "this.panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10",
   "yaw": -167.48,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -129.8,
   "panorama": "this.panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319",
   "yaw": 3.19,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_AEA954A6_B6CA_3428_41E4_5AB0C5B3D6B0",
  "this.overlay_AE7A8FE4_B6CA_1429_41DB_B368AFB24525",
  "this.overlay_AEB81B92_B6CA_1CE8_41D8_E25FA6817A3D",
  "this.overlay_AECAEA88_B735_FCF8_41E1_9F733FFF35EC"
 ],
 "hfovMax": 130,
 "partial": false
},
{
 "id": "panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85_camera"
  },
  {
   "media": "this.panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1_camera"
  },
  {
   "media": "this.panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_camera"
  },
  {
   "media": "this.panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE_camera"
  },
  {
   "media": "this.panorama_BD051E6A_B6CA_F438_41E4_3EB54AF07A2D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BD051E6A_B6CA_F438_41E4_3EB54AF07A2D_camera"
  },
  {
   "media": "this.panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3_camera"
  },
  {
   "media": "this.panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13_camera"
  },
  {
   "media": "this.panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5_camera"
  },
  {
   "media": "this.panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325_camera"
  },
  {
   "media": "this.panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131_camera"
  },
  {
   "media": "this.panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1_camera"
  },
  {
   "media": "this.panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319_camera"
  },
  {
   "media": "this.panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA_camera"
  },
  {
   "media": "this.panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B_camera"
  },
  {
   "media": "this.panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10_camera"
  },
  {
   "media": "this.panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_camera"
  },
  {
   "media": "this.panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AA16FC6C_B75D_F438_41DD_B71A0652C30D_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "id": "panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "camera_979621C9_B75E_2C78_41B6_1EAEB64287AD",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 132.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "cardboardMenu": "this.Menu_A8012070_B75E_2C29_41E4_B412391872A9",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Livingroom_View02",
 "id": "panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85",
 "thumbnailUrl": "media/panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85_t.jpg",
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": -165.72,
   "panorama": "this.panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC",
   "yaw": -41.57,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -103.17,
   "panorama": "this.panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1",
   "yaw": -2.43,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_A61BB1B3_B6D6_EC2F_41D7_E27A289F54F4",
  "this.overlay_A5055D70_B6D6_1428_41DD_C405FBF6F185"
 ],
 "hfovMax": 130,
 "partial": false
},
{
 "cardboardMenu": "this.Menu_A8012070_B75E_2C29_41E4_B412391872A9",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Livingroom_View01",
 "id": "panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1",
 "thumbnailUrl": "media/panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1_t.jpg",
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": 144.79,
   "panorama": "this.panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC",
   "yaw": -44.38,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -2.43,
   "panorama": "this.panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85",
   "yaw": -103.17,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_A2EC2B91_B6CA_1CE8_41B6_FB4426E69F7E",
  "this.overlay_A24EBC55_B6CB_F46B_41DC_FBDB92485302"
 ],
 "hfovMax": 130,
 "partial": false
},
{
 "class": "PanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "gyroscopeEnabled": true,
 "touchControlMode": "drag_rotation",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "viewerArea": "this.MainViewer",
 "mouseControlMode": "drag_acceleration"
},
{
 "id": "camera_A886C0D7_B75E_2C68_41DF_81E87737E4D4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 156.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "camera_978421D9_B75E_2C1B_41CD_E10AB49529DB",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -120.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "camera_A8556097_B75E_2C17_41E5_1B5782C2BA96",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 122.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "cardboardMenu": "this.Menu_A8012070_B75E_2C29_41E4_B412391872A9",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Kitchen_View02",
 "id": "panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE",
 "thumbnailUrl": "media/panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE_t.jpg",
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD051E6A_B6CA_F438_41E4_3EB54AF07A2D",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -38.36,
   "panorama": "this.panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC",
   "yaw": -118.24,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_A744838F_B6D6_ECF7_41D3_03DA5474104F",
  "this.overlay_A51FC576_B6CA_1428_41D3_11686CBBBA71"
 ],
 "hfovMax": 130,
 "partial": false
},
{
 "toolTipFontSize": 13,
 "playbackBarRight": 0,
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipBackgroundColor": "#000000",
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "toolTipPaddingBottom": 7,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipPaddingLeft": 10,
 "playbackBarHeadBorderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "paddingBottom": 0,
 "playbackBarBorderSize": 0,
 "height": "100%",
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontWeight": "normal",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipFontStyle": "normal",
 "class": "ViewerArea",
 "firstTransitionDuration": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowOpacity": 0,
 "toolTipTextShadowColor": "#000000",
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "propagateClick": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontFamily": "Georgia",
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "toolTipPaddingRight": 10,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipBorderColor": "#767676",
 "toolTipPaddingTop": 7,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "top": 0,
 "playbackBarLeft": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "toolTipOpacity": 0.5,
 "paddingTop": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "width": 115.05,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "right": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": 641,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "data": {
  "name": "--SETTINGS"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.Label_0DD14F09_1744_0507_41AA_D8475423214A",
  "this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2"
 ],
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "horizontalAlign": "left",
 "width": 573,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "overflow": "visible",
 "top": 15,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 133,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "data": {
  "name": "--STICKER"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.64,
 "scrollBarWidth": 10,
 "right": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "overflow": "visible",
 "borderSize": 0,
 "borderRadius": 0,
 "height": 118,
 "bottom": 0,
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingBottom": 0,
 "layout": "absolute",
 "minWidth": 1,
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "data": {
  "name": "--MENU"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "bottom": "0%",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "visible": false,
 "creationPolicy": "inAdvance",
 "scrollBarColor": "#000000",
 "propagateClick": true,
 "data": {
  "name": "--INFO photo"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "bottom": "0%",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "visible": false,
 "creationPolicy": "inAdvance",
 "scrollBarColor": "#000000",
 "propagateClick": true,
 "data": {
  "name": "--INFO photoalbum"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "bottom": "0%",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "visible": false,
 "creationPolicy": "inAdvance",
 "scrollBarColor": "#000000",
 "propagateClick": true,
 "data": {
  "name": "--PANORAMA LIST"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "bottom": "0%",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "visible": false,
 "creationPolicy": "inAdvance",
 "scrollBarColor": "#000000",
 "propagateClick": true,
 "data": {
  "name": "--LOCATION"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "bottom": "0%",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "visible": false,
 "creationPolicy": "inAdvance",
 "scrollBarColor": "#000000",
 "propagateClick": true,
 "data": {
  "name": "--FLOORPLAN"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "bottom": "0%",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "visible": false,
 "creationPolicy": "inAdvance",
 "scrollBarColor": "#000000",
 "propagateClick": true,
 "data": {
  "name": "--PHOTOALBUM + text"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "bottom": "0%",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "visible": false,
 "creationPolicy": "inAdvance",
 "scrollBarColor": "#000000",
 "propagateClick": true,
 "data": {
  "name": "--PHOTOALBUM"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "bottom": "0%",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "visible": false,
 "creationPolicy": "inAdvance",
 "scrollBarColor": "#04A3E1",
 "propagateClick": true,
 "data": {
  "name": "--REALTOR"
 }
},
{
 "cursor": "hand",
 "shadow": false,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "maxHeight": 58,
 "width": 58,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 58,
 "transparencyActive": true,
 "paddingBottom": 0,
 "mode": "toggle",
 "minWidth": 1,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "class": "IconButton",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "cursor": "hand",
 "shadow": false,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "maxHeight": 58,
 "width": 58,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 58,
 "transparencyActive": true,
 "paddingBottom": 0,
 "mode": "toggle",
 "minWidth": 1,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "class": "IconButton",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3, this.camera_979621C9_B75E_2C78_41B6_1EAEB64287AD); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": 21.51,
   "hfov": 9.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13_0_HS_0_0_0_map.gif",
      "width": 20,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13_0_HS_0_0.png",
      "width": 77,
      "height": 60,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.21,
   "yaw": 21.51,
   "hfov": 9.93
  }
 ],
 "id": "overlay_AEE19CD9_B6CE_741A_419C_102798C146C0"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_BDFB2C8C_B6CA_14F9_41A6_093A4C8D2B13, this.camera_A89720CD_B75E_2C7B_4191_33D1594E64F2); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": -47.91,
   "hfov": 8.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.63,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3_0_HS_0_0.png",
      "width": 76,
      "height": 81,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.63,
   "yaw": -47.91,
   "hfov": 8.69
  }
 ],
 "id": "overlay_A165B023_B6CA_2C28_41C1_19252D9FE813"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5, this.camera_A886C0D7_B75E_2C68_41DF_81E87737E4D4); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": 47.37,
   "hfov": 8.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3_0_HS_1_0.png",
      "width": 73,
      "height": 73,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.67,
   "yaw": 47.37,
   "hfov": 8.29
  }
 ],
 "id": "overlay_A13ACDC1_B6CE_346B_41CB_4754CAD361D5"
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_AB5CEA2B_B73B_FC38_41E2_E64D6819E772",
   "yaw": -97.39,
   "hfov": 15.24,
   "pitch": -32.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "yaw": -97.39,
   "hfov": 15.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AD11523F_B736_2C18_41C7_83722A726449"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE, this.camera_A842B0AC_B75E_2C39_41C7_D1A4CB2F8F3C); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "yaw": -38.36,
   "hfov": 14.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AF08AEE1_B6FA_3428_41E2_833742969C44",
   "yaw": -38.36,
   "hfov": 14.48,
   "pitch": -36.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A2414B6E_B6CA_1C38_419F_835D34C62016"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1, this.camera_A87260B7_B75E_2C17_41E4_6F1595B16EBE); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "yaw": 144.79,
   "hfov": 13.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AF08EEE1_B6FA_3428_41C1_52960F75283E",
   "yaw": 144.79,
   "hfov": 13.11,
   "pitch": -43.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A379FF23_B6F6_1428_41B4_1844FB29E3D5"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85, this.camera_A867B0C1_B75E_2C6B_41CE_955491942DED); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "yaw": -165.72,
   "hfov": 15.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.93,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AF080EE1_B6FA_3428_41D8_5F4EAAD12010",
   "yaw": -165.72,
   "hfov": 15.11,
   "pitch": -32.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A39A7903_B6F6_1DE8_41D4_B65945359C88"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10, this.camera_A85840A2_B75E_2C29_41E2_50EF81A732E9); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06b"
 },
 "maps": [
  {
   "yaw": 48.06,
   "hfov": 14.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_0_HS_3_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AB5C0A2A_B73B_FC38_41D4_FD48BECB16E5",
   "yaw": 48.06,
   "hfov": 14.29,
   "pitch": -37.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A07C2EFC_B6D6_7418_41B7_CD7E83CAB6C6"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3, this.camera_A8FFC124_B75E_2C28_41B7_47589F8B2876); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": -23.91,
   "hfov": 7.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5_0_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.54,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDFBD0B6_B6CA_2C29_41CB_2A98EBCB9CC5_0_HS_0_0.png",
      "width": 54,
      "height": 47,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.54,
   "yaw": -23.91,
   "hfov": 7.07
  }
 ],
 "id": "overlay_AEE6AB45_B6CE_1C68_41D4_24523BB18F83"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF, this.camera_97337166_B75E_2C28_41C5_3D0206FA2BB0); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "yaw": -129.8,
   "hfov": 8.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AB5A5A2C_B73B_FC38_41D5_00B24685789C",
   "yaw": -129.8,
   "hfov": 8.97,
   "pitch": -35.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ADF39580_B73A_F4E9_41CF_22832C7E448A"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA, this.camera_97228177_B75E_2C28_41DD_2BF89F8F2C46); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": -67.4,
   "hfov": 7.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319_0_HS_1_0.png",
      "width": 70,
      "height": 66,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.2,
   "yaw": -67.4,
   "hfov": 7.89
  }
 ],
 "id": "overlay_ACEC2CD4_B73E_F469_41A7_82A8BFE562BE"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B, this.camera_9752E188_B75E_2CF8_41E0_3D67CFF32D3B); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": 57.18,
   "hfov": 6.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319_0_HS_2_0_0_map.gif",
      "width": 18,
      "height": 15,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.72,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319_0_HS_2_0.png",
      "width": 57,
      "height": 49,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.72,
   "yaw": 57.18,
   "hfov": 6.21
  }
 ],
 "id": "overlay_AB1A22ED_B73E_2C38_41AA_D96672BE61DE"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC, this.camera_A8A420ED_B75E_2C38_41D2_CCD77A66DF0A); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "yaw": -127.04,
   "hfov": 14.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AB596A2D_B73B_FC38_41D3_11136F4CF300",
   "yaw": -127.04,
   "hfov": 14.98,
   "pitch": -33.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A1AE68C6_B6CA_1C69_41CB_12AEC9C93EF0"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF, this.camera_A8B4B0E2_B75E_2C28_4182_7956B0E45483); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06b"
 },
 "maps": [
  {
   "yaw": 0.33,
   "hfov": 14.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10_1_HS_1_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AB59AA2E_B73B_FC38_41DB_99804D3E545C",
   "yaw": 0.33,
   "hfov": 14.19,
   "pitch": -37.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AE7EE070_B6CE_6C28_41E6_B2F91A2D8558"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1, this.camera_977021A8_B75E_2C38_41E1_BFBAAA2F24FA); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": -57.52,
   "hfov": 8.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325_0_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325_0_HS_0_0.png",
      "width": 72,
      "height": 62,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.95,
   "yaw": -57.52,
   "hfov": 8.75
  }
 ],
 "id": "overlay_AE7B4479_B737_F41B_41C0_506790FAEB02"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131, this.camera_9766F1B9_B75E_2C18_41E6_42DC5BFAF6E7); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": 59.25,
   "hfov": 8.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325_0_HS_1_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325_0_HS_1_0.png",
      "width": 71,
      "height": 66,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.01,
   "yaw": 59.25,
   "hfov": 8.45
  }
 ],
 "id": "overlay_AEFA1272_B736_2C29_41DF_D7764E780656"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325, this.camera_A8556097_B75E_2C17_41E5_1B5782C2BA96); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": 38.54,
   "hfov": 7.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1_0_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.28,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1_0_HS_0_0.png",
      "width": 63,
      "height": 55,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.28,
   "yaw": 38.54,
   "hfov": 7.76
  }
 ],
 "id": "overlay_ADC48693_B73A_34E8_41E1_43CA001D7D28"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "yaw": 66.4,
   "hfov": 16.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AB5A0A2C_B73B_FC38_41E1_EDE0C9BA655D",
   "yaw": 66.4,
   "hfov": 16.46,
   "pitch": -23.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ADBD281D_B73B_FC18_41E3_04E0935A83C2"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319, this.camera_A8EF3134_B75E_2C28_41CD_A0A04EF82020); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": 16.12,
   "hfov": 8.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA_0_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.25,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA_0_HS_0_0.png",
      "width": 62,
      "height": 54,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.25,
   "yaw": 16.12,
   "hfov": 8.26
  }
 ],
 "id": "overlay_AC79DC40_B73E_F469_41DF_C0C25919DB68"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "yaw": 41.14,
   "hfov": 11.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AB5AFA2D_B73B_FC38_41B9_48DFB5F46CC3",
   "yaw": 41.14,
   "hfov": 11.13,
   "pitch": -17.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ACCE1040_B73E_2C68_41E3_B2C8C539B36B"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "yaw": -137.84,
   "hfov": 15.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD051E6A_B6CA_F438_41E4_3EB54AF07A2D_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.93,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AF0BAEE1_B6FA_3428_41E5_3004F032CA52",
   "yaw": -137.84,
   "hfov": 15.11,
   "pitch": -32.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A45D936D_B6D5_EC38_41C2_26E7DB3D2C18"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_BDE5B4BC_B6CA_3418_41C4_1C79BC5BA325, this.camera_978421D9_B75E_2C1B_41CD_E10AB49529DB); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": -36.5,
   "hfov": 9.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131_0_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.58,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDE4E8DA_B6CA_3C18_41D7_72E1411E9131_0_HS_0_0.png",
      "width": 74,
      "height": 64,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.58,
   "yaw": -36.5,
   "hfov": 9.29
  }
 ],
 "id": "overlay_AD778F55_B73A_7468_41C8_8A5A13A1F4E3"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319, this.camera_97408198_B75E_2C18_41DF_4B679AEAFF17); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": -13.55,
   "hfov": 8.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B_0_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDE47AAC_B6CA_1C38_41A4_C20FB933061B_0_HS_0_0.png",
      "width": 65,
      "height": 57,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.45,
   "yaw": -13.55,
   "hfov": 8.64
  }
 ],
 "id": "overlay_AC0C5369_B73D_EC38_41E4_C905A424D8B7"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06b"
 },
 "maps": [
  {
   "yaw": 83.74,
   "hfov": 11.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_1_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -49.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AB59DA2E_B73B_FC38_41DE_CBC9F18EA651",
   "yaw": 83.74,
   "hfov": 11.81,
   "pitch": -49.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AEA954A6_B6CA_3428_41E4_5AB0C5B3D6B0"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319, this.camera_A823D08D_B75E_2CFB_41D4_EF53D3FAB5F6); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "yaw": 3.19,
   "hfov": 8.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AB580A2E_B73B_FC38_41D1_9BAB6EB2C444",
   "yaw": 3.19,
   "hfov": 8.8,
   "pitch": -15.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AE7A8FE4_B6CA_1429_41DB_B368AFB24525"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "maps": [
  {
   "yaw": -5.98,
   "hfov": 9.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_1_HS_2_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.66,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AB585A2E_B73B_FC38_41DC_0C0D584A460D",
   "yaw": -5.98,
   "hfov": 9.65,
   "pitch": -25.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_AEB81B92_B6CA_1CE8_41D8_E25FA6817A3D"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10, this.camera_A839B083_B75E_2CEF_41E4_CF1783C79411); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "yaw": -167.48,
   "hfov": 10.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_1_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -54.79,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AB588A2E_B73B_FC38_41AA_D4CB53EB8BC8",
   "yaw": -167.48,
   "hfov": 10.38,
   "pitch": -54.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AECAEA88_B735_FCF8_41E1_9F733FFF35EC"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC, this.camera_A8D99102_B75E_2DE8_418A_780DC89F00A6); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06b"
 },
 "maps": [
  {
   "yaw": -41.57,
   "hfov": 16.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A5E0647A_B6D5_F419_41D7_BF5A2F583B1C",
   "yaw": -41.57,
   "hfov": 16.51,
   "pitch": -23.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A61BB1B3_B6D6_EC2F_41D7_E27A289F54F4"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1, this.camera_A8C87119_B75E_2C18_41E0_BE521F594626); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "yaw": -2.43,
   "hfov": 14.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AF0A1EE0_B6FA_3428_41D3_0A4049343359",
   "yaw": -2.43,
   "hfov": 14.98,
   "pitch": -33.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A5055D70_B6D6_1428_41DD_C405FBF6F185"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85, this.camera_970D2155_B75E_2C68_417F_4497920614BB); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "yaw": -103.17,
   "hfov": 15.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AF0BCEE1_B6FA_3428_41AB_1ECD4C7261EE",
   "yaw": -103.17,
   "hfov": 15.44,
   "pitch": -30.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A2EC2B91_B6CA_1CE8_41B6_FB4426E69F7E"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC, this.camera_971D0145_B75E_2C68_41CE_A2EFC2901BC2); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "yaw": -44.38,
   "hfov": 15.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AF0B1EE1_B6FA_3428_41B5_E1E3929B6549",
   "yaw": -44.38,
   "hfov": 15.83,
   "pitch": -28.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A24EBC55_B6CB_F46B_41DC_FBDB92485302"
},
{
 "cursor": "hand",
 "shadow": false,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "maxHeight": 58,
 "width": 58,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 58,
 "transparencyActive": true,
 "paddingBottom": 0,
 "mode": "push",
 "minWidth": 1,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "verticalAlign": "middle",
 "class": "IconButton",
 "visible": false,
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "cursor": "hand",
 "shadow": false,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "maxHeight": 37,
 "width": 100,
 "backgroundOpacity": 0,
 "right": 30,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 75,
 "bottom": 8,
 "transparencyActive": true,
 "paddingBottom": 0,
 "mode": "push",
 "minWidth": 1,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "class": "IconButton",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "cursor": "hand",
 "shadow": false,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "maxHeight": 58,
 "width": 58,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 58,
 "transparencyActive": true,
 "paddingBottom": 0,
 "mode": "toggle",
 "minWidth": 1,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "class": "IconButton",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "cursor": "hand",
 "shadow": false,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "maxHeight": 58,
 "width": 58,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 58,
 "transparencyActive": true,
 "paddingBottom": 0,
 "mode": "toggle",
 "minWidth": 1,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "class": "IconButton",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "yaw": 20.18,
   "hfov": 13.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AF059EE0_B6FA_3428_41DB_FEAB6B1FBCA7",
   "yaw": 20.18,
   "hfov": 13.06,
   "pitch": -43.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A744838F_B6D6_ECF7_41D3_03DA5474104F"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC, this.camera_A8AAE0F8_B75E_2C18_41DE_27EC2897687A); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "yaw": -118.24,
   "hfov": 14.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AF0ABEE0_B6FA_3428_41E0_AD9F242F7A2D",
   "yaw": -118.24,
   "hfov": 14.66,
   "pitch": -35.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A51FC576_B6CA_1428_41D3_11686CBBBA71"
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "width": 110,
 "backgroundOpacity": 0,
 "overflow": "visible",
 "right": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": 110,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "verticalAlign": "middle",
 "gap": 10,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "data": {
  "name": "button menu sup"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "width": "91.304%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "right": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "85.959%",
 "bottom": "0%",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "gap": 3,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "visible": false,
 "propagateClick": true,
 "shadow": false
},
{
 "paddingTop": 0,
 "shadow": false,
 "id": "Label_0DD14F09_1744_0507_41AA_D8475423214A",
 "left": 0,
 "horizontalAlign": "left",
 "width": 454,
 "textShadowOpacity": 1,
 "backgroundOpacity": 0,
 "fontFamily": "Bebas Neue Bold",
 "paddingRight": 0,
 "textShadowVerticalLength": 0,
 "paddingLeft": 0,
 "textShadowColor": "#000000",
 "minHeight": 1,
 "text": "LOREM IPSUM",
 "top": 5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 86,
 "paddingBottom": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "fontStyle": "normal",
 "fontSize": 90,
 "textShadowBlurRadius": 10,
 "class": "Label",
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "fontWeight": "bold",
 "textShadowHorizontalLength": 0,
 "propagateClick": true,
 "data": {
  "name": "text 1"
 }
},
{
 "paddingTop": 0,
 "shadow": false,
 "id": "Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2",
 "left": 0,
 "horizontalAlign": "left",
 "width": 388,
 "textShadowOpacity": 1,
 "backgroundOpacity": 0,
 "fontFamily": "Bebas Neue Book",
 "paddingRight": 0,
 "textShadowVerticalLength": 0,
 "paddingLeft": 0,
 "textShadowColor": "#000000",
 "minHeight": 1,
 "text": "dolor sit amet, consectetur ",
 "borderSize": 0,
 "borderRadius": 0,
 "height": 46,
 "bottom": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "fontStyle": "normal",
 "fontSize": 41,
 "textShadowBlurRadius": 10,
 "class": "Label",
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "fontWeight": "normal",
 "textShadowHorizontalLength": 0,
 "propagateClick": true,
 "data": {
  "name": "text 2"
 }
},
{
 "shadow": false,
 "maxWidth": 3000,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "maxHeight": 2,
 "backgroundOpacity": 0,
 "right": "0%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 2,
 "bottom": 53,
 "paddingBottom": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "class": "Image",
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "propagateClick": true,
 "data": {
  "name": "white line"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "horizontalAlign": "left",
 "width": 1199,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 30,
 "minHeight": 1,
 "overflow": "scroll",
 "borderSize": 0,
 "borderRadius": 0,
 "height": 51,
 "bottom": "0%",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "horizontal",
 "verticalAlign": "middle",
 "gap": 3,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "data": {
  "name": "-button set container"
 }
},
{
 "shadowBlurRadius": 25,
 "shadow": true,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "right": "10%",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "overflow": "scroll",
 "top": "5%",
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "bottom": "5%",
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "layout": "horizontal",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 }
},
{
 "paddingTop": 20,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "right": "10%",
 "paddingRight": 20,
 "paddingLeft": 0,
 "minHeight": 1,
 "overflow": "visible",
 "top": "5%",
 "borderSize": 0,
 "borderRadius": 0,
 "bottom": "80%",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "shadow": false
},
{
 "shadowBlurRadius": 25,
 "shadow": true,
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "right": "10%",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "overflow": "scroll",
 "top": "5%",
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "bottom": "5%",
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "layout": "horizontal",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 }
},
{
 "paddingTop": 20,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "right": "10%",
 "paddingRight": 20,
 "paddingLeft": 0,
 "minHeight": 1,
 "overflow": "visible",
 "top": "5%",
 "borderSize": 0,
 "borderRadius": 0,
 "bottom": "80%",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "shadow": false
},
{
 "shadowBlurRadius": 25,
 "shadow": true,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "right": "15%",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "overflow": "visible",
 "top": "7%",
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "bottom": "7%",
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "layout": "vertical",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 }
},
{
 "shadowBlurRadius": 25,
 "shadow": true,
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "right": "10%",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "overflow": "scroll",
 "top": "5%",
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "bottom": "5%",
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "layout": "horizontal",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 }
},
{
 "paddingTop": 20,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "right": "10%",
 "paddingRight": 20,
 "paddingLeft": 0,
 "minHeight": 1,
 "overflow": "visible",
 "top": "5%",
 "borderSize": 0,
 "borderRadius": 0,
 "bottom": "80%",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "shadow": false
},
{
 "shadowBlurRadius": 25,
 "shadow": true,
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "right": "15%",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "overflow": "visible",
 "top": "7%",
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "bottom": "7%",
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "layout": "vertical",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 }
},
{
 "shadowBlurRadius": 25,
 "shadow": true,
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "right": "15%",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "overflow": "visible",
 "top": "7%",
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "bottom": "7%",
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "layout": "vertical",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 }
},
{
 "shadowBlurRadius": 25,
 "shadow": true,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "right": "15%",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "overflow": "visible",
 "top": "7%",
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "bottom": "7%",
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "layout": "vertical",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 }
},
{
 "shadowBlurRadius": 25,
 "shadow": true,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "right": "10%",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "overflow": "scroll",
 "top": "5%",
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "bottom": "5%",
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "layout": "horizontal",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 }
},
{
 "paddingTop": 20,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "right": "10%",
 "paddingRight": 20,
 "paddingLeft": 0,
 "minHeight": 1,
 "overflow": "visible",
 "top": "5%",
 "borderSize": 0,
 "borderRadius": 0,
 "bottom": "80%",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "shadow": false
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_AB5CEA2B_B73B_FC38_41E2_E64D6819E772",
 "levels": [
  {
   "url": "media/panorama_BD73283D_B6CA_1C18_41D9_8CA47C1257B3_0_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF08AEE1_B6FA_3428_41E2_833742969C44",
 "levels": [
  {
   "url": "media/panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF08EEE1_B6FA_3428_41C1_52960F75283E",
 "levels": [
  {
   "url": "media/panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF080EE1_B6FA_3428_41D8_5F4EAAD12010",
 "levels": [
  {
   "url": "media/panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_0_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_AB5C0A2A_B73B_FC38_41D4_FD48BECB16E5",
 "levels": [
  {
   "url": "media/panorama_BDE676EF_B6CA_1437_41E2_A63A52170AAC_0_HS_3_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_AB5A5A2C_B73B_FC38_41D5_00B24685789C",
 "levels": [
  {
   "url": "media/panorama_BDE4824D_B6CA_2C7B_41CF_B22D0301B319_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_AB596A2D_B73B_FC38_41D3_11136F4CF300",
 "levels": [
  {
   "url": "media/panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_AB59AA2E_B73B_FC38_41DB_99804D3E545C",
 "levels": [
  {
   "url": "media/panorama_A1F56238_B6D6_6C18_41CB_A7DE668FCC10_1_HS_1_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_AB5A0A2C_B73B_FC38_41E1_EDE0C9BA655D",
 "levels": [
  {
   "url": "media/panorama_BDFBFCF7_B6CA_3428_41BA_6F23674706A1_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_AB5AFA2D_B73B_FC38_41B9_48DFB5F46CC3",
 "levels": [
  {
   "url": "media/panorama_BDFB466E_B6CA_1438_41D5_D6AABEC508AA_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF0BAEE1_B6FA_3428_41E5_3004F032CA52",
 "levels": [
  {
   "url": "media/panorama_BD051E6A_B6CA_F438_41E4_3EB54AF07A2D_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_AB59DA2E_B73B_FC38_41DE_CBC9F18EA651",
 "levels": [
  {
   "url": "media/panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_1_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_AB580A2E_B73B_FC38_41D1_9BAB6EB2C444",
 "levels": [
  {
   "url": "media/panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_AB585A2E_B73B_FC38_41DC_0C0D584A460D",
 "levels": [
  {
   "url": "media/panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_1_HS_2_0.png",
   "width": 520,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_AB588A2E_B73B_FC38_41AA_D4CB53EB8BC8",
 "levels": [
  {
   "url": "media/panorama_A37C372F_B6D6_7438_41C9_E0005F75C4AF_1_HS_3_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_A5E0647A_B6D5_F419_41D7_BF5A2F583B1C",
 "levels": [
  {
   "url": "media/panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85_0_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF0A1EE0_B6FA_3428_41D3_0A4049343359",
 "levels": [
  {
   "url": "media/panorama_BDDF04E4_B6CA_3428_41DB_DACEAAB04B85_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF0BCEE1_B6FA_3428_41AB_1ECD4C7261EE",
 "levels": [
  {
   "url": "media/panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF0B1EE1_B6FA_3428_41B5_E1E3929B6549",
 "levels": [
  {
   "url": "media/panorama_BDE6B2CA_B6CA_EC78_41DE_C6541E1CA4E1_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF059EE0_B6FA_3428_41DB_FEAB6B1FBCA7",
 "levels": [
  {
   "url": "media/panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF0ABEE0_B6FA_3428_41E0_AD9F242F7A2D",
 "levels": [
  {
   "url": "media/panorama_BD272FF0_B6CA_1428_41E1_3BA58F52C5EE_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 24
},
{
 "cursor": "hand",
 "shadow": false,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "maxHeight": 60,
 "width": 60,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 60,
 "transparencyActive": true,
 "paddingBottom": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "mode": "toggle",
 "minWidth": 1,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "class": "IconButton",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "image button menu"
 }
},
{
 "cursor": "hand",
 "shadow": false,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "maxHeight": 58,
 "width": 58,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 58,
 "transparencyActive": true,
 "paddingBottom": 0,
 "click": "this.shareTwitter(window.location.href)",
 "mode": "push",
 "minWidth": 1,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "verticalAlign": "middle",
 "class": "IconButton",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "cursor": "hand",
 "shadow": false,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "maxHeight": 58,
 "width": 58,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 58,
 "transparencyActive": true,
 "paddingBottom": 0,
 "click": "this.shareFacebook(window.location.href)",
 "mode": "push",
 "minWidth": 1,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "verticalAlign": "middle",
 "class": "IconButton",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "shadowBlurRadius": 15,
 "shadow": false,
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "horizontalAlign": "center",
 "width": 120,
 "backgroundOpacity": 0,
 "fontFamily": "Montserrat",
 "paddingRight": 0,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "iconWidth": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 0,
 "minHeight": 1,
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "rollOverShadow": false,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 40,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "HOUSE INFO",
 "backgroundColorRatios": [
  0
 ],
 "mode": "push",
 "minWidth": 1,
 "shadowColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "gap": 5,
 "fontStyle": "normal",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "textDecoration": "none",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "fontWeight": "bold",
 "fontSize": 12,
 "propagateClick": true,
 "data": {
  "name": "Button house info"
 }
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "shadowBlurRadius": 15,
 "shadow": false,
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "horizontalAlign": "center",
 "width": 130,
 "backgroundOpacity": 0,
 "fontFamily": "Montserrat",
 "paddingRight": 0,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "minHeight": 1,
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "borderSize": 0,
 "borderRadius": 0,
 "height": 40,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "PANORAMA LIST",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "minWidth": 1,
 "shadowColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "gap": 5,
 "fontStyle": "normal",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "textDecoration": "none",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "fontSize": 12,
 "propagateClick": true,
 "data": {
  "name": "Button panorama list"
 }
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "shadowBlurRadius": 15,
 "shadow": false,
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "horizontalAlign": "center",
 "width": 90,
 "backgroundOpacity": 0,
 "fontFamily": "Montserrat",
 "paddingRight": 0,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "minHeight": 1,
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "borderSize": 0,
 "borderRadius": 0,
 "height": 40,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "LOCATION",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "minWidth": 1,
 "shadowColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "gap": 5,
 "fontStyle": "normal",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "textDecoration": "none",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "fontSize": 12,
 "propagateClick": true,
 "data": {
  "name": "Button location"
 }
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "shadowBlurRadius": 15,
 "shadow": false,
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "horizontalAlign": "center",
 "width": 103,
 "backgroundOpacity": 0,
 "fontFamily": "Montserrat",
 "paddingRight": 0,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "minHeight": 1,
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "borderSize": 0,
 "borderRadius": 0,
 "height": 40,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "FLOORPLAN",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "minWidth": 1,
 "shadowColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "gap": 5,
 "fontStyle": "normal",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "textDecoration": "none",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "fontSize": 12,
 "propagateClick": true,
 "data": {
  "name": "Button floorplan"
 }
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "shadowBlurRadius": 15,
 "shadow": false,
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "horizontalAlign": "center",
 "width": 112,
 "backgroundOpacity": 0,
 "fontFamily": "Montserrat",
 "paddingRight": 0,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "minHeight": 1,
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "borderSize": 0,
 "borderRadius": 0,
 "height": 40,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "PHOTOALBUM",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "minWidth": 1,
 "shadowColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "gap": 5,
 "fontStyle": "normal",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "textDecoration": "none",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "fontSize": 12,
 "propagateClick": true,
 "data": {
  "name": "Button photoalbum"
 }
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "shadowBlurRadius": 15,
 "shadow": false,
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "horizontalAlign": "center",
 "width": 90,
 "backgroundOpacity": 0,
 "fontFamily": "Montserrat",
 "paddingRight": 0,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "minHeight": 1,
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "borderSize": 0,
 "borderRadius": 0,
 "height": 40,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "REALTOR",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "minWidth": 1,
 "shadowColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "gap": 5,
 "fontStyle": "normal",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "textDecoration": "none",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "fontSize": 12,
 "propagateClick": true,
 "data": {
  "name": "Button realtor"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "width": "85%",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "verticalAlign": "middle",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "-left"
 }
},
{
 "paddingTop": 20,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "width": "50%",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "paddingRight": 50,
 "paddingLeft": 50,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingBottom": 20,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.51,
 "contentOpaque": false,
 "minWidth": 460,
 "layout": "vertical",
 "verticalAlign": "top",
 "gap": 0,
 "scrollBarColor": "#0069A3",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "-right"
 }
},
{
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "X"
 },
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "maxHeight": 60,
 "width": "25%",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 50,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "75%",
 "transparencyActive": false,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "mode": "push",
 "minWidth": 50,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "class": "IconButton",
 "paddingTop": 0,
 "propagateClick": false,
 "shadow": false
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "width": "85%",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "verticalAlign": "middle",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "-left"
 }
},
{
 "paddingTop": 20,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "width": "50%",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "paddingRight": 50,
 "paddingLeft": 50,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingBottom": 20,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.51,
 "contentOpaque": false,
 "minWidth": 460,
 "layout": "vertical",
 "verticalAlign": "top",
 "gap": 0,
 "scrollBarColor": "#0069A3",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "-right"
 }
},
{
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "X"
 },
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "maxHeight": 60,
 "width": "25%",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 50,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "75%",
 "transparencyActive": false,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "mode": "push",
 "minWidth": 50,
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "class": "IconButton",
 "paddingTop": 0,
 "propagateClick": false,
 "shadow": false
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 140,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "header"
 }
},
{
 "itemThumbnailBorderRadius": 0,
 "itemLabelFontFamily": "Montserrat",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "scrollBarWidth": 10,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemBorderRadius": 0,
 "itemVerticalAlign": "top",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "width": "100%",
 "rollOverItemLabelFontColor": "#04A3E1",
 "paddingLeft": 70,
 "itemOpacity": 1,
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "itemThumbnailOpacity": 1,
 "itemMinWidth": 50,
 "backgroundColor": [
  "#000000"
 ],
 "itemPaddingRight": 3,
 "height": "100%",
 "paddingBottom": 70,
 "scrollBarOpacity": 0.5,
 "selectedItemLabelFontColor": "#04A3E1",
 "minWidth": 1,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "verticalAlign": "middle",
 "itemLabelGap": 7,
 "scrollBarColor": "#04A3E1",
 "class": "ThumbnailGrid",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "itemPaddingTop": 3,
 "itemHeight": 156,
 "shadow": false,
 "selectedItemLabelFontWeight": "bold",
 "propagateClick": false,
 "itemLabelTextDecoration": "none",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelFontWeight": "normal",
 "horizontalAlign": "center",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemThumbnailShadow": false,
 "backgroundOpacity": 0.05,
 "rollOverItemThumbnailShadow": true,
 "itemThumbnailScaleMode": "fit_outside",
 "paddingRight": 70,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemLabelFontSize": 14,
 "itemLabelFontColor": "#666666",
 "selectedItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailHeight": 125,
 "borderSize": 0,
 "borderRadius": 5,
 "itemBackgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "itemMaxWidth": 1000,
 "itemWidth": 220,
 "backgroundColorRatios": [
  0
 ],
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemPaddingBottom": 3,
 "itemMaxHeight": 1000,
 "gap": 26,
 "itemLabelHorizontalAlign": "center",
 "itemThumbnailWidth": 220,
 "itemLabelFontStyle": "normal",
 "itemMode": "normal",
 "paddingTop": 10,
 "itemMinHeight": 50,
 "itemLabelPosition": "bottom",
 "scrollBarMargin": 2,
 "data": {
  "name": "ThumbnailList"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "width": "85%",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "verticalAlign": "middle",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "-left"
 }
},
{
 "paddingTop": 20,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "width": "15%",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "paddingRight": 50,
 "paddingLeft": 50,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingBottom": 20,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.51,
 "contentOpaque": false,
 "minWidth": 400,
 "layout": "vertical",
 "verticalAlign": "top",
 "gap": 0,
 "scrollBarColor": "#0069A3",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "-right"
 }
},
{
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "X"
 },
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "maxHeight": 60,
 "width": "25%",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 50,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "75%",
 "transparencyActive": false,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "mode": "push",
 "minWidth": 50,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "class": "IconButton",
 "paddingTop": 0,
 "propagateClick": false,
 "shadow": false
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 140,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "header"
 }
},
{
 "toolTipFontSize": 12,
 "playbackBarRight": 0,
 "id": "MapViewer",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBarBorderSize": 6,
 "toolTipTextShadowBlurRadius": 3,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "toolTipPaddingBottom": 4,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipPaddingLeft": 6,
 "playbackBarHeadBorderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "paddingBottom": 0,
 "playbackBarBorderSize": 0,
 "height": "100%",
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontWeight": "normal",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipFontStyle": "normal",
 "class": "ViewerArea",
 "firstTransitionDuration": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowOpacity": 0,
 "toolTipTextShadowColor": "#000000",
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "propagateClick": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontFamily": "Arial",
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "toolTipPaddingRight": 6,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipBorderColor": "#767676",
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "transitionDuration": 500,
 "playbackBarLeft": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "toolTipOpacity": 1,
 "paddingTop": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Floor Plan"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 140,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "header"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "visible",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "Container photo"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "visible",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "Container photo"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "width": "55%",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "verticalAlign": "middle",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "-left"
 }
},
{
 "paddingTop": 20,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "width": "45%",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "paddingRight": 60,
 "paddingLeft": 60,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingBottom": 20,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.51,
 "contentOpaque": false,
 "minWidth": 460,
 "layout": "vertical",
 "verticalAlign": "top",
 "gap": 0,
 "scrollBarColor": "#0069A3",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "-right"
 }
},
{
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "X"
 },
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "maxHeight": 60,
 "width": "25%",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 50,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "75%",
 "transparencyActive": false,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "mode": "push",
 "minWidth": 50,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "class": "IconButton",
 "paddingTop": 0,
 "propagateClick": false,
 "shadow": false
},
{
 "maxWidth": 2000,
 "data": {
  "name": "Image"
 },
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "maxHeight": 1000,
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "class": "Image",
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "propagateClick": false,
 "shadow": false
},
{
 "paddingTop": 20,
 "scrollBarMargin": 2,
 "shadow": false,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "scrollBarWidth": 10,
 "horizontalAlign": "right",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 60,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "horizontal",
 "verticalAlign": "top",
 "gap": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 520,
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingBottom": 30,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.79,
 "contentOpaque": false,
 "minWidth": 100,
 "layout": "vertical",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#E73B2C",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "Container text"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "width": 370,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 40,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "horizontal",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 }
},
{
 "toolTipFontSize": 12,
 "playbackBarRight": 0,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "right": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "toolTipPaddingBottom": 4,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipPaddingLeft": 6,
 "playbackBarHeadBorderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "paddingBottom": 0,
 "playbackBarBorderSize": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontWeight": "normal",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipFontStyle": "normal",
 "class": "ViewerArea",
 "firstTransitionDuration": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowOpacity": 0,
 "toolTipTextShadowColor": "#000000",
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "propagateClick": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontFamily": "Arial",
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "toolTipBorderColor": "#767676",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "top": 0,
 "playbackBarLeft": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "bottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "toolTipOpacity": 1,
 "paddingTop": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container arrows"
 },
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "horizontalAlign": "left",
 "width": "100%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "verticalAlign": "middle",
 "gap": 10,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "shadow": false
},
{
 "paddingTop": 20,
 "scrollBarMargin": 2,
 "shadow": false,
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "scrollBarWidth": 10,
 "horizontalAlign": "right",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 60,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "horizontal",
 "verticalAlign": "top",
 "gap": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 520,
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingBottom": 30,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.79,
 "contentOpaque": false,
 "minWidth": 100,
 "layout": "vertical",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#E73B2C",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "Container text"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "width": 370,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 40,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "horizontal",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.13vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.13vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "data": {
  "name": "HTMLText54192"
 },
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 80,
 "minHeight": 100,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "shadow": false
},
{
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton X"
 },
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "maxHeight": 60,
 "width": "100%",
 "backgroundOpacity": 0,
 "right": 20,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingRight": 0,
 "horizontalAlign": "right",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": 20,
 "borderSize": 0,
 "height": "36.14%",
 "transparencyActive": false,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "mode": "push",
 "borderRadius": 0,
 "minWidth": 50,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "verticalAlign": "top",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "class": "IconButton",
 "paddingTop": 0,
 "propagateClick": false,
 "shadow": false
},
{
 "paddingTop": 0,
 "shadow": false,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "backgroundOpacity": 1,
 "insetBorder": false,
 "right": "0%",
 "paddingRight": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "bottom": "0%",
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "class": "WebFrame",
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "propagateClick": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "paddingTop": 20,
 "scrollBarMargin": 2,
 "shadow": false,
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "scrollBarWidth": 10,
 "horizontalAlign": "right",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 60,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "horizontal",
 "verticalAlign": "top",
 "gap": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 520,
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingBottom": 30,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.79,
 "contentOpaque": false,
 "minWidth": 100,
 "layout": "vertical",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#E73B2C",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "Container text"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "width": 370,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 40,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "horizontal",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.13vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.13vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "data": {
  "name": "HTMLText54192"
 },
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 80,
 "minHeight": 100,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "shadow": false
},
{
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton X"
 },
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "maxHeight": 60,
 "width": "100%",
 "backgroundOpacity": 0,
 "right": 20,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingRight": 0,
 "horizontalAlign": "right",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": 20,
 "borderSize": 0,
 "height": "36.14%",
 "transparencyActive": false,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "mode": "push",
 "borderRadius": 0,
 "minWidth": 50,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "verticalAlign": "top",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "class": "IconButton",
 "paddingTop": 0,
 "propagateClick": false,
 "shadow": false
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.13vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.13vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "width": "77.115%",
 "data": {
  "name": "HTMLText54192"
 },
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 80,
 "minHeight": 100,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "shadow": false
},
{
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton X"
 },
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "maxHeight": 60,
 "width": "100%",
 "backgroundOpacity": 0,
 "right": 20,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "paddingRight": 0,
 "horizontalAlign": "right",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": 20,
 "borderSize": 0,
 "height": "36.14%",
 "transparencyActive": false,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "mode": "push",
 "borderRadius": 0,
 "minWidth": 50,
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "verticalAlign": "top",
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "class": "IconButton",
 "paddingTop": 0,
 "propagateClick": false,
 "shadow": false
},
{
 "toolTipFontSize": 12,
 "playbackBarRight": 0,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "toolTipPaddingBottom": 4,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipPaddingLeft": 6,
 "playbackBarHeadBorderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "paddingBottom": 0,
 "playbackBarBorderSize": 0,
 "height": "100%",
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontWeight": "normal",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipFontStyle": "normal",
 "class": "ViewerArea",
 "firstTransitionDuration": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowOpacity": 0,
 "toolTipTextShadowColor": "#000000",
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "propagateClick": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontFamily": "Arial",
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "toolTipPaddingRight": 6,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipBorderColor": "#767676",
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "top": "0%",
 "playbackBarLeft": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "toolTipOpacity": 1,
 "paddingTop": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer photoalbum + text 1"
 }
},
{
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton <"
 },
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "maxHeight": 60,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": "20%",
 "borderSize": 0,
 "bottom": "20%",
 "transparencyActive": false,
 "paddingBottom": 0,
 "mode": "push",
 "borderRadius": 0,
 "minWidth": 50,
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "class": "IconButton",
 "paddingTop": 0,
 "propagateClick": false,
 "shadow": false
},
{
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton >"
 },
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "maxHeight": 60,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "right": 10,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": "20%",
 "borderSize": 0,
 "bottom": "20%",
 "transparencyActive": false,
 "paddingBottom": 0,
 "mode": "push",
 "borderRadius": 0,
 "minWidth": 50,
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "class": "IconButton",
 "paddingTop": 0,
 "propagateClick": false,
 "shadow": false
},
{
 "toolTipFontSize": 12,
 "playbackBarRight": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "toolTipPaddingBottom": 4,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipPaddingLeft": 6,
 "playbackBarHeadBorderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "paddingBottom": 0,
 "playbackBarBorderSize": 0,
 "height": "100%",
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontWeight": "normal",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipFontStyle": "normal",
 "class": "ViewerArea",
 "firstTransitionDuration": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowOpacity": 0,
 "toolTipTextShadowColor": "#000000",
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "propagateClick": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontFamily": "Arial",
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "toolTipPaddingRight": 6,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipBorderColor": "#767676",
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "top": "0%",
 "playbackBarLeft": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "toolTipOpacity": 1,
 "paddingTop": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton <"
 },
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "maxHeight": 60,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": "20%",
 "borderSize": 0,
 "bottom": "20%",
 "transparencyActive": false,
 "paddingBottom": 0,
 "mode": "push",
 "borderRadius": 0,
 "minWidth": 50,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "class": "IconButton",
 "paddingTop": 0,
 "propagateClick": false,
 "shadow": false
},
{
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton >"
 },
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "maxHeight": 60,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "right": 10,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": "20%",
 "borderSize": 0,
 "bottom": "20%",
 "transparencyActive": false,
 "paddingBottom": 0,
 "mode": "push",
 "borderRadius": 0,
 "minWidth": 50,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "class": "IconButton",
 "paddingTop": 0,
 "propagateClick": false,
 "shadow": false
},
{
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton X"
 },
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "maxHeight": 60,
 "width": "10%",
 "backgroundOpacity": 0,
 "right": 20,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingRight": 0,
 "horizontalAlign": "right",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": 20,
 "borderSize": 0,
 "height": "10%",
 "transparencyActive": false,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "mode": "push",
 "borderRadius": 0,
 "minWidth": 50,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "verticalAlign": "top",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "class": "IconButton",
 "paddingTop": 0,
 "propagateClick": false,
 "shadow": false
},
{
 "maxWidth": 2000,
 "data": {
  "name": "Image"
 },
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "maxHeight": 1000,
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "minWidth": 1,
 "verticalAlign": "bottom",
 "class": "Image",
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "propagateClick": false,
 "shadow": false
},
{
 "paddingTop": 20,
 "scrollBarMargin": 2,
 "shadow": false,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "scrollBarWidth": 10,
 "horizontalAlign": "right",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 60,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "horizontal",
 "verticalAlign": "top",
 "gap": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 520,
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingBottom": 30,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.79,
 "contentOpaque": false,
 "minWidth": 100,
 "layout": "vertical",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#E73B2C",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "Container text"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "width": 370,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 40,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "horizontal",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 }
},
{
 "paddingTop": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.75vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.7vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.7vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.46vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.46vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.15vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.15vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.62vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.62vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.15vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.15vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.15vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.15vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.15vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.62vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.62vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.66vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarWidth": 10,
 "width": "100%",
 "data": {
  "name": "HTMLText"
 },
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 20,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarMargin": 2
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "shadow": false,
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "horizontalAlign": "center",
 "width": "46%",
 "backgroundOpacity": 0.7,
 "fontFamily": "Bebas Neue Bold",
 "paddingRight": 0,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 1,
 "iconHeight": 32,
 "minHeight": 1,
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "borderSize": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "label": "lorem ipsum",
 "backgroundColorRatios": [
  0
 ],
 "mode": "push",
 "borderRadius": 0,
 "height": "9%",
 "minWidth": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "verticalAlign": "middle",
 "fontStyle": "normal",
 "gap": 5,
 "fontSize": "3vh",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "textDecoration": "none",
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "propagateClick": false,
 "data": {
  "name": "Button"
 }
},
{
 "cursor": "hand",
 "maxWidth": 150,
 "data": {
  "name": "IconButton <"
 },
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "maxHeight": 150,
 "width": "12%",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 70,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "8%",
 "transparencyActive": true,
 "paddingBottom": 0,
 "mode": "push",
 "minWidth": 70,
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "class": "IconButton",
 "paddingTop": 0,
 "propagateClick": false,
 "shadow": false
},
{
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Container separator"
 },
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "width": "80%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "30%",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarMargin": 2
},
{
 "cursor": "hand",
 "maxWidth": 150,
 "data": {
  "name": "IconButton >"
 },
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "maxHeight": 150,
 "width": "12%",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 70,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "8%",
 "transparencyActive": true,
 "paddingBottom": 0,
 "mode": "push",
 "minWidth": 70,
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "class": "IconButton",
 "paddingTop": 0,
 "propagateClick": false,
 "shadow": false
},
{
 "paddingTop": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.75vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.7vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.7vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.46vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.46vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.15vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.15vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.62vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.62vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.15vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.15vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.15vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.15vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.15vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "scrollBarWidth": 10,
 "width": "100%",
 "data": {
  "name": "HTMLText"
 },
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 20,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarMargin": 2
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "shadow": false,
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "horizontalAlign": "center",
 "width": "46%",
 "backgroundOpacity": 0.7,
 "fontFamily": "Bebas Neue Bold",
 "paddingRight": 0,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 1,
 "iconHeight": 32,
 "minHeight": 1,
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "borderSize": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "label": "lorem ipsum",
 "backgroundColorRatios": [
  0
 ],
 "mode": "push",
 "borderRadius": 0,
 "height": "9%",
 "minWidth": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "verticalAlign": "middle",
 "fontStyle": "normal",
 "gap": 5,
 "fontSize": "3vh",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "textDecoration": "none",
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "propagateClick": false,
 "data": {
  "name": "Button"
 }
},
{
 "paddingTop": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.75vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.7vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.46vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.46vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.13vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.15vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></SPAN></DIV></div>",
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "scrollBarWidth": 10,
 "width": "100%",
 "data": {
  "name": "HTMLText"
 },
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 20,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarMargin": 2
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "shadow": false,
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "horizontalAlign": "center",
 "width": 207,
 "backgroundOpacity": 0.7,
 "fontFamily": "Bebas Neue Bold",
 "paddingRight": 0,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 1,
 "iconHeight": 32,
 "minHeight": 1,
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "borderSize": 0,
 "borderRadius": 0,
 "height": 59,
 "backgroundColor": [
  "#04A3E1"
 ],
 "paddingBottom": 0,
 "label": "lorem ipsum",
 "backgroundColorRatios": [
  0
 ],
 "mode": "push",
 "minWidth": 1,
 "shadowColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "verticalAlign": "middle",
 "gap": 5,
 "fontSize": 34,
 "fontStyle": "normal",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "textDecoration": "none",
 "iconBeforeLabel": true,
 "visible": false,
 "fontWeight": "normal",
 "propagateClick": false,
 "data": {
  "name": "Button"
 }
},
{
 "paddingTop": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.75vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.07vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "scrollBarWidth": 10,
 "width": "100%",
 "data": {
  "name": "HTMLText18899"
 },
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "45%",
 "paddingBottom": 10,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarMargin": 2
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "80%",
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "horizontal",
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "- content"
 }
},
{
 "maxWidth": 200,
 "data": {
  "name": "agent photo"
 },
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "maxHeight": 200,
 "width": "25%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "class": "Image",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "propagateClick": false,
 "shadow": false
},
{
 "paddingTop": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.46vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.99vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.88vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.88vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.88vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.15vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV></div>",
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "scrollBarWidth": 10,
 "width": "75%",
 "data": {
  "name": "HTMLText19460"
 },
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarMargin": 2
}],
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "vrPolyfillScale": 1,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 20,
 "desktopMipmappingEnabled": false,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "layout": "absolute",
 "verticalAlign": "top",
 "gap": 10,
 "class": "Player",
 "defaultVRPointer": "laser",
 "scrollBarVisible": "rollOver",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getKey": function(key){  return window[key]; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "unregisterKey": function(key){  delete window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); }
 },
 "scrollBarColor": "#000000",
 "propagateClick": true,
 "data": {
  "name": "Player468"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
