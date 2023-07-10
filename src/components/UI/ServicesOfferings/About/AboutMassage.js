import React from "react";

import FAQServiceColumn from "../FAQ/FAQServiceColumn";

import "./AboutMassageFAQ.css";

function AboutMassage() {
  return (
    <div className="about-massage">
      <div className="about-massage-container">
        <div className="photo-content">
          <FAQServiceColumn />
        </div>
        <div className="text-content">
          <h1>Steph Journey to becoming a massage therapist</h1>
          <p>
            Stephanie's passion for the healing arts began at a young age when
            she discovered the profound impact touch could have on the mind,
            body, and spirit. Growing up, she was always drawn to helping others
            find comfort and relief from their physical and emotional
            challenges.
          </p>
          <p>
            What has fueled Stephanies journey is her genuine compassion and
            empathy for others. Stephanie believes that healing is not solely
            about manipulating the body but also about creating a safe and
            nurturing space for her clients. With warmth, kindness, and the
            ability to listen deeply, she establishes a foundation of trust and
            understanding.
          </p>
          <p>
            Whether it's easing chronic pain, reducing stress and anxiety, or
            simply providing a moment of relaxation and rejuvenation, Stephanie
            is committed to helping her clients achieve a state of balance and
            harmony.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMassage;
