import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="stage-badge-sm">🎭 আমাদের পথচলা</div>
            <h2 className="section-title">আমাদের চ্যানেল সম্পর্কে</h2>

            <p className="about-text">
              ভাওয়াইয়া সংগীতের ঐতিহ্যগত যাত্রা: অতীত থেকে বর্তমান। UJAN ETV-তে আপনাকে স্বাগতম, যা ভাওয়াইয়া সংগীতের অপূর্ব ভাবময় জগতের অনন্য ঠিকানা! আমাদের চ্যানেলটি উত্তরবঙ্গের নয়নাভিরাম প্রকৃতির কোল থেকে উদ্ভূত এই সমৃদ্ধ লোকসংগীতের সাংস্কৃতিক ঐতিহ্য তুলে ধরতে প্রতিশ্রুতিবদ্ধ। ভাওয়াইয়ার প্রতিটি সুর ও বাণী গ্রামবাংলার জীবন, ভালোবাসা এবং প্রকৃতির গভীর অনুভূতির মেলবন্ধন প্রকাশ করে।
            </p>
            <p className="about-text">
              আমাদের সংগীতপ্রেমী পরিবারের অংশ হতে আজই UJAN ETV সাবস্ক্রাইব করুন। বেল আইকনটি প্রেস করে আমাদের নতুন রিলিজ, এক্সক্লুসিভ পারফর্ম্যান্স এবং সাংস্কৃতিক আলোচনার আপডেট পান। আসুন, ভাওয়াইয়ার ঐতিহ্যকে বিশ্বমঞ্চে বাঁচিয়ে রাখি আগামী প্রজন্মের জন্য।
            </p>
            
            <div className="stats row mt-4">
              <div className="col-4 text-center">
                <div className="stat-box">
                  <h3 className="stat-number">৫০+</h3>
                  <p className="stat-label">প্রতিযোগিতা</p>
                </div>
              </div>
              <div className="col-4 text-center">
                <div className="stat-box">
                  <h3 className="stat-number">৫,০০০+</h3>
                  <p className="stat-label">অংশগ্রহণকারী</p>
                </div>
              </div>
              <div className="col-4 text-center">
                <div className="stat-box">
                  <h3 className="stat-number">লাখ+</h3>
                  <p className="stat-label">পুরস্কার</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="about-image-wrapper">
              <div className="about-image">
                <span className="about-icon">🪕</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;