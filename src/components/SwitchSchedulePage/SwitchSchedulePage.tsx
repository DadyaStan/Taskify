import { NavLink } from "react-router-dom"

import "./SwitchSchedulePage.scss"

const setActiveLinkTaskManager = ({isActive}: any): string => isActive ? 'switch-schedule-nav__section switch-schedule-nav__section_active' : 'switch-schedule-nav__section' ;

function SwitchSchedulePage() {
    return (
        <div className="switch-schedule-nav">
            <div className="switch-schedule-nav__section">
                <NavLink to='timeline' className={setActiveLinkTaskManager}>
                    Timeline
                </NavLink>
            </div>
            <div className="switch-schedule-nav__section">
                <NavLink to='calendar' className={setActiveLinkTaskManager}>
                    Calendar
                </NavLink>
            </div>
        </div>
    )
}

export default SwitchSchedulePage
