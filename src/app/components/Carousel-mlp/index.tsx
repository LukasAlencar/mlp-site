'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState } from "react";

export default function CarouselMlp() {
    const [clicking, setClicking] = useState(false)

    return (
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem onMouseDown={()=>{setClicking(true)}} onMouseUp={()=>{setClicking(false)}} className={`${clicking ? 'cursor-grabbing' : 'cursor-grab'}`} key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="text-zinc-900" />
            <CarouselNext className="text-zinc-900 hover" />
        </Carousel>
    )
}