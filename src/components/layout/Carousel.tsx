'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const slides = [
    { src: '/banner-01.JPG', alignment: 'object-center' },
    { src: '/banner-02.jpeg', alignment: 'object-center' },
    { src: '/banner-03.jpeg', alignment: 'object-center' },
    { src: '/banner-04.JPG', alignment: 'object-center' },
    { src: '/banner-05.JPG', alignment: 'object-center' },
    { src: '/banner-06.JPG', alignment: 'object-[20%_50%]' },
    { src: '/banner-07.JPG', alignment: 'object-[70%_50%]' },
    { src: '/banner-08.jpeg', alignment: 'object-center' },
    { src: '/banner-09.jpeg', alignment: 'object-bottom' },
]

export default function Carousel() {
    return (
        <div className="w-full relative">
            <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop
                className="w-full max-w-[1680px] h-[600px]"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[600px]">
                            <Image
                                src={slide.src}
                                alt={`Slide ${index + 1}`}
                                width={1680}
                                height={600}
                                className={`w-full h-full object-cover ${slide.alignment}`}
                                priority={index === 0}
                                quality={90}
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
