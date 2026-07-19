// فایل داده‌های لغات - لغت‌نامه جامع انگلیسی به فارسی
// این فایل باید بعد از config.js بارگذاری شود

// تعریف vocabularyData به صورت سراسری
const vocabularyData = {};

// دسته 1: مکالمه روزمره
vocabularyData.daily_conversation = [
    {
        english: "Hello",
        persian: "سلام",
        phonetic: "həˈloʊ",
        type: "حرف ندا",
        level: "beginner",
        example: "Hello, how are you today? - سلام، امروز چطوری؟"
    },
    {
        english: "Goodbye",
        persian: "خداحافظ",
        phonetic: "ɡʊdˈbaɪ",
        type: "حرف ندا",
        level: "beginner",
        example: "Goodbye, see you tomorrow! - خداحافظ، فردا می‌بینمت!"
    },
    {
        english: "Thank you",
        persian: "متشکرم",
        phonetic: "θæŋk juː",
        type: "عبارت",
        level: "beginner",
        example: "Thank you for your help. - متشکرم برای کمکت."
    },
    {
        english: "Sorry",
        persian: "متاسفم",
        phonetic: "ˈsɑːri",
        type: "حرف ندا",
        level: "beginner",
        example: "I'm sorry for being late. - متاسفم که دیر کردم."
    },
    {
        english: "Please",
        persian: "لطفاً",
        phonetic: "pliːz",
        type: "قید",
        level: "beginner",
        example: "Please sit down. - لطفاً بنشین."
    },
    {
        english: "Friend",
        persian: "دوست",
        phonetic: "frend",
        type: "اسم",
        level: "beginner",
        example: "She is my best friend. - او بهترین دوست من است."
    },
    {
        english: "Family",
        persian: "خانواده",
        phonetic: "ˈfæməli",
        type: "اسم",
        level: "beginner",
        example: "I love my family. - من خانواده‌ام را دوست دارم."
    },
    {
        english: "Morning",
        persian: "صبح",
        phonetic: "ˈmɔːrnɪŋ",
        type: "اسم",
        level: "beginner",
        example: "Good morning, everyone! - صبح بخیر همه!"
    },
    {
        english: "Evening",
        persian: "عصر",
        phonetic: "ˈiːvnɪŋ",
        type: "اسم",
        level: "beginner",
        example: "Good evening, how are you? - عصر بخیر، چطوری؟"
    },
    {
        english: "Night",
        persian: "شب",
        phonetic: "naɪt",
        type: "اسم",
        level: "beginner",
        example: "Good night, sleep well. - شب بخیر، خوب بخواب."
    },
    {
        english: "Today",
        persian: "امروز",
        phonetic: "təˈdeɪ",
        type: "قید",
        level: "beginner",
        example: "What are you doing today? - امروز چکار می‌کنی؟"
    },
    {
        english: "Tomorrow",
        persian: "فردا",
        phonetic: "təˈmɑːroʊ",
        type: "قید",
        level: "beginner",
        example: "See you tomorrow. - فردا می‌بینمت."
    },
    {
        english: "Yesterday",
        persian: "دیروز",
        phonetic: "ˈjestərdeɪ",
        type: "قید",
        level: "beginner",
        example: "Yesterday was a good day. - دیروز روز خوبی بود."
    },
    {
        english: "Weather",
        persian: "آب و هوا",
        phonetic: "ˈweðər",
        type: "اسم",
        level: "beginner",
        example: "The weather is nice today. - امروز آب و هوا خوب است."
    },
    {
        english: "Happy",
        persian: "خوشحال",
        phonetic: "ˈhæpi",
        type: "صفت",
        level: "beginner",
        example: "I feel happy today. - امروز احساس خوشحالی می‌کنم."
    },
    {
        english: "Beautiful",
        persian: "زیبا",
        phonetic: "ˈbjuːtɪfl",
        type: "صفت",
        level: "intermediate",
        example: "You are beautiful. - تو زیبایی."
    },
    {
        english: "Conversation",
        persian: "مکالمه",
        phonetic: "ˌkɑːnvərˈseɪʃn",
        type: "اسم",
        level: "intermediate",
        example: "We had a nice conversation. - ما مکالمه خوبی داشتیم."
    },
    {
        english: "Discuss",
        persian: "بحث کردن",
        phonetic: "dɪˈskʌs",
        type: "فعل",
        level: "intermediate",
        example: "Let's discuss this matter. - بیایید درباره این موضوع بحث کنیم."
    }
];

// دسته 2: طبیعت
vocabularyData.nature = [
    {
        english: "Tree",
        persian: "درخت",
        phonetic: "triː",
        type: "اسم",
        level: "beginner",
        example: "The tree is tall. - درخت بلند است."
    },
    {
        english: "Flower",
        persian: "گل",
        phonetic: "ˈflaʊər",
        type: "اسم",
        level: "beginner",
        example: "The flower is beautiful. - گل زیبا است."
    },
    {
        english: "Forest",
        persian: "جنگل",
        phonetic: "ˈfɔːrɪst",
        type: "اسم",
        level: "beginner",
        example: "We walked through the forest. - ما از جنگل عبور کردیم."
    },
    {
        english: "River",
        persian: "رودخانه",
        phonetic: "ˈrɪvər",
        type: "اسم",
        level: "beginner",
        example: "The river flows through the city. - رودخانه از شهر عبور می‌کند."
    },
    {
        english: "Mountain",
        persian: "کوه",
        phonetic: "ˈmaʊntən",
        type: "اسم",
        level: "beginner",
        example: "We climbed the mountain. - ما از کوه بالا رفتیم."
    },
    {
        english: "Ocean",
        persian: "اقیانوس",
        phonetic: "ˈoʊʃn",
        type: "اسم",
        level: "intermediate",
        example: "The ocean is vast. - اقیانوس وسیع است."
    },
    {
        english: "Sun",
        persian: "خورشید",
        phonetic: "sʌn",
        type: "اسم",
        level: "beginner",
        example: "The sun is shining. - خورشید می‌تابد."
    },
    {
        english: "Moon",
        persian: "ماه",
        phonetic: "muːn",
        type: "اسم",
        level: "beginner",
        example: "The moon is bright tonight. - امشب ماه روشن است."
    },
    {
        english: "Rain",
        persian: "باران",
        phonetic: "reɪn",
        type: "اسم",
        level: "beginner",
        example: "It's raining outside. - بیرون باران می‌بارد."
    },
    {
        english: "Snow",
        persian: "برف",
        phonetic: "snoʊ",
        type: "اسم",
        level: "beginner",
        example: "It snowed last night. - دیشب برف بارید."
    },
    {
        english: "Wind",
        persian: "باد",
        phonetic: "wɪnd",
        type: "اسم",
        level: "beginner",
        example: "The wind is strong today. - امروز باد شدید است."
    },
    {
        english: "Garden",
        persian: "باغ",
        phonetic: "ˈɡɑːrdn",
        type: "اسم",
        level: "beginner",
        example: "They have a beautiful garden. - آنها یک باغ زیبا دارند."
    },
    {
        english: "Bird",
        persian: "پرنده",
        phonetic: "bɜːrd",
        type: "اسم",
        level: "beginner",
        example: "Birds are singing. - پرنده‌ها آواز می‌خوانند."
    },
    {
        english: "Nature",
        persian: "طبیعت",
        phonetic: "ˈneɪtʃər",
        type: "اسم",
        level: "intermediate",
        example: "I love nature. - من طبیعت را دوست دارم."
    },
    {
        english: "Environment",
        persian: "محیط زیست",
        phonetic: "ɪnˈvaɪrənmənt",
        type: "اسم",
        level: "advanced",
        example: "We must protect the environment. - ما باید از محیط زیست محافظت کنیم."
    }
];

