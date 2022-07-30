import React, { useEffect, useState } from 'react'
import ScrollReveal from 'scrollreveal'
import { Header, Main, Footer } from './layouts'
import { Hero, Features, Cta } from './components'

const App: React.FC = () => {

  const [isDark, setDarkMode] = useState<boolean>(initIsDark())

  function initIsDark() {
    // get cookie
    let arr, reg = new RegExp("(^| )isDark=([^;]*)(;|$)")
    if (arr = document.cookie.match(reg)) {
      return (arr[2] === '1' ? true : false)
    }
    // get system theme mode
    return (window.matchMedia('(prefers-color-scheme: dark)').matches)
  }

  function changeIsDark(value: boolean) {
    // set cookie
    const d = new Date()
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
    document.cookie = `isDark=${value?'1':'0'};expires=${d.toUTCString()}`
    setDarkMode(value)
  }

  useEffect(() => {
    // body loaded
    document.body.classList.add('is-loaded', 'is-boxed')
    // set page dark mode
    if (!isDark) {
      document.body.classList.remove('lights-off')
    } else {
      document.body.classList.add('lights-off')
    }
    // Reveal animations
    document.body.classList.contains('has-animations') && ScrollReveal().reveal('.feature', {
      duration: 600,
      distance: '40px',
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      origin: 'right',
      viewFactor: 0.2
    })
  })

  return (
    <>
      <Header isDark={isDark} handleIsDark={changeIsDark} />
      <Main>
        <Hero />
        <Features className='section'/>
        <Cta className='section'/>
      </Main>
      <Footer className='has-top-divider'/>
    </>
  )
}

export default App
