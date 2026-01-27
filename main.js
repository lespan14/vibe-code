// Mock Data Generation
const MOCK_NEWS = [];
const COMPANIES = [
    { name: "Apple", ticker: "AAPL", market: "🇺🇸 US Market" },
    { name: "Samsung Elec", ticker: "005930.KS", market: "🇰🇷 KR Market" },
    { name: "Tesla", ticker: "TSLA", market: "🇺🇸 US Market" },
    { name: "Naver", ticker: "035420.KS", market: "🇰🇷 KR Market" },
    { name: "Nvidia", ticker: "NVDA", market: "🇺🇸 US Market" },
    { name: "SK Hynix", ticker: "000660.KS", market: "🇰🇷 KR Market" },
    { name: "Microsoft", ticker: "MSFT", market: "🇺🇸 US Market" },
    { name: "LG Energy Sol", ticker: "373220.KS", market: "🇰🇷 KR Market" },
    { name: "Google", ticker: "GOOGL", market: "🇺🇸 US Market" },
    { name: "Kakao", ticker: "035720.KS", market: "🇰🇷 KR Market" }
];

const NEWS_TEMPLATES = [
    {
        titleEn: "Report Q4 Earnings Beat Expectations",
        titleKo: "4분기 실적, 시장 예상치 상회",
        summaryEn: ["Revenue up 15% YoY.", "Strong demand in AI sector.", "Guidance raised for next year."],
        summaryKo: ["매출 전년 대비 15% 증가.", "AI 부문 수요 강세.", "내년 가이던스 상향 조정."]
    },
    {
        titleEn: "Announces Strategic Partnership with AI Startup",
        titleKo: "AI 스타트업과 전략적 파트너십 발표",
        summaryEn: ["Investing $500M in joint venture.", "New technology integration expected by Q3.", "Shares rise on the news."],
        summaryKo: ["조인트 벤처에 5억 달러 투자.", "3분기까지 신기술 통합 예상.", "뉴스 발표 후 주가 상승."]
    },
    {
        titleEn: "Faces Regulatory Scrutiny Over New Policy",
        titleKo: "새로운 정책으로 규제 당국 조사 직면",
        summaryEn: ["Antitrust concerns raised by officials.", "Potential fines could impact margins.", "Legal team preparing defense."],
        summaryKo: ["당국 관계자들, 반독점 우려 제기.", "잠재적 벌금이 마진에 영향 줄 수 있음.", "법무팀 방어 준비 중."]
    },
    {
        titleEn: "Unveils Revolutionary Tech Product",
        titleKo: "혁신적인 기술 제품 공개",
        summaryEn: ["Industry-leading performance metrics.", "Pre-orders sell out in minutes.", "Analysts upgrade stock rating."],
        summaryKo: ["업계 최고의 성능 지표.", "사전 예약 분 만에 매진.", "애널리스트들 주식 등급 상향."]
    },
    {
        titleEn: "CEO Outlines Vision for 2030",
        titleKo: "CEO, 2030년 비전 발표",
        summaryEn: ["Focus on sustainability and green energy.", "Expansion into European markets.", "Dividend payout ratio increased."],
        summaryKo: ["지속 가능성과 친환경 에너지에 집중.", "유럽 시장으로의 확장.", "배당 성향 확대."]
    }
];

// Generate 54 items (9 pages of 6)
for (let i = 1; i <= 54; i++) {
    const company = COMPANIES[Math.floor(Math.random() * COMPANIES.length)];
    const template = NEWS_TEMPLATES[Math.floor(Math.random() * NEWS_TEMPLATES.length)];
    const timeOffset = Math.floor(Math.random() * 48); // Random time within last 48 hours

    const timestamp = new Date();
    timestamp.setHours(timestamp.getHours() - timeOffset);

    MOCK_NEWS.push({
        id: i,
        title: {
            en: `${company.name} ${template.titleEn}`,
            ko: `${company.name}, ${template.titleKo}`
        },
        source: ["Bloomberg", "Reuters", "CNBC", "Yonhap", "The Verge"][Math.floor(Math.random() * 5)],
        flag: company.market,
        timestamp: timestamp.toISOString(),
        summary: {
            en: template.summaryEn,
            ko: template.summaryKo
        },
        relatedStocks: [
            { ticker: company.ticker, name: company.name, change: (Math.random() * 10 - 5).toFixed(1), price: (Math.random() * 500 + 50).toFixed(0) }
        ]
    });
}

