export default function Card({ icon, iconSize, orientation, title, content, isActive, children }) {
    let flexClass = 'flex';
    let iconClass;
    const isVertical = orientation === 'vertical';
    let defaultCardClasses = "p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100";
    let activeCardClass = isActive ? '' : ' pointer-events-none'
    switch (iconSize) {
        case "small": default: iconClass = "w-12"; break;
        case "medium": iconClass = "w-18"; break;
        case "large": iconClass = "w-48"; break;
    }

    if (isVertical) {
        flexClass += ' flex-col items-center';
        iconClass += ' mb-4'
    } else {
        flexClass += ' flex-row'
    }

    return (
        <button className={defaultCardClasses + activeCardClass}>

            <div className={flexClass}>

                {icon && <img src={icon} alt="card-icon" className={iconClass} />}
                <div className="flex flex-col pl-4">
                    <div className={'font-medium  text-lg mb-1 ' + (isActive ? 'text-blue-600' : 'text-gray-400')}>{title}</div>
                    <span className={(isVertical? 'text-lg ' : 'text-sm ') + (isActive ? 'text-gray-600' : 'text-slate-400')}>{content}</span>
                </div>
                {children}
            </div>
        </button>
    )
}