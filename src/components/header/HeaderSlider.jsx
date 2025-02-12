// Import necessary modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

export default function HeaderSlider() {
    // Array of image paths in the public folder
    const images = [
        '/film1.jpg',
        '/film2.jpg',
        '/film3.jpg',
        '/film4.jpg'
    ];
    return (
        <div className=" md:mt-10">
            <Swiper

            
                spaceBetween={50}
                slidesPerView={4}
                autoplay={{ delay: 100 }}
                loop>
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}