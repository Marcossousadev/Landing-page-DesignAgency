import { Navbar } from "./navbar";

export function Header() {
    return (
        <header className="fixed top-0 bg-primary-background w-full h-20 flex items-center justify-between px-6">
                <h1 className="text-base font-semibold">Design<span className="text-secondary">AGENCY</span></h1>
                <Navbar />
        </header>
    );
}