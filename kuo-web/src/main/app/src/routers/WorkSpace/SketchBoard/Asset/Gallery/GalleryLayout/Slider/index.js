import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class SliderGalleryLayout extends Component {

  render() {
    const { rect: { width, height }} = this.props.astm.spec;
    const { galleryMedias } = this.props.astm.store;

    return (
      <div className="slider-layout">
        <div className="gallery-container one-row slider" style={{ width }}>
          <div className="gallery-column gallery-horizontal-scroll">
            {
              galleryMedias.map(galleryMedia => (
                <div className="gallery-group gallery-group-visible" style={{ width: 364, height }}>
                  <div className="gallery-item-container visible" style={{ width: 354, margin: 5, top: 0, left: 0 }}>
                    <div className="gllery-item-wrapper visible" style={{ height: height - 10 }}>
                      <div className="gallery-item gallery-item-visible">
                        <img className="gallery-item gallery-item-visible" src={galleryMedia.cover}/>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <button className="nav-arrows-container next">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjMiIGhlaWdodD0iMzkiIHZpZXdCb3g9IjAgMCAyMyAzOSI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7CiAgICAgICAgZmlsdGVyOiB1cmwoI2ZpbHRlcik7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgICA8ZmlsdGVyIGlkPSJmaWx0ZXIiIHg9Ijg1NSIgeT0iMjMwIiB3aWR0aD0iMjMiIGhlaWdodD0iMzkiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxmZU9mZnNldCByZXN1bHQ9Im9mZnNldCIgZHg9Ii0wLjg2NiIgZHk9IjAuNSIgaW49IlNvdXJjZUFscGhhIi8+CiAgICAgIDxmZUdhdXNzaWFuQmx1ciByZXN1bHQ9ImJsdXIiIHN0ZERldmlhdGlvbj0iMSIvPgogICAgICA8ZmVGbG9vZCByZXN1bHQ9ImZsb29kIiBmbG9vZC1jb2xvcj0iIzE2MTYxNiIgZmxvb2Qtb3BhY2l0eT0iMC4yNSIvPgogICAgICA8ZmVDb21wb3NpdGUgcmVzdWx0PSJjb21wb3NpdGUiIG9wZXJhdG9yPSJpbiIgaW4yPSJibHVyIi8+CiAgICAgIDxmZUJsZW5kIHJlc3VsdD0iYmxlbmQiIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgICAgIDxmZUZsb29kIHJlc3VsdD0iZmxvb2QtMiIgZmxvb2QtY29sb3I9IiNmZmYiLz4KICAgICAgPGZlQ29tcG9zaXRlIHJlc3VsdD0iY29tcG9zaXRlLTIiIG9wZXJhdG9yPSJpbiIgaW4yPSJTb3VyY2VHcmFwaGljIi8+CiAgICAgIDxmZUJsZW5kIHJlc3VsdD0iYmxlbmQtMiIgaW4yPSJibGVuZCIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxwYXRoIGlkPSJfMjUwX21pZGRsZV9yaWdodF9jb3B5XzIiIGRhdGEtbmFtZT0iMjUwIG1pZGRsZSByaWdodCAgY29weSAyIiBjbGFzcz0iY2xzLTEiIGQ9Ik04NTcuMDA1LDIzMS40NzlMODU4LjUsMjMwbDE4LjEyNCwxOC0xOC4xMjcsMTgtMS40OS0xLjQ4TDg3My42MzgsMjQ4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg1NSAtMjMwKSIvPgo8L3N2Zz4K" />
          </button>
        </div>
      </div>
    )
  }
}

export default SliderGalleryLayout;
