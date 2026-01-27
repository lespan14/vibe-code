// Mock Data: News Items
const MOCK_NEWS = [
    {
        id: 1,
        title: {
            en: "Apple Vision Pro 2 Release Rumors Heat Up",
            ko: "애플 비전 프로 2 출시설 가열"
        },
        flag: "🇺🇸 US Market",
        timestamp: "2026-01-27T09:00:00",
        summary: {
            en: [
                "Supply chain sources hint at a lighter, cheaper model.",
                "Display technology shifted to new micro-OLED panels.",
                "Expected launch in Q4 2026 targeting mass adoption."
            ],
            ko: [
                "공급망 소식통, 더 가볍고 저렴한 모델 출시 시사.",
                "디스플레이 기술, 신형 마이크로 OLED 패널로 전환.",
                "2026년 4분기 대중화를 목표로 출시 예상."
            ]
        },
        relatedStocks: [
            { ticker: "AAPL", name: "Apple", change: 1.2, price: 185.00 },
            { ticker: "SONY", name: "Sony Group", change: 0.5, price: 92.40 }
        ]
    },
    {
        id: 2,
        title: {
            en: "Samsung Electronics Forecasts Record Chip Profits",
            ko: "삼성전자, 반도체 이익 사상 최대 전망"
        },
        flag: "🇰🇷 KR Market",
        timestamp: "2026-01-27T08:30:00",
        summary: {
            en: [
                "HBM4 memory chip demand exceeds supply for AI servers.",
                "Operating profit expected to rise 40% YoY.",
                "Foundry division narrows losses significantly."
            ],
            ko: [
                "AI 서버용 HBM4 메모리 칩 수요가 공급 초과.",
                "영업이익 전년 동기 대비 40% 증가 예상.",
                "파운드리 사업부 적자폭 대폭 축소."
            ]
        },
        relatedStocks: [
            { ticker: "005930.KS", name: "Samsung Elec", change: 2.8, price: 78500 },
            { ticker: "000660.KS", name: "SK Hynix", change: 1.5, price: 142000 }
        ]
    },
    {
        id: 3,
        title: {
            en: "Tesla CyberCab Regulatory Approval in California",
            ko: "테슬라 사이버캡, 캘리포니아 규제 승인 획득"
        },
        flag: "🇺🇸 US Market",
        timestamp: "2026-01-26T22:00:00",
        summary: {
            en: [
                "California DMV grants provisional testing license.",
                "Full Self-Driving (FSD) v13 shows 99.9% safety rate.",
                "Stock surges in after-hours trading."
            ],
            ko: [
                "캘리포니아 차량국(DMV), 임시 주행 테스트 면허 발급.",
                "완전자율주행(FSD) v13, 99.9% 안전성 입증.",
                "시간외 거래에서 주가 급등."
            ]
        },
        relatedStocks: [
            { ticker: "TSLA", name: "Tesla", change: 4.5, price: 245.20 },
            { ticker: "UBER", name: "Uber", change: -2.1, price: 68.50 }
        ]
    },
    {
        id: 4,
        title: {
            en: "Naver HyperCLOVA X Integrates with Govt Services",
            ko: "네이버 하이퍼클로바X, 정부 서비스와 연동"
        },
        flag: "🇰🇷 KR Market",
        timestamp: "2026-01-27T10:15:00",
        summary: {
            en: [
                "Korean government adopts Naver AI for public civil services.",
                "Sovereign AI strategy boosts domestic tech sector.",
                "Advertising revenue guidance raised for Q1."
            ],
            ko: [
                "정부, 대국민 민원 서비스에 네이버 AI 도입.",
                "소버린 AI 전략으로 국내 기술 섹터 부양.",
                "1분기 광고 매출 가이던스 상향 조정."
            ]
        },
        relatedStocks: [
            { ticker: "035420.KS", name: "Naver", change: 3.1, price: 215000 },
            { ticker: "035720.KS", name: "Kakao", change: 0.8, price: 54000 }
        ]
    }
];

// Mock Data: Stock Details (Dictionary for easy lookup)
const STOCK_DETAILS = {
    "AAPL": { marketCap: "2.9T", per: "28.5", sector: "Consumer Electronics", desc: { en: "Apple designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories.", ko: "애플은 스마트폰, 개인용 컴퓨터, 태블릿, 웨어러블 및 액세서리를 설계, 제조 및 판매합니다." } },
    "005930.KS": { marketCap: "450T KRW", per: "15.2", sector: "Semiconductors", desc: { en: "Samsung Electronics is a global leader in consumer electronics and the world's largest manufacturer of memory chips.", ko: "삼성전자는 소비자 가전 분야의 글로벌 리더이자 세계 최대의 메모리 칩 제조업체입니다." } },
    "TSLA": { marketCap: "800B", per: "65.4", sector: "Automotive", desc: { en: "Tesla designs, develops, manufactures, sells and leases high-performance fully electric vehicles and energy generation and storage systems.", ko: "테슬라는 고성능 완전 전기 자동차 및 에너지 생성/저장 시스템을 설계, 개발, 제조, 판매 및 임대합니다." } },
    "035420.KS": { marketCap: "35T KRW", per: "22.1", sector: "Internet Services", desc: { en: "Naver Corporation is South Korea's premier internet search engine and global ICT company.", ko: "네이버는 한국 최고의 인터넷 검색 엔진이자 글로벌 ICT 기업입니다." } },
    // Defaults for others
    "DEFAULT": { marketCap: "---", per: "---", sector: "General Market", desc: { en: "Detailed company information is currently unavailable in this demo.", ko: "이 데모에서는 상세 기업 정보를 현재 이용할 수 없습니다." } }
};


