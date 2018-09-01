export default {
  DS_ACTIONS: {
    ADD_PAGE: 'addPage',
  },
  Actions: {
    SCREEN_IN: 'screenIn',
    MODE_IN: 'modeIn',
    EXIT: 'exit',
    MODE_EXIT: 'modeOut',
    MODE_CHANGE: 'modeChange',
    DEFAULT_ACTION: 'defaultAction',
  },
  VIDEO_READY_STATES: {
    IN_PROCESS: 'in_process',
    PLAYING_PREVIEW: 'playing_preview',
    IDLE: 'idle',
    NO_VIDEO: 'no_video',
  },
  COLUMN_LAYOUT_ALIGNMENT_OPTIONS: [
    {
      label: 'STRIP_CONTAINER_COLUMN_LAYOUTS_ALIGNMENT_LEFT_LABEL',
      value: 0,
      symbolName: 'alignContentLeft',
    },
    {
      label: 'STRIP_CONTAINER_COLUMN_LAYOUTS_ALIGNMENT_CENTER_LABEL',
      value: 50,
      symbolName: 'alignContentCenter',
    },
    {
      label: 'STRIP_CONTAINER_COLUMN_LAYOUTS_ALIGNMENT_RIGHT_LABEL',
      value: 100,
      symbolName: 'alignContentRight',
    },
  ],
  CONSTRAINS: {
    PAGE_MIN_HEIGHT: {
      DESKTOP: 500,
      MOBILE: 200,
    },
  },
  HISTORY: {
    UNDO: 'undo',
    REDO: 'redo',
  },
  ROOT_COMPS: {
    GFPP: {
      ACTIONS: {
        SETTINGS: 'settings',
        LAYOUT: 'layout',
        DESIGN: 'design',
        BACKGROUND: 'background',
        UPGRADE: 'upgrade',
        FILTERS: 'filters',
        BEHAVIORS: 'behaviors',
        EFFECTS: 'effects',
        CROP: 'crop',
        AVIARY: 'aviary',
        TEXT: 'text',
        ANIMATION: 'animation',
        MOBILE_ANIMATION: 'mobileAnimation',
        LINK: 'link',
        HIDE: 'hide',
        HELP: 'help',
        STRETCH: 'stretch',
        STRETCH_FOR_COLUMNS: 'stretchForColumns',
        PIN_MODE: 'pinMode',
        CONNECT: 'connect',
        MANAGE: 'manage',
        CUSTOMIZE_DESIGN: 'customizeDesign',
        STYLABLE: 'stylable',
        APPLY_TO_OTHER_VIEW: 'applyToOtherView',
        PREVIEW: 'preview',
        CHANGE_MEDIA: 'changeMedia',
        SCALE_UP: 'scale_up',
        SCALE_DOWN: 'scale_down',
        MOBILE_BACKGROUND_SETTINGS: 'mobileBackgroundSettings'
      },
    },
  },
}
