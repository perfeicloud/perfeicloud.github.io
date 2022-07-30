import React from "react"
import classNames from "classnames"
import featuresIllustrationLight from '../assets/images/features-illustration-light.svg'
import featuresIllustrationDark from '../assets/images/features-illustration-dark.svg'
import featuresIllustrationTopLight from '../assets/images/features-illustration-top-light.svg'
import featuresIllustrationTopDark from '../assets/images/features-illustration-top-dark.svg'
import {ReactComponent as FeaturesBox} from '../assets/images/features-box.svg'
import featuresIcon1 from '../assets/images/feature-icon-1.png'
import featuresIcon2 from '../assets/images/feature-icon-2.png'
import featuresIcon3 from '../assets/images/feature-icon-3.png'
import featuresIcon4 from '../assets/images/feature-icon-4.png'

const Features: React.FC<App.FeaturesProps> = (props) => {

  const featuresClasses = classNames(
    'features',
    props.className
  )

  return (
    <section className={featuresClasses}>
      <div className="container">
        <div className="features-inner section-inner has-bottom-divider">
          <div className="features-header text-center">
            <div className="container-sm">
              <h2 className="section-title mt-0">高效简洁的运营工具</h2>
              <p className="section-paragraph">
                为组织建立协同的工作环境，帮助企业在资金管理、行政管理、合同管理等方面，提升企业运营效率
              </p>
              <p className="section-paragraph">
                为个人创造高效的办公环境，帮助企业在协助沟通、计划任务、社交应用等方面，提升岗位工作能力
              </p>
              <p className="section-paragraph">
                为业务提供多维的管理环境，帮助企业在客户管理、项目管理、客服管理等方面，提升业务管理能力
              </p>
              <div className="features-image">
                <img className="features-illustration asset-dark" src={featuresIllustrationDark} alt="Feature illustration" />
                <img className="features-illustration asset-dark" src={featuresIllustrationTopDark} alt="Feature illustration top" />
                <img className="features-illustration asset-light" src={featuresIllustrationLight} alt="Feature illustration" />
                <img className="features-illustration asset-light" src={featuresIllustrationTopLight} alt="Feature illustration top" />
                <FeaturesBox width={538} height={380} className='features-box' />
              </div>
            </div>
          </div>
          <div className="features-wrap">
            <div className="feature is-revealing">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img src={featuresIcon1} alt="Feature 01" height={64} width={64} />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title mt-0">协助沟通</h3>
                  <p className="text-sm mb-0">
                    实时高效的跨部门协助沟通，让信息主动找人而不是人找信息
                  </p>
                </div>
              </div>
            </div>
            <div className="feature is-revealing">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img src={featuresIcon2} alt="Feature 02" height={64} width={64} />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title mt-0">提升执行力</h3>
                  <p className="text-sm mb-0">
                    建立以目标为核心的工作执行体系，满足员工自助服务高效工作
                  </p>
                </div>
              </div>
            </div>
            <div className="feature is-revealing">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img src={featuresIcon3} alt="Feature 03" height={64} width={64} />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title mt-0">移动化/社交化</h3>
                  <p className="text-sm mb-0">
                    让组织24小时运行，让组织更加柔性，快速部署节省成本
                  </p>
                </div>
              </div>
            </div>
            <div className="feature is-revealing">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img src={featuresIcon4} alt="Feature 04" height={64} width={64} />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title mt-0">可视化报表</h3>
                  <p className="text-sm mb-0">
                    智能分析数据，生成多样化可视化报表，展现数据魅力
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features