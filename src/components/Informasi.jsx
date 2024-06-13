import React from 'react';
import CourseCard from './InfoCard';
import { courses } from '../data/data';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Courses = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      }
    ]
  };

  return (
    <section className='w-full h-full bg-white p-4'>
      <div className='max-w-5xl mx-auto text-center'>
        <h1 className='text-3xl font-bold'>Informasi Hari Ini</h1>
        <p className='text-gray-600 pt-2 pb-8'>
          Cari tahu informasi menarik dan penting bagi kesehatan buah hati Anda. Penuhi kebutuhannya dengan gizi dan nutrisi yang tercukupi demi tumbuh kembangnya yang optimal.
        </p>
      </div>
      <div className='max-w-5xl mx-auto'>
        <Slider {...settings} className='px-4'>
          {courses && courses.map((course) => (
            <a href="/article_Page1" key={course.id}>
              <CourseCard title={course.title} desc={course.desc} linkImg={course.linkImg} />
            </a>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Courses;
