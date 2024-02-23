import Link from "next/link"
import { BiBible } from "react-icons/bi";

export const Prays = () => {
    return (
        <div className="text-zinc-900 px-20 pt-20 pb-10 font-montserrat flex flex-col w-full h-full max-h-full">
            <div className="flex-1">
                <h1 className="text-5xl font-bold text-title-primary">Orações</h1>
                <h2 className="text-3xl font-medium text-title-primary mt-10" >Aprenda mais sobre orações</h2>
                <p className="text-xl font-light mt-5">Para conhecer mais sobre ofertas assista o nosso ensinamento, <Link className="font-semibold" href={'#'}>clicando aqui!</Link></p>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold underline"><a href="#">Marcos 11:24</a></h1>
                    <BiBible size={38} />
                </div>
                <p className="text-xl text-color-secondary mt-6">Portanto, eu digo: Tudo o que vocês pedirem em oração, creiam que já o receberam, e assim sucederá.</p>
                <p className="text-2xl text-title-primary mt-6">Conheça nossa página de orações</p>
            </div>
            <div className="flex items-center flex-col">
                <button className="w-full bg-[#FFDE59] font-bold p-5 text-2xl rounded-lg mt-2">Acessar página de orações</button>
            </div>
        </div>
    )
}