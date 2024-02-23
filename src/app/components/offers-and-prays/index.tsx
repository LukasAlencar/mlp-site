import { Offers } from "../offers"
import { Prays } from "../prays"

export const OffersAndPrays = () => {
    return (
        <section className="w-full h-full bg-zinc-950 flex justify-center">
            <section className="w-11/12 bg-zinc-800 rounded-xl flex items-center justify-evenly h-4/6 mt-20">
                <section className="w-[42%] h-[74%] bg-[#D9D9D9] rounded-[42px] overflow-hidden">
                    <Prays/>
                </section>
                <section className="w-[42%] h-[74%] bg-[#D9D9D9] rounded-[42px] overflow-hidden">
                    <Offers/>
                </section>                
            </section>
        </section>
    )
}