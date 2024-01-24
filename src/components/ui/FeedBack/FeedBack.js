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


const FeedBack = () => {

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
                            reviews.map(review => <SwiperSlide key={review._id}>
                                <div className="flex justify-center flex-col items-center  py-10">
                                    <div className="avatar">
                                        <div className="w-32 h-32 rounded-full ring ring-primaryColor ring-offset-secondaryColor ring-offset-2">
                                            <Image
                                                src={review.photo}
                                                className="rounded-full w-32 h-32"
                                                alt="photo"
                                            />
                                        </div>
                                    </div>
                                    <p className="text-2xl text-primaryColor py-4 font-semibold">{review.name}</p>

                                    <p className='w-9/12 text-whiteColor text-center'>{review.comment}</p>
                                    <div className=" flex flex-col  items-center py-4 ">
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={review.rating}
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

const reviews = [
    {
        "_id": "654a56edc88945d43387a9b9",
        "photo": "https://i.ibb.co/StGdYn4/handsome-latin-man-helping-his-colleagues-out-by-explaining-some-his-work-library.jpg",
        "name": "John Doe",
        "comment": "Great service and products!",
        "rating": 5
    },
    {
        "_id": "654a56edc88945d43387a9ba",
        "photo": "https://i.ibb.co/QCXppMs/smiling-happy-indian-student-with-backpack-pointing-his-finger-wall.jpg",
        "name": "Alice Smith",
        "comment": "Fast delivery and good quality.",
        "rating": 4
    },
    {
        "_id": "654a56edc88945d43387a9bb",
        "photo": "https://i.ibb.co/Kscs7r4/positive-college-student-has-dark-skin-carries-folders-book-points-with-cheerful-expression-aside-ha.jpg",
        "name": "Bob Johnson",
        "comment": "Excellent customer support.",
        "rating": 5
    },
    {
        "_id": "654a56edc88945d43387a9bc",
        "photo": "https://i.ibb.co/NTgQQdz/pretty-brunette-schoolgirl-standing-holding-yellow-backpack-folder.jpg",
        "name": "Emily Brown",
        "comment": "Satisfied with my purchase.",
        "rating": 4
    },
    {
        "_id": "654a56edc88945d43387a9bd",
        "photo": "https://i.ibb.co/J7LB8dS/portrait-happy-young-african-male-student.jpg",
        "name": "Chris Wilson",
        "comment": "Highly recommended!",
        "rating": 5
    }
]