// دسته 3: سفر و گردشگری
vocabularyData.travel = [
    {
        english: "Travel",
        persian: "سفر",
        phonetic: "ˈtrævl",
        type: "اسم/فعل",
        level: "beginner",
        example: "I love to travel. - من عاشق سفر هستم."
    },
    {
        english: "Airport",
        persian: "فرودگاه",
        phonetic: "ˈerpɔːrt",
        type: "اسم",
        level: "beginner",
        example: "We arrived at the airport. - ما به فرودگاه رسیدیم."
    },
    {
        english: "Hotel",
        persian: "هتل",
        phonetic: "hoʊˈtel",
        type: "اسم",
        level: "beginner",
        example: "We stayed at a nice hotel. - ما در یک هتل خوب اقامت کردیم."
    },
    {
        english: "Passport",
        persian: "گذرنامه",
        phonetic: "ˈpæspɔːrt",
        type: "اسم",
        level: "intermediate",
        example: "Don't forget your passport. - گذرنامه‌ات را فراموش نکن."
    },
    {
        english: "Ticket",
        persian: "بلیط",
        phonetic: "ˈtɪkɪt",
        type: "اسم",
        level: "beginner",
        example: "Buy your ticket online. - بلیطت را آنلاین بخر."
    },
    {
        english: "Journey",
        persian: "سفر (طولانی)",
        phonetic: "ˈdʒɜːrni",
        type: "اسم",
        level: "intermediate",
        example: "The journey was long. - سفر طولانی بود."
    },
    {
        english: "Tourist",
        persian: "گردشگر",
        phonetic: "ˈtʊrɪst",
        type: "اسم",
        level: "beginner",
        example: "The city is full of tourists. - شهر پر از گردشگر است."
    },
    {
        english: "Beach",
        persian: "ساحل",
        phonetic: "biːtʃ",
        type: "اسم",
        level: "beginner",
        example: "Let's go to the beach. - بریم ساحل."
    },
    {
        english: "Adventure",
        persian: "ماجراجویی",
        phonetic: "ədˈventʃər",
        type: "اسم",
        level: "intermediate",
        example: "Travel is an adventure. - سفر یک ماجراجویی است."
    },
    {
        english: "Souvenir",
        persian: "سوغاتی",
        phonetic: "ˌsuːvəˈnɪr",
        type: "اسم",
        level: "intermediate",
        example: "Buy a souvenir. - یک سوغاتی بخر."
    }
];

// دسته 4: فرهنگ و هنر
vocabularyData.culture_art = [
    {
        english: "Art",
        persian: "هنر",
        phonetic: "ɑːrt",
        type: "اسم",
        level: "beginner",
        example: "I love art. - من هنر را دوست دارم."
    },
    {
        english: "Music",
        persian: "موسیقی",
        phonetic: "ˈmjuːzɪk",
        type: "اسم",
        level: "beginner",
        example: "Music makes me happy. - موسیقی من را خوشحال می‌کند."
    },
    {
        english: "Painting",
        persian: "نقاشی",
        phonetic: "ˈpeɪntɪŋ",
        type: "اسم",
        level: "intermediate",
        example: "She is painting a picture. - او در حال نقاشی یک تصویر است."
    },
    {
        english: "Cinema",
        persian: "سینما",
        phonetic: "ˈsɪnəmə",
        type: "اسم",
        level: "beginner",
        example: "Let's go to the cinema. - بریم سینما."
    },
    {
        english: "Theater",
        persian: "تئاتر",
        phonetic: "ˈθiːətər",
        type: "اسم",
        level: "intermediate",
        example: "We went to the theater. - ما به تئاتر رفتیم."
    },
    {
        english: "Poem",
        persian: "شعر",
        phonetic: "ˈpoʊəm",
        type: "اسم",
        level: "beginner",
        example: "She wrote a poem. - او یک شعر نوشت."
    },
    {
        english: "Poet",
        persian: "شاعر",
        phonetic: "ˈpoʊət",
        type: "اسم",
        level: "beginner",
        example: "Rumi is a great poet. - مولانا شاعر بزرگی است."
    },
    {
        english: "Novel",
        persian: "رمان",
        phonetic: "ˈnɑːvl",
        type: "اسم",
        level: "intermediate",
        example: "I'm reading a novel. - دارم یک رمان می‌خوانم."
    },
    {
        english: "Photography",
        persian: "عکاسی",
        phonetic: "fəˈtɑːɡrəfi",
        type: "اسم",
        level: "intermediate",
        example: "Photography is my hobby. - عکاسی سرگرمی من است."
    },
    {
        english: "Museum",
        persian: "موزه",
        phonetic: "mjuːˈziːəm",
        type: "اسم",
        level: "beginner",
        example: "We visited the museum. - ما از موزه بازدید کردیم."
    },
    {
        english: "Culture",
        persian: "فرهنگ",
        phonetic: "ˈkʌltʃər",
        type: "اسم",
        level: "intermediate",
        example: "Our culture is rich. - فرهنگ ما غنی است."
    },
    {
        english: "Masterpiece",
        persian: "شاهکار",
        phonetic: "ˈmæstərpiːs",
        type: "اسم",
        level: "advanced",
        example: "This is a masterpiece. - این یک شاهکار است."
    }
];

