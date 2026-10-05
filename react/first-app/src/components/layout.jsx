export default function Layout({ children }) {
    return (
        <>
            <header className="h-16 bg-sky-200"></header>
            <main>{children}</main>
            <footer className="h-16 bg-sky-200"></footer>
        </>
    );
}
