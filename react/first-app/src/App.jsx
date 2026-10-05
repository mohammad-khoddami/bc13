import Alert from "./components/alert/alert";
import { Calculator } from "./components/calculator";
import Layout from "./components/layout";

export default function App() {
    return (
        <Layout>
            {/* <Text />
        <Image />
        <Index /> */}
            <Calculator />
            <Alert variant="error" text="This is a text" />
        </Layout>
    );
}
