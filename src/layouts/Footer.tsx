import React, { useContext } from "react"
import classNames from "classnames"
import LightsOffContext from '../components/LightsOffContext'
import { ReactComponent as LogoFooterLight } from '../assets/images/logo-footer-light.svg'
import { ReactComponent as LogoFooterDark } from '../assets/images/logo-footer-dark.svg'
import {ReactComponent as IconWeixin} from '../assets/images/icon-weixin.svg'
import {ReactComponent as IconQq} from '../assets/images/icon-qq.svg'
import {ReactComponent as IconEnvelope} from '../assets/images/icon-envelope.svg'
import {ReactComponent as IconPhone} from '../assets/images/icon-phone.svg'
import {ReactComponent as IconMapMarker} from '../assets/images/icon-map-marker-alt.svg'

const Footer: React.FC<App.ComponentsProps> = (props) => {

  const lightsOff = useContext(LightsOffContext)

  const footerClasses = classNames(
    'site-footer',
    props.className
  )

  return (
    <footer className={footerClasses}>
      <div className="container">
        <div className="site-footer-inner">
          <div className="brand footer-brand">
          {
            lightsOff ?
            <LogoFooterDark  width={32} /> :
            <LogoFooterLight width={32} />
          }
          </div>
          <FooterLink />
          <FooterSocial />
          <CopyRight />
          <IcpFiling />
        </div>
      </div>
    </footer>
  )
}

const FooterLink = () => {
  const links = [
    {
      title: 'Contact',
      href: '#'
    },{
      title: 'About us',
      href: '#'
    },{
      title: 'FAQ\'s',
      href: '#'
    },{
      title: 'Support',
      href: '#'
    }
  ]
  return (
  <ul className="footer-links list-reset">
    {links.map((item, index) => {
      return (<li key={index}><a href={item.href}>{item.title}</a></li>)
    })}
  </ul>
  )
}

const FooterSocial = () => {
  const socials = [
    {
      title: 'Weixin',
      href: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzg3OTY2NTE0Mg==&scene=124#wechat_redirect',
      icon: IconWeixin
    },{
      title: 'QQ',
      href: 'http://wpa.qq.com/msgrd?v=3&uin=54308828&site=qq&Menu=yes',
      icon: IconQq
    },{
      title: 'Email',
      href: 'mailto:service@perfei.com',
      icon: IconEnvelope
    },{
      title: 'Phone',
      href: 'tel:+8675561351272',
      icon: IconPhone
    },{
      title: 'Baidu-map',
      href: 'https://j.map.baidu.com/85/JUd',
      icon: IconMapMarker
    }
  ]
  return (
    <ul className="footer-social-links list-reset">
      {socials.map((item, index) => {
        return (
          <li key={index}>
            <a href={item.href}>
              <span className="screen-reader-text">{item.title}</span>
              <item.icon width={16} height={16} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

const CopyRight = () => {
  const currentYear = new Date().getFullYear()
  const organizationName = '深圳鹏辉计算机技术有限公司'
  return (
    <div className="footer-copyright">{`© ${currentYear} ${organizationName}`}</div>
  )
}

const IcpFiling = () => {
  const IcpNumber = '粤ICP备20040358号'
  return (
    <div className="footer-links">
      <a href="http://beian.miit.gov.cn/" target="_blank" rel="noreferrer">{IcpNumber}</a>
    </div>
  )
}

export default Footer