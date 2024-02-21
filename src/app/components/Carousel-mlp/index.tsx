'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ReactNode, useState } from "react";

type Imgs = {
    id: string;
    url: string;
}

type CarouselMlpProps = {
    imgs: Array<Imgs>
}

export default function CarouselMlp({ imgs }: CarouselMlpProps) {
    const [clicking, setClicking] = useState(false)

    return (
        <Carousel className="w-full max-w-xs">
            <CarouselContent>

                {imgs.map((img, index) => {
                    return (
                        <CarouselItem onMouseDown={() => { setClicking(true) }} onMouseUp={() => { setClicking(false) }} className={`${clicking ? 'cursor-grabbing' : 'cursor-grab'}`} key={img.id}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <img src={img.url} alt={'img-'+index} />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    )
                })}

            </CarouselContent>
            <CarouselPrevious className="text-zinc-900" />
            <CarouselNext className="text-zinc-900 hover" />
        </Carousel>
    )
}