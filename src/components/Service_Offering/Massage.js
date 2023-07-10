import React from "react";

import MassageHeader from "../Headers/MassageHeader";
import IntroServices from "../UI/ServicesOfferings/IntroService";
import AreYou from "../UI/ServicesOfferings/AreYou";
import MassageFAQ from "../UI/ServicesOfferings/FAQ/MassageFAQ";
import Reviews from "../Reviews";
import Booking from "../UI/ServicesOfferings/Booking";
import AboutMassage from "../UI/ServicesOfferings/About/AboutMassage";

const MassageService = {
  title: "What is massage therapy?",
  content: `Massage is a time-honored practice that offers numerous benefits for relaxation, healing, and overall well-being. With skilled manipulation of soft tissues, massage therapists like Steph can help reduce stress, relieve muscle tension, and improve circulation. Whether it's a gentle Swedish massage or a deeper tissue technique, Steph's personalized approach ensures a tailored experience. Regular massage sessions promote self-care, managing stress, and nurturing a healthier connection with your body. Steph's passion and expertise as a massage therapist guarantee a rejuvenating experience that leaves you feeling restored and revitalized.`,
};

const MassageAreYou = {
  Li1: `daily stressors weighing you down? `,
  Li2: `muscle discomfort or tension? `,
  Li3: `reaching your peak performance or recovering from intense workouts?`,
  Li4: `finding moments of tranquility and self-care?`,
  Li5: `finding a massage therapist who truly listens to your needs?`,
  service: `massage`,
};

function Massage() {
  const serviceLink = "https://www.youtube.com"; // Replace with the actual link for the massage service

  return (
    <div className="massage_services">
      <div className="massage_services_container">
        <MassageHeader />
        <IntroServices
          title={MassageService.title}
          content={MassageService.content}
          link={serviceLink} // Pass the link as a prop
        />
        <AreYou
          Li1={MassageAreYou.Li1}
          Li2={MassageAreYou.Li2}
          Li3={MassageAreYou.Li3}
          Li4={MassageAreYou.Li4}
          Li5={MassageAreYou.Li5}
          service={MassageAreYou.service}
        />
        <MassageFAQ />
        <AboutMassage />
        <Reviews />
        <Booking link={serviceLink} service={MassageAreYou.service} />
      </div>
    </div>
  );
}

export default Massage;
