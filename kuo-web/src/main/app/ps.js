
export default {
  config: {
    isReadOnly: false,
    noUndo: false,
  },
  pointers: {
    activeModes: {
      getAllActiveModes: () => { },
      getPageActiveModes: () => { },
    },
    componentStructure: {
      getModes
      getModesDefinitions
      getModesOverrides
    },
    components: {
      clearDisplayedOnlyComponents
        getAllDisplayedOnlyComponents

      getAncestorByPredicate

        getChildren
      getChildrenContainer

        getChildrenRecursively

      getChildrenRecursivelyRightLeftRootIncludingRoot

        getComponent

      getDesktopPointer

        getFooter

      getHeader

        getLandingPageComponents

      getMasterPage

        getMobilePointer

      getNewPage

        getPage

      getPageOfComponent

        getPagesContainer

      getParent

        getSiblings

      getUnattached

        getViewMode

      isDescendant

        isInMasterPage

      isMasterPage

        isMobile

      isPage

        isPagesContainer

      registerDisplayedOnlyComponent

    }
  },
  siteAPI: {},
  siteDataAPI: {
    actionQueue
    anchors
    eventsManager
    modes
    originalValues
    pagesPendingForMatserPage
    runtime
    siteData
    store
  },
}
