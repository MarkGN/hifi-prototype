import AssignmentAverage from "./widgets/AssignmentsAverage";

const widgets = [AssignmentAverage];

export default function Dashboard() {
  return <div className="container">
    <div className="row">
      <AssignmentAverage />
    </div>
  </div>
}