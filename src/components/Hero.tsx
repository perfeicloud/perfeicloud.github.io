import React, { useContext } from 'react'
import classNames from 'classnames'
import LightsOffContext from '../components/LightsOffContext'
import headerIllustrationLight from '../assets/images/header-illustration-light.svg'
import headerIllustrationDark from '../assets/images/header-illustration-dark.svg'
import heroIllustrationMediaLight from '../assets/images/hero-media-illustration-light.svg'
import heroIllustrationMediaDark from '../assets/images/hero-media-illustration-dark.svg'
import {ReactComponent as HeroMedia} from '../assets/images/hero-media.svg'

const hero = {
  title: '与众不同的企业信息化解决方案',
  paragraph: '让信息化平台操作更简洁，减少录入工作量，业务系统更智能，多样化的可视化报表，彻底告别纸张办公，让组织的整个运营流程完全电子化！',
  btnCaption: '了解更多',
  btnHref: 'mailto:service@perfei.com'
}
const Hero: React.FC<App.HeroProps> = (props) => {

  const lightsOff = useContext(LightsOffContext)

  const heroClasses = classNames(
    'hero',
    props.className
  )

  return (
    <section className={heroClasses}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title mt-0">
              {hero.title}
            </h1>
            <p className="hero-paragraph">
              {hero.paragraph}
            </p>
            <div className="hero-cta">
              <a className="button button-primary" href={hero.btnHref}>{hero.btnCaption}</a>
            </div>
          </div>
          <div className="hero-media">
            <div className="header-illustration">
              <img
                className={`header-illustration-image ${lightsOff ? 'asset-dark' : 'asset-light'}`}
                src={lightsOff ? headerIllustrationDark : headerIllustrationLight}
                alt="Header illustration"
              />
            </div>
            <div className="hero-media-illustration">
              <img
                className={`hero-media-illustration-image ${lightsOff ? 'asset-dark' : 'asset-light'}`}
                src={lightsOff ? heroIllustrationMediaDark : heroIllustrationMediaLight}
                alt="Hero media illustration"
              />
            </div>
            <div className="hero-media-container">
              <HeroMedia width={538} height={380} className='hero-media-image' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero