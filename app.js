// فایل منطق اصلی برنامه - نسخه جامع با سطح‌بندی و داستان‌های جدید

// متغیرهای عمومی برنامه
let currentCategory = 'daily_conversation';
let learnedWords = {};
let testScores = {};
let testCount = {};
let clickCounters = {};
let completedStories = {};
let currentTest = null;
let selectedQuestionCount = 10;
let currentLevel = 'all';
let wordClickCounters = {};

// بارگذاری داده‌های کاربر
function loadUserData() {
    const data = UserData.load();
    learnedWords = data.learnedWords || {};
    testScores = data.testScores || {};
    testCount = data.testCount || {};
    clickCounters = data.clickCounters || {};
    completedStories = data.completedStories || {};
}

// ذخیره داده‌های کاربر
function saveUserData() {
    UserData.save({
        learnedWords,
        testScores,
        testCount,
        clickCounters,
        completedStories
    });
}

// بارگذاری صفحه
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - Initializing app...');
    
    // بارگذاری داده‌های کاربر
    loadUserData();
    
    // مقداردهی اولیه برنامه
    initApp();
    loadCategory(currentCategory);
    loadCategoryButtons();
    loadStories();
    
    // رویدادهای دکمه‌های دسته‌بندی
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            loadCategory(currentCategory);
            updateStories(currentCategory);
        });
    });
    
    // رویدادهای دکمه‌های اصلی
    document.getElementById('startTestBtn').addEventListener('click', showTestSetup);
    document.getElementById('resetProgressBtn').addEventListener('click', resetProgress);
    document.getElementById('showStoriesBtn').addEventListener('click', toggleStories);
    document.getElementById('closeStoriesBtn').addEventListener('click', closeStories);
    
    // رویدادهای صفحه آزمون
    document.getElementById('closeTestBtn').addEventListener('click', closeTest);
    document.getElementById('cancelTestBtn').addEventListener('click', closeTest);
    document.getElementById('startTestConfirmBtn').addEventListener('click', startTest);
    document.getElementById('nextQuestionBtn').addEventListener('click', nextQuestion);
    document.getElementById('submitTestBtn').addEventListener('click', submitTest);
    document.getElementById('retryTestBtn').addEventListener('click', retryTest);
    document.getElementById('closeResultBtn').addEventListener('click', closeTest);
    
    // رویدادهای انتخاب تعداد سوالات
    document.querySelectorAll('.count-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.count-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectedQuestionCount = parseInt(this.dataset.count);
        });
    });
    
    // رویدادهای فیلتر سطح
    const levelFilter = document.getElementById('levelFilter');
    if (levelFilter) {
        levelFilter.addEventListener('change', function() {
            currentLevel = this.value;
            filterByLevel();
        });
    }
    
    // رویدادهای داستان (تلفظ و تکمیل)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('story-play-btn') || e.target.closest('.story-play-btn')) {
            const btn = e.target.classList.contains('story-play-btn') ? e.target : e.target.closest('.story-play-btn');
            const storyId = parseInt(btn.dataset.storyId);
            playStoryAudio(storyId);
        }
        if (e.target.classList.contains('story-complete-btn') || e.target.closest('.story-complete-btn')) {
            const btn = e.target.classList.contains('story-complete-btn') ? e.target : e.target.closest('.story-complete-btn');
            const storyId = parseInt(btn.dataset.storyId);
            toggleStoryComplete(storyId);
        }
    });
    
    console.log('App initialized successfully');
});

// بارگذاری دکمه‌های دسته‌بندی
function loadCategoryButtons() {
    const container = document.querySelector('.level-buttons');
    if (!container) return;
    container.innerHTML = '';
    
    const categories = AppConfig.categoryOrder || Object.keys(categoryNames);
    
    for (const key of categories) {
        if (!categoryNames[key]) continue;
        const btn = document.createElement('button');
        btn.className = `category-btn ${key}`;
        btn.dataset.category = key;
        if (key === currentCategory) btn.classList.add('active');
        const icon = categoryIcons[key] || 'fa-book';
        btn.innerHTML = `<i class="fas ${icon}"></i> ${categoryNames[key]}`;
        container.appendChild(btn);
        
        // اضافه کردن رویداد کلیک
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            loadCategory(currentCategory);
            updateStories(currentCategory);
        });
    }
}

