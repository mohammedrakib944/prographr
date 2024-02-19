"use client";
import style from "./scroll.module.css";

const imgRow1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const imgRow2 = [7, 9, 8, 11, 10, 1, 2, 3, 4, 5, 6];
const imgRow3 = [10, 11, 8, 6, 7, 1, 2, 3, 4, 5, 6, 9];

const InfiniteScroll = () => {
  return (
    <div className={style.wrapper}>
      <section className={`${style.section} ${style.scrolling}`}>
        {imgRow1.map((item, index) => (
          <img key={index} src={`/topimg/${item}.jpg`} alt="" />
        ))}
      </section>
      <section className={`${style.section} ${style.scrolling2}`}>
        {imgRow2.map((item, index) => (
          <img key={index} src={`/topimg/${item}.jpg`} alt="" />
        ))}
      </section>
      <section className={`${style.section} ${style.scrolling3}`}>
        {imgRow3.map((item, index) => (
          <img key={index} src={`/topimg/${item}.jpg`} alt="" />
        ))}
      </section>
    </div>
  );
};

export default InfiniteScroll;
