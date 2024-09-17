import { Slider } from 'antd';
import type { SliderSingleProps } from 'antd';
import { LoadedImageI, PixelInfoI } from '../../App';
import './Footer.css';

export interface SideMenuProps {
  loadedImage: LoadedImageI
  pixelInfo: PixelInfoI
  color1: PixelInfoI
  color2: PixelInfoI
  scale: number
  currentTool: number
  onCurrentToolChange: (id: number) => void
  onSliderChange: (scale: number) => void
}

const scaleMarks: SliderSingleProps['marks'] = {
  12: '12%',
  300: '300%',
}

const Footer = ({
  loadedImage,
  pixelInfo,
  scale,
  onSliderChange
}: SideMenuProps) => {
  return (
    <footer className="img-info">
        <div className="img__parameters">
            <p>{ `Image size: ${loadedImage.imageOriginalWidth} x ${loadedImage.imageOriginalHeight} px ` }</p>
        </div>
        <div className="img__coordinates">
            <p>{ `Coordinates: X: ${pixelInfo.x}; Y: ${pixelInfo.y}` }</p>
        </div>
      <div className="color-info">
        <p>{ `Color: RGB (${pixelInfo.rgb})` }</p>
          <div style={{ background: `rgb(${[...pixelInfo.rgb]})` }} className='color' />
      </div>
        
      <Slider 
        min={ 12 }
        className='img__slider'
        max={ 300 }
        marks={ scaleMarks }
        defaultValue={ 12 } 
        value={ scale }
        onChange={ onSliderChange } 
      />
    </footer>
  )
};

export default Footer;
