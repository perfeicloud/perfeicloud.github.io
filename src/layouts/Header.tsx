import React from 'react'
import classNames from 'classnames'
import logoLight from '../assets/images/logo-light.svg'
import logoDark from '../assets/images/logo-dark.svg'
// import {ReactComponent as LogoLight} from '../assets/images/logo-light.svg'
// import {ReactComponent as LogoDark} from '../assets/images/logo-dark.svg'

const Header: React.FC<App.HeaderProps> = (props) => {

  console.log('[Header] rendered.')
  const [isDark, setLightSwitch] = React.useState(props.isDark)

  const checkLights: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const checked = e.target.checked
    if (checked) {
      document.body.classList.remove('lights-off')
    } else {
      document.body.classList.add('lights-off')
    }
    setLightSwitch(!checked)
  }

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
              <a href="#">
                <img className="header-logo-image asset-light" src={logoLight} alt="Logo" />
                {/* <LogoLight className='header-logo-image asset-light' /> */}
                <img className="header-logo-image asset-dark" src={logoDark} alt="Logo" />
                {/* <LogoDark className='header-logo-image asset-dark' /> */}
              </a>
            </h1>
          </div>
          <div className="lights-toggle">
            <input onChange={checkLights} id="lights-toggle" type="checkbox" name="lights-toggle" className="switch" defaultChecked={!isDark} />
            <label htmlFor="lights-toggle" className="text-xs">
              <span>{isDark ? '🌙' : '🔆'}</span>
            </label>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
