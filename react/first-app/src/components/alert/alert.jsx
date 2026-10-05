const getColor = (variant) => {
    switch (variant) {
        case "success":
            return {
                text: "text-green-500",
                bg: "bg-green-200",
                border: "border-green-500",
            };
        case "warning":
            return {
                text: "text-yellow-500",
                bg: "bg-yellow-200",
                border: "border-yellow-500",
            };
        case "error":
            return {
                text: "text-red-500",
                bg: "bg-red-200",
                border: "border-red-500",
            };

        default:
            return {
                text: "text-blue-500",
                bg: "bg-blue-200",
                border: "border-blue-500",
            };
    }
};

export default function Alert({ variant, text }) {
    const color = getColor(variant);
    return (
        <div
            className={`${color.bg} border ${color.border} rounded-md py-4 px-20 w-fit`}
        >
            <span className={color.text}>{text}</span>
        </div>
    );
}