// دسته 5: مشاغل
vocabularyData.professions = [
    {
        english: "Doctor",
        persian: "دکتر",
        phonetic: "ˈdɑːktər",
        type: "اسم",
        level: "beginner",
        example: "She is a doctor. - او یک دکتر است."
    },
    {
        english: "Teacher",
        persian: "معلم",
        phonetic: "ˈtiːtʃər",
        type: "اسم",
        level: "beginner",
        example: "He is a teacher. - او یک معلم است."
    },
    {
        english: "Engineer",
        persian: "مهندس",
        phonetic: "ˌendʒɪˈnɪr",
        type: "اسم",
        level: "intermediate",
        example: "My father is an engineer. - پدر من مهندس است."
    },
    {
        english: "Nurse",
        persian: "پرستار",
        phonetic: "nɜːrs",
        type: "اسم",
        level: "beginner",
        example: "She works as a nurse. - او به عنوان پرستار کار می‌کند."
    },
    {
        english: "Chef",
        persian: "آشپز (سرآشپز)",
        phonetic: "ʃef",
        type: "اسم",
        level: "intermediate",
        example: "He is a famous chef. - او یک سرآشپز معروف است."
    },
    {
        english: "Artist",
        persian: "هنرمند",
        phonetic: "ˈɑːrtɪst",
        type: "اسم",
        level: "beginner",
        example: "She is an artist. - او یک هنرمند است."
    },
    {
        english: "Musician",
        persian: "نوازنده",
        phonetic: "mjuːˈzɪʃn",
        type: "اسم",
        level: "intermediate",
        example: "He is a musician. - او یک نوازنده است."
    },
    {
        english: "Businessman",
        persian: "تاجر",
        phonetic: "ˈbɪznəsmæn",
        type: "اسم",
        level: "intermediate",
        example: "My uncle is a businessman. - عموی من تاجر است."
    }
];

// دسته 6: خانه و آشپزخانه
vocabularyData.home_kitchen = [
    {
        english: "Home",
        persian: "خانه",
        phonetic: "hoʊm",
        type: "اسم",
        level: "beginner",
        example: "I'm going home. - دارم به خانه می‌روم."
    },
    {
        english: "Room",
        persian: "اتاق",
        phonetic: "ruːm",
        type: "اسم",
        level: "beginner",
        example: "This is my room. - این اتاق من است."
    },
    {
        english: "Kitchen",
        persian: "آشپزخانه",
        phonetic: "ˈkɪtʃɪn",
        type: "اسم",
        level: "beginner",
        example: "I'm in the kitchen. - من در آشپزخانه هستم."
    },
    {
        english: "Table",
        persian: "میز",
        phonetic: "ˈteɪbl",
        type: "اسم",
        level: "beginner",
        example: "The book is on the table. - کتاب روی میز است."
    },
    {
        english: "Chair",
        persian: "صندلی",
        phonetic: "tʃer",
        type: "اسم",
        level: "beginner",
        example: "Sit on the chair. - روی صندلی بنشین."
    },
    {
        english: "Bed",
        persian: "تخت",
        phonetic: "bed",
        type: "اسم",
        level: "beginner",
        example: "I sleep in my bed. - من روی تختم می‌خوابم."
    },
    {
        english: "Window",
        persian: "پنجره",
        phonetic: "ˈwɪndoʊ",
        type: "اسم",
        level: "beginner",
        example: "Open the window. - پنجره را باز کن."
    },
    {
        english: "Door",
        persian: "در",
        phonetic: "dɔːr",
        type: "اسم",
        level: "beginner",
        example: "Close the door. - در را ببند."
    },
    {
        english: "Cooking",
        persian: "آشپزی",
        phonetic: "ˈkʊkɪŋ",
        type: "اسم",
        level: "intermediate",
        example: "I enjoy cooking. - من از آشپزی لذت می‌برم."
    },
    {
        english: "Furniture",
        persian: "مبلمان",
        phonetic: "ˈfɜːrnɪtʃər",
        type: "اسم",
        level: "intermediate",
        example: "We bought new furniture. - ما مبلمان جدید خریدیم."
    }
];

