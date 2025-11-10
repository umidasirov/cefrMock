// data.js
import a1 from '../../../assets/ad/3.jpg';
import a2 from '../../../assets/ad/1.png';
import a3 from '../../../assets/ad/3.jpg';
import a4 from '../../../assets/ad/4.jpg';
import a5 from '../../../assets/ad/5.jpg';
import a6 from '../../../assets/ad/6.jpg';
import a7 from '../../../assets/ad/7.jpg';
import a8 from '../../../assets/ad/8.jpg';
import a9 from '../../../assets/ad/9.jpg';

export const readingTestData = [
  {
    id: "reading-part1-1",
    title: "Part 1 — Fill in the Gaps",
    level: "A2",
    type: "fill-the-gaps",
    language: "en",
    passage: `Last weekend, my friends and I went to the (1) ______ to spend the day together. 
    The weather was (2) ______, so we decided to have a picnic near the lake. 
    We brought some sandwiches, drinks, and a big (3) ______ to sit on. 
    After lunch, we played football and took a lot of (4) ______. 
    It was a really (5) ______ day, and we all had fun.`,
    segments: [
      "Last weekend, my friends and I went to the ",
      { gap: 1 },
      " to spend the day together. The weather was ",
      { gap: 2 },
      ", so we decided to have a picnic near the lake. We brought some sandwiches, drinks, and a big ",
      { gap: 3 },
      " to sit on. After lunch, we played football and took a lot of ",
      { gap: 4 },
      ". It was a really ",
      { gap: 5 },
      " day, and we all had fun."
    ],
    options: [
      { key: "A", word: "photos" },
      { key: "B", word: "park" },
      { key: "C", word: "sunny" },
      { key: "D", word: "blanket" },
      { key: "E", word: "fun" },
      { key: "F", word: "shop" }
    ],
    answers: {
      1: "B",
      2: "C",
      3: "D",
      4: "A",
      5: "E"
    },
    extra: "F",
    instructions: "Choose the correct word (A–F) for each gap. One option is extra and should not be used."
  },

  {
    id: "reading-part2-ads",
    title: "Part 2 — Matching Advertisements",
    level: "A2",
    type: "matching",
    language: "en",
    instructions: "Read the descriptions (1–5) and match them with the correct advertisement (A–J). There are five extra advertisements you do not need to use.",
    ads: [
      {
        key: "A",
        image: "/images/ads/bike.jpg",
        text: "City Bikes — Buy one, get one half price! Great for students. Visit www.citybikes.com."
      },
      {
        key: "B",
        image: a1,
        text: "RiverPool — Open every day from 6 am to 9 pm. Family tickets available."
      },
      {
        key: "C",
        image: a2,
        text: "Sunny Café — Try our new breakfast menu! Free Wi-Fi and takeaway coffee."
      },
      {
        key: "D",
        image: a3,
        text: "BookLand — Buy 3 books and get the 4th free! Huge selection of novels and comics."
      },
      {
        key: "E",
        image: a4,
        text: "Pet Care Center — Professional grooming for dogs and cats. Call us at 555-1234."
      },
      {
        key: "F",
        image: a5,
        text: "Music4U — Guitar lessons for all ages. First lesson free!"
      },
      {
        key: "G",
        image: a6,
        text: "Green Park — A quiet place for walking, jogging, and relaxing near the lake."
      },
      {
        key: "H",
        image: a7,
        text: "FloraShop — Beautiful flowers for all occasions. Free delivery in the city."
      },
      {
        key: "I",
        image: a8,
        text: "Star Cinema — Watch the latest movies with friends! Student discounts every Monday."
      },
      {
        key: "J",
        image: "../../../assets/ad/9.jpg",
        text: "FitZone Gym — New members get a free personal training session."
      }
    ],
    questions: [
      {
        id: 1,
        text: "Alice wants to buy a bicycle but doesn’t want to spend too much money.",
        answer: "A"
      },
      {
        id: 2,
        text: "Tom enjoys swimming early in the morning before work.",
        answer: "B"
      },
      {
        id: 3,
        text: "Mary needs a place where she can drink coffee and use her laptop for free.",
        answer: "C"
      },
      {
        id: 4,
        text: "Ben wants to learn to play the guitar but doesn’t want to pay for the first class.",
        answer: "F"
      },
      {
        id: 5,
        text: "Anna wants to buy some flowers for her friend’s birthday and have them delivered.",
        answer: "H"
      }
    ]
  },
  {
    id: "reading-part3-paragraphs",
    title: "Part 3 — Match Headings",
    level: "B1",
    type: "matching",
    language: "en",
    instructions: "Read the paragraphs (1–6) carefully and match each with the correct heading (A–H). Two headings are extra and should not be used.",

    paragraphs: [
      {
        id: 1,
        text: `Online learning has grown tremendously over the past decade, driven by advances in technology and the widespread availability of the internet. Students now have access to a variety of online platforms offering courses in nearly every subject imaginable, from computer science to art history. This form of education allows learners to study at their own pace, revisit difficult topics, and access resources that may not be available in their local schools. In addition, online learning enables people to balance education with work or family responsibilities, making it a flexible alternative to traditional classrooms. Many universities now offer full degree programs online, and millions of learners worldwide participate in Massive Open Online Courses (MOOCs). Online learning also encourages self-discipline and motivation, as students must manage their own schedules and progress. Overall, it has transformed the landscape of education and made learning more accessible than ever before.`
      },
      {
        id: 2,
        text: `Social media has fundamentally changed the way people communicate, share ideas, and connect with others across the globe. Platforms like Facebook, Instagram, and Twitter allow users to post updates, share photos, and engage with content instantly. While these platforms have positive aspects, including networking and community building, they have also raised serious concerns. Issues such as online harassment, spreading of false information, and privacy violations have become prominent, prompting discussions about digital safety and regulation. Many parents and educators worry about the effects of social media on young people, including decreased attention spans and exposure to harmful content. Social media companies are under increasing pressure to implement stricter policies and moderation to protect users. Despite the challenges, millions continue to use these platforms daily, showing their powerful influence on modern communication.`
      },
      {
        id: 3,
        text: `Renewable energy is becoming increasingly important as the world faces the urgent challenge of climate change. Solar panels, wind turbines, and hydroelectric systems provide clean alternatives to fossil fuels, reducing greenhouse gas emissions and environmental damage. Governments and private companies are investing heavily in research and infrastructure to make renewable energy more efficient and affordable. This investment also stimulates economic growth by creating new jobs in the energy sector. Moreover, renewable energy supports long-term sustainability and decreases dependence on imported fuels. Communities are encouraged to adopt solar or wind solutions for homes and businesses. The shift towards renewable energy is essential to meeting international climate goals and protecting the planet for future generations.`
      },
      {
        id: 4,
        text: `Artificial intelligence (AI) is revolutionizing various industries by enabling machines to perform tasks that previously required human intelligence. AI algorithms can analyze vast amounts of data quickly and accurately, improving decision-making in sectors such as healthcare, finance, and logistics. Moreover, AI-powered tools are increasingly used in customer service, automating repetitive tasks and enhancing user experience. Robotics and automation in manufacturing have also improved productivity and safety. While the benefits are significant, ethical considerations, such as potential job displacement and biased decision-making, must also be addressed. Experts emphasize the need for AI transparency and responsible use. AI continues to evolve rapidly, promising new opportunities and challenges for society in the years to come.`
      },
      {
        id: 5,
        text: `Traveling to different countries offers unique opportunities for personal growth and cultural understanding. Experiencing diverse traditions, languages, and cuisines broadens one's perspective and fosters greater empathy for others. Travel also encourages adaptability, problem-solving, and independence, as visitors navigate unfamiliar environments. Tourists often learn new skills, such as budgeting, planning, and communication in foreign languages. Beyond personal enrichment, international travel can contribute to economic development and cultural exchange. Visiting museums, historical sites, and natural wonders adds educational value to travel experiences. Overall, travel provides both personal satisfaction and social benefits that extend beyond the journey itself.`
      },
      {
        id: 6,
        text: `Mental health has gained increased attention in recent years due to rising awareness of its impact on individuals and society. Conditions such as anxiety, depression, and stress-related disorders affect millions of people worldwide. Efforts to promote mental well-being include workplace programs, educational campaigns, and accessible therapy services. By reducing stigma and providing support networks, these initiatives aim to improve overall quality of life, encourage early intervention, and help individuals lead productive and fulfilling lives. Mental health professionals emphasize the importance of self-care, mindfulness, and community support. Research also highlights the connection between physical health and mental well-being. Society as a whole benefits when mental health is prioritized and adequately addressed.`
      }
    ],

    headings: [
      { key: "A", text: "The Impact of Artificial Intelligence" },
      { key: "B", text: "Benefits of Traveling Abroad" },
      { key: "C", text: "Growth of Online Learning" },
      { key: "D", text: "Mental Health Awareness" },
      { key: "E", text: "Renewable Energy Initiatives" },
      { key: "F", text: "Social Media Challenges" },
      { key: "G", text: "Historical Events Overview" }, // extra
      { key: "H", text: "Urban Development Issues" }     // extra
    ],

    answers: {
      1: "C",
      2: "F",
      3: "E",
      4: "A",
      5: "B",
      6: "D"
    }
  },

  {
    id: "reading-part4-comprehension",
    title: "Part 4 — Reading Comprehension",
    type: "comprehension",
    level: "B2",
    language: "en",
    passage: `The solar energy industry has experienced remarkable growth over the last decade. 
It has become one of the most promising sectors in renewable energy due to significant technological advancements. 
Solar panels, which were once expensive and accessible only to large companies, are now increasingly affordable for households and small businesses. 
Many governments around the world have introduced various incentives and subsidies to encourage people to adopt solar energy, making it a more viable option for the general public. 

Furthermore, solar energy offers a sustainable and environmentally friendly alternative to fossil fuels. 
As awareness about climate change grows, more individuals and organizations are choosing solar power to reduce their carbon footprint. 
Solar farms are being established in both urban and rural areas, and innovations in panel efficiency are allowing more energy to be captured even in less sunny regions. 
This expansion is also creating numerous jobs in installation, maintenance, and research sectors, contributing to local economies.

However, the adoption of solar energy is not without challenges. 
The efficiency of solar panels largely depends on weather conditions, and cloudy or rainy days can reduce the energy output significantly. 
Consequently, reliable energy storage systems are essential to ensure a constant supply of electricity when sunlight is insufficient. 
Moreover, the production of solar panels requires materials like silicon and rare metals, which must be recycled responsibly to avoid environmental damage. 
Companies are investing in recycling technologies and sustainable sourcing practices to address these concerns. 

Despite these challenges, the solar energy sector is expected to continue growing rapidly. 
Technological advancements, combined with increasing public awareness and favorable policies, are likely to drive the industry forward. 
As solar panels become more efficient and cheaper to produce, their adoption will expand globally. 
The shift towards renewable energy is considered crucial for mitigating climate change and securing a sustainable future for the next generations.`,
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "What is one reason solar energy is growing rapidly?",
        options: ["It is very cheap to produce", "Government incentives", "It requires no storage", "It works in all weather"],
        correct: "B"
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Who can afford solar panels more easily now?",
        options: ["Only large companies", "Only governments", "Households and businesses", "Only schools"],
        correct: "C"
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "What is essential due to solar energy's dependency on weather?",
        options: ["More panels", "Energy storage systems", "Solar farms only", "Reducing sunlight"],
        correct: "B"
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "What must be done responsibly in solar panel production?",
        options: ["Reduce production", "Recycle materials", "Sell abroad", "Use more panels"],
        correct: "B"
      },
      {
        id: 5,
        type: "true-false-notgiven",
        question: "Solar energy does not require any storage systems.",
        correct: "False"
      },
      {
        id: 6,
        type: "true-false-notgiven",
        question: "Solar panels are becoming more affordable.",
        correct: "True"
      },
      {
        id: 7,
        type: "true-false-notgiven",
        question: "Public awareness has no effect on the growth of solar energy.",
        correct: "Not Given"
      },
      {
        id: 8,
        type: "true-false-notgiven",
        question: "Weather conditions affect the efficiency of solar energy.",
        correct: "True"
      },
      {
        id: 9,
        type: "true-false-notgiven",
        question: "The solar industry is expected to decline in the coming years.",
        correct: "Not Given"
      }
    ]
  },
  {
    id: "reading-part5-advanced",
    title: "Part 5 — Advanced Reading and Fill in the Gaps",
    level: "C1",
    type: "mixed",
    language: "en",
    passage: `Artificial Intelligence (AI) has rapidly transformed modern industries, revolutionizing the way we work, communicate, and solve problems. 
  From healthcare to finance, AI systems are assisting humans in making faster and more accurate decisions. 
  In medicine, AI algorithms analyze large datasets to help detect diseases earlier and recommend effective treatment plans. 
  Financial institutions use AI for fraud detection, risk assessment, and portfolio management, increasing efficiency and reducing human error.

  Moreover, AI-powered automation is reshaping the job market. 
  Repetitive tasks in manufacturing, logistics, and customer service are increasingly handled by machines and intelligent software. 
  While this increases productivity, it also raises concerns about workforce displacement and the need for reskilling employees. 
  Governments and organizations are investing in AI education and training programs to prepare the workforce for future demands.

  Ethical considerations are central to AI development. 
  Bias in algorithms, privacy concerns, and the potential misuse of AI in surveillance or warfare pose serious challenges. 
  Developers, policymakers, and researchers are collaborating to create guidelines and regulations that ensure AI benefits society without causing harm.

  Despite these challenges, the potential of AI is enormous. 
  Innovations in natural language processing, computer vision, and machine learning enable applications previously thought impossible. 
  From self-driving cars to intelligent virtual assistants, AI continues to expand its influence across all aspects of life, offering unprecedented opportunities for progress and efficiency.

  AI also contributes to scientific research. 
  Machine learning models analyze complex data to accelerate discoveries in fields such as genetics, climate science, and physics. 
  By processing vast amounts of information quickly, AI enables researchers to uncover patterns and insights that would be difficult or impossible for humans to detect manually.`,

    fillGaps: [
      { id: 1, text: "AI systems in medicine help detect ______ earlier and suggest treatment plans." },
      { id: 2, text: "Financial institutions use AI for fraud detection, risk assessment, and ______ management." },
      { id: 3, text: "Repetitive tasks in manufacturing and logistics are increasingly handled by ______ and intelligent software." },
      { id: 4, text: "Developers, policymakers, and researchers create guidelines to ensure AI benefits society without causing ______." }
    ],

    multipleChoice: [
      {
        id: 5,
        question: "Which area does AI contribute to besides industry?",
        options: ["Cooking", "Scientific research", "Sports", "Art"],
        correct: 1
      },
      {
        id: 6,
        question: "What is a main concern regarding AI automation?",
        options: ["Faster travel", "Workforce displacement", "Better weather", "More games"],
        correct: 1
      }
    ],

    correctAnswers: {
      1: "diseases",
      2: "portfolio",
      3: "machines",
      4: "harm",
      5: "B",
      6: "B"
    }
  }

]; // bu umumiy readingTestData yopilishi

