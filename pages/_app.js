
import Head from "next/head";
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "styles/style.scss";
import 'styles/theme.css';
import "styles/footer.css";
import "styles/contact.css";
import "styles/testimonial.css";
import "styles/offering.css";
import "styles/strategycards.css";
import "styles/about.css";
import "styles/strategies.css";
import "styles/servicecard.css";
import "styles/strategycontent.css";
import "styles/customizablestrategy.css";
import "styles/eductaion.css";
import "styles/comingsoon.css";

import "styles/webiniar.css";
import "styles/webiniardesc.css";
import 'styles/blogs.css';
import 'styles/blog_details.css';


import 'styles/homeleanding.css';
import 'styles/Privacy.css';
import NextNProgress from 'nextjs-progressbar';



const App = ({ Component, pageProps }) => {

  const [fontcss] = useState();

  useEffect(() => {
    setTimeout(() => {
      process.env.NODE_ENV === "production" &&
        config.params.tag_manager_id &&
        TagManager.initialize(tagManagerArgs);
    }, 5000);
  }, []);



  return (
    < > 

      <Head>
        {/* google font css */}
        <link
          rel="icon"
          href="/images/favicon.svg"
          crossOrigin="true"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `${fontcss}`,
          }}
        />
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </Head>



      
      <NextNProgress color="white" />
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
};

export default App;
