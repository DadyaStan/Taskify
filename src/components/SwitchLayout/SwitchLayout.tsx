import "./SwitchLayout.scss"

export default function SwitchLayout() {
    return (
        <div>
            <div className="switch-menu">
                <div className="switch-menu__section">Design</div>
                <div className="switch-menu__section">Front-End</div>
                <div className="switch-menu__section">Back-End</div>
                <div className="switch-menu__section">QA</div>
            </div>
        </div>
    );
}