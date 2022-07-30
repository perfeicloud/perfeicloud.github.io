import React from 'react'
import classNames from 'classnames'
import logoLight from '../assets/images/logo-light.svg'
import logoDark from '../assets/images/logo-dark.svg'

const Header: React.FC<App.HeaderProps> = (props) => {

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
              <img className="header-logo-image asset-light" src={logoLight} alt="Logo" width={172} />
              <img className="header-logo-image asset-dark" src={logoDark} alt="Logo" width={172} />
            </h1>
          </div>
          <div className="lights-toggle">
            <input onChange={(e) => {props.handleIsDark(!e.target.checked)}} id="lights-toggle" type="checkbox" className="switch" checked={!props.isDark} />
            <label htmlFor="lights-toggle" className="text-xs">
              <span>{props.isDark ? '🌙' : '🔆'}</span>
            </label>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
