import stateManagement from '@packages/stateManagement/stateManagement';

const categories = [{"id":2,"title":"All Categories","guid":"3b2c388f-0340-4f68-ac38-8f0340af685a","parentGuid":"cfc8bd4f-5fcc-4c91-88bd-4f5fcc4c91fb","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":3,"title":"Animals","guid":"ce1dd112-19dd-40cc-9dd1-1219dd50ccc5","parentGuid":"cfc8bd4f-5fcc-4c91-88bd-4f5fcc4c91fb","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":4,"title":"Art","guid":"344ea8c7-a5f2-4795-8ea8-c7a5f257950b","parentGuid":"cfc8bd4f-5fcc-4c91-88bd-4f5fcc4c91fb","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":5,"title":"Architecture","guid":"c7cd03ce-587a-4af4-8d03-ce587a8af4b1","parentGuid":"cfc8bd4f-5fcc-4c91-88bd-4f5fcc4c91fb","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":6,"title":"Black & White","guid":"075c62a1-8897-4d4f-9c62-a188978d4f47","parentGuid":"cfc8bd4f-5fcc-4c91-88bd-4f5fcc4c91fb","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":7,"title":"Business","guid":"63313ca7-1b9f-41bb-b13c-a71b9f61bbf5","parentGuid":"cfc8bd4f-5fcc-4c91-88bd-4f5fcc4c91fb","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":8,"title":"Events & Nightlife","guid":"61b6ecaf-ffe9-4133-b6ec-afffe90133cb","parentGuid":"cfc8bd4f-5fcc-4c91-88bd-4f5fcc4c91fb","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":9,"title":"Food & Drink","guid":"239a9926-c337-4dc0-9a99-26c3374dc0d8","parentGuid":"cfc8bd4f-5fcc-4c91-88bd-4f5fcc4c91fb","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":10,"title":"Health & Science","guid":"a00b25e7-52e1-48bb-8b25-e752e1d8bb6e","parentGuid":"cfc8bd4f-5fcc-4c91-88bd-4f5fcc4c91fb","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":11,"title":"Home & Garden","guid":"9500c467-2f2f-43fe-80c4-672f2f53fe6f","parentGuid":"cfc8bd4f-5fcc-4c91-88bd-4f5fcc4c91fb","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":12,"title":"Industry","guid":"f8b224db-03ee-4f88-b224-db03ee7f8806","parentGuid":"cfc8bd4f-5fcc-4c91-88bd-4f5fcc4c91fb","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":13,"title":"Lifestyle","guid":"d5047c4e-aebf-44c5-847c-4eaebfe4c5ef","parentGuid":"cfc8bd4f-5fcc-4c91-88bd-4f5fcc4c91fb","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":14,"title":"Music","guid":"b6f7740f-07fd-4123-b774-0f07fdf12323","parentGuid":"cfc8bd4f-5fcc-4c91-88bd-4f5fcc4c91fb","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":15,"title":"Nature & Landscape","guid":"9ff46000-cad0-4f7e-b460-00cad0df7ee6","parentGuid":"cfc8bd4f-5fcc-4c91-88bd-4f5fcc4c91fb","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":16,"title":"Objects","guid":"29ce73d0-586d-4eca-8e73-d0586ddeca54","parentGuid":"cfc8bd4f-5fcc-4c91-88bd-4f5fcc4c91fb","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":17,"title":"People","guid":"88af4480-6312-45cb-af44-80631285cbb3","parentGuid":"cfc8bd4f-5fcc-4c91-88bd-4f5fcc4c91fb","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":18,"title":"Technology","guid":"a54293ed-b2d7-4fb7-8293-edb2d79fb733","parentGuid":"cfc8bd4f-5fcc-4c91-88bd-4f5fcc4c91fb","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"}]
const medias = [{"id":1,"fileUrl":"https://static.wixstatic.com/media/d67dcdfb27f141658547637bfc0fe5ff.jpg/v1/fill/w_440,h_440/d67dcdfb27f141658547637bfc0fe5ff.jpg","fileSize":null,"fileName":"test0","originFileName":"test0","width":0,"height":0,"mimeType":null,"mediaCategoryGuid":"3b2c388f-0340-4f68-ac38-8f0340af685a","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":2,"fileUrl":"https://static.wixstatic.com/media/8a4d76ef8aae481c9d82696a1c2a8a1e.jpg/v1/fill/w_440,h_440/8a4d76ef8aae481c9d82696a1c2a8a1e.jpg","fileSize":null,"fileName":"test1","originFileName":"test1","width":0,"height":0,"mimeType":null,"mediaCategoryGuid":"3b2c388f-0340-4f68-ac38-8f0340af685a","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":3,"fileUrl":"https://static.wixstatic.com/media/b2f7ef303bfa46ffa607186d757eb73f.jpg/v1/fill/w_440,h_440/b2f7ef303bfa46ffa607186d757eb73f.jpg","fileSize":null,"fileName":"test2","originFileName":"test2","width":0,"height":0,"mimeType":null,"mediaCategoryGuid":"3b2c388f-0340-4f68-ac38-8f0340af685a","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":4,"fileUrl":"https://static.wixstatic.com/media/b88f2d5da73042e2b86399ab9f21367f.jpg/v1/fill/w_440,h_440/b88f2d5da73042e2b86399ab9f21367f.jpg","fileSize":null,"fileName":"test3","originFileName":"test3","width":0,"height":0,"mimeType":null,"mediaCategoryGuid":"3b2c388f-0340-4f68-ac38-8f0340af685a","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":5,"fileUrl":"https://static.wixstatic.com/media/c028e3f9542a4bd88c8110c26beaa0da.jpg/v1/fill/w_440,h_440/c028e3f9542a4bd88c8110c26beaa0da.jpg","fileSize":null,"fileName":"test4","originFileName":"test4","width":0,"height":0,"mimeType":null,"mediaCategoryGuid":"3b2c388f-0340-4f68-ac38-8f0340af685a","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":6,"fileUrl":"https://static.wixstatic.com/media/0c27d9aa1d464108a6b342d9deef3970.jpg/v1/fill/w_440,h_440/0c27d9aa1d464108a6b342d9deef3970.jpg","fileSize":null,"fileName":"test5","originFileName":"test5","width":0,"height":0,"mimeType":null,"mediaCategoryGuid":"3b2c388f-0340-4f68-ac38-8f0340af685a","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":7,"fileUrl":"https://static.wixstatic.com/media/8168415addfc4b1aa33b7e8f82a30dbb.jpg/v1/fill/w_440,h_440/8168415addfc4b1aa33b7e8f82a30dbb.jpg","fileSize":null,"fileName":"test6","originFileName":"test6","width":0,"height":0,"mimeType":null,"mediaCategoryGuid":"3b2c388f-0340-4f68-ac38-8f0340af685a","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":8,"fileUrl":"https://static.wixstatic.com/media/374c684f828be9145f967539d8701b27.jpg/v1/fill/w_440,h_440/374c684f828be9145f967539d8701b27.jpg","fileSize":null,"fileName":"test7","originFileName":"test7","width":0,"height":0,"mimeType":null,"mediaCategoryGuid":"3b2c388f-0340-4f68-ac38-8f0340af685a","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":9,"fileUrl":"https://static.wixstatic.com/media/a38649d65bd949f1a23175c75483200f.jpg/v1/fill/w_440,h_440/a38649d65bd949f1a23175c75483200f.jpg","fileSize":null,"fileName":"test8","originFileName":"test8","width":0,"height":0,"mimeType":null,"mediaCategoryGuid":"3b2c388f-0340-4f68-ac38-8f0340af685a","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":10,"fileUrl":"https://static.wixstatic.com/media/89acfdd1cd54491fa38c498ac0cc8043.jpg/v1/fill/w_440,h_440/89acfdd1cd54491fa38c498ac0cc8043.jpg","fileSize":null,"fileName":"test9","originFileName":"test9","width":0,"height":0,"mimeType":null,"mediaCategoryGuid":"3b2c388f-0340-4f68-ac38-8f0340af685a","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":11,"fileUrl":"https://static.wixstatic.com/media/94529b508b40459fb23e9c35b7e7cc0c.jpg/v1/fill/w_440,h_440/94529b508b40459fb23e9c35b7e7cc0c.jpg","fileSize":null,"fileName":"test10","originFileName":"test10","width":0,"height":0,"mimeType":null,"mediaCategoryGuid":"3b2c388f-0340-4f68-ac38-8f0340af685a","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":12,"fileUrl":"https://static.wixstatic.com/media/580b4896ab1d4efb846d84f9f9e670fe.jpg/v1/fill/w_440,h_440/580b4896ab1d4efb846d84f9f9e670fe.jpg","fileSize":null,"fileName":"test11","originFileName":"test11","width":0,"height":0,"mimeType":null,"mediaCategoryGuid":"3b2c388f-0340-4f68-ac38-8f0340af685a","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":13,"fileUrl":"https://static.wixstatic.com/media/9cc22d8b8d5244aba9ed73fb1783fc26.jpg/v1/fill/w_440,h_440/9cc22d8b8d5244aba9ed73fb1783fc26.jpg","fileSize":null,"fileName":"test12","originFileName":"test12","width":0,"height":0,"mimeType":null,"mediaCategoryGuid":"3b2c388f-0340-4f68-ac38-8f0340af685a","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":14,"fileUrl":"https://static.wixstatic.com/media/281ecf92b26b49c99ae687ec6e131cfc.jpg/v1/fill/w_440,h_440/281ecf92b26b49c99ae687ec6e131cfc.jpg","fileSize":null,"fileName":"test13","originFileName":"test13","width":0,"height":0,"mimeType":null,"mediaCategoryGuid":"3b2c388f-0340-4f68-ac38-8f0340af685a","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"},{"id":15,"fileUrl":"https://static.wixstatic.com/media/b1d0014f7b604fa8acdbb32e9f9f11a4.jpg/v1/fill/w_440,h_440/b1d0014f7b604fa8acdbb32e9f9f11a4.jpg","fileSize":null,"fileName":"test14","originFileName":"test14","width":0,"height":0,"mimeType":null,"mediaCategoryGuid":"3b2c388f-0340-4f68-ac38-8f0340af685a","mediaType":"picture","createAt":"2018-07-22 00:36:05","updateAt":"2018-07-22 00:36:05"}];

