// --- 六年級數學測驗題目資料（每個單元 10 題） ---
const questionsByUnit = {
    "分數的除法 ➗": [
        {
            id: 1,
            question: "1. 一張色紙 $3/4$ 張，平分成 6 份，每份是多少張？",
            answers: [
                { text: "1/8 張", correct: true },
                { text: "1/4 張", correct: false },
                { text: "2 張", correct: false },
                { text: "3/24 張", correct: false }
            ]
        },
        {
            id: 2,
            question: "2. 小美跑 1200 公尺用了 $1/5$ 小時。她每小時跑幾公里？",
            answers: [
                { text: "6 公里", correct: true },
                { text: "0.24 公里", correct: false },
                { text: "1.2 公里", correct: false },
                { text: "120 公里", correct: false }
            ]
        },
        {
            id: 3,
            question: "3. 一袋米重 $9/10$ 公斤，平均分給 3 位同學，每位同學分到多少公斤？",
            answers: [
                { text: "3/10 公斤", correct: true },
                { text: "1/3 公斤", correct: false },
                { text: "9/30 公斤", correct: false },
                { text: "9/5 公斤", correct: false }
            ]
        },
        {
            id: 4,
            question: "4. 一個長方形面積是 $15/16$ 平方公尺，長是 $3/4$ 公尺，請問寬是多少公尺？",
            answers: [
                { text: "5/4 公尺", correct: true },
                { text: "5/16 公尺", correct: false },
                { text: "4/5 公尺", correct: false },
                { text: "3/16 公尺", correct: false } 
            ]
        },
        {
            id: 5,
            question: "5. 一桶果汁 2 公升，每 $2/3$ 公升倒一杯，可以倒滿幾杯？",
            answers: [
                { text: "3 杯", correct: true },
                { text: "1 又 1/3 杯", correct: false },
                { text: "2 杯", correct: false },
                { text: "6 杯", correct: false }
            ]
        },
        // 新增題目 6-10
        {
            id: 6,
            question: "6. $4 \\div 1/2$ 的答案是多少？",
            answers: [
                { text: "8", correct: true },
                { text: "2", correct: false },
                { text: "1/8", correct: false },
                { text: "1/2", correct: false }
            ]
        },
        {
            id: 7,
            question: "7. 一條繩子長 $5/6$ 公尺，每 $1/6$ 公尺剪成一段，可以剪成幾段？",
            answers: [
                { text: "5 段", correct: true },
                { text: "6 段", correct: false },
                { text: "1/5 段", correct: false },
                { text: "30 段", correct: false }
            ]
        },
        {
            id: 8,
            question: "8. $\\frac{2}{3} \\div \\frac{5}{6}$ 的答案是多少？",
            answers: [
                { text: "4/5", correct: true },
                { text: "5/9", correct: false },
                { text: "20/18", correct: false },
                { text: "12/15", correct: false }
            ]
        },
        {
            id: 9,
            question: "9. 跑 15 公里花了 $3/4$ 小時，平均 1 小時跑多少公里？",
            answers: [
                { text: "20 公里", correct: true },
                { text: "11.25 公里", correct: false },
                { text: "18 公里", correct: false },
                { text: "5 公里", correct: false }
            ]
        },
        {
            id: 10,
            question: "10. $1 \\frac{1}{2} \\div \\frac{3}{8}$ 的答案是多少？",
            answers: [
                { text: "4", correct: true }, // (3/2) * (8/3) = 4
                { text: "9/16", correct: false },
                { text: "3", correct: false },
                { text: "12/16", correct: false }
            ]
        }
    ],
    "速率 🚀": [
        {
            id: 1,
            question: "1. 小華用 3 小時走了 15 公里，請問他的時速是多少？",
            answers: [
                { text: "時速 5 公里", correct: true },
                { text: "時速 18 公里", correct: false },
                { text: "時速 45 公里", correct: false },
                { text: "時速 12 公里", correct: false }
            ]
        },
        {
            id: 2,
            question: "2. 小明跑百米花了 10 秒，請問他的秒速是多少公尺？",
            answers: [
                { text: "秒速 10 公尺", correct: true },
                { text: "秒速 1 公尺", correct: false },
                { text: "秒速 50 公尺", correct: false },
                { text: "秒速 1000 公尺", correct: false }
            ]
        },
        {
            id: 3,
            question: "3. 聲音的速度是每秒 340 公尺，請問 2 秒可以傳播多遠？",
            answers: [
                { text: "680 公尺", correct: true },
                { text: "170 公尺", correct: false },
                { text: "342 公尺", correct: false },
                { text: "338 公尺", correct: false }
            ]
        },
        {
            id: 4,
            question: "4. 烏龜的時速是 0.1 公里，請問牠走 1 公里需要多少小時？",
            answers: [
                { text: "10 小時", correct: true },
                { text: "1 小時", correct: false },
                { text: "0.1 小時", correct: false },
                { text: "100 小時", correct: false }
            ]
        },
        {
            id: 5,
            question: "5. 一輛汽車的分速是 500 公尺，請問它的時速是多少公里？",
            answers: [
                { text: "時速 30 公里", correct: true }, // 500 * 60 = 30000m = 30km
                { text: "時速 50 公里", correct: false },
                { text: "時速 500 公里", correct: false },
                { text: "時速 300 公里", correct: false }
            ]
        },
        // 新增題目 6-10
        {
            id: 6,
            question: "6. 時速 72 公里等於秒速多少公尺？",
            answers: [
                { text: "秒速 20 公尺", correct: true }, // 72000m / 3600s = 20m/s
                { text: "秒速 10 公尺", correct: false },
                { text: "秒速 72 公尺", correct: false },
                { text: "秒速 0.02 公尺", correct: false }
            ]
        },
        {
            id: 7,
            question: "7. 甲地到乙地距離 600 公尺，小明用分速 100 公尺的速度走，需要多少分鐘？",
            answers: [
                { text: "6 分鐘", correct: true },
                { text: "60 分鐘", correct: false },
                { text: "1/6 分鐘", correct: false },
                { text: "10 分鐘", correct: false }
            ]
        },
        {
            id: 8,
            question: "8. 飛機的速度是時速 800 公里，請問 30 分鐘可以飛行多遠？",
            answers: [
                { text: "400 公里", correct: true }, // 800 * 0.5 = 400
                { text: "800 公里", correct: false },
                { text: "1600 公里", correct: false },
                { text: "24000 公里", correct: false }
            ]
        },
        {
            id: 9,
            question: "9. 秒速 5 公尺等於時速多少公里？",
            answers: [
                { text: "時速 18 公里", correct: true }, // 5 * 3600 / 1000 = 18
                { text: "時速 5 公里", correct: false },
                { text: "時速 300 公里", correct: false },
                { text: "時速 3600 公里", correct: false }
            ]
        },
        {
            id: 10,
            question: "10. 距離除以時間等於什麼？",
            answers: [
                { text: "速率", correct: true },
                { text: "時間", correct: false },
                { text: "距離", correct: false },
                { text: "面積", correct: false }
            ]
        }
    ],
    "圓面積 ⭕": [
        {
            id: 1,
            question: "1. 一個半徑 10 公分的圓，它的圓面積大約是多少平方公分？（圓周率用 3.14）",
            image: { type: 'circle', radius: 10 },
            answers: [
                { text: "314 平方公分", correct: true }, 
                { text: "62.8 平方公分", correct: false }, 
                { text: "31.4 平方公分", correct: false },
                { text: "100 平方公分", correct: false }
            ]
        },
        {
            id: 2,
            question: "2. 一個直徑 20 公尺的圓形廣場，它的圓面積是多少平方公尺？（圓周率用 3.14）",
            image: { type: 'circle', diameter: 20 },
            answers: [
                { text: "314 平方公尺", correct: true }, // 半徑 R=10
                { text: "100 平方公尺", correct: false },
                { text: "62.8 平方公尺", correct: false },
                { text: "1256 平方公尺", correct: false }
            ]
        },
        {
            id: 3,
            question: "3. 一個半徑 2 公尺的圓，它的四分之一圓面積是多少平方公尺？（圓周率用 3.14）",
            image: { type: 'circle-sector', radius: 2, fraction: "1/4" }, 
            answers: [
                { text: "3.14 平方公尺", correct: true }, // (3.14 * 2 * 2) / 4 = 3.14
                { text: "12.56 平方公尺", correct: false },
                { text: "6.28 平方公尺", correct: false },
                { text: "4 平方公尺", correct: false }
            ]
        },
        {
            id: 4,
            question: "4. 圓周長是 31.4 公分，請問它的圓面積是多少平方公分？（圓周率用 3.14）",
            image: null,
            answers: [
                { text: "78.5 平方公分", correct: true }, // R=5. A=3.14*25 = 78.5
                { text: "31.4 平方公分", correct: false },
                { text: "100 平方公分", correct: false },
                { text: "15.7 平方公分", correct: false }
            ]
        },
        {
            id: 5,
            question: "5. 一個圓的半徑變成原來的 2 倍，它的面積會變成原來的幾倍？",
            answers: [
                { text: "4 倍", correct: true }, 
                { text: "2 倍", correct: false },
                { text: "8 倍", correct: false },
                { text: "16 倍", correct: false }
            ]
        },
        // 新增題目 6-10
        {
            id: 6,
            question: "6. 一個半圓的直徑是 10 公分，它的面積是多少？（圓周率用 3.14）",
            answers: [
                { text: "39.25 平方公分", correct: true }, // (3.14 * 5 * 5) / 2 = 39.25
                { text: "78.5 平方公分", correct: false },
                { text: "314 平方公分", correct: false },
                { text: "15.7 平方公分", correct: false }
            ]
        },
        {
            id: 7,
            question: "7. 已知圓面積是 28.26 平方公尺，請問它的半徑是多少公尺？（圓周率用 3.14）",
            answers: [
                { text: "3 公尺", correct: true }, // 28.26 / 3.14 = 9, 9 = 3*3
                { text: "6 公尺", correct: false },
                { text: "9 公尺", correct: false },
                { text: "1.5 公尺", correct: false }
            ]
        },
        {
            id: 8,
            question: "8. 一個四分之一圓的半徑是 4 公分，它的面積是多少？（圓周率用 3.14）",
            answers: [
                { text: "12.56 平方公分", correct: true }, // (3.14 * 4 * 4) / 4 = 12.56
                { text: "50.24 平方公分", correct: false },
                { text: "25.12 平方公分", correct: false },
                { text: "6.28 平方公分", correct: false }
            ]
        },
        {
            id: 9,
            question: "9. 圓面積的計算公式是什麼？",
            answers: [
                { text: "半徑 × 半徑 × 圓周率", correct: true },
                { text: "直徑 × 圓周率", correct: false },
                { text: "半徑 × 圓周率", correct: false },
                { text: "長 × 寬", correct: false }
            ]
        },
        {
            id: 10,
            question: "10. 如果一個圓的圓周長是 62.8 公尺，它的圓面積是多少？（圓周率用 3.14）",
            answers: [
                { text: "314 平方公尺", correct: true }, // 62.8 = 2*3.14*R -> R=10. A=3.14*10*10=314
                { text: "100 平方公尺", correct: false },
                { text: "125.6 平方公尺", correct: false },
                { text: "628 平方公尺", correct: false }
            ]
        }
    ]
};

