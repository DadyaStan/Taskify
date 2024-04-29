import "./TaskCard.scss"

function TaskCard() {
    return (
        <div className="task-card">
            <div className="task-card__1-row">
                <h4 className="h4-heading">
                    Domain & Host
                </h4>
                <p className="priority-text">
                    High priority
                </p>
            </div>
            <div className="task-card__2-row">
                <p className="description-task">
                    Lorem ipsum dolor Debitis temporibus esse omnis sapiente rem atque facere voluptate mollitia voluptatem. Dignissimos?
                </p>
            </div>
            <div className="task-card__3-row">
                <p className="add-heading">
                    Assigned to:
                </p>
            </div>
        </div>
    )
}

export default TaskCard
