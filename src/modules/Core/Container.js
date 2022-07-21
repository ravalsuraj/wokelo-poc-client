export default function Container({children}) {
    return (<div className="h-screen flex bg-gray-200 p-4 lg:p-12 w-full">
        <div className="c-inner bg-white h-full space-x-5 drop-shadow-lg rounded w-full overflow-auto">
            {children}
        </div>
    </div>)
}