
// import "antd/dist/antd.css";
import "./Banner.css";
import { Link } from "react-router";
import { Carousel } from "antd";


const carouselData = [
  {
    image: "https://i.ibb.co.com/23p3fXB2/concert.jpg",
    title1: "Skip the Line",
    title2: "Join the Vibe",
    btnText: "Book Now",
    link: "/sd",
  },
  {
    image: "https://i.ibb.co.com/39MTMrk0/Amusment-park.jpg",
    title1: "Your Ticket to",
    title2: "Non-Stop Thrills",
    btnText: "Grab Ticket",
    link: "/sd",
  },
  {
    image: "https://i.ibb.co.com/8LSSn9kc/4615-1.jpg",
    title1: "Your Front Row",
    title2: "Ticket to Wonder",
    btnText: "Discover",
    link: "/sd",
  },
];

const SmMdBanner = () => (
  <div className="lg:hidden mt-28">
    <Carousel autoplay>
      {carouselData.map((item, idx) => (
        <div key={idx}>
          <div className="relative h-[60vh] w-full">
            {/* 1) Use a real <img> so you can see any network error */}
            <img
              src={item.image}
              alt={`${item.title1} ${item.title2}`}
              className="object-cover w-full h-full"
              onError={e => {
                // very simple debug: if it 404’s, log it
                // you can remove this handler later
                console.error("img failed to load:", item.image);
              }}
            />

            {/* 2) text overlay */}
            <div className="absolute bottom-10 left-5">
              <p className="text-2xl font-bold text-black p-2 bg-gradient-to-r to-[#6482FE] from-[#FBBFEB] w-fit">
                {item.title1}
              </p>
              <p className="text-2xl font-bold text-black p-2 bg-gradient-to-r from-[#6482FE] to-[#FBBFEB] w-fit translate-x-10">
                {item.title2}
              </p>
              <Link to={item.link}>
                <button className="px-4 py-2 bg-white/80 mt-4 font-bold text-black rounded-sm">
                  <span className="bg-primary px-2 py-1 text-white inline-block transition-transform duration-300 ease-in-out hover:scale-110">
                    {item.btnText}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

export default SmMdBanner;
