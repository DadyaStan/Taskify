import "./CalendarCell.scss";

import "components/CalendarTask/CalendarTask";

interface CalendarCellProps {
    day: number;
    line: number;
    tasksArr: any[];
}

const CalendarCell: React.FC<CalendarCellProps> = ({ day, line, tasksArr }) => {
    return (
        <div className="calendar-cell">{day} - {line} {tasksArr[1]}</div>
    );
}

export default CalendarCell;