import Image from "next/image";
import HeroImage from "./assets/hero-img.png";
import { ListCompany } from "./list-company";

export function HeroSection() {
    return (
        <section className="flex flex-col items-center bg-primary-background w-full min-h-screen ">
            <div className="flex flex-col items-center justify-center mt-10">
                <h1 className="text-3xl font-bold text-center max-w-xs">Aumente a <span className="text-secondary">fidelidade</span> e a satisfação dos seus clientes.</h1>
                <p className="text-sm text-center mt-4 max-w-2xs">Nós ajudamos empresas a construir relacionamentos mais fortes
                    com seus clientes por meio de soluções de design inovadoras.
                </p>
            </div>
            <Image src={HeroImage} alt="hero-image" className="mt-5" />
            <div className="w-full h-full">
                <ListCompany/>
            </div>
        </section>
    )
}