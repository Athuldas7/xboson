"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);

  const handleVideoOpen = () => {
    setIsOpen(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoClose = () => {
    setIsOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleVideoEnd = () => {
    handleVideoClose();
  };

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container mt-5">
        <SectionTitle
          title="Product Video"
          paragraph=""
          center
          mb="80px"
        />

        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/video/video1.png"
                  alt="video thumbnail"
                  fill
                  onClick={handleVideoOpen}
                  className="cursor-pointer"
                />
                <div className="absolute top-0 right-0 flex items-center justify-center w-full h-full">
                  <button
                    onClick={handleVideoOpen}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-[90%] max-w-[800px]">
            <video
              ref={videoRef}
              src="/videos/caax.mp4"
              className="w-full rounded-lg"
              controls={false}
              onEnded={handleVideoEnd}
              autoPlay
              muted
            />
            <button
              onClick={handleVideoClose}
              className="absolute p-2 text-white bg-black bg-opacity-50 rounded-full top-2 right-2"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Video;
