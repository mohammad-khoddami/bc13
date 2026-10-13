import { useState } from "react";
import Alert from "./components/alert/alert";
import { Calculator } from "./components/calculator";
import Card from "./components/card";
import Counter from "./components/counter";
import Input from "./components/input";
import Layout from "./components/layout";
import Students from "./components/students";
import PasswordInput from "./components/passwordInput";
import Login from "./components/login";
import FetchProducts from "./components/fetch-products/fetchProducts";
import ResizeWindow from "./components/resizeWindow";
import Timer from "./components/timer";
import NameContext from "./contexts/nameContext";
import ThemeContext from "./contexts/themeContext";

const products = [
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/0c8ccdba4f2d4b1dae28d90ce88994f415b89fe9_1746520020.jpg",
        price: "92,000,000",
        stock: 5,
        discount: 10,
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 15 4G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/8f4c60af446ea82cd1ef27e1f182c94afaf0a990_1771749697.jpg",
        price: "94,000,000",
        stock: 2,
        discount: 0,
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/0c8ccdba4f2d4b1dae28d90ce88994f415b89fe9_1746520020.jpg",
        price: "92,000,000",
        stock: 0,
        discount: 5,
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 15 4G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/8f4c60af446ea82cd1ef27e1f182c94afaf0a990_1771749697.jpg",
        price: "94,000,000",
        stock: 0,
        discount: 0,
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/0c8ccdba4f2d4b1dae28d90ce88994f415b89fe9_1746520020.jpg",
        price: "92,000,000",
        stock: 4,
        discount: 0,
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 15 4G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/8f4c60af446ea82cd1ef27e1f182c94afaf0a990_1771749697.jpg",
        price: "94,000,000",
        stock: 5,
        discount: 0,
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/0c8ccdba4f2d4b1dae28d90ce88994f415b89fe9_1746520020.jpg",
        price: "92,000,000",
        stock: 5,
        discount: 0,
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 15 4G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/8f4c60af446ea82cd1ef27e1f182c94afaf0a990_1771749697.jpg",
        price: "94,000,000",
        stock: 5,
        discount: 0,
    },
];

const name = "Fredrik";

export default function App() {
    const [theme, setTheme] = useState("dark");
    const [inputText, setInputText] = useState("");
    const [show, setShow] = useState(true);

    function changeInput(value) {
        setInputText(value);
    }

    function handleChange(value) {
        console.log(value);
    }
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Layout>
                <NameContext.Provider value={name}>
                    <Alert text={name} />
                </NameContext.Provider>
                {/* <button onClick={() => setShow(!show)} className="border">
                {show ? "hide" : "show"}
            </button>
            {show && (
                <>
                    <ResizeWindow />
                    <Timer />
                </>
            )} */}
                {/* <FetchProducts /> */}
                {/* <Login /> */}
                {/* <Text />
            <Image />
            <Index /> */}
                {/* <PasswordInput />
            <Input input={inputText} click={changeInput} />
            <h1>{inputText}</h1>
            <Counter />
            <Calculator />
            <Alert variant="error" text="This is a text" />
            <div className="grid grid-cols-4 gap-4">
                {products.map((product, i) => (
                    <Card key={i} product={product} change={handleChange} />
                ))}
            </div>
            <Students /> */}
            </Layout>
        </ThemeContext.Provider>
    );
}
