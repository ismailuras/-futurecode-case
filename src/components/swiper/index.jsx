import { arrayOf, shape, number, string } from "prop-types";

import { Navigation, Pagination, Autoplay, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function CustomSlider({ data }) {
  if (!data) return null;

  return (
    <section>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Parallax]}
        navigation
        pagination={{ clickable: true }}
        onPaginationRender={(e) => e.pagination.el.classList.add("container")}
        loop
        speed={2000}
        autoplay={{ delay: 5000 }}
        parallax
      >
        {data.map((slideItem) => (
          <SwiperSlide key={slideItem.id}>
            <div className="bg">
              <img src={slideItem.img} alt={slideItem.title} />
            </div>
            <div className="container" data-swiper-parallax={800}>
              <div className="row">
                <div className="col-xl-6">
                  <div className="content">
                    <div>
                      <h2>{slideItem.title}</h2>
                      <p>{slideItem.subtitle}</p>
                    </div>
                    <a href="#">İletişime Geç</a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

CustomSlider.propTypes = {
  data: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      subtitle: string.isRequired,
      img: string.isRequired,
    })
  ).isRequired,
};

export default CustomSlider;