// نمایش صفحه تنظیمات آزمون
function showTestSetup() {
    document.getElementById('testContainer').style.display = 'flex';
    document.getElementById('testTitle').textContent = `آزمون دسته ${categoryNames[currentCategory]}`;
    document.getElementById('testSetup').style.display = 'block';
    document.getElementById('testBody').style.display = 'none';
    document.getElementById('testResult').style.display = 'none';
}

// مقداردهی اولیه برنامه
function initApp() {
    // محاسبه کل لغات
    let totalWordCount = 0;
    for (const category in vocabularyData) {
        if (vocabularyData[category]) {
            totalWordCount += vocabularyData[category].length;
        }
    }
    document.getElementById('totalWords').textContent = totalWordCount;
    
    // محاسبه لغات یادگرفته شده
    let learnedCount = 0;
    for (const category in learnedWords) {
        if (learnedWords[category]) {
            learnedCount += Object.values(learnedWords[category]).filter(val => val).length;
        }
    }
    document.getElementById('learnedWords').textContent = learnedCount;
    
    // محاسبه میانگین نمرات آزمون
    let avgScore = 0;
    let scoreCount = 0;
    for (const category in testScores) {
        if (testScores[category] > 0) {
            avgScore += testScores[category];
            scoreCount++;
        }
    }
    avgScore = scoreCount > 0 ? Math.round(avgScore / scoreCount) : 0;
    document.getElementById('testScore').textContent = avgScore;
    
    // نمایش تعداد آزمون‌های داده شده
    let totalTestCount = 0;
    for (const category in testCount) {
        totalTestCount += testCount[category] || 0;
    }
    document.getElementById('testCount').textContent = totalTestCount;
    
    updateProgressChart();
}

// به‌روزرسانی نمودار پیشرفت
function updateProgressChart() {
    const chartContainer = document.getElementById('progressChart');
    if (!chartContainer) return;
    
    chartContainer.innerHTML = '';
    
    const categories = AppConfig.categoryOrder || Object.keys(categoryNames);
    
    for (const cat of categories) {
        if (!vocabularyData[cat]) continue;
        
        const total = vocabularyData[cat].length;
        let learned = 0;
        if (learnedWords[cat]) {
            learned = Object.values(learnedWords[cat]).filter(val => val).length;
        }
        const percent = total > 0 ? Math.round((learned / total) * 100) : 0;
        
        const barContainer = document.createElement('div');
        barContainer.className = 'chart-bar-container';
        
        const label = document.createElement('div');
        label.className = 'chart-label';
        label.textContent = `${categoryNames[cat] || cat} (${percent}%)`;
        
        const barWrapper = document.createElement('div');
        barWrapper.className = 'chart-bar-wrapper';
        
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        bar.style.width = `${percent}%`;
        bar.style.backgroundColor = categoryColors[cat] || '#38A169';
        bar.textContent = `${learned}/${total}`;
        
        barWrapper.appendChild(bar);
        barContainer.appendChild(label);
        barContainer.appendChild(barWrapper);
        chartContainer.appendChild(barContainer);
    }
}

// بارگذاری لغات دسته انتخاب شده
function loadCategory(category) {
    const vocabList = document.getElementById('vocabularyList');
    const categoryTitle = document.getElementById('categoryTitle');
    
    if (!vocabList || !categoryTitle) return;
    
    if (!vocabularyData[category]) {
        vocabList.innerHTML = '<div class="no-results-msg">دسته مورد نظر یافت نشد</div>';
        return;
    }
    
    categoryTitle.textContent = `لغات دسته ${categoryNames[category] || category} (${vocabularyData[category].length} لغت)`;
    vocabList.innerHTML = '';
    
    if (!learnedWords[category]) {
        learnedWords[category] = {};
    }
    
    if (!clickCounters[category]) {
        clickCounters[category] = {};
    }
    
    vocabularyData[category].forEach((word, index) => {
        const isLearned = learnedWords[category][word.english] || false;
        
        const vocabCard = document.createElement('div');
        vocabCard.className = `vocab-card ${isLearned ? 'learned' : ''}`;
        vocabCard.id = `word-${category}-${index}`;
        vocabCard.dataset.english = word.english.toLowerCase();
        vocabCard.dataset.persian = word.persian;
        vocabCard.dataset.level = word.level || 'beginner';
        vocabCard.dataset.index = index;
        
        const levelText = {
            beginner: 'مبتدی',
            intermediate: 'متوسط',
            advanced: 'پیشرفته'
        };
        
        vocabCard.innerHTML = `
            <div class="vocab-header">
                <div>
                    <div class="vocab-word" data-word="${word.english}">${word.english} ${word.type ? `<span class="word-type">${word.type}</span>` : ''}</div>
                    ${word.phonetic ? `<div class="vocab-phonetic">/${word.phonetic}/</div>` : ''}
                </div>
                ${word.level ? `<span class="level-badge level-${word.level}">
                    ${levelText[word.level] || word.level}
                </span>` : ''}
            </div>
            <div class="vocab-meaning">${word.persian}</div>
            
            <div class="vocab-example" data-example="${word.example ? word.example.split(' - ')[0] : ''}">
                <div style="margin-bottom: 10px;">${word.example || ''}</div>
                <div style="font-size: 0.9rem; color: #666;">
                    <i class="fas fa-volume-up"></i> کلیک برای تلفظ مثال
                </div>
            </div>
        `;
        
        vocabList.appendChild(vocabCard);
    });
    
    // اعمال فیلتر سطح
    filterByLevel();
    
    // رویدادهای کلیک برای تلفظ
    document.querySelectorAll('.vocab-word').forEach(wordElement => {
        wordElement.addEventListener('click', function() {
            const word = this.dataset.word;
            const card = this.closest('.vocab-card');
            const category = card ? card.id.split('-')[1] : currentCategory;
            
            handleWordClick(category, word);
            speakWord(word, 'american');
        });
    });
    
    document.querySelectorAll('.vocab-example').forEach(exampleElement => {
        exampleElement.addEventListener('click', function() {
            const exampleText = this.dataset.example;
            if (exampleText) {
                speakSentence(exampleText);
            }
        });
    });
}

// فیلتر بر اساس سطح
function filterByLevel() {
    const cards = document.querySelectorAll('.vocab-card');
    let visibleCount = 0;
    
    cards.forEach(card => {
        const level = card.dataset.level || 'beginner';
        
        let show = true;
        if (currentLevel !== 'all' && level !== currentLevel) {
            show = false;
        }
        
        card.style.display = show ? 'block' : 'none';
        if (show) visibleCount++;
    });
    
    const vocabList = document.getElementById('vocabularyList');
    if (!vocabList) return;
    
    const existingMsg = document.querySelector('.no-results-msg');
    
    if (visibleCount === 0 && cards.length > 0) {
        if (!existingMsg) {
            const msg = document.createElement('div');
            msg.className = 'no-results-msg';
            msg.innerHTML = `
                <i class="fas fa-filter" style="font-size: 2rem; color: #94a3b8;"></i>
                <p style="font-size: 1.2rem; color: #64748b; margin-top: 10px;">هیچ لغتی با این سطح پیدا نشد</p>
            `;
            vocabList.appendChild(msg);
        }
    } else if (existingMsg) {
        existingMsg.remove();
    }
}

// هندل کلیک روی لغت
function handleWordClick(category, word) {
    if (!clickCounters[category]) {
        clickCounters[category] = {};
    }
    if (!clickCounters[category][word]) {
        clickCounters[category][word] = 0;
    }
    clickCounters[category][word]++;
    
    if (clickCounters[category][word] >= 2 && !learnedWords[category][word]) {
        learnedWords[category][word] = true;
        
        const wordIndex = vocabularyData[category] ? vocabularyData[category].findIndex(w => w.english === word) : -1;
        if (wordIndex !== -1) {
            const vocabCard = document.getElementById(`word-${category}-${wordIndex}`);
            if (vocabCard) {
                vocabCard.classList.add('learned');
            }
        }
        
        showLearningFeedback(word);
        initApp();
        saveUserData();
    }
}

