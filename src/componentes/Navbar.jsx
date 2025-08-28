const Navbar = () => {

    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">


            {/* Implementar imagen de logo (alch pondre algo random xd). */}
            <div className="flex items-center gap-4 text-2xl font-bold">
                <img src="/Wdgaster.png" className="w-10 h-15" alt=""/>
                <span>DAVBLOG</span>
            </div>

            {/* Menu para celular y para pc*/}
            <div className="md:hidden">XD</div>

             <div className="hidden md:flex">lol</div>

        </div>
    )

}

export default Navbar