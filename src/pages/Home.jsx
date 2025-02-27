import { useState, useEffect } from "react";
import Slider from "../Component/Slider";

const images = [
  "./images/sliders/slide-1.jpg",
  "./images/sliders/slide-2.jpg",
  "./images/sliders/slide-3.jpg",
  "./images/sliders/slide-4.jpg",
];

function Button({ children, className, ...props }) {
  return (
    <button className={`px-4 py-4 rounded text-blue-600 text-5xl ${className}`} {...props}>
      {children}
    </button>
  );
}

const Home = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>  
      {/* Slider */}

     {/* <div className="relative w-full sm:h-[600px] flex items-center">
      <AnimatePresence mode="auto">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          // exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full object-cover h-full "
        />
      </AnimatePresence>
      <div className="absolute flex justify-between w-full">
        <Button onClick={prevSlide}>&lt;</Button>
        <Button onClick={nextSlide}>&gt;</Button>
      </div>
    </div> */}

    {/* Slider By swiperJs */}

    <Slider/>

      <div className="grid grid-cols-1 W-[100%] sm:grid-cols-2 gap-5 px-2 sm:px-0 2xl:px-56 my-10">
         
        <div className="grid grid-cols-2 sm:grid-cols-2 sm:gap-10 gap-5 sm:p-6">
          <div >
            <img src="./images/home/home-welcome-1.jpg" alt="boy with indian flag" className="mt-10" />
          </div>
          <div>
            <img src="./images/home/home-welcome-2.jpg" alt="boy with book" />
          </div>
        </div>

        <div className="justify-center flex flex-col gap-4 text-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold text-red-700">Welcome to</h1>
            <h1 className="sm:text-3xl text-2xl font-bold text-blue-800 text-center"> Bhondawe Patil Public School </h1>
          </div>
          <div>
            <p className=" text-gray-500 text-center">
              Welcome to the abode of intellect where the purpose of education is to equip the child with the most excellent technological proficiency; to empower him with the skills in order to realize his God gifted potential; to creole the light climate so that the child may develop fully as a complete human being at BHONDAWE PATIL PUBLIC SCHOOL, one's intellect is I transformed into an illuminated reflection of knowledge and broad outlook towards life.
            </p>
          </div>
        </div>
      </div>

      {/* Vidoe */}
      <div className="bg-gray-200 flex justify-center flex-col items-center p-12">
        <h1 className="text-3xl font-bold w-full flex justify-center text-center text-blue-900 ">School Virtual Tour</h1>
        <div className="m-10 mt-5 mb-3">
          <iframe className='sm:w-155 sm:h-150 md:w-215' src="https://www.youtube.com/embed/cuIFuOVG9eA?si=PXRLfhnYuJTopxHe" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

      {/* Missiion */}

      <div className="bg-[url('/images/home/bg-building.jpg')] bg-cover bg-no-repeat py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 px-2 sm:px-0 2xl:px-56">
          <div></div>

          <div className="text-white opacity-90 bg-blue-800/70 p-10">

            <h2 className=" text-2xl sm:text-3xl font-bold pb-5">Our Mission</h2>

            <p className="text-justify">We seek to make our children confident and creative builders of their future. Our focus is on the child as a whole entity. We work towards an integrated curriculum that reaches across disciplines and age levels. The students will be encouraged to meet academics challenges with openness, enthusiasm and willingness to solve problems. We strive to inspire our students to achieve the highest standards of intellectual and personal development through a satisfactory and stimulating and comprehensive programme. We aim for an atmosphere of cooperation and endeavour to create compassionate, responsible and innovative global citizens, committed to the development of India and the world.</p>
          </div>

        </div>

      </div>
    </>

  );
};

export default Home;
