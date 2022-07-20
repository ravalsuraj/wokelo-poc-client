export default function Container({children}) {
    return (<div className="h-screen bg-gray-200 p-12">
        <div className="c-inner bg-white h-full  space-x-5 drop-shadow-lg rounded">
            {children}
        </div>
    </div>)
}