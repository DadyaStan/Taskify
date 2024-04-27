import "./SwitchLayout.scss"

interface SwitchProps {
    design: string,
    front: string,
    back: string,
    qa: string
}

export default function SwitchLayout({ switchList }: { switchList: String[] }) {
    return (
        <div>
            <div className="switch-menu">
                {switchList.map(
                    (prop) => (
                        <div className="switch-menu__section">{prop}</div>
                    )
                )}
            </div>
        </div>
    );
}