"use client";
import style from "./scroll.module.css";
// import "./style.css";
import Banner from "@/assets/TopBanner.jpg";
import Image from "next/image";

const InfiniteScroll = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.topWhiteShadow}></div>
      <section className="">
        <Image className={style.scrolling} src={Banner} alt="Banner" />
        <Image className={style.scrolling} src={Banner} alt="Banner" />
        <Image className={style.scrolling} src={Banner} alt="Banner" />
      </section>
      <div className={style.bottomWhiteShadow}></div>
    </div>
  );
};

export default InfiniteScroll;
