import React from "react"
import classNames from "classnames"
import logoFooterLight from '../assets/images/logo-footer-light.svg'
import logoFooterDark from '../assets/images/logo-footer-dark.svg'
import {ReactComponent as IconWeixin} from '../assets/images/icon-weixin.svg'
import {ReactComponent as IconQq} from '../assets/images/icon-qq.svg'
import {ReactComponent as IconEnvelope} from '../assets/images/icon-envelope.svg'
import {ReactComponent as IconPhone} from '../assets/images/icon-phone.svg'
import {ReactComponent as IconMapMarker} from '../assets/images/icon-map-marker-alt.svg'

const CopyRight = () => {
  const currentYear = new Date().getFullYear()
  const organizationName = '深圳鹏辉计算机技术有限公司'
  return (
    <span>{`© ${currentYear} ${organizationName}`}</span>
  )
}

const IcpFiling = () => {
  const IcpNumber = '粤ICP备20040358号'
  return (
    <><a href="http://beian.miit.gov.cn/" target="_blank" rel="noreferrer">{IcpNumber}</a></>
  )
}

const Footer: React.FC<App.ComponentsProps> = (props) => {

  const footerClasses = classNames(
    'site-footer',
    props.className
  )

  return (
    <footer className={footerClasses}>
      <div className="container">
        <div className="site-footer-inner">
          <div className="brand footer-brand">
            <img className="asset-light" src={logoFooterLight} alt="Logo" width={32} />
            <img className="asset-dark" src={logoFooterDark} alt="Logo" width={32} />
          </div>
          <ul className="footer-links list-reset">
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#aboutus">About us</a>
            </li>
            <li>
              <a href="#faqs">FAQ's</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
          </ul>
          <ul className="footer-social-links list-reset">
            <li>
              <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzg3OTY2NTE0Mg==&scene=124#wechat_redirect">
                <span className="screen-reader-text">Weixin</span>
                <IconWeixin width={16} height={16} />
              </a>
            </li>
            <li>
              <a href="http://wpa.qq.com/msgrd?v=3&uin=54308828&site=qq&Menu=yes">
                <span className="screen-reader-text">QQ</span>
                <IconQq width={16} height={16} />
              </a>
            </li>
            <li>
              <a href="mailto:service@perfei.com">
                <span className="screen-reader-text">Email</span>
                <IconEnvelope width={16} height={16} />
              </a>
            </li>
            <li>
              <a href="tel:+8675561351272">
                <span className="screen-reader-text">Phone</span>
                <IconPhone width={16} height={16} />
              </a>
            </li>
            <li>
              <a href="https://j.map.baidu.com/85/JUd">
                <span className="screen-reader-text">Map</span>
                <IconMapMarker width={16} height={16} />
              </a>
            </li>
          </ul>
          <div className="footer-copyright">
            <CopyRight />
          </div>
          <div className="footer-links">
            <IcpFiling />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer