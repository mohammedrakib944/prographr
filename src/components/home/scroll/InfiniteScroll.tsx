"use client";
import style from "./scroll.module.css";

const imgRow1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const imgRow2 = [7, 6, 5, 4, 3, 2, 1, 17, 16, 15];
const imgRow3 = [8, 9, 10, 11, 12, 13, 14, 15, 16];

const InfiniteScroll = () => {
  return (
    <div className={style.wrapper}>
      <section className={`${style.section} ${style.scrolling}`}>
        {imgRow1.map((item) => (
          <img key={item} src={`/topimg/${item}.png`} alt="" />
        ))}
      </section>
      <section className={`${style.section} ${style.scrolling2}`}>
        {imgRow2.map((item) => (
          <img key={item} src={`/topimg/${item}.png`} alt="" />
        ))}
      </section>
      <section className={`${style.section} ${style.scrolling3}`}>
        {imgRow3.map((item) => (
          <img key={item} src={`/topimg/${item}.png`} alt="" />
        ))}
      </section>
    </div>
  );
};

export default InfiniteScroll;
