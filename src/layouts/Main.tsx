import React from 'react'
import classNames from 'classnames'

const Main: React.FC<App.MainProps> = (props) => {

  console.log('[Main] rendered.')

  const mainClasses = classNames(
    props.className
  )

  return (
    <main className={mainClasses} style={props.style}>
      {props.children}
    </main>
  )
}

export default Main