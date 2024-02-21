import Image from "next/image"

export const Prays = () => {
    return (
        <div className="bg-gray-100">
            <div className=""><Image alt="Orações" width={1080} height={1080} className="max-w-[50%]" src={'/oracoes.jpg'}/></div>
        </div>
    )
}