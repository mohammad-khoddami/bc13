export default function Input({ inputText, click }) {
    return (
        <div>
            <input
                type="text"
                className="border rounded-sm"
                value={inputText}
                onChange={(e) => click(e.target.value)}
            />
        </div>
    );
}
