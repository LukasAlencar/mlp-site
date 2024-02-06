import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
    return (
        <nav className="flex justify-start space-x-10 pl-2 bg-zinc-950 items-center">
            <Image alt="logo" src={'/mlp-logo-icon.png'} width={100} height={100}></Image>
            <Link href={"/"}>Início</Link>
            <Link href={"/prayers"}>Orações</Link>
            <Link href={"/offers"}>Ofertas</Link>
            <Link href={"/about-us"}>Sobre nós</Link>
        </nav>
    )
}