// دسته 7: سلامت و پزشکی
vocabularyData.health_medicine = [
    {
        english: "Health",
        persian: "سلامتی",
        phonetic: "helθ",
        type: "اسم",
        level: "beginner",
        example: "Health is important. - سلامتی مهم است."
    },
    {
        english: "Medicine",
        persian: "دارو",
        phonetic: "ˈmedɪsn",
        type: "اسم",
        level: "intermediate",
        example: "Take your medicine. - داروهایت را مصرف کن."
    },
    {
        english: "Hospital",
        persian: "بیمارستان",
        phonetic: "ˈhɑːspɪtl",
        type: "اسم",
        level: "beginner",
        example: "She works at the hospital. - او در بیمارستان کار می‌کند."
    },
    {
        english: "Exercise",
        persian: "تمرین ورزشی",
        phonetic: "ˈeksərsaɪz",
        type: "اسم/فعل",
        level: "intermediate",
        example: "Exercise every day. - هر روز ورزش کن."
    },
    {
        english: "Headache",
        persian: "سردرد",
        phonetic: "ˈhedeɪk",
        type: "اسم",
        level: "intermediate",
        example: "I have a headache. - من سردرد دارم."
    },
    {
        english: "Pain",
        persian: "درد",
        phonetic: "peɪn",
        type: "اسم",
        level: "beginner",
        example: "I feel pain. - من درد احساس می‌کنم."
    },
    {
        english: "Sleep",
        persian: "خواب",
        phonetic: "sliːp",
        type: "اسم/فعل",
        level: "beginner",
        example: "I need sleep. - به خواب نیاز دارم."
    },
    {
        english: "Treatment",
        persian: "درمان",
        phonetic: "ˈtriːtmənt",
        type: "اسم",
        level: "advanced",
        example: "The treatment is working. - درمان در حال نتیجه دادن است."
    }
];

// دسته 8: امور مالی
vocabularyData.finance = [
    {
        english: "Money",
        persian: "پول",
        phonetic: "ˈmʌni",
        type: "اسم",
        level: "beginner",
        example: "I need money. - به پول نیاز دارم."
    },
    {
        english: "Bank",
        persian: "بانک",
        phonetic: "bæŋk",
        type: "اسم",
        level: "beginner",
        example: "I go to the bank. - من به بانک می‌روم."
    },
    {
        english: "Price",
        persian: "قیمت",
        phonetic: "praɪs",
        type: "اسم",
        level: "beginner",
        example: "The price is high. - قیمت بالا است."
    },
    {
        english: "Buy",
        persian: "خریدن",
        phonetic: "baɪ",
        type: "فعل",
        level: "beginner",
        example: "I want to buy a car. - من می‌خواهم ماشین بخرم."
    },
    {
        english: "Cheap",
        persian: "ارزان",
        phonetic: "tʃiːp",
        type: "صفت",
        level: "beginner",
        example: "This is cheap. - این ارزان است."
    },
    {
        english: "Expensive",
        persian: "گران",
        phonetic: "ɪkˈspensɪv",
        type: "صفت",
        level: "intermediate",
        example: "That is expensive. - آن گران است."
    },
    {
        english: "Account",
        persian: "حساب",
        phonetic: "əˈkaʊnt",
        type: "اسم",
        level: "intermediate",
        example: "I have a bank account. - من یک حساب بانکی دارم."
    },
    {
        english: "Salary",
        persian: "حقوق",
        phonetic: "ˈsæləri",
        type: "اسم",
        level: "intermediate",
        example: "I get my salary. - من حقوقم را دریافت می‌کنم."
    },
    {
        english: "Investment",
        persian: "سرمایه‌گذاری",
        phonetic: "ɪnˈvestmənt",
        type: "اسم",
        level: "advanced",
        example: "Investment is risky. - سرمایه‌گذاری ریسک دارد."
    }
];

