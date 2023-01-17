import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { ConfirmCodeView } from "./confirm-code-view";
import { SignInView } from "./sign-in-view";

import "swiper/css";

const SignIn = () => (
  <Swiper className="h-full w-full" allowTouchMove={false}>
    <SwiperSlide>
      <SignInView />
    </SwiperSlide>
    <SwiperSlide>
      <ConfirmCodeView />
    </SwiperSlide>
  </Swiper>
);

export default SignIn;