// نمایش پیام بازخورد
function showLearningFeedback(word) {
    const existingFeedback = document.querySelector('.learning-feedback');
    if (existingFeedback) {
        existingFeedback.remove();
    }
    
    const feedback = document.createElement('div');
    feedback.className = 'learning-feedback show';
    feedback.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>لغت "${word}" به عنوان یادگرفته‌شده علامت‌گذاری شد!</span>
    `;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.classList.remove('show');
        setTimeout(() => {
            if (feedback.parentNode) {
                feedback.parentNode.removeChild(feedback);
            }
        }, 500);
    }, 3000);
}

// تلفظ لغات
function speakWord(word, accent) {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(word);
        const config = AppConfig.speechConfig[accent] || AppConfig.speechConfig.american;
        
        utterance.lang = config.lang || 'en-US';
        utterance.rate = config.rate || 0.9;
        utterance.volume = 1.0;
        utterance.pitch = 1.0;
        
        speechSynthesis.speak(utterance);
    } else {
        alert('مرورگر شما از قابلیت تلفظ پشتیبانی نمی‌کند.');
    }
}

// تلفظ جملات
function speakSentence(sentence) {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(sentence);
        const config = AppConfig.speechConfig.example;
        
        utterance.lang = config.lang || 'en-US';
        utterance.rate = config.rate || 0.8;
        utterance.volume = 1.0;
        utterance.pitch = 1.0;
        
        speechSynthesis.speak(utterance);
    } else {
        alert('مرورگر شما از قابلیت تلفظ پشتیبانی نمی‌کند.');
    }
}

// تلفظ داستان
function playStoryAudio(storyId) {
    const story = storiesData.find(s => s.id === storyId);
    if (!story) {
        console.warn('Story not found:', storyId);
        return;
    }
    
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(story.text);
        const config = AppConfig.speechConfig.story || { lang: 'en-US', rate: 0.75 };
        
        utterance.lang = config.lang || 'en-US';
        utterance.rate = config.rate || 0.75;
        utterance.pitch = config.pitch || 1.0;
        utterance.volume = 1.0;
        
        speechSynthesis.speak(utterance);
    } else {
        alert('مرورگر شما از قابلیت تلفظ پشتیبانی نمی‌کند.');
    }
}

// =============== بخش آزمون ===============

// شروع آزمون
function startTest() {
    const words = vocabularyData[currentCategory];
    if (!words || words.length === 0) {
        alert('هیچ لغتی برای این دسته وجود ندارد.');
        return;
    }
    
    const shuffled = [...words].sort(() => 0.5 - Math.random());
    const vocabQuestionCount = Math.min(Math.floor(selectedQuestionCount * 0.7), words.length);
    const selectedWords = shuffled.slice(0, vocabQuestionCount);
    
    const testQuestions = [];
    
    // سوالات لغوی
    selectedWords.forEach(word => {
        const wrongOptions = [];
        const otherWords = words.filter(w => w.english !== word.english);
        const shuffledOthers = [...otherWords].sort(() => 0.5 - Math.random());
        
        for (let i = 0; i < 3; i++) {
            if (shuffledOthers[i]) {
                wrongOptions.push(shuffledOthers[i].persian);
            }
        }
        
        const options = [
            { text: word.persian, correct: true },
            ...wrongOptions.map(text => ({ text, correct: false }))
        ];
        
        const shuffledOptions = options.sort(() => 0.5 - Math.random());
        
        testQuestions.push({
            type: 'vocabulary',
            english: word.english,
            persian: word.persian,
            options: shuffledOptions
        });
    });
    
    // سوالات درک مطلب از داستان‌های همین دسته
    const categoryStories = storiesData.filter(s => s.category === currentCategory);
    if (categoryStories.length > 0) {
        const shuffledStories = [...categoryStories].sort(() => 0.5 - Math.random());
        const storyQuestionsCount = Math.min(
            Math.floor(selectedQuestionCount * 0.3),
            shuffledStories.length * 2
        );
        
        let storyQuestionsAdded = 0;
        for (const story of shuffledStories) {
            if (storyQuestionsAdded >= storyQuestionsCount) break;
            
            const storyQuestions = [
                {
                    question: `متن داستان "${story.title}" درباره چیست؟`,
                    options: [
                        { text: story.text.split('.')[0].substring(0, 40) + '...', correct: true },
                        { text: 'داستان درباره یک ماجراجویی هیجان‌انگیز است', correct: false },
                        { text: 'داستان درباره یک سفر طولانی است', correct: false }
                    ]
                },
                {
                    question: `کدام کلمه کلیدی در داستان "${story.title}" وجود دارد؟`,
                    options: story.keyWords.slice(0, 3).map((kw, idx) => ({ 
                        text: kw, 
                        correct: idx === 0 
                    }))
                }
            ];
            
            for (const sq of storyQuestions) {
                if (storyQuestionsAdded >= storyQuestionsCount) break;
                testQuestions.push({
                    type: 'comprehension',
                    storyTitle: story.title,
                    question: sq.question,
                    options: sq.options.sort(() => 0.5 - Math.random())
                });
                storyQuestionsAdded++;
            }
        }
    }
    
    // اگر سوال کافی نیست، از سوالات لغوی بیشتر اضافه کن
    while (testQuestions.length < Math.min(selectedQuestionCount, 5)) {
        const extraWords = words.filter(w => !selectedWords.includes(w));
        if (extraWords.length === 0) break;
        const word = extraWords[Math.floor(Math.random() * extraWords.length)];
        const wrongOptions = [];
        const otherWords = words.filter(w => w.english !== word.english);
        const shuffledOthers = [...otherWords].sort(() => 0.5 - Math.random());
        
        for (let i = 0; i < 3; i++) {
            if (shuffledOthers[i]) {
                wrongOptions.push(shuffledOthers[i].persian);
            }
        }
        
        const options = [
            { text: word.persian, correct: true },
            ...wrongOptions.map(text => ({ text, correct: false }))
        ];
        
        testQuestions.push({
            type: 'vocabulary',
            english: word.english,
            persian: word.persian,
            options: options.sort(() => 0.5 - Math.random())
        });
    }
    
    // مرتب کردن سوالات
    const finalQuestions = testQuestions.sort(() => 0.5 - Math.random());
    
    currentTest = {
        category: currentCategory,
        questions: finalQuestions,
        currentQuestion: 0,
        userAnswers: new Array(finalQuestions.length).fill(null),
        inProgress: true,
        startTime: Date.now(),
        questionCount: finalQuestions.length
    };
    
    document.getElementById('testSetup').style.display = 'none';
    document.getElementById('testBody').style.display = 'block';
    document.getElementById('testResult').style.display = 'none';
    
    showQuestion(0);
}

// نمایش سوال آزمون
function showQuestion(questionIndex) {
    if (!currentTest || !currentTest.questions || questionIndex >= currentTest.questions.length) return;
    
    const question = currentTest.questions[questionIndex];
    
    if (question.type === 'vocabulary') {
        document.getElementById('testQuestion').textContent = 
            `معنی لغت "${question.english}" چیست؟`;
    } else {
        document.getElementById('testQuestion').textContent = question.question;
    }
    
    const optionsContainer = document.getElementById('testOptions');
    if (!optionsContainer) return;
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (currentTest.userAnswers[questionIndex] === index) {
            optionElement.classList.add('selected');
        }
        
        optionElement.innerHTML = `
            <div class="option-number">${index + 1}</div>
            <div>${option.text}</div>
        `;
        
        optionElement.dataset.index = index;
        
        optionElement.addEventListener('click', function() {
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            this.classList.add('selected');
            currentTest.userAnswers[questionIndex] = parseInt(this.dataset.index);
            
            if (questionIndex === currentTest.questions.length - 1) {
                document.getElementById('submitTestBtn').style.display = 'inline-block';
                document.getElementById('nextQuestionBtn').style.display = 'none';
            }
        });
        
        optionsContainer.appendChild(optionElement);
    });
    
    document.getElementById('testProgress').textContent = 
        `سوال ${questionIndex + 1} از ${currentTest.questionCount}`;
    
    if (questionIndex === currentTest.questions.length - 1) {
        document.getElementById('submitTestBtn').style.display = 'inline-block';
        document.getElementById('nextQuestionBtn').style.display = 'none';
    } else {
        document.getElementById('submitTestBtn').style.display = 'none';
        document.getElementById('nextQuestionBtn').style.display = 'inline-block';
    }
}

// سوال بعدی
function nextQuestion() {
    if (currentTest && currentTest.currentQuestion < currentTest.questions.length - 1) {
        currentTest.currentQuestion++;
        showQuestion(currentTest.currentQuestion);
    }
}

// ارسال آزمون
function submitTest() {
    if (!currentTest) return;
    
    let correctAnswers = 0;
    let vocabularyCorrect = 0;
    let comprehensionCorrect = 0;
    let vocabularyTotal = 0;
    let comprehensionTotal = 0;
    
    currentTest.questions.forEach((question, index) => {
        const userAnswerIndex = currentTest.userAnswers[index];
        if (userAnswerIndex !== null && question.options[userAnswerIndex] && question.options[userAnswerIndex].correct) {
            correctAnswers++;
            if (question.type === 'vocabulary') {
                vocabularyCorrect++;
            } else {
                comprehensionCorrect++;
            }
        }
        if (question.type === 'vocabulary') {
            vocabularyTotal++;
        } else {
            comprehensionTotal++;
        }
    });
    
    const totalQuestions = currentTest.questions.length;
    const score = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    const wrongAnswers = totalQuestions - correctAnswers;
    const timeSpent = Math.round((Date.now() - currentTest.startTime) / 1000);
    
    if (!testScores[currentTest.category]) {
        testScores[currentTest.category] = 0;
    }
    testScores[currentTest.category] = Math.max(testScores[currentTest.category], score);
    
    if (!testCount[currentTest.category]) {
        testCount[currentTest.category] = 0;
    }
    testCount[currentTest.category]++;
    
    saveUserData();
    
    document.getElementById('testBody').style.display = 'none';
    document.getElementById('testResult').style.display = 'block';
    
    document.getElementById('finalScore').textContent = score;
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('wrongAnswers').textContent = wrongAnswers;
    document.getElementById('timeSpent').textContent = timeSpent;
    
    // نمایش جزئیات بیشتر
    const detailsDiv = document.getElementById('resultDetails');
    if (detailsDiv) {
        detailsDiv.innerHTML = `
            <div class="result-detail-box">
                <div class="result-detail-value">${vocabularyTotal > 0 ? Math.round((vocabularyCorrect/vocabularyTotal)*100) : 0}%</div>
                <div class="result-detail-label">سوالات لغوی</div>
            </div>
            <div class="result-detail-box">
                <div class="result-detail-value">${comprehensionTotal > 0 ? Math.round((comprehensionCorrect/comprehensionTotal)*100) : 0}%</div>
                <div class="result-detail-label">سوالات درک مطلب</div>
            </div>
            <div class="result-detail-box">
                <div class="result-detail-value">${timeSpent}</div>
                <div class="result-detail-label">ثانیه زمان</div>
            </div>
        `;
    }
    
    let message = '';
    if (score >= AppConfig.scoreThresholds.excellent) {
        message = AppConfig.resultMessages.excellent;
    } else if (score >= AppConfig.scoreThresholds.good) {
        message = AppConfig.resultMessages.good;
    } else if (score >= AppConfig.scoreThresholds.average) {
        message = AppConfig.resultMessages.average;
    } else {
        message = AppConfig.resultMessages.poor;
    }
    
    document.getElementById('resultMessage').textContent = message;
    
    initApp();
    currentTest.inProgress = false;
}

// آزمون مجدد
function retryTest() {
    closeTest();
    setTimeout(() => {
        showTestSetup();
    }, 300);
}

// بستن صفحه آزمون
function closeTest() {
    document.getElementById('testContainer').style.display = 'none';
}

// بازنشانی پیشرفت
function resetProgress() {
    if (confirm('آیا مطمئن هستید که می‌خواهید تمام پیشرفت خود را بازنشانی کنید؟ این عمل غیرقابل بازگشت است.')) {
        UserData.reset();
        loadUserData();
        
        loadCategory(currentCategory);
        initApp();
        updateStories(currentCategory);
        
        alert('پیشرفت شما بازنشانی شد.');
    }
}

// =============== بخش داستان‌ها ===============

// بارگذاری داستان‌ها
function loadStories() {
    const container = document.getElementById('storiesList');
    if (!container) return;
    container.innerHTML = '';
    
    const filteredStories = storiesData.filter(story => story.category === currentCategory);
    
    if (filteredStories.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #94a3b8;">
                <i class="fas fa-book-open" style="font-size: 3rem; margin-bottom: 15px; display: block;"></i>
                <p>هنوز داستانی برای این دسته وجود ندارد.</p>
            </div>
        `;
        return;
    }
    
    filteredStories.forEach(story => {
        createStoryCard(story, container);
    });
}

