import React, { useState } from 'react'
import './Skills.css'
import SkillCard from './SkillCard/SkillCard'
import data from '../../utils/data'
import SkillInfoCard from './SkillInfoCard/SkillInfoCard'

const Skills = React.forwardRef((props, ref) => {
  const [selectedSkill,setselectedSkill] = useState(data[0]);
  const handleSelectedSkill = (skillItem) => {
    setselectedSkill(skillItem)
  }
  return (
    <section ref={ref} className='skills-container'>
      <h5>Technical profeciency</h5>
      <div className='skills-content'>
        <div className='skills'>
          {data.map((item) => (
            <SkillCard 
             key={item.title}
             iconUrl={item.icon}
             title={item.title}
             isActive={selectedSkill.title === item.title}
             onClick={() => {handleSelectedSkill(item)}}
             />
            ))}
        </div>
        <div className='skills-info'>
          <SkillInfoCard heading={selectedSkill.title} 
                         skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  )
});

export default Skills
