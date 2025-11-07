// src/data/competitions.js
export const competitionsData = {
  featured: [
    { 
      id: 1, 
      name: "ভাওয়াইয়া প্রতিযোগিতা ২০২৪", 
      deadline: "৩০ জুন, ২০২৪", 
      prize: "৫০,০০০ টাকা", 
      entries: 243,
      status: "active",
      category: "ভাওয়াইয়া",
      image: "/images/competitions/bhawaiya-2024.jpg",
      description: "বছরের সেরা ভাওয়াইয়া প্রতিযোগিতা, অংশগ্রহণ করুন এবং আপনার প্রতিভা দেখান",
      rules: [
        "শুধুমাত্র ভাওয়াইয়া গান গ্রহণযোগ্য",
        "গানের সময়সীমা সর্বোচ্চ ৩ মিনিট",
        "বয়স ১৬-৪০ বছর",
        "রেজিস্ট্রেশন ফি: ২০০ টাকা"
      ],
      registrationLink: "/register"
    },
    { 
      id: 2, 
      name: "উত্তরবঙ্গের কণ্ঠ", 
      deadline: "১৫ জুলাই, ২০২৪", 
      prize: "৩০,০০০ টাকা", 
      entries: 187,
      status: "active",
      category: "কণ্ঠ সংগীত",
      image: "/images/competitions/uttorbonger-kontho.jpg",
      description: "উত্তরবঙ্গের মেধাবী কণ্ঠশিল্পীদের জন্য বিশেষ প্রতিযোগিতা",
      rules: [
        "শুধুমাত্র উত্তরবঙ্গের বাসিন্দাদের জন্য",
        "কোনো অডিও ইফেক্ট ব্যবহার করা যাবে না",
        "লাইভ রেকর্ডিং জমা দিতে হবে"
      ],
      registrationLink: "/register"
    },
    { 
      id: 3, 
      name: "ঐতিহ্যের সুর", 
      deadline: "১ আগস্ট, ২০২৪", 
      prize: "৪৫,০০০ টাকা", 
      entries: 156,
      status: "active",
      category: "ঐতিহ্যবাহী",
      image: "/images/competitions/oitijjho-sur.jpg",
      description: "প্রাচীন ভাওয়াইয়া সুরের উপর ভিত্তি করে বিশেষ প্রতিযোগিতা",
      rules: [
        "প্রাচীন ভাওয়াইয়া সুর ব্যবহার করতে হবে",
        "গানটি ঐতিহ্যবাহী হতে হবে",
        "নতুন সুর সংযোজন করা যাবে না"
      ],
      registrationLink: "/register"
    }
  ],
  all: [
    { 
      id: 1, 
      name: "ভাওয়াইয়া প্রতিযোগিতা ২০২৪", 
      deadline: "৩০ জুন, ২০২৪", 
      prize: "৫০,০০০ টাকা", 
      entries: 243,
      status: "active",
      category: "ভাওয়াইয়া",
      image: "/images/competitions/bhawaiya-2024.jpg",
      description: "বছরের সেরা ভাওয়াইয়া প্রতিযোগিতা, অংশগ্রহণ করুন এবং আপনার প্রতিভা দেখান",
      rules: [
        "শুধুমাত্র ভাওয়াইয়া গান গ্রহণযোগ্য",
        "গানের সময়সীমা সর্বোচ্চ ৩ মিনিট",
        "বয়স ১৬-৪০ বছর",
        "রেজিস্ট্রেশন ফি: ২০০ টাকা"
      ],
      registrationLink: "/register"
    },
    { 
      id: 2, 
      name: "উত্তরবঙ্গের কণ্ঠ", 
      deadline: "১৫ জুলাই, ২০২৪", 
      prize: "৩০,০০০ টাকা", 
      entries: 187,
      status: "active",
      category: "কণ্ঠ সংগীত",
      image: "/images/competitions/uttorbonger-kontho.jpg",
      description: "উত্তরবঙ্গের মেধাবী কণ্ঠশিল্পীদের জন্য বিশেষ প্রতিযোগিতা",
      rules: [
        "শুধুমাত্র উত্তরবঙ্গের বাসিন্দাদের জন্য",
        "কোনো অডিও ইফেক্ট ব্যবহার করা যাবে না",
        "লাইভ রেকর্ডিং জমা দিতে হবে"
      ],
      registrationLink: "/register"
    },
    { 
      id: 3, 
      name: "ঐতিহ্যের সুর", 
      deadline: "১ আগস্ট, ২০২৪", 
      prize: "৪৫,০০০ টাকা", 
      entries: 156,
      status: "active",
      category: "ঐতিহ্যবাহী",
      image: "/images/competitions/oitijjho-sur.jpg",
      description: "প্রাচীন ভাওয়াইয়া সুরের উপর ভিত্তি করে বিশেষ প্রতিযোগিতা",
      rules: [
        "প্রাচীন ভাওয়াইয়া সুর ব্যবহার করতে হবে",
        "গানটি ঐতিহ্যবাহী হতে হবে",
        "নতুন সুর সংযোজন করা যাবে না"
      ],
      registrationLink: "/register"
    },
    { 
      id: 4, 
      name: "তরুণ প্রতিভা অন্বেষণ", 
      deadline: "১৫ সেপ্টেম্বর, ২০২৪", 
      prize: "২৫,০০০ টাকা", 
      entries: 89,
      status: "upcoming",
      category: "যুব",
      image: "/images/competitions/torun-protiva.jpg",
      description: "১৬-২৫ বছর বয়সী তরুণদের জন্য বিশেষ প্রতিযোগিতা",
      rules: [
        "বয়স ১৬-২৫ বছর",
        "কোনো প্রফেশনাল এক্সপেরিয়েন্স নেই এমন প্রতিযোগী",
        "শিক্ষার্থীদের জন্য বিশেষ consideration"
      ],
      registrationLink: "/register"
    },
    { 
      id: 5, 
      name: "শীতকালীন ভাওয়াইয়া", 
      deadline: "৩০ নভেম্বর, ২০২৪", 
      prize: "৪০,০০০ টাকা", 
      entries: 0,
      status: "upcoming",
      category: "মৌসুমী",
      image: "/images/competitions/shit-kalin.jpg",
      description: "শীতকালীন ভাওয়াইয়া সংগীতের বিশেষ আয়োজন",
      rules: [
        "শীতকালীন ভাওয়াইয়া গান",
        "গানে শীতের আবহ থাকতে হবে",
        "ঐতিহ্যবাহী শীতের সুর ব্যবহার করতে হবে"
      ],
      registrationLink: "/register"
    },
    { 
      id: 6, 
      name: "বসন্ত উৎসব প্রতিযোগিতা", 
      deadline: "১৫ মার্চ, ২০২৪", 
      prize: "৩৫,০০০ টাকা", 
      entries: 210,
      status: "completed",
      category: "উৎসব",
      image: "/images/competitions/bosonto-utsab.jpg",
      description: "বসন্ত উৎসব উপলক্ষ্যে বিশেষ ভাওয়াইয়া প্রতিযোগিতা",
      rules: [
        "বসন্তকালীন ভাওয়াইয়া গান",
        "গানে বসন্তের আবহ থাকতে হবে",
        "উজ্জ্বল এবং প্রাণবন্ত সুর ব্যবহার করতে হবে"
      ],
      registrationLink: "/register",
      winner: "মোঃ রফিকুল ইসলাম"
    },
    { 
      id: 7, 
      name: "গ্রামীণ সুর সম্মেলন", 
      deadline: "২০ অক্টোবর, ২০২৪", 
      prize: "২০,০০০ টাকা", 
      entries: 45,
      status: "upcoming",
      category: "গ্রামীণ",
      image: "/images/competitions/grameen-sur.jpg",
      description: "গ্রাম বাংলার ঐতিহ্যবাহী সুরের বিশেষ প্রতিযোগিতা",
      rules: [
        "গ্রামীণ ভাওয়াইয়া গান",
        "স্থানীয় সুর সংরক্ষণ করতে হবে",
        "গ্রাম্য জীবন সম্পর্কিত গান"
      ],
      registrationLink: "/register"
    },
    { 
      id: 8, 
      name: "প্রেমের ভাওয়াইয়া", 
      deadline: "১৪ ফেব্রুয়ারি, ২০২৪", 
      prize: "১৫,০০০ টাকা", 
      entries: 178,
      status: "completed",
      category: "প্রেম",
      image: "/images/competitions/premer-bhawaiya.jpg",
      description: "ভালোবাসা দিবস উপলক্ষ্যে বিশেষ প্রেমের ভাওয়াইয়া প্রতিযোগিতা",
      rules: [
        "প্রেম বিষয়ক ভাওয়াইয়া গান",
        "গানে প্রেমের আবেগ ফুটে উঠতে হবে",
        "মূল্যবান সম্পর্কের উপর ভিত্তি করে গান"
      ],
      registrationLink: "/register",
      winner: "সুমাইয়া আক্তার"
    }
  ]
};