// به‌روزرسانی داستان‌ها بر اساس دسته
function updateStories(category) {
    const container = document.getElementById('storiesList');
    if (!container) return;
    container.innerHTML = '';
    
    const filteredStories = storiesData.filter(story => story.category === category);
    
    if (filteredStories.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #94a3b8;">
                <i class="fas fa-book-open" style="font-size: 3rem; margin-bottom: 15px; display: block;"></i>
                <p>هنوز داستانی برای این دسته وجود ندارد.</p>
            </div>
        `;
        return;
    }
    
    filteredStories.forEach(story => {
        createStoryCard(story, container);
    });
}

// ایجاد کارت داستان
function createStoryCard(story, container) {
    const card = document.createElement('div');
    card.className = 'story-card';
    card.dataset.storyId = story.id;
    
    const levelColors = {
        'beginner': '#38A169',
        'intermediate': '#D69E2E',
        'advanced': '#E53E3E'
    };
    
    const levelText = {
        'beginner': 'مبتدی',
        'intermediate': 'متوسط',
        'advanced': 'پیشرفته'
    };
    
    const isCompleted = completedStories[story.id] || false;
    
    card.innerHTML = `
        <div class="story-header">
            <div>
                <h3>${story.title}</h3>
                <span style="font-size: 0.9rem; color: #666; direction: ltr; display: block;">${story.title_en}</span>
            </div>
            <div style="display: flex; gap: 10px; align-items: center;">
                <span class="story-level" style="background: ${levelColors[story.level] || '#38A169'}; color: white; padding: 4px 14px; border-radius: 20px; font-size: 0.85rem;">
                    ${levelText[story.level] || story.level}
                </span>
                <button class="story-play-btn" data-story-id="${story.id}" style="background: #2B6CB0; color: white; border: none; border-radius: 50%; width: 40px; height: 40px; cursor: pointer; font-size: 1.2rem; transition: all 0.3s;">
                    <i class="fas fa-volume-up"></i>
                </button>
                ${isCompleted ? '<span style="background: #38A169; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem;"><i class="fas fa-check"></i> خوانده شده</span>' : ''}
            </div>
        </div>
        <div class="story-body">
            <div class="story-text">
                <p><strong>متن انگلیسی:</strong></p>
                <p>${story.text}</p>
            </div>
            <div class="story-translation">
                <p><strong>ترجمه فارسی:</strong></p>
                <p>${story.translation}</p>
            </div>
            <div class="story-keywords">
                <strong>لغات کلیدی:</strong>
                ${story.keyWords.map(word => `<span class="keyword-tag">${word}</span>`).join('')}
            </div>
            <div style="margin-top: 15px; display: flex; gap: 10px;">
                <button class="story-complete-btn" data-story-id="${story.id}" style="padding: 8px 20px; border: none; border-radius: 10px; cursor: pointer; background: ${isCompleted ? '#38A169' : '#E2E8F0'}; color: ${isCompleted ? 'white' : '#4A5568'}; font-weight: 600; transition: all 0.3s;">
                    ${isCompleted ? '✓ خوانده شده' : 'علامت به عنوان خوانده شده'}
                </button>
            </div>
        </div>
    `;
    
    container.appendChild(card);
}

// علامت‌گذاری داستان به عنوان خوانده شده
function toggleStoryComplete(storyId) {
    if (completedStories[storyId]) {
        delete completedStories[storyId];
    } else {
        completedStories[storyId] = true;
    }
    saveUserData();
    updateStories(currentCategory);
}

// نمایش/مخفی کردن بخش داستان‌ها
function toggleStories() {
    const container = document.getElementById('storiesContainer');
    const btn = document.getElementById('showStoriesBtn');
    
    if (!container || !btn) return;
    
    if (container.style.display === 'none' || !container.style.display || container.style.display === '') {
        container.style.display = 'block';
        btn.innerHTML = '<i class="fas fa-times"></i> بستن داستان‌ها';
        loadStories();
    } else {
        container.style.display = 'none';
        btn.innerHTML = '<i class="fas fa-book-open"></i> داستان‌های آموزشی';
    }
}

// بستن داستان‌ها
function closeStories() {
    const container = document.getElementById('storiesContainer');
    const btn = document.getElementById('showStoriesBtn');
    if (container) container.style.display = 'none';
    if (btn) btn.innerHTML = '<i class="fas fa-book-open"></i> داستان‌های آموزشی';
}

console.log('App.js loaded successfully');