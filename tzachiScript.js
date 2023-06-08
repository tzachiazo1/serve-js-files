const layouts = {
  containerLayout: {
    type: 'GridContainerLayout',
    rows: [
      {
        type: 'fr',
        value: 1,
      },
    ],
    columns: [
      {
        type: 'fr',
        value: 1,
      },
    ],
  },
  componentLayout: {
    minHeight: {
      type: 'px',
      value: 300,
    },
    hidden: false,
    height: {
      type: 'auto',
    },
    minWidth: {
      type: 'px',
      value: 100,
    },
    type: 'ComponentLayout',
    width: {
      type: 'percentage',
      value: 100,
    },
  },
  itemLayout: {
    alignSelf: 'start',
    margins: {
      left: {
        value: 0,
        type: 'percentage',
      },
      right: {
        type: 'px',
        value: 0,
      },
      top: {
        type: 'px',
        value: 10,
      },
      bottom: {
        type: 'px',
        value: 0,
      },
    },
    gridArea: {
      rowStart: 1,
      rowEnd: 2,
      columnStart: 1,
      columnEnd: 2,
    },
    justifySelf: 'center',
    type: 'GridItemLayout',
  },
  type: 'SingleLayoutData',
  metaData: {
    isPreset: false,
    schemaVersion: '1.0',
    isHidden: false,
    sig: 'f9v-2',
    pageId: 'c1dmp',
    basedOnSignature: 'f9v-1',
  },
};

async function editorReady(editorSDK) {
  console.log('TZACHI AND GUGI SCRIPT IS RUNNING');

  await editorSDK.application.appStudioWidgets.addWidget('', {
    widgetId: 'b6f2eb1f-edf5-4d20-b491-92b62e3b3522',
    installationType: 'closed',
    presetIds: {
      layout: 'variants-kyacm7dp1',
      style: 'variants-kyacm7dp1',
    },
    layouts,
    overriddenData: [
      {
        compId: 'comp-kyacmhxc',
        dataItem: {
          type: 'LinkableButton',
          // metaData: {
          //   isPreset: false,
          //   schemaVersion: '1.0',
          //   isHidden: false,
          //   sig: 'e9w-203',
          //   pageId: 'ob428',
          // },
          label: 'Start Later',
        },
        isMobile: false,
        itemType: 'data',
      },
    ],
  });
}

module.exports = {
  getAppManifest: () => {},
  editorReady,
};
