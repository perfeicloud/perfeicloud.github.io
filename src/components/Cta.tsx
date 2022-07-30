import React, { useState } from "react"
import classNames from "classnames"

const Cta: React.FC<App.CtaProps> = (props) => {

  return (
    <section className="cta section">
      <div className="container-sm">
        <div className="cta-inner section-inner">
          <div className="cta-header text-center">
            <h2 className="section-title mt-0">服务价值</h2>
            <p className="section-paragraph">
              提升企业协同办公效率，助力企业信息化转型。
            </p>
            <div className="cta-cta">
              <a className="button button-primary" href="#">联系我们</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta