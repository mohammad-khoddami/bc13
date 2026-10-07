import Alert from "./components/alert/alert";
import { Calculator } from "./components/calculator";
import Card from "./components/card";
import Counter from "./components/counter";
import Layout from "./components/layout";
import Students from "./components/students";

const products = [
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/0c8ccdba4f2d4b1dae28d90ce88994f415b89fe9_1746520020.jpg",
        price: "92,000,000",
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 15 4G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/8f4c60af446ea82cd1ef27e1f182c94afaf0a990_1771749697.jpg",
        price: "94,000,000",
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/0c8ccdba4f2d4b1dae28d90ce88994f415b89fe9_1746520020.jpg",
        price: "92,000,000",
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 15 4G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/8f4c60af446ea82cd1ef27e1f182c94afaf0a990_1771749697.jpg",
        price: "94,000,000",
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/0c8ccdba4f2d4b1dae28d90ce88994f415b89fe9_1746520020.jpg",
        price: "92,000,000",
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 15 4G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/8f4c60af446ea82cd1ef27e1f182c94afaf0a990_1771749697.jpg",
        price: "94,000,000",
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/0c8ccdba4f2d4b1dae28d90ce88994f415b89fe9_1746520020.jpg",
        price: "92,000,000",
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 15 4G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/8f4c60af446ea82cd1ef27e1f182c94afaf0a990_1771749697.jpg",
        price: "94,000,000",
    },
];

export default function App() {
    function handleChange(value) {
        console.log(value);
    }
    return (
        <Layout>
            {/* <Text />
            <Image />
            <Index /> */}
            <Counter />
            <Calculator />
            <Alert variant="error" text="This is a text" />
            <div className="grid grid-cols-4 gap-4">
                {products.map((product, i) => (
                    <Card key={i} product={product} change={handleChange} />
                ))}
            </div>
            <Students />
        </Layout>
    );
}
