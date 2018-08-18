'use strict'
const _ = require('lodash')
const {hexToRgb, getAlpha, getDoutone, getColor, getTint, getLumaMatrix, getBrightness, getSepia, getContrast} = require('./svgFiltersParts')


const filterTemplates = {
    masterTemplate: _.template('<filter id="${id}" color-interpolation="sRGB" color-interpolation-filters="sRGB">' +
        '<feComponentTransfer result="srcRGB"/>${content}<feComponentTransfer/></filter>'),
    templates: [
        {
            name: 'normal',
            template: _.template('<feColorMatrix in="SourceGraphic" />') //does nothing, but we have to have content for nothing to happen...
        },
        {
            name: 'ink',
            defaults: {
                contrast: 1.5,
                brightness: 1.1,
                sepia: 0.3,
                saturate: 0
            },
            template: params => {
                const brightness = getBrightness(params.brightness)
                const contrast = getContrast(params.contrast)
                const sepia = getSepia(params.sepia)
                const saturate = params.saturate

                return `<feColorMatrix type="matrix" values="${sepia}"/> 
<feComponentTransfer>${contrast}</feComponentTransfer>
<feComponentTransfer>${brightness}</feComponentTransfer>
<feColorMatrix type="saturate" values=${saturate} />`
            }
        },
        {
            name: 'kennedy',
            defaults: {
                saturate: 0,
                contrast: 1.1,
                brightness: 0.9
            },
            template: params => {
                const brightness = getBrightness(params.brightness)
                const contrast = getContrast(params.contrast)
                const saturate = params.saturate

                return `<feColorMatrix type="saturate" values=${saturate} />
<feComponentTransfer >${contrast}</feComponentTransfer>
<feComponentTransfer >${brightness}</feComponentTransfer>`
            }
        },
        {
            name: 'feathered',
            defaults: {
                contrast: 0.85,
                brightness: 0.9,
                color: '#171212',
                saturate: 0.2
            },
            template: params => {
                const brightness = getBrightness(params.brightness)
                const contrast = getContrast(params.contrast)
                const saturate = params.saturate
                const tint = getTint(hexToRgb(params.color))

                return `<feColorMatrix type="saturate" values=${saturate} />
<feComponentTransfer>${contrast}</feComponentTransfer>
<feComponentTransfer>${brightness}</feComponentTransfer>
<feColorMatrix type="matrix" values="${tint}"/>`
            }
        },
        {
            name: 'blur',
            defaults: {
                blur: 2
            },
            template: _.template('<feGaussianBlur in="SourceGraphic" stdDeviation=${blur} />')
        },
        {
            name: 'whistler',
            defaults: {
                blur: 1.8,
                alpha1: 0.6,
                alpha2: 0.4,
                color: '#ffffff',
                contrast: 0.9,
                brightness: 1.1,
                saturate: 0.6
            },
            template: params => {
                const brightness = getBrightness(params.brightness)
                const contrast = getContrast(params.contrast)
                const saturate = params.saturate
                const color = getColor(hexToRgb(params.color))
                const blur = params.blur
                const alpha1 = getAlpha(params.alpha1)
                const alpha2 = getAlpha(params.alpha2)

                return `<feColorMatrix in="SourceGraphic" type="matrix" values="${color}" result="color" />
<feComponentTransfer  in="color" result="flood_alpha">${alpha2}</feComponentTransfer>
<feGaussianBlur in="srcRGB" stdDeviation=${blur} />
<feComponentTransfer  result="blur_alpha">${alpha1}</feComponentTransfer>
<feBlend  in="blur_alpha" in2="srcRGB" mode="normal" result="source_blur" />
<feBlend  in2="source_blur" in="flood_alpha" mode="overlay" />
<feComponentTransfer >${brightness}</feComponentTransfer>
<feComponentTransfer  result="contrast">${contrast}</feComponentTransfer>
<feColorMatrix  type="saturate" values=${saturate} />`
            }
        },
        {
            name: '3d',
            defaults: {
                color1: '#00ffff',
                color2: '#ff0000',
                offset_x: '3',
                offset_y: '0'
            },
            template: params => {
                const color1 = getColor(hexToRgb(params.color1))
                const color2 = getColor(hexToRgb(params.color2))
                const offset_x = params.offset_x
                const offset_y = params.offset_y

                return `<feColorMatrix in="srcRGB" type="matrix" values="${color1}" result="color1" /> 
<feBlend  in="color1" in2="srcRGB" mode="lighten" result="image_color1"/> 
<feOffset dx=${-offset_x} dy=${offset_y} in="image_color1" result="image_color1_offset"/> 
<feColorMatrix in="srcRGB" type="matrix" values="${color2}" result="color2" /> 
<feBlend  in="color2" in2="srcRGB" mode="lighten" result="image_color2"/> 
<feOffset dx=${offset_x} dy=${offset_y} in="image_color2" result="image_color2_offset"/> 
<feBlend  in2="image_color2_offset" in="image_color1_offset" mode="darken" />`
            }
        },
        {
            name: 'blueray',
            defaults: {
                color: '#1b00ff',
                saturate: 0
            },
            template: params => {
                const saturate = params.saturate
                const color = getColor(hexToRgb(params.color))

                return `<feColorMatrix type="saturate" values=${saturate} result="grayscale"/> 
<feColorMatrix in="SourceGraphic" type="matrix" values="${color}" result="color1" /> 
<feBlend  in="color1" in2="grayscale" mode="multiply" />`
            }
        },
        {
            name: 'lighten',
            defaults: {
                color: '#ffffff',
                alpha: 0.46
            },
            template: params => {
                const color = getColor(hexToRgb(params.color))
                const alpha = getAlpha(params.alpha)

                return `<feColorMatrix in="srcRGB" type="matrix" values="${color}" result="color" /> 
<feComponentTransfer in="color" result="color_alpha" >${alpha}</feComponentTransfer> 
<feComposite in2="srcRGB" in="color_alpha" operator="over"/>`
            }
        },
        {
            name: 'darken',
            defaults: {
                brightness: 0.4
            },
            template: params => {
                const brightness = getBrightness(params.brightness)

                return `<feComponentTransfer result="brightness">${brightness}</feComponentTransfer>
<feBlend  in="brightness" in2="SourceGraphic" mode="darken" />`
            }
        },
        {
            name: 'pinkrinse',
            defaults: {
                saturate: 0,
                color: '#9a1a77'
            },
            template: params => {
                const saturate = params.saturate
                const color = getColor(hexToRgb(params.color))

                return `<feColorMatrix type="saturate" values=${saturate} result="grayscale"/>
<feColorMatrix in="SourceGraphic" type="matrix" values="${color}" result="color" />
<feBlend  in="grayscale" in2="color" mode="multiply" />`
            }
        },
        {
            name: 'redrum',
            defaults: {
                saturate: 0,
                contrast: 0.75,
                brightness: 1.2,
                color: '#f26552'
            },
            template: params => {
                const brightness = getBrightness(params.brightness)
                const contrast = getContrast(params.contrast)
                const saturate = params.saturate
                const color = getColor(hexToRgb(params.color))

                return `<feComponentTransfer>${contrast}</feComponentTransfer>
<feComponentTransfer>${brightness}</feComponentTransfer> 
<feColorMatrix type="saturate" values=${saturate} result="grayscale"/>
<feColorMatrix in="SourceGraphic" type="matrix" values="${color}" result="color" />
<feBlend  in="grayscale" in2="color" mode="multiply" />`
            }
        },
        {
            name: 'greenwash',
            defaults: {
                saturate: 0,
                color: '#1c9784'
            },
            template: params => {
                const color = getColor(hexToRgb(params.color))
                const saturate = params.saturate

                return `<feColorMatrix type="saturate" values=${saturate} result="grayscale"/>
<feColorMatrix in="SourceGraphic" type="matrix" values="${color}" result="color1" /> 
<feBlend  in="grayscale" in2="color1" mode="multiply" />`
            }
        },
        {
            name: 'yellowstreak',
            defaults: {
                saturate: 0,
                color: '#ffd200',
                contrast: 2,
                brightness: 1.1
            },
            template: params => {
                const brightness = getBrightness(params.brightness)
                const contrast = getContrast(params.contrast)
                const saturate = params.saturate
                const color = getColor(hexToRgb(params.color))

                return `<feComponentTransfer>${contrast}</feComponentTransfer>
<feComponentTransfer>${brightness}</feComponentTransfer>
<feColorMatrix type="saturate" values=${saturate} result="grayscale"/>
<feColorMatrix in="SourceGraphic" type="matrix" values="${color}" result="color1" />
<feBlend  in="grayscale" in2="color1" mode="multiply" />`
            }
        },
        {
            name: 'neonsky',
            defaults: {
                saturate: 0,
                doutoneBlackColor: '#800033',
                doutoneWhiteColor: '#fff200',
                doutoneLumaWhiteColor: {r: 1.2, g: 0, b: 0},
                doutoneLumaBlackColor: {r: 0, g: -0.1, b: 0},
                contrast: 0.8
            },
            template: params => {
                const contrast = getContrast(params.contrast)
                const saturate = params.saturate
                const doutone = getDoutone(hexToRgb(params.doutoneWhiteColor), hexToRgb(params.doutoneBlackColor))
                const luma = getLumaMatrix(params.doutoneLumaWhiteColor, params.doutoneLumaBlackColor)
                return `<feComponentTransfer>${contrast}</feComponentTransfer>
<feColorMatrix type="saturate" values=${saturate} result="grayscale"/> 
<feColorMatrix type="matrix" values="${doutone}" />
<feColorMatrix type="matrix" values="${luma}" />`
            }
        },
        {
            name: 'seaweed',
            defaults: {
                doutoneBlackColor: '#0b00e9',
                doutoneWhiteColor: '#00d980',
                saturate: 0
            },
            template: params => {
                const saturate = params.saturate
                const doutone = getDoutone(hexToRgb(params.doutoneWhiteColor), hexToRgb(params.doutoneBlackColor))

                return `<feColorMatrix type="saturate" values=${saturate} result="grayscale"/>
<feColorMatrix type="matrix" values="${doutone}" />`
            }
        },
        {
            name: 'soledad',
            defaults: {
                brightness: 1.1,
                contrast: 0.9,
                saturate: 0.8,
                color1: '#fce8d3',
                color2: '#fc9f1a',
                alpha1: 0.15,
                alpha2: 0.23
            },
            template: params => {
                const brightness = getBrightness(params.brightness)
                const contrast = getContrast(params.contrast)
                const saturate = params.saturate
                const color1 = getColor(hexToRgb(params.color1))
                const color2 = getColor(hexToRgb(params.color2))
                const alpha1 = getAlpha(params.alpha1)
                const alpha2 = getAlpha(params.alpha2)

                return `<feComponentTransfer  result="brightness">${brightness}</feComponentTransfer>
<feComponentTransfer  in="brightness" result="contrast">${contrast}</feComponentTransfer>
<feColorMatrix  type="saturate" in="contrast" values=${saturate} result="saturate"/>
<feColorMatrix in="SourceGraphic" type="matrix" values="${color1}" result="color1" />
<feComponentTransfer  in="color1" result="color_alpha" >${alpha1}</feComponentTransfer>
<feBlend  in="color_alpha" in2="saturate" mode="multiply" result="source" />
<feColorMatrix in="SourceGraphic" type="matrix" values="${color2}" result="color2" />
<feComponentTransfer  in="color2" result="color_alpha2" >${alpha2}</feComponentTransfer>
<feBlend  in="color_alpha2" in2="source" mode="multiply" />`
            }
        },
        {
            name: 'sangria',
            defaults: {
                brightness: 0.95,
                contrast: 1.35,
                saturate: 0.5,
                color: '#c712e2',
                alpha: 0.08
            },
            template: params => {
                const brightness = getBrightness(params.brightness)
                const contrast = getContrast(params.contrast)
                const saturate = params.saturate
                const color1 = getColor(hexToRgb(params.color))
                const alpha = getAlpha(params.alpha)

                return `<feComponentTransfer>${brightness}</feComponentTransfer>
<feComponentTransfer>${contrast}</feComponentTransfer>
<feColorMatrix type="saturate" values=${saturate} result="saturate"/>
<feColorMatrix in="SourceGraphic" type="matrix" values="${color1}" result="color1" />
<feComponentTransfer in="color1" result="color_alpha" >${alpha}</feComponentTransfer>
<feBlend  in="color_alpha" in2="saturate" mode="multiply" result="source" />`
            }

        },
        // new filters Jira WEED-1038
        {
            name: 'malibu',
            defaults: {
                saturate: 0,
                doutoneBlackColor: '#0045d6',
                doutoneWhiteColor: '#ffdbc0',
                contrast: 0.8
            },
            template: params => {
                const contrast = getContrast(params.contrast)
                const saturate = params.saturate
                const doutone = getDoutone(hexToRgb(params.doutoneWhiteColor), hexToRgb(params.doutoneBlackColor))

                return `<feComponentTransfer>${contrast}</feComponentTransfer>
<feColorMatrix type="saturate" values=${saturate} result="grayscale"/> 
 <feColorMatrix type="matrix" values="${doutone}" />`
            }
        },
        {
            name: 'candyfloss',
            defaults: {
                saturate: 0,
                doutoneBlackColor: '#ff0000',
                doutoneWhiteColor: '#ff9bff',
                contrast: 0.8
            },
            template: params => {
                const contrast = getContrast(params.contrast)
                const saturate = params.saturate
                const doutone = getDoutone(hexToRgb(params.doutoneWhiteColor), hexToRgb(params.doutoneBlackColor))

                return `<feComponentTransfer>${contrast}</feComponentTransfer>
<feColorMatrix type="saturate" values=${saturate} result="grayscale"/> 
 <feColorMatrix type="matrix" values="${doutone}" />`
            }
        },
        {
            name: 'elmo',
            defaults: {
                saturate: 0,
                doutoneBlackColor: '#ff0000',
                doutoneWhiteColor: '#cadccc',
                contrast: 0.8
            },
            template: params => {
                const contrast = getContrast(params.contrast)
                const saturate = params.saturate
                const doutone = getDoutone(hexToRgb(params.doutoneWhiteColor), hexToRgb(params.doutoneBlackColor))

                return `<feComponentTransfer>${contrast}</feComponentTransfer>
<feColorMatrix type="saturate" values=${saturate} result="grayscale"/> 
 <feColorMatrix type="matrix" values="${doutone}" />`
            }
        },
        {
            name: 'unicorn',
            defaults: {
                saturate: 0,
                doutoneBlackColor: '#409ca5',
                doutoneWhiteColor: '#dfb1bd',
                contrast: 0.8
            },
            template: params => {
                const contrast = getContrast(params.contrast)
                const saturate = params.saturate
                const doutone = getDoutone(hexToRgb(params.doutoneWhiteColor), hexToRgb(params.doutoneBlackColor))

                return `<feComponentTransfer>${contrast}</feComponentTransfer>
<feColorMatrix type="saturate" values=${saturate} result="grayscale"/> 
 <feColorMatrix type="matrix" values="${doutone}" />`
            }
        },
        {
            name: 'kerouac',
            defaults: {
                doutoneBlackColor: '#37312e',
                doutoneWhiteColor: '#b5a8a2',
                saturate: 0
            },
            template: params => {
                const saturate = params.saturate
                const doutone = getDoutone(hexToRgb(params.doutoneWhiteColor), hexToRgb(params.doutoneBlackColor))

                return `<feColorMatrix type="saturate" values=${saturate} result="grayscale"/>
<feColorMatrix type="matrix" values="${doutone}" />`
            }
        },
        {
            name: 'koolaid',
            defaults: {
                doutoneBlackColor: '#5f00ad',
                doutoneWhiteColor: '#fdcec1',
                saturate: 0
            },
            template: params => {
                const saturate = params.saturate
                const doutone = getDoutone(hexToRgb(params.doutoneWhiteColor), hexToRgb(params.doutoneBlackColor))

                return `<feColorMatrix type="saturate" values=${saturate} result="grayscale"/>
<feColorMatrix type="matrix" values="${doutone}" />`
            }
        },
        {
            name: 'hydra',
            defaults: {
                doutoneBlackColor: '#f72b3e',
                doutoneWhiteColor: '#ffeced',
                saturate: 0
            },
            template: params => {
                const saturate = params.saturate
                const doutone = getDoutone(hexToRgb(params.doutoneWhiteColor), hexToRgb(params.doutoneBlackColor))

                return `<feColorMatrix type="saturate" values=${saturate} result="grayscale"/>
<feColorMatrix type="matrix" values="${doutone}" />`
            }
        },
        {
            name: 'pixie',
            defaults: {
                doutoneBlackColor: '#85d3de',
                doutoneWhiteColor: '#ffe1d5',
                saturate: 0
            },
            template: params => {
                const saturate = params.saturate
                const doutone = getDoutone(hexToRgb(params.doutoneWhiteColor), hexToRgb(params.doutoneBlackColor))

                return `<feColorMatrix type="saturate" values=${saturate} result="grayscale"/>
<feColorMatrix type="matrix" values="${doutone}" />`
            }
        },
        {
            name: 'nightrain',
            defaults: {
                doutoneBlackColor: '#2f3c6d',
                doutoneWhiteColor: '#8e96b5',
                saturate: 0
            },
            template: params => {
                const saturate = params.saturate
                const doutone = getDoutone(hexToRgb(params.doutoneWhiteColor), hexToRgb(params.doutoneBlackColor))

                return `<feColorMatrix type="saturate" values=${saturate} result="grayscale"/>
<feColorMatrix type="matrix" values="${doutone}" />`
            }
        },
        {
            name: 'bauhaus',
            defaults: {
                doutoneBlackColor: '#002787',
                doutoneWhiteColor: '#e8e8e8',
                saturate: 0
            },
            template: params => {
                const saturate = params.saturate
                const doutone = getDoutone(hexToRgb(params.doutoneWhiteColor), hexToRgb(params.doutoneBlackColor))

                return `<feColorMatrix type="saturate" values=${saturate} result="grayscale"/>
<feColorMatrix type="matrix" values="${doutone}" />`
            }
        },
        {
            name: 'neptune',
            defaults: {
                doutoneBlackColor: '#0a7eff',
                doutoneWhiteColor: '#e5defa',
                saturate: 0
            },
            template: params => {
                const saturate = params.saturate
                const doutone = getDoutone(hexToRgb(params.doutoneWhiteColor), hexToRgb(params.doutoneBlackColor))

                return `<feColorMatrix type="saturate" values=${saturate} result="grayscale"/>
<feColorMatrix type="matrix" values="${doutone}" />`
            }
        },
        {
            name: 'orca',
            defaults: {
                contrast: 0.85,
                brightness: 0.9,
                color: '#2b524c',
                saturate: 0.2
            },
            template: params => {
                const brightness = getBrightness(params.brightness)
                const contrast = getContrast(params.contrast)
                const saturate = params.saturate
                const tint = getTint(hexToRgb(params.color))

                return `<feColorMatrix type="saturate" values=${saturate} />
<feComponentTransfer>${contrast}</feComponentTransfer>
<feComponentTransfer>${brightness}</feComponentTransfer>
<feColorMatrix type="matrix" values="${tint}"/>`
            }
        },
        {
            name: 'manhattan',
            defaults: {
                contrast: 0.85,
                brightness: 0.9,
                color: '#211c0f',
                saturate: 0.2
            },
            template: params => {
                const brightness = getBrightness(params.brightness)
                const contrast = getContrast(params.contrast)
                const saturate = params.saturate
                const tint = getTint(hexToRgb(params.color))

                return `<feColorMatrix type="saturate" values=${saturate} />
<feComponentTransfer>${contrast}</feComponentTransfer>
<feComponentTransfer>${brightness}</feComponentTransfer>
<feColorMatrix type="matrix" values="${tint}"/>`
            }
        },
        {
            name: 'goldie',
            defaults: {
                contrast: 0.85,
                brightness: 0.9,
                color: '#a6966e',
                saturate: 0.2
            },
            template: params => {
                const brightness = getBrightness(params.brightness)
                const contrast = getContrast(params.contrast)
                const saturate = params.saturate
                const tint = getTint(hexToRgb(params.color))

                return `<feColorMatrix type="saturate" values=${saturate} />
<feComponentTransfer>${contrast}</feComponentTransfer>
<feComponentTransfer>${brightness}</feComponentTransfer>
<feColorMatrix type="matrix" values="${tint}"/>`
            }
        },
        {
            name: 'flamingo',
            defaults: {
                contrast: 0.85,
                brightness: 0.9,
                color: '#ff4283',
                saturate: 0.2
            },
            template: params => {
                const brightness = getBrightness(params.brightness)
                const contrast = getContrast(params.contrast)
                const saturate = params.saturate
                const tint = getTint(hexToRgb(params.color))

                return `<feColorMatrix type="saturate" values=${saturate} />
<feComponentTransfer>${contrast}</feComponentTransfer>
<feComponentTransfer>${brightness}</feComponentTransfer>
<feColorMatrix type="matrix" values="${tint}"/>`
            }
        },
        {
            name: 'faded',
            defaults: {
                contrast: 0.85,
                brightness: 0.9,
                color: '#dcdddc',
                saturate: 0.2
            },
            template: params => {
                const brightness = getBrightness(params.brightness)
                const contrast = getContrast(params.contrast)
                const saturate = params.saturate
                const tint = getTint(hexToRgb(params.color))

                return `<feColorMatrix type="saturate" values=${saturate} />
<feComponentTransfer>${contrast}</feComponentTransfer>
<feComponentTransfer>${brightness}</feComponentTransfer>
<feColorMatrix type="matrix" values="${tint}"/>`
            }
        },
        {
            name: 'gotham',
            defaults: {
                brightness: 0.95,
                contrast: 1.35,
                saturate: 0.5,
                color: '#93676f',
                alpha: 0.08
            },
            template: params => {
                const brightness = getBrightness(params.brightness)
                const contrast = getContrast(params.contrast)
                const saturate = params.saturate
                const color1 = getColor(hexToRgb(params.color))
                const alpha = getAlpha(params.alpha)

                return `<feComponentTransfer>${brightness}</feComponentTransfer>
<feComponentTransfer>${contrast}</feComponentTransfer>
<feColorMatrix type="saturate" values=${saturate} result="saturate"/>
<feColorMatrix in="SourceGraphic" type="matrix" values="${color1}" result="color1" />
<feComponentTransfer in="color1" result="color_alpha" >${alpha}</feComponentTransfer>
<feBlend  in="color_alpha" in2="saturate" mode="multiply" result="source" />`
            }

        },
        {
            name: 'hulk',
            defaults: {
                saturate: 0,
                contrast: 0.75,
                brightness: 1.2,
                color: '#b5c900'
            },
            template: params => {
                const brightness = getBrightness(params.brightness)
                const contrast = getContrast(params.contrast)
                const saturate = params.saturate
                const color = getColor(hexToRgb(params.color))

                return `<feComponentTransfer>${contrast}</feComponentTransfer>
<feComponentTransfer>${brightness}</feComponentTransfer> 
<feColorMatrix type="saturate" values=${saturate} result="grayscale"/>
<feColorMatrix in="SourceGraphic" type="matrix" values="${color}" result="color" />
<feBlend  in="grayscale" in2="color" mode="multiply" />`
            }
        },
        {
            name: 'midnight',
            defaults: {
                saturate: 0,
                contrast: 0.75,
                brightness: 1.2,
                color: '#00254b'
            },
            template: params => {
                const brightness = getBrightness(params.brightness)
                const contrast = getContrast(params.contrast)
                const saturate = params.saturate
                const color = getColor(hexToRgb(params.color))

                return `<feComponentTransfer>${contrast}</feComponentTransfer>
<feComponentTransfer>${brightness}</feComponentTransfer> 
<feColorMatrix type="saturate" values=${saturate} result="grayscale"/>
<feColorMatrix in="SourceGraphic" type="matrix" values="${color}" result="color" />
<feBlend  in="grayscale" in2="color" mode="multiply" />`
            }
        },
        {
            name: 'lucille',
            defaults: {
                saturate: 0,
                contrast: 0.75,
                brightness: 1.2,
                color: '#d60000'
            },
            template: params => {
                const brightness = getBrightness(params.brightness)
                const contrast = getContrast(params.contrast)
                const saturate = params.saturate
                const color = getColor(hexToRgb(params.color))

                return `<feComponentTransfer>${contrast}</feComponentTransfer>
<feComponentTransfer>${brightness}</feComponentTransfer> 
<feColorMatrix type="saturate" values=${saturate} result="grayscale"/>
<feColorMatrix in="SourceGraphic" type="matrix" values="${color}" result="color" />
<feBlend  in="grayscale" in2="color" mode="multiply" />`
            }
        },
        {
            name: 'organic',
            defaults: {
                saturate: 0,
                contrast: 0.75,
                brightness: 1.2,
                color: '#debda5'
            },
            template: params => {
                const brightness = getBrightness(params.brightness)
                const contrast = getContrast(params.contrast)
                const saturate = params.saturate
                const color = getColor(hexToRgb(params.color))

                return `<feComponentTransfer>${contrast}</feComponentTransfer>
<feComponentTransfer>${brightness}</feComponentTransfer> 
<feColorMatrix type="saturate" values=${saturate} result="grayscale"/>
<feColorMatrix in="SourceGraphic" type="matrix" values="${color}" result="color" />
<feBlend  in="grayscale" in2="color" mode="multiply" />`
            }
        }
    ]
}


/**
 * https://docs.webplatform.org/wiki/svg/tutorials/smarter_svg_filters
 * @type {{masterTemplate:function, templates:[]}}}
 */
export default filterTemplates