// دسته 9: تکنولوژی
vocabularyData.technology = [
    {
        english: "Computer",
        persian: "کامپیوتر",
        phonetic: "kəmˈpjuːtər",
        type: "اسم",
        level: "beginner",
        example: "I work on my computer. - من روی کامپیوترم کار می‌کنم."
    },
    {
        english: "Smartphone",
        persian: "تلفن هوشمند",
        phonetic: "ˈsmɑːrtfoʊn",
        type: "اسم",
        level: "intermediate",
        example: "Everyone has a smartphone. - الان همه تلفن هوشمند دارند."
    },
    {
        english: "Internet",
        persian: "اینترنت",
        phonetic: "ˈɪntərnet",
        type: "اسم",
        level: "beginner",
        example: "The internet is fast. - اینترنت سریع است."
    },
    {
        english: "Website",
        persian: "وب‌سایت",
        phonetic: "ˈwebsaɪt",
        type: "اسم",
        level: "beginner",
        example: "This website is useful. - این وب‌سایت مفید است."
    },
    {
        english: "Email",
        persian: "ایمیل",
        phonetic: "ˈiːmeɪl",
        type: "اسم",
        level: "beginner",
        example: "Send me an email. - به من ایمیل بفرست."
    },
    {
        english: "Password",
        persian: "رمز عبور",
        phonetic: "ˈpæswɜːrd",
        type: "اسم",
        level: "intermediate",
        example: "Enter your password. - رمز عبورت را وارد کن."
    },
    {
        english: "Download",
        persian: "دانلود کردن",
        phonetic: "ˌdaʊnˈloʊd",
        type: "فعل",
        level: "intermediate",
        example: "Download the file. - فایل را دانلود کن."
    },
    {
        english: "Software",
        persian: "نرم‌افزار",
        phonetic: "ˈsɔːftwer",
        type: "اسم",
        level: "intermediate",
        example: "Install the software. - نرم‌افزار را نصب کن."
    },
    {
        english: "Application",
        persian: "برنامه کاربردی",
        phonetic: "ˌæplɪˈkeɪʃn",
        type: "اسم",
        level: "intermediate",
        example: "Open the application. - برنامه را باز کن."
    },
    {
        english: "Artificial Intelligence",
        persian: "هوش مصنوعی",
        phonetic: "ˌɑːrtɪfɪʃl ɪnˈtelɪdʒəns",
        type: "اسم",
        level: "advanced",
        example: "AI is changing the world. - هوش مصنوعی جهان را تغییر می‌دهد."
    },
    {
        english: "Robot",
        persian: "ربات",
        phonetic: "ˈroʊbɑːt",
        type: "اسم",
        level: "beginner",
        example: "Robots can do many tasks. - ربات‌ها می‌توانند کارهای زیادی انجام دهند."
    },
    {
        english: "Security",
        persian: "امنیت",
        phonetic: "sɪˈkjʊrəti",
        type: "اسم",
        level: "intermediate",
        example: "Security is important. - امنیت مهم است."
    },
    {
        english: "Network",
        persian: "شبکه",
        phonetic: "ˈnetwɜːrk",
        type: "اسم",
        level: "intermediate",
        example: "The network is down. - شبکه قطع است."
    }
];

// تعریف متغیرهای کمکی
const categoryNames = AppConfig.categoryNames;
const categoryColors = AppConfig.categoryColors;
const categoryIcons = {
    daily_conversation: "fa-comments",
    nature: "fa-tree",
    travel: "fa-plane",
    culture_art: "fa-palette",
    professions: "fa-briefcase",
    home_kitchen: "fa-home",
    health_medicine: "fa-heartbeat",
    finance: "fa-coins",
    technology: "fa-microchip"
};

console.log('Words loaded successfully');
console.log('Categories:', Object.keys(vocabularyData));