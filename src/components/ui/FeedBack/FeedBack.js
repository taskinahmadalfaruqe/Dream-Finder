"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";
import Marquee from "react-fast-marquee";
import { Rating } from "@smastrom/react-rating";
import img from "@/assets/team/team4.jpg";
import { Card, Image } from "@nextui-org/react";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import axios from "axios";

// eslint-disable-next-line @next/next/no-async-client-component
const FeedBack = async () => {
  const axiosPublic = useAxiosPublic();
  const res = await axiosPublic.get("/feedbacks");
  const feedbacks = await res.data;

  return (
    <>
      <div className="pb-6">
        <div className="">
          <h2 className="text-4xl font-bold text-center space-x-8 py-8 divider ">
            What People Say
          </h2>
          <Marquee pauseOnHover={true}>
            <div>
              <div className="flex p-5">
                {feedbacks
                  ?.slice(0, Math.ceil(feedbacks?.length / 2))
                  .map((feedback, idx) => (
                    <Card
                      key={feedback?._id}
                      className={`w-[450px] mr-12 py-3 ${
                        idx % 2 === 1 && "bg-[#D9DCDC] dark:text-darkColor "
                      }`}
                    >
                      <div className="flex gap-5 items-center p-5 ">
                        <div className="avatar">
                          <div className="w-16 h-16 rounded-full ring ring-primaryColor ring-offset-secondaryColor ring-offset-2">
                            <Image
                              src={feedback?.photo}
                              className="rounded-full w-16 h-16"
                              alt="photo"
                            />
                          </div>
                        </div>
                        <div className="  ">
                          <p className="text-2xl text-primaryColor font-semibold">
                            {feedback?.name}
                          </p>

                          <p className="font-semibold">{feedback?.comment?.slice(0,35)}{feedback?.comment.length > 34 && "..."}</p>
                          <Rating
                            style={{ maxWidth: 100 }}
                            value={feedback?.rating}
                            readOnly
                          />
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
              <div className="flex p-5">
                {feedbacks
                  ?.slice(feedbacks?.length / 2, feedbacks?.length + 1)
                  .map((feedback, idx) => (
                    <Card
                      key={feedback?._id}
                      className={`w-[450px] mr-12 mb-10 py-3 ${
                        idx % 2 === 0 && "bg-[#D9DCDC] dark:text-darkColor "
                      }`}
                    >
                      <div className="flex gap-5 items-center p-5 ">
                        <div className="avatar">
                          <div className="w-16 h-16 rounded-full ring ring-primaryColor ring-offset-secondaryColor ring-offset-2">
                            <Image
                              src={feedback.photo}
                              className="rounded-full w-16 h-16"
                              alt="photo"
                            />
                          </div>
                        </div>
                        <div className="  ">
                          <p className="text-2xl text-primaryColor font-semibold">
                            {feedback.name}
                          </p>

                          <p className="font-semibold">{feedback.comment}</p>
                          <Rating
                            style={{ maxWidth: 100 }}
                            value={feedback.rating}
                            readOnly
                          />
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
          </Marquee>
        
        </div>
      </div>
    </>
  );
};

export default FeedBack;
