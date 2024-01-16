"use client"

import Image from "next/image";
import icon1 from "../assets/accounting.png";
const categories = async () => {

    // const res = await fetch("http://localhost:5000/categories");
    // const categories = await res.json();
    // console.log(categories);

    return (
        <div className=" pt-40">
            <h2 className="text-center font-bold text-4xl underline pb-10">See Our All Job Categories</h2>
            <div className="max-w-screen-xl mx-auto text-center grid grid-cols-5 gap-6">
                {
                    allCategory.map(single => <div key={single.id}
                        className=" p-10 shadow-xl rounded-lg">
                        <Image className="mx-auto"
                            src={icon1}
                            width={100}
                            height={100}
                            alt="Picture of the author"
                        />
                        <h2 className="font-semibold text-xl">{single.category_name}</h2>
                        <p>Available Job: {single.available_job}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

const allCategory = [
    {
        "id": 1,
        "category_name": "Accounting",
        "available_job": 200,
        "icon_image": "https://www.flaticon.com/svg/static/icons/svg/2991/2991144.svg"
    },
    {
        "id": 2,
        "category_name": "Administrative",
        "available_job": 150,
        "icon_image": "https://www.flaticon.com/svg/static/icons/svg/2991/2991145.svg"
    },
    {
        "id": 3,
        "category_name": "Advertising",
        "available_job": 100,
        "icon_image": "https://www.flaticon.com/svg/static/icons/svg/2991/2991146.svg"
    },
    {
        "id": 4,
        "category_name": "Banking",
        "available_job": 300,
        "icon_image": "https://www.flaticon.com/svg/static/icons/svg/2991/2991147.svg"
    },
    {
        "id": 5,
        "category_name": "Construction",
        "available_job": 250,
        "icon_image": "https://www.flaticon.com/svg/static/icons/svg/2991/2991148.svg"
    },
    {
        "id": 6,
        "category_name": "Customer Service",
        "available_job": 175,
        "icon_image": "https://www.flaticon.com/svg/static/icons/svg/2991/2991149.svg"
    },
    {
        "id": 7,
        "category_name": "Education",
        "available_job": 225,
        "icon_image": "https://www.flaticon.com/svg/static/icons/svg/2991/2991150.svg"
    },
    {
        "id": 8,
        "category_name": "Engineering",
        "available_job": 275,
        "icon_image": "https://www.flaticon.com/svg/static/icons/svg/2991/2991151.svg"
    },
    {
        "id": 9,
        "category_name": "Finance",
        "available_job": 350,
        "icon_image": "https://www.flaticon.com/svg/static/icons/svg/2991/2991152.svg"
    },
    {
        "id": 10,
        "category_name": "Healthcare",
        "available_job": 400,
        "icon_image": "https://www.flaticon.com/svg/static/icons/svg/2991/2991153.svg"
    }
]


export default categories;