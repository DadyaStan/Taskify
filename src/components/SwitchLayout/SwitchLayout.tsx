import { Link } from "react-router-dom";

import "./SwitchLayout.scss"

interface SwitchProps {
    design: string,
    front: string,
    back: string,
    qa: string
}

export default function SwitchLayout() {
    return (
        <div>
            <div className="switch-menu">
                <div className="switch-menu__section">
                    <Link to='design'>Design</Link>
                </div>
                <div className="switch-menu__section">
                    <Link to='front-end'>Front-End</Link>
                </div>
                <div className="switch-menu__section">
                    <Link to='back-end'>Back-End</Link>
                </div>
                <div className="switch-menu__section">
                    <Link to='qa'>QA</Link>
                </div>
            </div>
        </div >
    );
}