// --- App Logic ---

let currentLang = 'ko'; // Default language

const UI_TEXT = {
    'ko': {
        pageTitle: "오늘의 주요 증시 뉴스",
        pageDesc: "12시간마다 업데이트되는 핵심 뉴스와 관련 수혜주를 확인하세요.",
        summaryTitle: "🤖 AI 3줄 요약",
        affectedStocks: "관련 수혜주:",
        lastUpdated: "마지막 업데이트:",
        marketCap: "시가총액",
        per: "PER",
        sector: "섹터",
        rating: "투자의견",
        buy: "매수 (Buy)",
        companyInfo: "기업 개요"
    },
    'en': {
        pageTitle: "Today's Top Market News",
        pageDesc: "Key updates every 12 hours with affected stock analysis.",
        summaryTitle: "🤖 AI 3-Line Summary",
        affectedStocks: "Affected Stocks:",
        lastUpdated: "Last Updated:",
        marketCap: "Market Cap",
        per: "PER",
        sector: "Sector",
        rating: "Rating",
        buy: "Buy",
        companyInfo: "Company Overview"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    updateTimestamp();
    setupEventListeners();
    applyLanguage(); // Initial render
}

function updateTimestamp() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('last-updated').textContent = timeString;
}

function toggleLanguage() {
    currentLang = currentLang === 'ko' ? 'en' : 'ko';
    applyLanguage();
}

function applyLanguage() {
    // 1. Update Static UI Text
    const texts = UI_TEXT[currentLang];
    document.querySelector('.intro-text h2').textContent = texts.pageTitle;
    document.querySelector('.intro-text p').textContent = texts.pageDesc;
    
    // Update Header Text (Badges are mixed, so we handle them carefully or just simple text swap)
    document.querySelector('.update-badge').innerHTML = `${texts.lastUpdated} <span id="last-updated">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>`;

    // 2. Re-render News Grid
    renderNews();
}

function renderNews() {
    const grid = document.getElementById('news-grid');
    grid.innerHTML = ''; 

    MOCK_NEWS.forEach(news => {
        const card = createNewsCard(news);
        grid.appendChild(card);
    });
}

function createNewsCard(news) {
    const card = document.createElement('article');
    card.className = 'news-card';
    
    const texts = UI_TEXT[currentLang];
    
    // Select correct language content
    const title = news.title[currentLang];
    const summaryLines = news.summary[currentLang];

    const summaryItems = summaryLines.map(line => `<li>${line}</li>`).join('');

    const stockButtons = news.relatedStocks.map(stock => {
        const trendClass = stock.change >= 0 ? 'trend-up' : 'trend-down';
        const arrow = stock.change >= 0 ? '▲' : '▼';
        return `
            <button class="stock-btn" onclick="openStockModal('${stock.ticker}', '${stock.name}', ${stock.price}, ${stock.change})">
                <span class="stock-ticker">${stock.ticker}</span>
                <span class="${trendClass}">${arrow} ${Math.abs(stock.change)}%</span>
            </button>
        `;
    }).join('');

    card.innerHTML = `
        <div class="news-header">
            <span class="news-flag">${news.flag}</span>
            <span class="news-time">${new Date(news.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        </div>
        <h3 class="news-title">${title}</h3>
        
        <div class="summary-box">
            <span class="summary-title">${texts.summaryTitle}</span>
            <ul class="summary-list">
                ${summaryItems}
            </ul>
        </div>

        <div class="related-section">
            <span class="related-label">${texts.affectedStocks}</span>
            ${stockButtons}
        </div>
    `;

    return card;
}

window.openStockModal = function(ticker, name, price, change) {
    const modal = document.getElementById('stock-modal');
    const details = STOCK_DETAILS[ticker] || STOCK_DETAILS["DEFAULT"];
    const texts = UI_TEXT[currentLang];

    document.getElementById('modal-stock-name').textContent = name;
    document.getElementById('modal-stock-ticker').textContent = ticker;
    document.getElementById('modal-price').textContent = (ticker.includes('.KS') ? '₩' : '$') + price.toLocaleString();
    
    const changeEl = document.getElementById('modal-change');
    changeEl.textContent = (change >= 0 ? '+' : '') + change + '%';
    changeEl.className = 'price-change ' + (change >= 0 ? 'positive' : 'negative');

    document.getElementById('modal-market-cap').textContent = details.marketCap;
    document.getElementById('modal-per').textContent = details.per;
    document.getElementById('modal-sector').textContent = details.sector;
    
    // Description translation handling
    const descText = (typeof details.desc === 'object') ? details.desc[currentLang] : details.desc;
    document.getElementById('modal-desc').textContent = descText;

    // Update Modal Labels
    const labels = document.querySelectorAll('.info-item label');
    labels[0].textContent = texts.marketCap;
    labels[1].textContent = texts.per;
    labels[2].textContent = texts.sector;
    labels[3].textContent = texts.rating;
    document.querySelector('.modal-description h3').textContent = texts.companyInfo;
    document.getElementById('modal-rating').textContent = texts.buy;

    modal.classList.remove('hidden');
};

window.closeModal = function() {
    document.getElementById('stock-modal').classList.add('hidden');
};

function setupEventListeners() {
    window.onclick = function(event) {
        const modal = document.getElementById('stock-modal');
        if (event.target == modal) {
            closeModal();
        }
    }

    document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
}