'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useState } from "react";

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
        <Carousel className="w-full">
            <CarouselContent>

                {imgs.reverse().map((img, index) => {
                    return (
                        <CarouselItem onMouseDown={() => { setClicking(true) }} onMouseUp={() => { setClicking(false) }} className={`${clicking ? 'cursor-grabbing' : 'cursor-grab'}`} key={img.id}>
                            <div className="overflow-x-hidden">
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0 border-none">
                                        <div className="w-full h-screen overflow-hidden">
                                            <img className="w-full object-contain" src={img.url} alt={'img-' + index} />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    )
                })}

            </CarouselContent>
        </Carousel>
    )
}