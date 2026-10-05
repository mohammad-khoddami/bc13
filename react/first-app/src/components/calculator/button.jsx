export default function Button(props) {
    const btnColor = () => {
        if (props.type === "number") {
            return "bg-gray-500";
        } else if (props.type === "reset") {
            return "bg-green-500";
        } else if (props.type === "on-off") {
            return "bg-red-500";
        } else {
            return "bg-gray-500;";
        }
    };

    // function handleClick() {
    //     console.log(props.label);
    // }

    return (
        <button
            className={`w-10 rounded-sm m-4 cursor-pointer text-white ${btnColor()}`}
            onClick={props.clicked}
        >
            {props.label}
        </button>
    );
}
