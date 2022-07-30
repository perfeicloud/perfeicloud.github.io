import React, { useState } from 'react'
import ScrollReveal from 'scrollreveal'
import { Header, Main, Footer } from './layouts'
import { Hero, Features, Cta } from './components'

const App: React.FC = () => {

  console.log('[App] rendered.')

  // Initialize 'isDark', get system theme mode
  const [isDark, setDarkMode] = useState<boolean>(window.matchMedia('(prefers-color-scheme: dark)').matches)

  React.useEffect(() => {
    // get cookie
    // let arr, reg = new RegExp("(^| )isDark=([^;]*)(;|$)")
    // if (arr = document.cookie.match(reg)) {
    //   setDarkMode(arr[2] === '1' ? true : false)
    // } else {
    //   const d = new Date()
    //   d.setTime(d.getTime() + (60 * 1000))
    //   document.cookie = `isDark=${isDark?'1':'0'};expires=${d.toUTCString()}`
    // }
    // set page dark mode
    if (!isDark) {
      document.body.classList.remove('lights-off')
    } else {
      document.body.classList.add('lights-off')
    }
    document.body.classList.add('is-boxed')
    // body loaded
    document.body.classList.add('is-loaded')
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
      <Header isDark={isDark} />
      <Main>
        <Hero />
        <Features />
        <Cta />
      </Main>
      <Footer />
    </>
  )
}

export default App
