import { Link } from "react-router-dom"

const MainCategories = () => {


    return (<div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">


        <div className="flex-1 flex items-center justify-between flex-wrap">
            <Link to="/post" className="bg-blue-600 text-white rounded-full px-4 py-2">Todos los post</Link>

            <Link to="/post?cat=web-desing" className="hover:bg-blue-50 rounded-full px-4 py-2">Diseño web</Link>

            <Link to="/post?cat=develpment" className="hover:bg-blue-50 rounded-full px-4 py-2">Desarrollo</Link>

            <Link to="/post?cat=databases" className="hover:bg-blue-50  rounded-full px-4 py-2">Base de datos</Link>

            <Link to="/post?cat=seo" className="hover:bg-blue-50 rounded-full px-4 py-2">XDDD</Link>

            <Link to="/post?cat=Marketing" className="hover:bg-blue-50 rounded-full px-4 py-2">Marketing</Link>
        </div>

        <span className="text-xl font-medium">|</span>


         <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">

             <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="50"
    height="20"
    fill="none"
    stroke="gray"
    >
     <circle cx="10.5" cy="10.5" r="7.5"/>
     <line x1="16.5" y1="16.5"  x2="22" y2="22"/>

    </svg>
    <input type="text" placeholder="Busca un post..." className="bg-transparent"/>

         </div>
         
    </div>)
}

export default MainCategories