import React from "react"
import classNames from "classnames"

const cta = {
  title: '服务价值',
  paragraph: '提升企业协同办公效率，助力企业信息化转型。',
  btnCaption: '联系我们',
  btnHref: 'mailto:service@perfei.com'
}

const Cta: React.FC<App.CtaProps> = (props) => {

  const ctaClasses = classNames(
    'cta',
    props.className
  )

  return (
    <section className={ctaClasses}>
      <div className="container-sm">
        <div className="cta-inner section-inner">
          <div className="cta-header text-center">
            <h2 className="section-title mt-0">{cta.title}</h2>
            <p className="section-paragraph">
              {cta.paragraph}
            </p>
            <div className="cta-cta">
              <a className="button button-primary" href={cta.btnHref}>{cta.btnCaption}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta