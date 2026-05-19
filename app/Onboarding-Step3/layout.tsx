import Navbar1 from "../components/common/Navbar1"

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div className="min-h-full flex flex-col">
            <Navbar1>
                {children}
            </Navbar1>
        </div>

    );
}
