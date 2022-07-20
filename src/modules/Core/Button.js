export default function Button(props) {
return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded text-2xl" {...props}>{props.children}</button>
)
}