// --- 取得 HTML 頁面上的元素 ---
const header = document.querySelector('header');
const scoreDisplay = document.getElementById('score');
const quizBox = document.getElementById('quiz-box');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const imageArea = document.getElementById('image-area');
const feedbackMessage = document.getElementById('feedback-message');
const homePage = document.getElementById('home-page');
const unitList = document.getElementById('unit-list');

// --- 遊戲狀態變數 ---
let currentUnit = null; 
let currentUnitQuestions = []; 
let currentQuestionIndex = 0;
let unitScore = 0; 
let totalScore = 0; 
let isAnswerLocked = false;

// --- 初始化和首頁邏輯 ---

/**
 * 遊戲開始：顯示首頁目錄
 */
function startQuiz() {
    // 隱藏測驗相關元素，顯示首頁
    quizBox.classList.add('hidden');
    feedbackMessage.classList.add('hidden');
    header.classList.add('hidden'); 
    homePage.classList.remove('hidden');
    unitList.innerHTML = '';
    
    // 建立單元按鈕
    Object.keys(questionsByUnit).forEach(unitName => {
        const button = document.createElement('button');
        button.textContent = unitName;
        button.classList.add('btn', 'unit-btn');
        button.dataset.unit = unitName;
        button.addEventListener('click', () => loadUnit(unitName));
        unitList.appendChild(button);
    });
}

