export default function Button(props) {
return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 lg:py-4 px-3 lg:px-6 rounded text-md lg:text-2xl" {...props}>{props.children}</button>
)
}