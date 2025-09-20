import * as React from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import styles from './page.module.css'

export function CarouselSpacing() {
  return (
    <div className="relative w-full">
      <Carousel className={styles.carouselContainer}>
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className={styles.carouselItem}>
            <div className="p-1">
              <Card>
                <CardHeader>Item 1</CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src="/img3.png" alt="" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2"/>
      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2"/>
    </Carousel>

    </div>
    
  )
}
