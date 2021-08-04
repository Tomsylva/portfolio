import ProjectDiv from "./ProjectDiv";
import {pina, create, elephant, portfolio, vegetables, beepo} from "./projects-db";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Pagination} from "swiper";
import 'swiper/swiper.scss';
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

function Projects() : JSX.Element {
    return (
        <div className="project-container">

<Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} navigation pagination
    >
      <SwiperSlide><ProjectDiv name={pina.name} link={pina.link} image={pina.image} description={pina.description} github={pina.github} technologies={pina.technologies} display={pina.display}/></SwiperSlide>
      <SwiperSlide><ProjectDiv name={vegetables.name} link={vegetables.link} image={vegetables.image} description={vegetables.description} github={vegetables.github} technologies={vegetables.technologies} display={vegetables.display}/></SwiperSlide>
      <SwiperSlide><ProjectDiv name={beepo.name} link={beepo.link} image={beepo.image} description={beepo.description} github={beepo.github} technologies={beepo.technologies}/></SwiperSlide>
      <SwiperSlide><ProjectDiv name={elephant.name} link={elephant.link} image={elephant.image} description={elephant.description} github={elephant.github} technologies={elephant.technologies} display={elephant.display}/></SwiperSlide>
      <SwiperSlide><ProjectDiv name={create.name} link={create.link} image={create.image} description={create.description} github={create.github} technologies={create.technologies}/></SwiperSlide>
      <SwiperSlide><ProjectDiv name={portfolio.name} link={portfolio.link} image={portfolio.image} description={portfolio.description} github={portfolio.github} technologies={portfolio.technologies}/></SwiperSlide>

    </Swiper>
        </div>
    )
}

export default Projects
