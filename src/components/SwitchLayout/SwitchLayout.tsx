import { NavLink } from "react-router-dom";

import "./SwitchLayout.scss"

interface SwitchProps {
    design: string,
    front: string,
    back: string,
    qa: string
}

const setActiveLinkTaskManager = ({ isActive }: any): string => isActive ? ' -switch-link -switch-link_active' : '-switch-link';

export default function SwitchLayout() {
    return (
        <div>
            <div className="switch-menu">
                <div className="switch-menu__section">
                    <NavLink to='design' className={setActiveLinkTaskManager}>
                        Design
                    </NavLink>
                </div>
                <div className="switch-menu__section">
                    <NavLink to='front-end' className={setActiveLinkTaskManager}>
                        Front-End
                    </NavLink>
                </div>
                <div className="switch-menu__section">
                    <NavLink to='back-end' className={setActiveLinkTaskManager}>
                        Back-end
                    </NavLink>
                </div>
                <div className="switch-menu__section">
                    <NavLink to='qa' className={setActiveLinkTaskManager}>
                        QA
                    </NavLink>
                </div>
            </div>
        </div >
    );
}