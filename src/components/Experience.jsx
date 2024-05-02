import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '.'

const Experience = () => {
  return (
    <section id='experience'>
        <div className="py-10 md:py-20 lg:py-32 lg:px-20 flex flex-col">
        <p className="heading">Experience</p>
        <hr />
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
            key={index}
            contentStyle={{ background: '#24272C', color: '#fff', boxShadow: 'rgba(0, 0, 0, 0.15) 20px 20px 15px, rgba(63, 69, 77, 0.5) -10px -10px 15px', borderRadius:'15px' }}
            contentArrowStyle={{ borderRight: '7px solid #232631'}}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain"/>
              </div>
            }
          >
            <div>
              <h3 className="text-white text-[20px] lg:text-[24px] font-bold">{experience.title}</h3>
              <p className="text-secondary text-[14px] lg:text-[16px] font-semibold" style={{margin: 0}}>{experience.company_name}</p>
            </div>
            <ul className="mt-5 list-disc ml-5 space-y-2">
              {experience.points.map((point, index) => (
                <li key={`experience-point-${index}`} className="text-white-100 text-[12px] lg:text-[14px] pl-1 tracking-wider">
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement> 
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default Experience