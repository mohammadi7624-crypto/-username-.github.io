// فایل تنظیمات و پیکربندی برنامه
// این فایل باید اول بارگذاری شود

// تعریف AppConfig به صورت سراسری
const AppConfig = {
    // نام‌های فارسی دسته‌ها
    categoryNames: {
        'daily_conversation': 'مکالمه روزمره',
        'nature': 'طبیعت',
        'travel': 'سفر و گردشگری',
        'culture_art': 'فرهنگ و هنر',
        'professions': 'مشاغل',
        'home_kitchen': 'خانه و آشپزخانه',
        'health_medicine': 'سلامت و پزشکی',
        'finance': 'امور مالی',
        'technology': 'تکنولوژی'
    },
    
    // تنظیمات Web Speech API
    speechConfig: {
        american: {
            lang: 'en-US',
            rate: 0.9
        },
        example: {
            lang: 'en-US',
            rate: 0.8
        },
        story: {
            lang: 'en-US',
            rate: 0.75,
            pitch: 1.0
        }
    },
    
    // پیام‌های نتیجه آزمون
    resultMessages: {
        excellent: "عالی! شما تسلط بسیار خوبی بر این لغات دارید. می‌توانید دسته بعدی را شروع کنید.",
        good: "خوب است! اما می‌توانید بهتر هم باشید. برخی لغات نیاز به تمرین بیشتر دارند.",
        average: "قابل قبول. نیاز به مطالعه و تمرین بیشتر دارید.",
        poor: "نیاز به مطالعه و تمرین بیشتر دارید. بهتر است ابتدا لغات این دسته را کامل یاد بگیرید."
    },
    
    // آستانه‌های نمره
    scoreThresholds: {
        excellent: 90,
        good: 70,
        average: 50
    },
    
    // رنگ‌های دسته‌ها
    categoryColors: {
        daily_conversation: '#38A169',
        nature: '#2F855A',
        travel: '#D69E2E',
        culture_art: '#6B46C1',
        professions: '#2B6CB0',
        home_kitchen: '#E53E3E',
        health_medicine: '#E53E3E',
        finance: '#38A169',
        technology: '#2B6CB0'
    },
    
    // ترتیب دسته‌ها
    categoryOrder: [
        'daily_conversation',
        'nature',
        'travel',
        'culture_art',
        'professions',
        'home_kitchen',
        'health_medicine',
        'finance',
        'technology'
    ],
    
    // سطح‌ها
    levelNames: {
        beginner: 'مبتدی',
        intermediate: 'متوسط',
        advanced: 'پیشرفته'
    }
};

// تعریف UserData به صورت سراسری
const UserData = {
    load() {
        try {
            return {
                learnedWords: JSON.parse(localStorage.getItem('learnedWords')) || {},
                testScores: JSON.parse(localStorage.getItem('testScores')) || {},
                testCount: JSON.parse(localStorage.getItem('testCount')) || {},
                clickCounters: JSON.parse(localStorage.getItem('clickCounters')) || {},
                completedStories: JSON.parse(localStorage.getItem('completedStories')) || {}
            };
        } catch (e) {
            console.warn('Error loading data:', e);
            return {
                learnedWords: {},
                testScores: {},
                testCount: {},
                clickCounters: {},
                completedStories: {}
            };
        }
    },
    
    save(data) {
        try {
            localStorage.setItem('learnedWords', JSON.stringify(data.learnedWords || {}));
            localStorage.setItem('testScores', JSON.stringify(data.testScores || {}));
            localStorage.setItem('testCount', JSON.stringify(data.testCount || {}));
            localStorage.setItem('clickCounters', JSON.stringify(data.clickCounters || {}));
            localStorage.setItem('completedStories', JSON.stringify(data.completedStories || {}));
        } catch (e) {
            console.warn('Error saving data:', e);
        }
    },
    
    reset() {
        try {
            localStorage.removeItem('learnedWords');
            localStorage.removeItem('testScores');
            localStorage.removeItem('testCount');
            localStorage.removeItem('clickCounters');
            localStorage.removeItem('completedStories');
        } catch (e) {
            console.warn('Error resetting data:', e);
        }
    }
};

console.log('Config loaded successfully');