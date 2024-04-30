import moment from "moment"
import "./TimelinePage.scss"

function TimelinePage() {
    const time: any = moment().format('LL');
    
    return (
        <div>
            TimelinePage
            {time}
        </div>
    )
}

export default TimelinePage