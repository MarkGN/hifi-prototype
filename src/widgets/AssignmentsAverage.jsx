import React, {useState} from "react";

const subjects = require("../data/subjects.json");

function SubjectSelector(props) { 
  return (
  <select onChange={props.onSelect}>
    {Object.keys(subjects).map((name, id) => {
      return <option key={id} value={id}>
        {name}
      </option>
    })}
  </select>
)};

function SubjectDetails(props) {
  return <div>
    <p>{subjects[props.name]["average-assignment"]}%</p>
  </div>
};

export default function AssignmentAverage() {
  const [subjectName, setSubjectName] = useState(Object.keys(subjects)[0]);
  const subject = subjects[subjectName];

  const handleSubjectSelect = (event) => {
    setSubjectName(Object.keys(subjects)[event.target.value]);
  };

  return <div className="display-widget">
      <h3>
        Assignments average
      </h3>
      <SubjectSelector onSelect={handleSubjectSelect} />
      <SubjectDetails name={subjectName} />
    </div>
  ;
};