function create(editorAPI) {
  
  function openMediaGallery(category, props) {
    stateManagement.mediaGallery.open(category, props);
  }

  function closeMediaGallery() {
    stateManagement.mediaGallery.close();
  }

  function fetchCategoryFolders(category) {
    stateManagement.mediaGallery.setCategoryFolders(categories);
  }

  function fetchCategoryMedias(category) {
    stateManagement.mediaGallery.setCategoryMedias(medias);
  }

  function toggleSelectedMedia(media) {
    const selectedMediaIds = this.getSelectedMediaIds();
    if (selectedMediaIds.includes(media.id)) {
      stateManagement.mediaGallery.removeFromSelectedMedias(media);
      return;
    }

    stateManagement.mediaGallery.addSelectedMedia(media);
  }

  function getSelectedMedias() {
    return stateManagement.mediaGallery.selectedMedias;
  }

  function getSelectedMediaIds() {
    const selectedMedias = this.getSelectedMedias();
    return selectedMedias.map(selectedMedia => selectedMedia.id);
  }

  function resetMediaGallery() {
    stateManagement.mediaGallery.reset();
  }

  function closeAndResetMediaGallery() {
    this.closeMediaGallery();
    this.resetMediaGallery();
  }

  return {
    openMediaGallery,
    closeMediaGallery,
    fetchCategoryFolders,
    fetchCategoryMedias,
    resetMediaGallery,

    closeAndResetMediaGallery,

    toggleSelectedMedia,
    getSelectedMedias,
    getSelectedMediaIds,
  }
}


export default {
  create,
}
