import React from "react";
import "./AnimatedBg.css";
import { ReactComponent as Android } from "./svg/android.svg";
import { ReactComponent as Brand } from "./svg/brand-app-store.svg";
import { ReactComponent as Css } from "./svg/css.svg";
import { ReactComponent as DataStore } from "./svg/datastore.svg";
import { ReactComponent as Firebase } from "./svg/firebase.svg";
import { ReactComponent as Flutter } from "./svg/flutter.svg";
import { ReactComponent as GooglePlay } from "./svg/google-play.svg";
import { ReactComponent as Html } from "./svg/html5.svg";
import { ReactComponent as Ios } from "./svg/ios.svg";
import { ReactComponent as Kotlin } from "./svg/kotlin.svg";
import { ReactComponent as LogoGoogle } from "./svg/logo-google.svg";
import { ReactComponent as Mongodb } from "./svg/mongodb.svg";
import { ReactComponent as Nextjs } from "./svg/nextjs.svg";
import { ReactComponent as Nodejs } from "./svg/nodejs.svg";
import { ReactComponent as Phone } from "./svg/phone.svg";
import { ReactComponent as Programing } from "./svg/programing.svg";
import { ReactComponent as ReactD } from "./svg/reactD.svg";
import { ReactComponent as Web } from "./svg/web.svg";
import { ReactComponent as Wordpress } from "./svg/wordpress.svg";
const AnimatedBg = ({ children }) => {
  let arr = [];
  let qty = 15;

  for (let i = 0; i < qty; i++) {
    arr.push(i);
  }

  const layers = arr.map((i) => {
    return (
      <div key={i} className="animated-row">
        <div>
          <Android />
          <Brand />
          <Css />
          <DataStore />
          <Firebase />
          <Flutter />
          <GooglePlay />
          <Html />
          <Ios />
          <Kotlin />
          <LogoGoogle />
          <Mongodb />
          <Nextjs />
          <Nodejs />
          <Phone />
          <Programing />
          <ReactD />
          <Web />
          <Wordpress />
        </div>
        <div>
          <Android />
          <Brand />
          <Css />
          <DataStore />
          <Firebase />
          <Flutter />
          <GooglePlay />
          <Html />
          <Ios />
          <Kotlin />
          <LogoGoogle />
          <Mongodb />
          <Nextjs />
          <Nodejs />
          <Phone />
          <Programing />
          <ReactD />
          <Web />
          <Wordpress />
        </div>
      </div>
    );
  });

  return (
    <section className="animated-section">
      {layers}
      {children}
    </section>
  );
};

export default AnimatedBg;
