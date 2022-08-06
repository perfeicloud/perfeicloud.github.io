import React, { useContext } from 'react'
import classNames from 'classnames'
import LightsOffContext from '../components/LightsOffContext'
import { ReactComponent as LogoLight } from '../assets/images/logo-light.svg'
import { ReactComponent as LogoDark } from '../assets/images/logo-dark.svg'

const Header: React.FC<App.HeaderProps> = (props) => {

  const lightsOff = useContext(LightsOffContext)

  const headerClasses = classNames(
    'site-header',
    props.className
  )

  return (
    <header className={headerClasses} style={props.style}>
      <div className="container">
        <div className="site-header-inner">
          <div className="brand header-brand">
            <h1 className="m-0">
            {
              lightsOff ?
              <LogoDark className='header-logo-image' width={172} /> :
              <LogoLight className='header-logo-image'  width={172} />
            }
            </h1>
          </div>
          <div className="lights-toggle">
            <input onChange={(e) => {props.handleLightsOff(!e.target.checked)}} id="lights-toggle" type="checkbox" className="switch" checked={!lightsOff} />
            <label htmlFor="lights-toggle" className="text-xs">
              <span>{lightsOff ? '🌙' : '🔆'}</span>
            </label>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
