import TaskCard from "../../../components/TaskCard/TaskCard"

import "../TaskManager.scss";

function DesignPage() {
    return (
        <div className="task-manager">
        <div className="task-manager__col">
          <div className="task-manager__stage">
            <p>To Do</p>
            <p>1</p>
          </div>
          <TaskCard />
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
            <p>0</p>
          </div>
        </div>
      </div>
    )
}

export default DesignPage