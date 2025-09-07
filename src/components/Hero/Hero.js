// // src/components/Hero/Hero.js
// import React from 'react';
// import './Hero.css';

// const Hero = () => {
//   return (
//     <section className="music-hero">
//       <div className="container">
//         <div className="row justify-content-center text-center">
//           <div className="col-lg-8">
//             <h1 className="hero-title">Showcase Your Musical Talent</h1>
//             <p className="hero-subtitle">
//               Join our music competitions and get a chance to showcase your talent to the world. 
//               Win exciting prizes and get recognition from industry professionals.
//             </p>
//             <button className="btn btn-primary btn-lg hero-cta">Register Now</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// src/components/Hero/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="music-hero">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="hero-title">UJAN ETV</h1>
            <p className="hero-subtitle">
              আপনার YouTube চ্যানেলে স্বাগতম! এখানে আমি গান আপলোড করি এবং সঙ্গীত প্রতিযোগিতার আয়োজন করি। 
              আমার সর্বশেষ গানগুলি শুনুন এবং আমার প্রতিযোগিতায় অংশ নিন।
            </p>
            <a href="https://www.youtube.com/@UJANETV" className="btn btn-danger btn-lg hero-cta me-3">
              <i className="fab fa-youtube me-2"></i>YouTube চ্যানেল
            </a>
            <a href="/latest" className="btn btn-primary btn-lg hero-cta">
              <i className="fas fa-music me-2"></i>সর্বশেষ গান
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;