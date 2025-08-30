import { useState } from "react"

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='w-full h-16 md:h-20 flex items-center justify-between'>


            {/* Implementar imagen de logo (alch pondre algo random xd). */}
            <div className='flex items-center gap-4 text-2xl font-bold'>
                <img src="/Wdgaster.png" className="w-10 h-15" alt=''/>
                <span>DAVBLOG</span>
            </div>

            {/* Menu para celular y para pc*/}
            {/* boton del menu*/}
            <div className='md:hidden'>
                <div className='cursor-pointer text-4xl' onClick={() => setOpen((prev) => !prev)}>
                 {open ? "x": "="} 
                </div>
                {/* Menu de celular*/}
                <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 bg-white  transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}>
                     <a href="/">Inicio</a>
             <a href="/">Tendencia</a>
             <a href="/">Recientes</a>
             <a href="/">Acerca de</a>
             <a href=""><button className="py-2 px-4 rounded-3xl bg-blue-900 text-white">Iniciar Sesion XD</button></a>
                    </div>

            </div>
            {/* Menu de PC*/}

             <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
             <a href="/">Inicio</a>
             <a href="/">Tendencia</a>
             <a href="/">Recientes</a>
             <a href="/">Acerca de</a>
             <a href=""><button className="py-2 px-4 rounded-3xl bg-blue-900 text-white">Iniciar Sesion XD</button></a>

             </div>

        </div>
    )

}

export default Navbar