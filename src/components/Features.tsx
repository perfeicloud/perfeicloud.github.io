import React, { useContext } from "react"
import classNames from "classnames"
import LightsOffContext from '../components/LightsOffContext'
import { ReactComponent as FeaturesIllustrationLight } from '../assets/images/features-illustration-light.svg'
import { ReactComponent as FeaturesIllustrationDark } from '../assets/images/features-illustration-dark.svg'
import { ReactComponent as FeaturesIllustrationTopLight } from '../assets/images/features-illustration-top-light.svg'
import { ReactComponent as FeaturesIllustrationTopDark } from '../assets/images/features-illustration-top-dark.svg'
import {ReactComponent as FeaturesBox} from '../assets/images/features-box.svg'
import featuresIcon1 from '../assets/images/feature-icon-1.png'
import featuresIcon2 from '../assets/images/feature-icon-2.png'
import featuresIcon3 from '../assets/images/feature-icon-3.png'
import featuresIcon4 from '../assets/images/feature-icon-4.png'

const feature = {
  title: '高效简洁的运营工具',
  paragraphs: [
    '为组织建立协同的工作环境，帮助企业在资金管理、行政管理、合同管理等方面，提升企业运营效率',
    '为个人创造高效的办公环境，帮助企业在协助沟通、计划任务、社交应用等方面，提升岗位工作能力',
    '为业务提供多维的管理环境，帮助企业在客户管理、项目管理、客服管理等方面，提升业务管理能力'
  ],
  reveals: [
    {
      title: '协助沟通',
      context: '实时高效的跨部门协助沟通，让信息主动找人而不是人找信息',
      icon: featuresIcon1
    },{
      title: '提升执行力',
      context: '建立以目标为核心的工作执行体系，满足员工自助服务高效工作',
      icon: featuresIcon2
    },{
      title: '移动化/社交化',
      context: '让组织24小时运行，让组织更加柔性，快速部署节省成本',
      icon: featuresIcon3
    },{
      title: '可视化报表',
      context: '智能分析数据，生成多样化可视化报表，展现数据魅力',
      icon: featuresIcon4
    }
  ]
}

const Features: React.FC<App.FeaturesProps> = (props) => {

  const lightsOff = useContext(LightsOffContext)

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
              <h2 className="section-title mt-0">{feature.title}</h2>
              {feature.paragraphs.map((item, index) => {
                return <p className="section-paragraph" key={index}>{item}</p>
              })}
              <div className="features-image">
              {
                lightsOff ?
                (<>
                  <FeaturesIllustrationDark className="features-illustration" />
                  <FeaturesIllustrationTopDark className="features-illustration" />
                </>) :
                (<>
                  <FeaturesIllustrationLight className="features-illustration" />
                  <FeaturesIllustrationTopLight className="features-illustration" />
                </>)
              }
                
                <FeaturesBox width={538} height={380} className='features-box' />
              </div>
            </div>
          </div>
          <div className="features-wrap">
          {feature.reveals.map((item, index) => {
            return (
              <div className="feature is-revealing" key={index}>
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img src={item.icon} alt={`Feature ${index}`} height={64} width={64} />
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title mt-0">{item.title}</h3>
                    <p className="text-sm mb-0">
                      {item.context}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features