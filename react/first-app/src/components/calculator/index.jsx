import Button from "./button";

export const Calculator = () => {
    function handleClick(item) {
        console.log(item);
    }
    return (
        <>
            <Button label="1" type="number" clicked={() => handleClick(1)} />
            <Button label="2" type="number" clicked={() => handleClick(2)} />
            <Button label="3" type="number" clicked={() => handleClick(3)} />
            <Button label="4" type="number" clicked={() => handleClick(4)} />
        </>
    );
};
