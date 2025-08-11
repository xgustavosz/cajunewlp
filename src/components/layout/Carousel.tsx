'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const images = [
    '/banner-01.JPG',
    '/banner-02.jpeg',
    '/banner-03.jpeg',
    '/banner-04.JPG',
    '/banner-05.JPG',
    '/banner-06.JPG',
    '/banner-07.JPG',
    '/banner-08.jpeg',
    '/banner-09.jpeg',
]

export default function Carousel() {
    return (
        <div className="w-full relative">
            <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop
                className="w-full h-[600px]"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[600px]">
                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <style jsx global>{`
            .swiper-pagination {
                bottom: 20px !important;
            }

            .swiper-pagination-bullet {
                border: 1px solid #FFF;
                opacity: 1;
            }

            .swiper-pagination-bullet-active {
                background-color: #FFF;
            }
            `}</style>
        </div>
    )
}
