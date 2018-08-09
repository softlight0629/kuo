import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';
import PanelWrapper from '../../PanelWrapper';
import ScrollBar from '../../../../../../components/ScrollBar';
import filterRegistrar from '../../../../../../core/filterRegistrar';

const range = (start, end) => new Array(end - start).fill(start).map((el, i) => start + i);

const FILTER_LABELS = {
  181: 'Kennedy',
  182: 'Darken',
  183: 'Blur',
  184: 'Lighten',
  185: 'Faded',
  186: 'Kerouac',
  187: 'Orca',
  188: 'Sangria',
  189: 'Gothen',
  190: 'Nightrain',
  191: 'Whislter',
  192: 'Feathered',
  193: 'Soledad',
  194: 'Goldie',
  195: 'ThreeD',
  196: 'Ink',
  197: 'Manhattan',
  198: 'Gumby',
  199: 'Organic',
  200: 'Elmo',
  201: 'Nepture',
  202: 'Jellybean',
  203: 'NeonSky',
  204: 'Hulk',
  205: 'Bauhaus',
  206: 'Yoda',
  207: 'Midnight',
  208: 'Unicorn',
  209: 'BlueRay',
  210: 'Malibu',
  211: 'RedRum',
  212: 'Flamingo',
  213: 'Hydra',
  214: 'KoolAid',
  215: 'Barney',
  216: 'Pixie',
  217: 'Marge',
  218: 'Lucille',
};

@observer
class FilterPanel extends Component {

  close() {}

  chooseFilter(filter) {
    const { astm } = this.props;
    astm.spec.fill.setFilter(filter);
  }

  filter181 = (renderImg) => {
    return (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
        <defs>
          <filter id="filter_181" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feColorMatrix type="saturate" values="0"></feColorMatrix>
            <feComponentTransfer><feFuncR type="linear" slope="1.1" intercept="-0.05"></feFuncR><feFuncG type="linear" slope="1.1" intercept="-0.05"></feFuncG><feFuncB type="linear" slope="1.1" intercept="-0.05"></feFuncB></feComponentTransfer>
            <feComponentTransfer><feFuncR type="linear" slope="0.9"></feFuncR><feFuncG type="linear" slope="0.9"></feFuncG><feFuncB type="linear" slope="0.9"></feFuncB></feComponentTransfer><feComponentTransfer></feComponentTransfer></filter>
        </defs>
        { renderImg() }
      </svg>
    )
  }

