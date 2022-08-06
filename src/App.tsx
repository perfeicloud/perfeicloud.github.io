import React, { useEffect, useState } from 'react'
import ScrollReveal from 'scrollreveal'
import { Header, Main, Footer } from './layouts'
import { Hero, Features, Cta } from './components'
import LightsOffContext from './components/LightsOffContext'

const App: React.FC = () => {

  const [lightsOff, setLights] = useState<boolean>(initLights() ?? false)

  // component mounted
  useEffect(() => {
    // body loaded
    document.body.classList.add('is-loaded', 'is-boxed')
    // Reveal animations
    document.body.classList.contains('has-animations') && ScrollReveal().reveal('.feature', {
      duration: 600,
      distance: '20px',
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      origin: 'right',
      viewFactor: 0.2
    })
  }, [])

  // lightsOff updated
  useEffect(() => {
    // set page dark mode
    if (lightsOff) {
      document.body.classList.add('lights-off')
    } else {
      document.body.classList.remove('lights-off')
    }
    // set cookie
    const d = new Date()
    d.setTime(d.getTime() + 24*3600*1000)
    document.cookie = `lightsOff=${lightsOff?'1':'0'};expires=${d.toUTCString()}`
  }, [lightsOff])

  function initLights() {
    // get cookie
    let arr, reg = new RegExp("(^| )lightsOff=([^;]*)(;|$)")
    if (arr = document.cookie.match(reg)) {
      return (arr[2] === '1' ? true : false)
    }
    // get system theme mode
    return (window.matchMedia('(prefers-color-scheme: dark)').matches)
  }

  return (
    <LightsOffContext.Provider value={lightsOff}>
      <Header handleLightsOff={setLights} />
      <Main>
        <Hero />
        <Features className='section'/>
        <Cta className='section'/>
      </Main>
      <Footer className='has-top-divider'/>
    </LightsOffContext.Provider>
  )
}

export default App
