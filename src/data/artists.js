// src/data/artists.js
export const artistsData = {
  featured: [
    {
      id: 1,
      name: "আব্বাস উদ্দিন",
      image: "/images/artists/abbas-uddin.jpg",
      bio: "ভাওয়াইয়া সংগীতের কিংবদন্তি শিল্পী",
      songs: 50,
      followers: "1.2M",
      category: "Legendary"
    },
    {
      id: 2,
      name: "ফরিদা পারভীন",
      image: "/images/artists/farida-parvin.jpg",
      bio: "উত্তরবঙ্গের কণ্ঠশিল্পী",
      songs: 35,
      followers: "890K",
      category: "Popular"
    },
    {
      id: 3,
      name: "রশিদ উদ্দিন",
      image: "/images/artists/rashid-uddin.jpg",
      bio: "আধুনিক ভাওয়াইয়া শিল্পী",
      songs: 28,
      followers: "750K",
      category: "Modern"
    }
  ],
  all: [
    // আরও শিল্পী যোগ করুন
  ]
};

// src/data/newSongs.js
export const newSongsData = {
  recent: [
    {
      id: 1,
      title: "নদীর কূল ভাঙে",
      artist: "আব্বাস উদ্দিন",
      duration: "4:32",
      views: "1.5M",
      image: "/images/songs/nodir-kul.jpg",
      releaseDate: "২০২৪-০১-১৫",
      link: "https://youtube.com/watch?v=1"
    },
    {
      id: 2,
      title: "মনের আকুলি",
      artist: "ফরিদা পারভীন",
      duration: "3:45",
      views: "1.2M",
      image: "/images/songs/moner-akuli.jpg",
      releaseDate: "২০২৪-০১-১০",
      link: "https://youtube.com/watch?v=2"
    }
  ]
};

// src/data/liveShows.js
export const liveShowsData = {
  upcoming: [
    {
      id: 1,
      title: "ভাওয়াইয়া রাত",
      artist: "বিশেষ অতিথি",
      date: "২০২৪-০২-১৫",
      time: "সন্ধ্যা ৭:০০",
      venue: "UJAN ETV Studio",
      image: "/images/live/bhawaiya-rat.jpg"
    }
  ],
  previous: [
    // পূর্বের লাইভ শো
  ]
};

// src/data/events.js
export const eventsData = {
  upcoming: [
    {
      id: 1,
      title: "উত্তরবঙ্গ সংগীত উৎসব",
      date: "২০২৪-০৩-০১",
      venue: "রংপুর স্টেডিয়াম",
      description: "বছরের বৃহত্তম ভাওয়াইয়া উৎসব"
    }
  ]
};

// src/data/festivals.js
export const festivalsData = {
  current: [
    {
      id: 1,
      name: "বসন্ত ভাওয়াইয়া মেলা",
      date: "২০২৪-০২-২০",
      location: "দিনাজপুর",
      description: "বসন্তকালীন ভাওয়াইয়া সংগীতের মহাআয়োজন"
    }
  ]
};