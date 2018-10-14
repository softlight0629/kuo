import * as _ from 'lodash';
import MediaManagerAPI from '../mediaManagerAPI/mediaManagerAPI';

function getCalculatedCropData(sWidth, sHeight, tWidth, tHeight, fittingType) {
  // adjust target rectangle
  const scaleFactor = Math.min(tWidth / sWidth, tHeight / sHeight);
  const width = sWidth * scaleFactor;
  const height = sHeight * scaleFactor;
  const cropData = {
    width: Math.round(width),
    height: Math.round(height),
    x: Math.round((tWidth - width) / 2),
    y: Math.round((tHeight - height) / 2)
  };

  return _.some(cropData) ? cropData : null;
}


function create(editorAPI) {

  function changePhoto(compRef) {
    editorAPI.mediaServices.mediaManagerAPI.open('IMAGE', {
      callback: (payload) => {
        if (!payload) {
          return;
        }
        const fileInfo = _.head(payload);
        // const { width, height } = fileInfo;
        // const payload = {
        //   fileInput: {
        //     crop_hint: [],
        //     dominant_color: [],
        //     label: [{
        //       description: 'sports equipment', score: 0.8303161,
        //     }],
        //   },
        //   fileName: 'f31ce2_3cd55d98f3fa45ba8a54ed54b9bd256a~mv2.jpeg',
        //   fileUrl: 'media/f31ce2_3cd55d98f3fa45ba8a54ed54b9bd256a~mv2.jpeg',
        //   height: 200,
        //   width: 100,
        //   id: 'f31ce2_3cd55d98f3fa45ba8a54ed54b9bd256a~mv2.jpeg',
        //   labels: ['fashion accessory'],
        //   mediaType: 'picture',
        //   sourceName: 'private',
        //   tags: [],
        //   title: 'ccc.jpeg',
        //   uri: 'f31ce2_3cd55d98f3fa45ba8a54ed54b9bd256a~mv2.jpeg',
        // }
        // const newImageData = {
        //   width,
        //   height,
        //   uri: fileInfo.fileName,
        //   name: fileInfo.title,
        //   alt: fileInfo.title,
        //   crop: getCalculatedCropData(
        //     compRef.layout.width,
        //     compRef.layout.height,
        //     width,
        //     height,
        //   ),
        // };

        compRef.dataQuery.setSrc(fileInfo.fileUrl);
      }
    });
  }

  function changeVideo(compRef) { }

  function changeShape(compRef) { }

  function changeVectorImage(compRef) { }

  return {
    mediaManagerAPI: MediaManagerAPI.create(editorAPI),
    changePhoto,
    changeVideo,
    changeVectorImage,
    changeShape,
  }
}



export default {
  create,
}
