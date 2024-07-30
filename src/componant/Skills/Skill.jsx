import React from "react";
import Card from "../../UI/Card";
import SkillData from "./SkillData";
import module from "./skills.module.css";

function Skill() {
  return (
    <>
      <div className={`${module.skill}`}>
        <h1>My Skills</h1>
        <div className={`${module.skillWrapper}`} data-aos="fade-left">
          <div className="container mt-5">
            <div className="row">
              {SkillData.map((skill) => {
                return (
                  <div
                    key={skill.name}
                    className="col-12 col-sm-6 col-md-4 col-lg-2 "
                    data-aos="fade-right"
                  >
                    <Card>
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className={module.skillImage}
                      />
                      <h3>{skill.name}</h3>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
