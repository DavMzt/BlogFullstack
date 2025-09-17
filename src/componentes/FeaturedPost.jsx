import { Link } from "react-router-dom"
import Image from "./image"
const FeaturedPost = () => {

  return(
    <div className="mt-8 flex flex-col lg:flex-row gap-8">

        <div className="w-full  lg:w-1/2 flex flex-col gap-4">
        <Image src="tena.jpg" className="rounded-3xl object-cover"/>
        
        <div className="flex items-center gap-4">
            <h1 className="font-semibold lg:text-lg">01.</h1>
            <Link className="text-white lg:text-lg">Diseño Web</Link>
            <span className="text-gray-500">hace 2 Siglos alv</span>
        </div>

        <Link to="/test" className="text-xl lg:text-3xl font-semibold lg:font-bold">INTENTARON CIRCUMCIDARME PERO MI PREPUCIO SOLO VOLVIO A FORTALEZERSE</Link>



        </div>

        

        <div className="w-full  lg:w-1/2 flex flex-col gap-4">

        <div className="lg:h-1/3 flex justify-between gap-4">
        <Image src="anakin.png" className="rounded-3xl object-cover w-1/3 aspect-video"/>
        <div className="w-2/3">
        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
            <h1 className="font-semibold">02.</h1>
            <Link className="text-white">LMAO</Link>
            <span className="text-gray-500 text-sm">hace 40 años</span>
        </div>
        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Homelo vas a recortarte?</Link>
        </div>
        
        </div>

        <div className="lg:h-1/3 flex justify-between gap-4">
        <Image src="boo.jpg" className="rounded-3xl object-cover w-1/3 aspect-video"/>
        <div className="w-2/3">
        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
            <h1 className="font-semibold">03.</h1>
            <Link className="text-white">Osiosiosi</Link>
            <span className="text-gray-500 text-sm">hace 100 años</span>
        </div>
        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">El muchacho quiere cambiar su estilo punk por un pombadour</Link>
        </div>
        </div>

        <div className="lg:h-1/3 flex justify-between gap-4">
        <Image src="when.jpg" className="rounded-3xl object-cover w-1/3 aspect-video"/>
        <div className="w-2/3">
        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
            <h1 className="font-semibold">04.</h1>
            <Link className="text-white">LMAO</Link>
            <span className="text-gray-500 text-sm">hace 984990 años</span>
        </div>
        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">When haces tus momos en el react</Link>
        </div>
        </div>


        </div>
    </div>
  )


}

export default FeaturedPost