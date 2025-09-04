import { useState } from "react"
//import {IKImage} from '@imagekit/react';
//import { IKImage } from "imagekitio-react";
import Image from "./image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='w-full h-16 md:h-20 flex items-center justify-between'>


            {/* Implementar imagen de logo (alch pondre algo random xd). */}
            <Link to='' className='flex items-center gap-4 text-2xl font-bold'>
                <Image src="Wdgaster.png" alt="Dav Logo" w={32} h={32}/>
                <span>DAVBLOG</span>
            </Link>

            {/* Menu para celular y para pc*/}
            {/* boton del menu*/}
            <div className='md:hidden'>
                <div className='cursor-pointer text-4xl' onClick={() => setOpen((prev) => !prev)}>
                 {open ? "x": "="} 
                </div>
                {/* Menu de celular*/}
                <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 bg-white  transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}>
             <Link to="/">Inicio</Link>
             <Link to="/">Tendencia</Link>
             <Link to="/">Recientes</Link>
             <Link to="/">Acerca de</Link>
             <Link to=""><button className="py-2 px-4 rounded-3xl bg-blue-900 text-white">Iniciar Sesion XD</button></Link>
                    </div>

            </div>
            {/* Menu de PC*/}

             <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
            <Link to="/">Inicio</Link>
             <Link to="/">Tendencia</Link>
             <Link to="/">Recientes</Link>
             <Link to="/">Acerca de</Link>
              <SignedOut>
              <Link to="/login"><button className="py-2 px-4 rounded-3xl bg-blue-900 text-white">Iniciar Sesion XD</button></Link>
                
            </SignedOut>
            <SignedIn>
            <UserButton />
            </SignedIn>

             </div>

        </div>
    )

}

export default Navbar