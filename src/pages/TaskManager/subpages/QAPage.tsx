import MainProgressBox from "../../../components/MainProgressBox/MainProgressBox"

import "../TaskManager.scss";

function QAPage() {
    return (
        <div className="task-manager">
        <div className="task-manager__col">
          <div className="task-manager__stage">
            <p>To Do</p>
            <p>12</p>
          </div>
        </div>
        <div className="task-manager__col">
          <div className="task-manager__stage">
            <p>In Progress</p>
            <p>12</p>
          </div>
        </div>
        <div className="task-manager__col">
          <div className="task-manager__stage">
            <p>Review</p>
            <p>12</p>
          </div>
        </div>
        <div className="task-manager__col">
          <div className="task-manager__stage">
            <p>Done</p>
            <p>6</p>
          </div>
          <MainProgressBox />
          <MainProgressBox />
        </div>
      </div>
    )
}

export default QAPage