/**
 * 載入並開始一個單元的測驗
 * @param {string} unitName - 點擊的單元名稱
 */
function loadUnit(unitName) {
    currentUnit = unitName;
    currentUnitQuestions = questionsByUnit[unitName];
    currentQuestionIndex = 0;
    unitScore = 0; 
    
    homePage.classList.add('hidden'); 
    quizBox.classList.remove('hidden'); 
    header.classList.remove('hidden'); 
    
    showQuestion();
}

/**
 * 顯示當前的題目和選項
 */
function showQuestion() {
    isAnswerLocked = false;
    answerButtons.innerHTML = '';
    imageArea.innerHTML = ''; 
    feedbackMessage.classList.add('hidden');

    const currentQuestion = currentUnitQuestions[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;
    const totalQuestions = currentUnitQuestions.length;
    
    // 替換分數表示法和數學符號 (如 $\\div$)
    let formattedQuestion = currentQuestion.question
        .replace(/\$(\d+)\/(\d+)\$/g, (match, num, den) => `${num}/${den}`)
        .replace(/\\div/g, '÷')
        .replace(/\\frac{(\d+)}{(\d+)}/g, (match, num, den) => `${num}/${den}`); 

    questionText.innerHTML = `
        <p class="unit-title">【${currentUnit}】 (${questionNumber}/${totalQuestions})</p>
        ${formattedQuestion}
    `;

    // 處理圖形顯示
    if (currentQuestion.image && currentQuestion.image.type.includes('circle')) {
        const imgInfo = currentQuestion.image;
        let label = '';
        let radius = imgInfo.radius || (imgInfo.diameter / 2);

        if (imgInfo.radius) {
            label = `半徑 ${imgInfo.radius}`;
        } else if (imgInfo.diameter) {
            label = `直徑 ${imgInfo.diameter}`;
        }
        if (imgInfo.fraction) {
            label += ` (${imgInfo.fraction} 圓)`;
        } else {
             label += ` 公分/公尺`;
        }

        const circleDiv = document.createElement('div');
        circleDiv.classList.add('circle-drawing');
        // 為了讓圖形不要太大，限制最大尺寸
        let size = Math.min(radius * 10, 150); 
        circleDiv.style.width = `${size}px`; 
        circleDiv.style.height = `${size}px`;
        circleDiv.innerHTML = `<p style="font-size:14px; margin:0;">${label}</p>`;
        imageArea.appendChild(circleDiv);
    }

    // 顯示答案按鈕
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        // 替換答案中的分數表示法
        button.textContent = answer.text.replace(/\$(\d+)\/(\d+)\$/g, (match, num, den) => `${num}/${den}`);
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

/**
 * 處理玩家點擊答案的事件
 * @param {Event} e - 點擊事件
 */
function selectAnswer(e) {
    if (isAnswerLocked) return; 
    isAnswerLocked = true;

    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';

    // 答對一題加 10 分 (10 題 * 10 分 = 100 分)
    const points = 10; 

    // 顯示對錯提示和 Emoji
    if (isCorrect) {
        selectedButton.classList.add('correct');
        unitScore += points; 
        totalScore += points;
        feedbackMessage.innerHTML = '✨ 答對了！你真是太棒了！🥳'; 
        feedbackMessage.style.backgroundColor = '#d4edda';
        feedbackMessage.style.color = '#155724';
    } else {
        selectedButton.classList.add('wrong');
        feedbackMessage.innerHTML = '😭 答錯了！沒關係，再想一想！💪'; 
        feedbackMessage.style.backgroundColor = '#f8d7da';
        feedbackMessage.style.color = '#721c24';

        // 顯示正確答案
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === 'true') {
                button.classList.add('correct');
            }
        });
    }

    scoreDisplay.textContent = totalScore;
    feedbackMessage.classList.remove('hidden');
    
    // 延遲 1.5 秒後處理下一題/結束
    setTimeout(() => {
        handleNextStep();
    }, 1500); 
}

/**
 * 處理跳轉到下一題或結束單元
 */
function handleNextStep() {
    currentQuestionIndex++;
    
    // 如果是單元的最後一題 (第 10 題)
    if (currentQuestionIndex >= currentUnitQuestions.length) {
        endUnit();
    } else {
        // 繼續下一題
        showQuestion();
    }
}

/**
 * 單元結束時的處理
 */
function endUnit() {
    answerButtons.innerHTML = '';
    questionText.innerHTML = `
        <p class="unit-title">【${currentUnit}】單元挑戰結束！</p>
        <p style="font-size:24px; color: #1e90ff;">你這個單元得了 ${unitScore} 分！</p>
    `;
    
    imageArea.innerHTML = '';
    feedbackMessage.classList.add('hidden'); 

    // 顯示「回到首頁」按鈕
    const homeButton = document.createElement('button');
    homeButton.textContent = '🏠 回到單元目錄 (累積總分：' + totalScore + ' 分)';
    homeButton.classList.add('btn', 'home-btn');
    // 讓按鈕佔滿兩欄
    homeButton.style.gridColumn = 'span 2'; 
    homeButton.addEventListener('click', startQuiz);
    answerButtons.appendChild(homeButton);
}

// 遊戲啟動
startQuiz();
