// src/components/Winners/Winners.js (Updated structure)
import React from 'react';
import WinnerCard from './WinnerCard';
import WinnerHighlight from './WinnerHighlight'; // New Import
import './Winners.css';

const Winners = () => {
  const allWinners = [
    { id: 1, name: "রিয়া সরকার", competition: "ভাওয়াইয়া সুরের ঝংকার ২০২৪", song: "ও নদীরে", image: "winner1", videoLink: "https://youtube.com/link1" },
    { id: 2, name: "অর্ণব সেন", competition: "লোকসংগীত মহাচ্যাম্পিয়নশিপ", song: "মহুয়ার গান", image: "winner2", videoLink: "https://youtube.com/link2" },
    { id: 3, name: "তৃষা দাস", competition: "বসন্তের সুরলহরি", song: "মন মাঝি", image: "winner3", videoLink: "https://youtube.com/link3" }
  ];

  const grandWinner = allWinners[0]; // ধরুন, প্রথম জন গ্র্যান্ড উইনার

  return (
    <section id="winners" className="winners-section">
      <div className="container">
        <h2 className="section-title">🏆 আমাদের গৌরব (Our Champions)</h2>
        
        {/* গ্র্যান্ড উইনার হাইলাইট */}
        <div className="row justify-content-center">
            <WinnerHighlight winner={grandWinner} />
        </div>
        
        <h3 className="sub-section-title mt-5 mb-4">অন্যান্য বিজয়ী</h3>
        <div className="row">
          {allWinners.slice(1).map(winner => ( // প্রথম জন বাদে বাকিদের দেখাবে
            <WinnerCard key={winner.id} winner={winner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Winners;