// Sort by newest
MOCK_NEWS.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));


// Mock Data: Stock Details (Simplified)
const STOCK_DETAILS = {
    "DEFAULT": { marketCap: "---", per: "---", sector: "Tech/Industry", desc: { en: "Detailed company information is available in the full version.", ko: "상세 기업 정보는 정식 버전에서 제공됩니다." } }
};


// --- App Logic ---

let currentLang = 'ko'; 
const ITEMS_PER_PAGE = 6;
let currentPage = 1;

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
        companyInfo: "기업 개요",
        source: "출처: ",
        prev: "이전",
        next: "다음"
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
        companyInfo: "Company Overview",
        source: "Source: ",
        prev: "Prev",
        next: "Next"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Check URL param for page
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = parseInt(urlParams.get('page'));
    if (pageParam && pageParam > 0) {
        currentPage = pageParam;
    }

    initApp();
});

function initApp() {
    updateTimestamp();
    setupEventListeners();
    applyLanguage(); 
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
    const texts = UI_TEXT[currentLang];
    document.querySelector('.intro-text h2').textContent = texts.pageTitle;
    document.querySelector('.intro-text p').textContent = texts.pageDesc;
    document.querySelector('.update-badge').innerHTML = `${texts.lastUpdated} <span id="last-updated">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>`;
    
    renderNews();
}

function renderNews() {
    const grid = document.getElementById('news-grid');
    grid.innerHTML = ''; 

    // Pagination Logic
    const totalPages = Math.ceil(MOCK_NEWS.length / ITEMS_PER_PAGE);
    
    // Bounds check
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = MOCK_NEWS.slice(startIndex, endIndex);

    currentItems.forEach(news => {
        const card = createNewsCard(news);
        grid.appendChild(card);
    });

    renderPagination(totalPages);
    
    // Update URL without reload
    const url = new URL(window.location);
    url.searchParams.set('page', currentPage);
    window.history.pushState({}, '', url);
}

function renderPagination(totalPages) {
    const container = document.getElementById('pagination');
    container.innerHTML = '';
    
    if (totalPages <= 1) return;

    const texts = UI_TEXT[currentLang];

    // Prev Button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn';
    prevBtn.textContent = texts.prev;
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => changePage(currentPage - 1);
    container.appendChild(prevBtn);

    // Page Numbers (Show max 5 usually, but for now simple loop)
    // Simple logic: Show all if <= 7, else show window around current
    let startPage = 1, endPage = totalPages;
    if (totalPages > 7) {
        if (currentPage <= 4) {
            endPage = 7;
        } else if (currentPage >= totalPages - 3) {
            startPage = totalPages - 6;
        } else {
            startPage = currentPage - 3;
            endPage = currentPage + 3;
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        const btn = document.createElement('button');
        btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        btn.textContent = i;
        btn.onclick = () => changePage(i);
        container.appendChild(btn);
    }

    // Next Button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn';
    nextBtn.textContent = texts.next;
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => changePage(currentPage + 1);
    container.appendChild(nextBtn);
}

function changePage(pageNum) {
    currentPage = pageNum;
    renderNews();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function createNewsCard(news) {
    const card = document.createElement('article');
    card.className = 'news-card';
    
    const texts = UI_TEXT[currentLang];
    
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
        <span class="news-source">${texts.source}${news.source}</span>
        
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
    // Basic Fallback for details to keep code simple with expanded mock list
    let details = STOCK_DETAILS[ticker];
    if (!details) details = STOCK_DETAILS["DEFAULT"];
    
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
