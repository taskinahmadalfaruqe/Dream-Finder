"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '@smastrom/react-rating/style.css'
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import img from "@/assets/team/team4.jpg"
import { Image } from "@nextui-org/react";
import useAxiosPublic from "@/hooks/useAxiosPublic";


// eslint-disable-next-line @next/next/no-async-client-component
const FeedBack = async () => {
    const axiosPublic = useAxiosPublic();
    const res = await axiosPublic.get("/feedbacks");
    const feedbacks = await res.data;

    return (
        < >
            <div className="pb-6">
                <div className="bg-center bg-no-repeat bg-[url(https://i.postimg.cc/Hs1kNzHN/home-Page-Banner.jpg)] bg-secondaryColor bg-blend-multiply">
                    <h2 className="text-4xl font-bold text-center space-x-8 py-8 divider text-whiteColor">What People Say</h2>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            feedbacks.map(feedback=> <SwiperSlide key={feedback._id}>
                                <div className="flex justify-center flex-col items-center  py-10">
                                    <div className="avatar">
                                        <div className="w-32 h-32 rounded-full ring ring-primaryColor ring-offset-secondaryColor ring-offset-2">
                                            <Image
                                                src={feedback.photo}
                                                className="rounded-full w-32 h-32"
                                                alt="photo"
                                            />
                                        </div>
                                    </div>
                                    <p className="text-2xl text-primaryColor py-4 font-semibold">{feedback.name}</p>

                                    <p className='w-9/12 text-whiteColor text-center'>{feedback.comment}</p>
                                    <div className=" flex flex-col  items-center py-4 ">
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={feedback.rating}
                                            readOnly
                                        />

                                    </div>
                                </div>

                            </SwiperSlide>)
                        }
                    </Swiper>

                </div>
            </div>
        </>
    )
}

export default FeedBack;
// fdhtshjgjtydrgehtyjf
