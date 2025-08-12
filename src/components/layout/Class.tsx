'use client';

import { useRef, useState, useEffect } from 'react';
import CardClass from "../CardClass";
import Container from "../Container";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Class() {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const classes = [
        { title: 'Cajuzinho Class', imageUrl: '/card-photo-01.JPG', buttonLink: '/eventos' },
        { title: 'Petit Caju', imageUrl: '/card-photo-02.JPG', buttonLink: '/eventos' },
        { title: 'Jazz Dance Preparatório', imageUrl: '/card-photo-03.JPG', buttonLink: '/eventos' },
        { title: 'Jazz Dance Júnior', imageUrl: '/card-photo-04.jpg', buttonLink: '/eventos' },
        { title: 'Jazz Dance Infanto-Juvenil', imageUrl: '/card-photo-05.JPG', buttonLink: '/eventos' },
        { title: 'Jazz Dance Juvenil', imageUrl: '/card-photo-06.jpg', buttonLink: '/eventos' },
        { title: 'Jazz Dance Avançado', imageUrl: '/card-photo-07.JPG', buttonLink: '/eventos' },
        { title: 'Jazz Dance Adulto-Iniciante', imageUrl: '/card-photo-08.JPG', buttonLink: '/eventos' },
    ];

    useEffect(() => {
        if (!swiperInstance) return;
        const update = () => {
            setIsBeginning(swiperInstance.isBeginning);
            setIsEnd(swiperInstance.isEnd);
        };
        swiperInstance.on('slideChange', update);
        update();
        return () => {
            swiperInstance.off('slideChange', update);
        };
    }, [swiperInstance]);

    return (
        <div className="relative z-10 bg-[#FCF8F3] py-24">
            <Container>
                <section className="relative px-4 py-10">
                    <div className="flex items-center justify-between mb-6 max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-neulisSansMedium text-[#701F32]">
                            Escolha sua turma. Comece a dançar.
                        </h2>

                        <div className="flex gap-2">
                            <button
                                ref={prevRef}
                                disabled={isBeginning}
                                className={`w-10 h-12 cursor-pointer rounded text-white transition ${
                                    isBeginning ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#DA8331] hover:bg-[#A24154]'
                                }`}
                            >
                                ←
                            </button>
                            <button
                                ref={nextRef}
                                disabled={isEnd}
                                className={`w-10 h-12 cursor-pointer rounded text-white transition ${
                                    isEnd ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#DA8331] hover:bg-[#A24154]'
                                }`}
                            >
                                →
                            </button>
                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        spaceBetween={20}
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                        onInit={(swiper) => {
                            // @ts-expect-error: Swiper navigation types
                            swiper.params.navigation.prevEl = prevRef.current;
                            // @ts-expect-error: Swiper navigation types
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        pagination={{ clickable: true, el: '.swiper-pagination' }}
                        breakpoints={{
                            640: { slidesPerView: 1.5 },
                            768: { slidesPerView: 2.5 },
                            1024: { slidesPerView: 3.5 },
                            1280: { slidesPerView: 4 },
                        }}
                        className="max-w-7xl mx-auto"
                    >
                        {classes.map((classItem, index) => (
                            <SwiperSlide key={index}>
                                <CardClass cardStyle={index + 1} {...classItem} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="swiper-pagination mt-6 flex justify-center" />
                </section>
            </Container>
        </div>
    );
}
