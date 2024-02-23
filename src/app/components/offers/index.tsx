import Link from "next/link"
import { BiBible } from "react-icons/bi";

export const Offers = () => {
    return (
        <div className="text-zinc-900 px-20 pt-20 pb-10 font-montserrat flex flex-col w-full h-full max-h-full">
            <div className="flex-1">
                <h1 className="text-5xl font-bold text-title-primary">Ofertas</h1>
                <h2 className="text-3xl font-medium text-title-primary mt-10" >Aprenda mais sobre ofertas</h2>
                <p className="text-xl font-light mt-5">Para conhecer mais sobre ofertas assista o nosso ensinamento, <Link className="font-semibold" href={'#'}>clicando aqui!</Link></p>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold underline"><a href="#">2ª Coríntios 9:7</a></h1>
                    <BiBible size={38}/>
                </div>
                <p className="text-xl text-color-secondary mt-6">Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria.</p>
                <p className="text-2xl text-title-primary mt-6">Conheça nossa página de ofertas</p>
            </div>
            <div className="flex items-center flex-col">
                <button className="w-full bg-[#FFDE59] font-bold p-5 text-2xl rounded-lg mt-2">Acessar página de ofertas</button>
            </div>
        </div>
    )
}