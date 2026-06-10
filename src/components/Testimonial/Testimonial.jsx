import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "LINKSCHAT transformed the way our remote team collaborates.",
  },
  {
    name: "Michael Brown",
    text: "The interface is beautiful and messaging feels instant.",
  },
  {
    name: "David Wilson",
    text: "Privacy features are exactly what we were looking for.",
  },
];

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.heading}>
          <h2>What People Are Saying</h2>
          <p>Trusted by individuals, teams, and communities.</p>
        </div>

        <Swiper spaceBetween={30} slidesPerView={1}>
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
