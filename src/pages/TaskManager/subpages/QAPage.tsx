import TaskCard from "../../../components/TaskCard/TaskCard"

import "../TaskManager.scss";

function QAPage() {
    return (
        <div className="task-manager">
        <div className="task-manager__col">
          <div className="task-manager__stage">
            <p>To Do</p>
            <p>0</p>
          </div>
        </div>
        <div className="task-manager__col">
          <div className="task-manager__stage">
            <p>In Progress</p>
            <p>0</p>
          </div>
        </div>
        <div className="task-manager__col">
          <div className="task-manager__stage">
            <p>Review</p>
            <p>0</p>
          </div>
        </div>
        <div className="task-manager__col">
          <div className="task-manager__stage">
            <p>Done</p>
            <p>2</p>
          </div>
          <TaskCard />
          <TaskCard />
        </div>
      </div>
    )
}

export default QAPage