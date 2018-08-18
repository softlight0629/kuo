import * as _ from 'lodash';


const filterThumbsOptions = {
    none: {value: 'none', label: 'IMAGE_FILTER_NAME_NONE'},
    v2: [
        {value: 'kennedy', label: 'IMAGE_FILTER_NAME_KENNEDY'},
        {value: 'darken', label: 'IMAGE_FILTER_NAME_DARKEN'},
        {value: 'blur', label: 'IMAGE_FILTER_NAME_BLUR'},
        {value: 'lighten', label: 'IMAGE_FILTER_NAME_LIGHTEN'},
        {value: 'faded', label: 'IMAGE_FILTER_NAME_FADED'},
        {value: 'kerouac', label: 'IMAGE_FILTER_NAME_KEROUAC'},
        {value: 'orca', label: 'IMAGE_FILTER_NAME_ORCA'},
        {value: 'sangria', label: 'IMAGE_FILTER_NAME_SANGRIA'},
        {value: 'gotham', label: 'IMAGE_FILTER_NAME_GOTHAM'},
        {value: 'nightrain', label: 'IMAGE_FILTER_NAME_NIGHTRAIN'},
        {value: 'whistler', label: 'IMAGE_FILTER_NAME_WHISTLER'},
        {value: 'feathered', label: 'IMAGE_FILTER_NAME_FEATHERED'},
        {value: 'soledad', label: 'IMAGE_FILTER_NAME_SOLEDAD'},
        {value: 'goldie', label: 'IMAGE_FILTER_NAME_GOLDIE'},
        {value: '3d', label: 'IMAGE_FILTER_NAME_3D'},
        {value: 'ink', label: 'IMAGE_FILTER_NAME_INK'},
        {value: 'manhattan', label: 'IMAGE_FILTER_NAME_MANHATTAN'},

        {value: 'greenwash', label: 'IMAGE_FILTER_NAME_GREENWASH'},
        {value: 'organic', label: 'IMAGE_FILTER_NAME_ORGANIC'},
        {value: 'elmo', label: 'IMAGE_FILTER_NAME_ELMO'},
        {value: 'neptune', label: 'IMAGE_FILTER_NAME_NEPTUNE'},
        {value: 'candyfloss', label: 'IMAGE_FILTER_NAME_CANDYFLOSS'},
        {value: 'neonsky', label: 'IMAGE_FILTER_NAME_NEONSKY'},
        {value: 'hulk', label: 'IMAGE_FILTER_NAME_HULK'},
        {value: 'bauhaus', label: 'IMAGE_FILTER_NAME_BAUHAUS'},
        {value: 'seaweed', label: 'IMAGE_FILTER_NAME_SEAWEED'},
        {value: 'midnight', label: 'IMAGE_FILTER_NAME_MIDNIGHT'},
        {value: 'unicorn', label: 'IMAGE_FILTER_NAME_UNICORN'},
        {value: 'blueray', label: 'IMAGE_FILTER_NAME_BLUERAY'},
        {value: 'malibu', label: 'IMAGE_FILTER_NAME_MALIBU'},
        {value: 'redrum', label: 'IMAGE_FILTER_NAME_REDRUM'},
        {value: 'flamingo', label: 'IMAGE_FILTER_NAME_FLAMINGO'},
        {value: 'hydra', label: 'IMAGE_FILTER_NAME_HYDRA'},
        {value: 'koolaid', label: 'IMAGE_FILTER_NAME_KOOLAID'},
        {value: 'pinkrinse', label: 'IMAGE_FILTER_NAME_PINKRINSE'},
        {value: 'pixie', label: 'IMAGE_FILTER_NAME_PIXIE'},
        {value: 'yellowstreak', label: 'IMAGE_FILTER_NAME_YELLOWSTREAK'},
        {value: 'lucille', label: 'IMAGE_FILTER_NAME_LUCILLE'}
    ]
};


function getFiltersThumbs(filtersList, filtersVersion) {
    const filtersThumbList = filterThumbsOptions[filtersVersion];
    const validFiltersThumbList = _.intersectionWith(filtersThumbList, filtersList, function (thumbItem, name) {
        return thumbItem.value === name;
    });
    validFiltersThumbList.unshift(filterThumbsOptions.none);
    return validFiltersThumbList;
}

export default {
  getFiltersThumbs,
};
