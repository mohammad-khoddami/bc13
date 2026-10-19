import switcher, { isEven, sum, sumOrConcat } from "./utils/math";

function App() {
    const a = sumOrConcat("aaa", "aa");

    const sw = switcher("loading");
    return (
        <div>
            <p>{sum(2, 3)}</p>
            <p>{isEven(12)}</p>
            <p>{a}</p>
            <p>{sw}</p>
        </div>
    );
}

export default App;
