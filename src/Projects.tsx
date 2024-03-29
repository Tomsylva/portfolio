import ProjectDiv from "./ProjectDiv";
import {pina, create, elephant, portfolio, vegetables, beepo, musicPage} from "./projects-db";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Pagination} from "swiper";
import 'swiper/swiper.scss';
import "swiper/swiper-bundle.css";
import {motion} from "framer-motion";

SwiperCore.use([Navigation, Pagination]);

function Projects() : JSX.Element {
    return (
        <motion.div 
        initial="hidden"
        animate="visible"
        transition={{duration: 0.75}}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        className="project-container">

    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)} navigation pagination
    >
      <SwiperSlide><h2>swipe & see  <i className="fas fa-arrow-right"></i></h2></SwiperSlide>
      <SwiperSlide><ProjectDiv name={vegetables.name} link={vegetables.link} image={vegetables.image} description={vegetables.description} github={vegetables.github} technologies={vegetables.technologies} display={vegetables.display} demo={vegetables.demo}/></SwiperSlide>
      <SwiperSlide><ProjectDiv name={pina.name} link={pina.link} image={pina.image} description={pina.description} github={pina.github} technologies={pina.technologies} display={pina.display}/></SwiperSlide>
      <SwiperSlide><ProjectDiv name={beepo.name} link={beepo.link} image={beepo.image} description={beepo.description} github={beepo.github} technologies={beepo.technologies} demo={beepo.demo} display={beepo.display}/></SwiperSlide>
      <SwiperSlide><ProjectDiv name={elephant.name} link={elephant.link} image={elephant.image} description={elephant.description} github={elephant.github} technologies={elephant.technologies} display={elephant.display}/></SwiperSlide>
      <SwiperSlide><ProjectDiv name={create.name} link={create.link} image={create.image} description={create.description} github={create.github} technologies={create.technologies} display={create.display}/></SwiperSlide>
      <SwiperSlide><ProjectDiv name={portfolio.name} link={portfolio.link} image={portfolio.image} description={portfolio.description} github={portfolio.github} technologies={portfolio.technologies} display={portfolio.display}/></SwiperSlide>
      <SwiperSlide><ProjectDiv name={musicPage.name} link={musicPage.link} image={musicPage.image} description={musicPage.description} github={musicPage.github} technologies={musicPage.technologies} display={musicPage.display}/></SwiperSlide>

    </Swiper>
        </motion.div>
    )
}

export default Projects
