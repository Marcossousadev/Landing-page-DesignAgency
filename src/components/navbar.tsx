'use client';

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export function Navbar() {
    const [open, setOpen] = useState(false);

    function handleMenuClick() {
        setOpen(!open);
    }
    return (
        <nav>
            <button className="text-foreground" onClick={handleMenuClick}>
                <AiOutlineMenu className="size-8" />
            </button>

            { open && (
                <div className="fixed bg-black/20 inset-0" onClick={handleMenuClick}>

                    <aside className={`fixed top-0 left-0 w-64 h-full bg-primary-background
                     shadow-lg transform transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                       <div>
                         <button className="p-4" onClick={handleMenuClick}>
                           <AiOutlineClose className="size-8" />
                        </button>
                       </div>
                         
                        <div className="flex flex-col gap-4 p-4 font-semibold">
                            <span className="text-2xl mb-1">Navegação</span>
                            <a href="#services">Serviços</a>
                            <a href="#aboutus">Sobre Nós</a>
                            <a href="#contactus">Contato</a>
                        </div>

                        <div className="flex flex-col gap-2 mt-6 mx-4">
                            <button className=" bg-primary text-white py-2 rounded-xl">Entrar</button>
                            <button className="border-2 border-primary rounded-xl py-2">Cadastrar</button>
                        </div>
                    </aside>
                </div>
            )}
        </nav>
    );
}