  filter182 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_182" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feComponentTransfer result="brightness"><feFuncR type="linear" slope="0.4"></feFuncR><feFuncG type="linear" slope="0.4"></feFuncG><feFuncB type="linear" slope="0.4"></feFuncB></feComponentTransfer>
          <feBlend in="brightness" in2="SourceGraphic" mode="darken"></feBlend><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter183 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_183" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter184 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_184" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feColorMatrix in="srcRGB" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" result="color"></feColorMatrix>
          <feComponentTransfer in="color" result="color_alpha"><feFuncA type="linear" slope="0.46"></feFuncA></feComponentTransfer>
          <feComposite in2="srcRGB" in="color_alpha" operator="over"></feComposite><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter185 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_185" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feColorMatrix type="saturate" values="0.2"></feColorMatrix>
          <feComponentTransfer><feFuncR type="linear" slope="0.85" intercept="0.08"></feFuncR><feFuncG type="linear" slope="0.85" intercept="0.08"></feFuncG><feFuncB type="linear" slope="0.85" intercept="0.08"></feFuncB></feComponentTransfer>
          <feComponentTransfer><feFuncR type="linear" slope="0.9"></feFuncR><feFuncG type="linear" slope="0.9"></feFuncG><feFuncB type="linear" slope="0.9"></feFuncB></feComponentTransfer>
          <feColorMatrix type="matrix" values="0.13725490196078427 0 0 0 0.8627450980392157 0.1333333333333333 0 0 0 0.8666666666666667 0.13725490196078427 0 0 0 0.8627450980392157 0 0 0 1 0"></feColorMatrix><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter186 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_186" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feColorMatrix type="saturate" values="0" result="grayscale"></feColorMatrix>
          <feColorMatrix type="matrix" values="0.49411764705882355 0 0 0 0.21568627450980393 0.4666666666666667 0 0 0 0.19215686274509805 0.45490196078431366 0 0 0 0.1803921568627451 0 0 0 1 0"></feColorMatrix><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter187 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_187" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feColorMatrix type="saturate" values="0.2"></feColorMatrix>
          <feComponentTransfer><feFuncR type="linear" slope="0.85" intercept="0.08"></feFuncR><feFuncG type="linear" slope="0.85" intercept="0.08"></feFuncG><feFuncB type="linear" slope="0.85" intercept="0.08"></feFuncB></feComponentTransfer>
          <feComponentTransfer><feFuncR type="linear" slope="0.9"></feFuncR><feFuncG type="linear" slope="0.9"></feFuncG><feFuncB type="linear" slope="0.9"></feFuncB></feComponentTransfer>
          <feColorMatrix type="matrix" values="0.8313725490196078 0 0 0 0.16862745098039217 0.6784313725490196 0 0 0 0.3215686274509804 0.7019607843137254 0 0 0 0.2980392156862745 0 0 0 1 0"></feColorMatrix><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter188 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_188" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feComponentTransfer><feFuncR type="linear" slope="0.95"></feFuncR><feFuncG type="linear" slope="0.95"></feFuncG><feFuncB type="linear" slope="0.95"></feFuncB></feComponentTransfer>
          <feComponentTransfer><feFuncR type="linear" slope="1.35" intercept="-0.18"></feFuncR><feFuncG type="linear" slope="1.35" intercept="-0.18"></feFuncG><feFuncB type="linear" slope="1.35" intercept="-0.18"></feFuncB></feComponentTransfer>
          <feColorMatrix type="saturate" values="0.5" result="saturate"></feColorMatrix>
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.7803921568627451 0 0 0 0 0.07058823529411765 0 0 0 0 0.8862745098039215 0 0 0 1 0" result="color1"></feColorMatrix>
          <feComponentTransfer in="color1" result="color_alpha"><feFuncA type="linear" slope="0.08"></feFuncA></feComponentTransfer>
          <feBlend in="color_alpha" in2="saturate" mode="multiply" result="source"></feBlend><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter189 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_189" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feComponentTransfer><feFuncR type="linear" slope="0.95"></feFuncR><feFuncG type="linear" slope="0.95"></feFuncG><feFuncB type="linear" slope="0.95"></feFuncB></feComponentTransfer>
          <feComponentTransfer><feFuncR type="linear" slope="1.35" intercept="-0.18"></feFuncR><feFuncG type="linear" slope="1.35" intercept="-0.18"></feFuncG><feFuncB type="linear" slope="1.35" intercept="-0.18"></feFuncB></feComponentTransfer>
          <feColorMatrix type="saturate" values="0.5" result="saturate"></feColorMatrix>
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.5764705882352941 0 0 0 0 0.403921568627451 0 0 0 0 0.43529411764705883 0 0 0 1 0" result="color1"></feColorMatrix>
          <feComponentTransfer in="color1" result="color_alpha"><feFuncA type="linear" slope="0.08"></feFuncA></feComponentTransfer>
          <feBlend in="color_alpha" in2="saturate" mode="multiply" result="source"></feBlend><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter190 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_190" colorInterpolation="sRGB" colorInterpolationFilters="sRGB">
          <feComponentTransfer result="srcRGB"></feComponentTransfer>
          <feColorMatrix type="saturate" values="0" result="grayscale"></feColorMatrix>
          <feColorMatrix type="matrix" values="0.37254901960784315 0 0 0 0.1843137254901961 0.35294117647058826 0 0 0 0.23529411764705882 0.28235294117647064 0 0 0 0.42745098039215684 0 0 0 1 0"></feColorMatrix>
          <feComponentTransfer></feComponentTransfer>
        </filter>
      </defs>
      { renderImg() }
    </svg>
  )


  filter191 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_191" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" result="color"></feColorMatrix>
          <feComponentTransfer in="color" result="flood_alpha"><feFuncA type="linear" slope="0.4"></feFuncA></feComponentTransfer>
          <feGaussianBlur in="srcRGB" stdDeviation="1.8"></feGaussianBlur>
          <feComponentTransfer result="blur_alpha"><feFuncA type="linear" slope="0.6"></feFuncA></feComponentTransfer>
          <feBlend in="blur_alpha" in2="srcRGB" mode="normal" result="source_blur"></feBlend>
          <feBlend in2="source_blur" in="flood_alpha" mode="overlay"></feBlend>
          <feComponentTransfer><feFuncR type="linear" slope="1.1"></feFuncR><feFuncG type="linear" slope="1.1"></feFuncG><feFuncB type="linear" slope="1.1"></feFuncB></feComponentTransfer>
          <feComponentTransfer result="contrast"><feFuncR type="linear" slope="0.9" intercept="0.05"></feFuncR><feFuncG type="linear" slope="0.9" intercept="0.05"></feFuncG><feFuncB type="linear" slope="0.9" intercept="0.05"></feFuncB></feComponentTransfer>
          <feColorMatrix type="saturate" values="0.6"></feColorMatrix><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )


  filter192 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_192" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feColorMatrix type="saturate" values="0.2"></feColorMatrix>
          <feComponentTransfer><feFuncR type="linear" slope="0.85" intercept="0.08"></feFuncR><feFuncG type="linear" slope="0.85" intercept="0.08"></feFuncG><feFuncB type="linear" slope="0.85" intercept="0.08"></feFuncB></feComponentTransfer>
          <feComponentTransfer><feFuncR type="linear" slope="0.9"></feFuncR><feFuncG type="linear" slope="0.9"></feFuncG><feFuncB type="linear" slope="0.9"></feFuncB></feComponentTransfer>
          <feColorMatrix type="matrix" values="0.9098039215686274 0 0 0 0.09019607843137255 0.9294117647058824 0 0 0 0.07058823529411765 0.9294117647058824 0 0 0 0.07058823529411765 0 0 0 1 0"></feColorMatrix><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter193 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_193" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feComponentTransfer result="brightness"><feFuncR type="linear" slope="1.1"></feFuncR><feFuncG type="linear" slope="1.1"></feFuncG><feFuncB type="linear" slope="1.1"></feFuncB></feComponentTransfer>
          <feComponentTransfer in="brightness" result="contrast"><feFuncR type="linear" slope="0.9" intercept="0.05"></feFuncR><feFuncG type="linear" slope="0.9" intercept="0.05"></feFuncG><feFuncB type="linear" slope="0.9" intercept="0.05"></feFuncB></feComponentTransfer>
          <feColorMatrix type="saturate" in="contrast" values="0.8" result="saturate"></feColorMatrix>
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.9882352941176471 0 0 0 0 0.9098039215686274 0 0 0 0 0.8274509803921568 0 0 0 1 0" result="color1"></feColorMatrix>
          <feComponentTransfer in="color1" result="color_alpha"><feFuncA type="linear" slope="0.15"></feFuncA></feComponentTransfer>
          <feBlend in="color_alpha" in2="saturate" mode="multiply" result="source"></feBlend>
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.9882352941176471 0 0 0 0 0.6235294117647059 0 0 0 0 0.10196078431372549 0 0 0 1 0" result="color2"></feColorMatrix>
          <feComponentTransfer in="color2" result="color_alpha2"><feFuncA type="linear" slope="0.23"></feFuncA></feComponentTransfer>
          <feBlend in="color_alpha2" in2="source" mode="multiply"></feBlend><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter194 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_194" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feColorMatrix type="saturate" values="0.2"></feColorMatrix>
          <feComponentTransfer><feFuncR type="linear" slope="0.85" intercept="0.08"></feFuncR><feFuncG type="linear" slope="0.85" intercept="0.08"></feFuncG><feFuncB type="linear" slope="0.85" intercept="0.08"></feFuncB></feComponentTransfer>
          <feComponentTransfer><feFuncR type="linear" slope="0.9"></feFuncR><feFuncG type="linear" slope="0.9"></feFuncG><feFuncB type="linear" slope="0.9"></feFuncB></feComponentTransfer>
          <feColorMatrix type="matrix" values="0.34901960784313724 0 0 0 0.6509803921568628 0.4117647058823529 0 0 0 0.5882352941176471 0.5686274509803921 0 0 0 0.43137254901960786 0 0 0 1 0"></feColorMatrix><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )


  filter195 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_195" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feColorMatrix in="srcRGB" type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" result="color1"></feColorMatrix>
          <feBlend in="color1" in2="srcRGB" mode="lighten" result="image_color1"></feBlend>
          <feOffset dx="-3" dy="0" in="image_color1" result="image_color1_offset"></feOffset>
          <feColorMatrix in="srcRGB" type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="color2"></feColorMatrix>
          <feBlend in="color2" in2="srcRGB" mode="lighten" result="image_color2"></feBlend>
          <feOffset dx="3" dy="0" in="image_color2" result="image_color2_offset"></feOffset>
          <feBlend in2="image_color2_offset" in="image_color1_offset" mode="darken"></feBlend><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter196 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_196" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feColorMatrix type="matrix" values="0.8179 0.23070000000000002 0.0567 0 0 0.10470000000000002 0.9058 0.050400000000000014 0 0 0.0816 0.1602 0.7393 0 0 0 0 0 1 0"></feColorMatrix>
          <feComponentTransfer><feFuncR type="linear" slope="1.5" intercept="-0.25"></feFuncR><feFuncG type="linear" slope="1.5" intercept="-0.25"></feFuncG><feFuncB type="linear" slope="1.5" intercept="-0.25"></feFuncB></feComponentTransfer>
          <feComponentTransfer><feFuncR type="linear" slope="1.1"></feFuncR><feFuncG type="linear" slope="1.1"></feFuncG><feFuncB type="linear" slope="1.1"></feFuncB></feComponentTransfer>
          <feColorMatrix type="saturate" values="0"></feColorMatrix><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter197 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_197" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feColorMatrix type="saturate" values="0.2"></feColorMatrix>
          <feComponentTransfer><feFuncR type="linear" slope="0.85" intercept="0.08"></feFuncR><feFuncG type="linear" slope="0.85" intercept="0.08"></feFuncG><feFuncB type="linear" slope="0.85" intercept="0.08"></feFuncB></feComponentTransfer>
          <feComponentTransfer><feFuncR type="linear" slope="0.9"></feFuncR><feFuncG type="linear" slope="0.9"></feFuncG><feFuncB type="linear" slope="0.9"></feFuncB></feComponentTransfer>
          <feColorMatrix type="matrix" values="0.8705882352941177 0 0 0 0.12941176470588237 0.8901960784313725 0 0 0 0.10980392156862745 0.9411764705882353 0 0 0 0.058823529411764705 0 0 0 1 0"></feColorMatrix><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter198 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_198" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feColorMatrix type="saturate" values="0" result="grayscale"></feColorMatrix>
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.10980392156862745 0 0 0 0 0.592156862745098 0 0 0 0 0.5176470588235295 0 0 0 1 0" result="color1"></feColorMatrix>
          <feBlend in="grayscale" in2="color1" mode="multiply"></feBlend><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter199 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_199" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feComponentTransfer><feFuncR type="linear" slope="0.75" intercept="0.13"></feFuncR><feFuncG type="linear" slope="0.75" intercept="0.13"></feFuncG><feFuncB type="linear" slope="0.75" intercept="0.13"></feFuncB></feComponentTransfer>
          <feComponentTransfer><feFuncR type="linear" slope="1.2"></feFuncR><feFuncG type="linear" slope="1.2"></feFuncG><feFuncB type="linear" slope="1.2"></feFuncB></feComponentTransfer>
          <feColorMatrix type="saturate" values="0" result="grayscale"></feColorMatrix>
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.8705882352941177 0 0 0 0 0.7411764705882353 0 0 0 0 0.6470588235294118 0 0 0 1 0" result="color"></feColorMatrix>
          <feBlend in="grayscale" in2="color" mode="multiply"></feBlend><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter200 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_200" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feComponentTransfer><feFuncR type="linear" slope="0.8" intercept="0.1"></feFuncR><feFuncG type="linear" slope="0.8" intercept="0.1"></feFuncG><feFuncB type="linear" slope="0.8" intercept="0.1"></feFuncB></feComponentTransfer>
          <feColorMatrix type="saturate" values="0" result="grayscale"></feColorMatrix>
          <feColorMatrix type="matrix" values="-0.207843137254902 0 0 0 1 0.8627450980392157 0 0 0 0 0.8 0 0 0 0 0 0 0 1 0"></feColorMatrix><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter201 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_201" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feColorMatrix type="saturate" values="0" result="grayscale"></feColorMatrix>
          <feColorMatrix type="matrix" values="0.8588235294117648 0 0 0 0.0392156862745098 0.3764705882352941 0 0 0 0.49411764705882355 -0.019607843137254943 0 0 0 1 0 0 0 1 0"></feColorMatrix><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter202 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_202" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feComponentTransfer><feFuncR type="linear" slope="0.8" intercept="0.1"></feFuncR><feFuncG type="linear" slope="0.8" intercept="0.1"></feFuncG><feFuncB type="linear" slope="0.8" intercept="0.1"></feFuncB></feComponentTransfer>
          <feColorMatrix type="saturate" values="0" result="grayscale"></feColorMatrix>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0.6078431372549019 0 0 0 0 1 0 0 0 0 0 0 0 1 0"></feColorMatrix><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter203 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_203" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feComponentTransfer><feFuncR type="linear" slope="0.8" intercept="0.1"></feFuncR><feFuncG type="linear" slope="0.8" intercept="0.1"></feFuncG><feFuncB type="linear" slope="0.8" intercept="0.1"></feFuncB></feComponentTransfer>
          <feColorMatrix type="saturate" values="0" result="grayscale"></feColorMatrix>
          <feColorMatrix type="matrix" values="0.4980392156862745 0 0 0 0.5019607843137255 0.9490196078431372 0 0 0 0 -0.2 0 0 0 0.2 0 0 0 1 0"></feColorMatrix>
          <feColorMatrix type="matrix" values="1.2 0 0 0 0 0 1 0 0 -0.1 0 0 1 0 0 0 0 0 1 0"></feColorMatrix><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter204 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_204" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feComponentTransfer><feFuncR type="linear" slope="0.75" intercept="0.13"></feFuncR><feFuncG type="linear" slope="0.75" intercept="0.13"></feFuncG><feFuncB type="linear" slope="0.75" intercept="0.13"></feFuncB></feComponentTransfer>
          <feComponentTransfer><feFuncR type="linear" slope="1.2"></feFuncR><feFuncG type="linear" slope="1.2"></feFuncG><feFuncB type="linear" slope="1.2"></feFuncB></feComponentTransfer>
          <feColorMatrix type="saturate" values="0" result="grayscale"></feColorMatrix>
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.7098039215686275 0 0 0 0 0.788235294117647 0 0 0 0 0 0 0 0 1 0" result="color"></feColorMatrix>
          <feBlend in="grayscale" in2="color" mode="multiply"></feBlend><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg(renderImg) }
    </svg>
  )

  filter205 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_205" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feColorMatrix type="saturate" values="0" result="grayscale"></feColorMatrix>
          <feColorMatrix type="matrix" values="0.9098039215686274 0 0 0 0 0.7568627450980392 0 0 0 0.15294117647058825 0.3803921568627451 0 0 0 0.5294117647058824 0 0 0 1 0"></feColorMatrix><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter206 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_206" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feColorMatrix type="saturate" values="0" result="grayscale"></feColorMatrix>
          <feColorMatrix type="matrix" values="-0.043137254901960784 0 0 0 0.043137254901960784 0.8509803921568627 0 0 0 0 -0.4117647058823529 0 0 0 0.9137254901960784 0 0 0 1 0"></feColorMatrix><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter207 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_207" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feComponentTransfer><feFuncR type="linear" slope="0.75" intercept="0.13"></feFuncR><feFuncG type="linear" slope="0.75" intercept="0.13"></feFuncG><feFuncB type="linear" slope="0.75" intercept="0.13"></feFuncB></feComponentTransfer>
          <feComponentTransfer><feFuncR type="linear" slope="1.2"></feFuncR><feFuncG type="linear" slope="1.2"></feFuncG><feFuncB type="linear" slope="1.2"></feFuncB></feComponentTransfer>
          <feColorMatrix type="saturate" values="0" result="grayscale"></feColorMatrix>
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0 0 0 0 0 0.1450980392156863 0 0 0 0 0.29411764705882354 0 0 0 1 0" result="color"></feColorMatrix>
          <feBlend in="grayscale" in2="color" mode="multiply"></feBlend><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter208 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_208" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feComponentTransfer><feFuncR type="linear" slope="0.8" intercept="0.1"></feFuncR><feFuncG type="linear" slope="0.8" intercept="0.1"></feFuncG><feFuncB type="linear" slope="0.8" intercept="0.1"></feFuncB></feComponentTransfer>
          <feColorMatrix type="saturate" values="0" result="grayscale"></feColorMatrix>
          <feColorMatrix type="matrix" values="0.6235294117647059 0 0 0 0.25098039215686274 0.08235294117647052 0 0 0 0.611764705882353 0.09411764705882353 0 0 0 0.6470588235294118 0 0 0 1 0"></feColorMatrix><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter209 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_209" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feColorMatrix type="saturate" values="0" result="grayscale"></feColorMatrix>
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.10588235294117647 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" result="color1"></feColorMatrix>
          <feBlend in="color1" in2="grayscale" mode="multiply"></feBlend><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter210 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_210" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feComponentTransfer><feFuncR type="linear" slope="0.8" intercept="0.1"></feFuncR><feFuncG type="linear" slope="0.8" intercept="0.1"></feFuncG><feFuncB type="linear" slope="0.8" intercept="0.1"></feFuncB></feComponentTransfer>
          <feColorMatrix type="saturate" values="0" result="grayscale"></feColorMatrix>
          <feColorMatrix type="matrix" values="1 0 0 0 0 0.588235294117647 0 0 0 0.27058823529411763 -0.0862745098039216 0 0 0 0.8392156862745098 0 0 0 1 0"></feColorMatrix><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter211 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_211" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feComponentTransfer><feFuncR type="linear" slope="0.75" intercept="0.13"></feFuncR><feFuncG type="linear" slope="0.75" intercept="0.13"></feFuncG><feFuncB type="linear" slope="0.75" intercept="0.13"></feFuncB></feComponentTransfer>
          <feComponentTransfer><feFuncR type="linear" slope="1.2"></feFuncR><feFuncG type="linear" slope="1.2"></feFuncG><feFuncB type="linear" slope="1.2"></feFuncB></feComponentTransfer>
          <feColorMatrix type="saturate" values="0" result="grayscale"></feColorMatrix>
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.9490196078431372 0 0 0 0 0.396078431372549 0 0 0 0 0.3215686274509804 0 0 0 1 0" result="color"></feColorMatrix>
          <feBlend in="grayscale" in2="color" mode="multiply"></feBlend><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )


  filter212 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_212" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feColorMatrix type="saturate" values="0.2"></feColorMatrix>
          <feComponentTransfer><feFuncR type="linear" slope="0.85" intercept="0.08"></feFuncR><feFuncG type="linear" slope="0.85" intercept="0.08"></feFuncG><feFuncB type="linear" slope="0.85" intercept="0.08"></feFuncB></feComponentTransfer>
          <feComponentTransfer><feFuncR type="linear" slope="0.9"></feFuncR><feFuncG type="linear" slope="0.9"></feFuncG><feFuncB type="linear" slope="0.9"></feFuncB></feComponentTransfer>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0.7411764705882353 0 0 0 0.25882352941176473 0.4862745098039216 0 0 0 0.5137254901960784 0 0 0 1 0"></feColorMatrix><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )


  filter213 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_213" colorInterpolation="sRGB" colorInterpolationFilters="sRGB">
         <feComponentTransfer result="srcRGB"></feComponentTransfer>
          <feColorMatrix type="saturate" values="0" result="grayscale"></feColorMatrix>
          <feColorMatrix type="matrix" values="0.03137254901960784 0 0 0 0.9686274509803922 0.7568627450980392 0 0 0 0.16862745098039217 0.6862745098039216 0 0 0 0.24313725490196078 0 0 0 1 0"></feColorMatrix>
          <feComponentTransfer></feComponentTransfer>
        </filter>
      </defs>
      { renderImg() }
    </svg>
  )


  filter214 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_214" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feColorMatrix type="saturate" values="0" result="grayscale"></feColorMatrix>
          <feColorMatrix type="matrix" values="0.6196078431372549 0 0 0 0.37254901960784315 0.807843137254902 0 0 0 0 0.07843137254901955 0 0 0 0.6784313725490196 0 0 0 1 0"></feColorMatrix><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )


  filter215 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_215" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feColorMatrix type="saturate" values="0" result="grayscale"></feColorMatrix>
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.6039215686274509 0 0 0 0 0.10196078431372549 0 0 0 0 0.4666666666666667 0 0 0 1 0" result="color"></feColorMatrix>
          <feBlend in="grayscale" in2="color" mode="multiply"></feBlend><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )


  filter216 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_216" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feColorMatrix type="saturate" values="0" result="grayscale"></feColorMatrix>
          <feColorMatrix type="matrix" values="0.4784313725490196 0 0 0 0.5215686274509804 0.05490196078431375 0 0 0 0.8274509803921568 -0.03529411764705881 0 0 0 0.8705882352941177 0 0 0 1 0"></feColorMatrix><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )


  filter217 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_217" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feComponentTransfer><feFuncR type="linear" slope="2" intercept="-0.5"></feFuncR><feFuncG type="linear" slope="2" intercept="-0.5"></feFuncG><feFuncB type="linear" slope="2" intercept="-0.5"></feFuncB></feComponentTransfer>
          <feComponentTransfer><feFuncR type="linear" slope="1.1"></feFuncR><feFuncG type="linear" slope="1.1"></feFuncG><feFuncB type="linear" slope="1.1"></feFuncB></feComponentTransfer>
          <feColorMatrix type="saturate" values="0" result="grayscale"></feColorMatrix>
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1 0 0 0 0 0.8235294117647058 0 0 0 0 0 0 0 0 1 0" result="color1"></feColorMatrix>
          <feBlend in="grayscale" in2="color1" mode="multiply"></feBlend><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  filter218 = (renderImg) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" style={{ width: 72, height: 72, position: 'relative' }}>
      <defs>
        <filter id="filter_218" colorInterpolation="sRGB" colorInterpolationFilters="sRGB"><feComponentTransfer result="srcRGB"></feComponentTransfer><feComponentTransfer><feFuncR type="linear" slope="0.75" intercept="0.13"></feFuncR><feFuncG type="linear" slope="0.75" intercept="0.13"></feFuncG><feFuncB type="linear" slope="0.75" intercept="0.13"></feFuncB></feComponentTransfer>
          <feComponentTransfer><feFuncR type="linear" slope="1.2"></feFuncR><feFuncG type="linear" slope="1.2"></feFuncG><feFuncB type="linear" slope="1.2"></feFuncB></feComponentTransfer>
          <feColorMatrix type="saturate" values="0" result="grayscale"></feColorMatrix>
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.8392156862745098 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="color"></feColorMatrix>
          <feBlend in="grayscale" in2="color" mode="multiply"></feBlend><feComponentTransfer></feComponentTransfer></filter>
      </defs>
      { renderImg() }
    </svg>
  )

  render() {
    return (
      <PanelWrapper title="Choose a Filter" onClose={this.close.bind(this)}>
        <div className="filter-panel">
            <div className="content-wrapper">
              <section className="comp-panel-content">
              <ScrollBar>
                <div className="composite-thumbnails">
                  <div className="composite-thumbnails-list" data-max-items-per-row="3" >
                    <div className="thumbnail-wrapper item-wrapper" onClick={() => this.chooseFilter('')}>
                      <label className="label">
                        <div className="control-thumbnail fixed-ratio">
                          <div className="illustration-container illustration-bg">
                            <div className="illustration-inner-container">
                              <div style={{ width: 72, height: 72, position: 'relative' }}>
                                <img src="https://static.wixstatic.com/media/f31ce2_51215dc7492f455f81e5e5e443704ad7~mv2.jpg/v1/fill/w_144,h_144,al_c,q_80,usm_0.66_1.00_0.01/f31ce2_51215dc7492f455f81e5e5e443704ad7~mv2.webp" style={{ with: 72, height: 72, objectFit: 'cover' }} />>
                                </div>
                            </div>
                          </div>
                          <span className="control-label with-ellipsis label">
                            <span className="control-label-base">None</span>
                          </span>
                        </div>
                      </label>
                    </div>
                    {
                      range(181, 219).map((i) => (
                        <div className="thumbnail-wrapper item-wrapper" onClick={() => this.chooseFilter(FILTER_LABELS[i])}>
                          <label className="label">
                            <div className="control-thumbnail fixed-ratio">
                              <div className="illustration-container illustration-bg">
                                <div className="illustration-inner-container">
                                  <div style={{ width: 72, height: 72, position: 'relative' }}>
                                    { filterRegistrar.render(FILTER_LABELS[i], {
                                      id: `filter_${i}`,
                                      style: {
                                        width: 72,
                                        height: 72,
                                        position: 'relative',
                                      },
                                      renderImage: () => (
                                        <image xlinkHref="https://static.wixstatic.com/media/f31ce2_51215dc7492f455f81e5e5e443704ad7~mv2.jpg/v1/fill/w_144,h_144,al_c,q_80,usm_0.66_1.00_0.01/f31ce2_51215dc7492f455f81e5e5e443704ad7~mv2.webp" x="0" y="0" width="72" height="72" transform preserveAspectRatio="xMidYMid" filter={`url(#filter_${i})`} />
                                      ),
                                    })}
                                  </div>
                                </div>
                              </div>
                              <span className="control-label with-ellipsis label">
                                <span className="control-label-base">{FILTER_LABELS[i]}</span>
                              </span>
                            </div>
                          </label>
                        </div>
                      ))
                    }
                  </div>
                </div>
                </ScrollBar>
              </section>
            </div>
        </div>
      </PanelWrapper>
    )
  }
}

export default FilterPanel;
