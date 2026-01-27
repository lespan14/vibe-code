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
        summaryKo: ["매출 전년 대비 15% 증가.", "AI 부문 수요 강세.", "내년 가이던스 상향 조정."],
        deepEn: "The latest earnings report indicates a robust recovery in core sectors. Analysts point to the surge in AI-related infrastructure spending as the primary driver. With operating margins improving by 300 basis points, the company is well-positioned for aggressive R&D investment in the coming year.",
        deepKo: "최근 실적 보고서는 핵심 부문의 강력한 회복세를 보여줍니다. 분석가들은 AI 관련 인프라 지출의 급증을 주요 원동력으로 꼽습니다. 영업 이익률이 300bp 개선됨에 따라, 회사는 내년에 공격적인 R&D 투자를 진행할 수 있는 유리한 위치에 있습니다.",
        reasonEn: "This stock is directly benefiting from increased revenue visibility and improved margin guidance.",
        reasonKo: "이 종목은 매출 가시성 증가와 마진 가이던스 개선의 직접적인 수혜를 입고 있습니다."
    },
    {
        titleEn: "Announces Strategic Partnership with AI Startup",
        titleKo: "AI 스타트업과 전략적 파트너십 발표",
        summaryEn: ["Investing $500M in joint venture.", "New technology integration expected by Q3.", "Shares rise on the news."],
        summaryKo: ["조인트 벤처에 5억 달러 투자.", "3분기까지 신기술 통합 예상.", "뉴스 발표 후 주가 상승."],
        deepEn: "This strategic alliance aims to integrate cutting-edge generative AI models directly into the company's flagship hardware. By securing exclusive access to the startup's proprietary algorithms, they aim to differentiate their product line from competitors. Market sentiment is highly positive, expecting a new revenue stream.",
        deepKo: "이번 전략적 제휴는 최첨단 생성형 AI 모델을 회사의 주력 하드웨어에 직접 통합하는 것을 목표로 합니다. 스타트업의 독점 알고리즘에 대한 독점 접근 권한을 확보함으로써 경쟁사와 제품 라인을 차별화할 계획입니다. 새로운 수익원에 대한 기대로 시장 반응은 매우 긍정적입니다.",
        reasonEn: "The partnership unlocks new AI-driven product capabilities, potentially boosting future market share.",
        reasonKo: "이 파트너십은 새로운 AI 기반 제품 기능을 열어주어 향후 시장 점유율 상승 가능성을 높입니다."
    },
    {
        titleEn: "Faces Regulatory Scrutiny Over New Policy",
        titleKo: "새로운 정책으로 규제 당국 조사 직면",
        summaryEn: ["Antitrust concerns raised by officials.", "Potential fines could impact margins.", "Legal team preparing defense."],
        summaryKo: ["당국 관계자들, 반독점 우려 제기.", "잠재적 벌금이 마진에 영향 줄 수 있음.", "법무팀 방어 준비 중."],
        deepEn: "Regulatory bodies have launched a probe into the company's recent pricing policy changes, citing potential anti-competitive behavior. If found guilty, fines could reach up to 5% of global turnover. The company maintains that the changes are standard industry practice and is prepared to challenge the findings in court.",
        deepKo: "규제 당국은 최근 회사의 가격 정책 변경에 대해 잠재적인 반경쟁 행위를 이유로 조사를 착수했습니다. 유죄가 인정될 경우, 전 세계 매출의 최대 5%에 달하는 벌금이 부과될 수 있습니다. 회사는 이러한 변경이 업계 표준 관행이라고 주장하며 법정에서 결과에 이의를 제기할 준비가 되어 있습니다.",
        reasonEn: "Regulatory headwinds create uncertainty, putting downward pressure on the stock price in the short term.",
        reasonKo: "규제 역풍이 불확실성을 조성하여 단기적으로 주가에 하방 압력을 가하고 있습니다."
    },
    {
        titleEn: "Unveils Revolutionary Tech Product",
        titleKo: "혁신적인 기술 제품 공개",
        summaryEn: ["Industry-leading performance metrics.", "Pre-orders sell out in minutes.", "Analysts upgrade stock rating."],
        summaryKo: ["업계 최고의 성능 지표.", "사전 예약 분 만에 매진.", "애널리스트들 주식 등급 상향."],
        deepEn: "The unveiling event showcased a device that significantly outperforms current market leaders in energy efficiency and processing power. Early pre-order data suggests demand is outstripping supply. Several major investment banks have subsequently raised their target price, citing the product as a 'game changer'.",
        deepKo: "이번 공개 행사에서는 에너지 효율과 처리 능력 면에서 현재 시장 리더들을 크게 능가하는 기기가 선보였습니다. 초기 사전 예약 데이터는 수요가 공급을 초과하고 있음을 시사합니다. 여러 주요 투자 은행들은 이 제품을 '게임 체인저'로 언급하며 목표 주가를 상향 조정했습니다.",
        reasonEn: "High pre-order demand and superior product specs signal strong future earnings potential.",
        reasonKo: "높은 사전 예약 수요와 우수한 제품 스펙은 강력한 미래 수익 잠재력을 시사합니다."
    },
    {
        titleEn: "CEO Outlines Vision for 2030",
        titleKo: "CEO, 2030년 비전 발표",
        summaryEn: ["Focus on sustainability and green energy.", "Expansion into European markets.", "Dividend payout ratio increased."],
        summaryKo: ["지속 가능성과 친환경 에너지에 집중.", "유럽 시장으로의 확장.", "배당 성향 확대."],
        deepEn: "In a shareholder letter, the CEO emphasized a pivot towards sustainable energy solutions as a core pillar of growth over the next decade. The plan includes a massive expansion into European markets and a commitment to return more value to shareholders through increased dividends and buybacks.",
        deepKo: "주주 서한에서 CEO는 향후 10년 동안의 성장을 위한 핵심 축으로 지속 가능한 에너지 솔루션으로의 전환을 강조했습니다. 이 계획에는 유럽 시장으로의 대규모 확장과 배당금 증액 및 자사주 매입을 통해 주주들에게 더 많은 가치를 환원하겠다는 약속이 포함되어 있습니다.",
        reasonEn: "Long-term strategic clarity and shareholder-friendly capital allocation appeal to institutional investors.",
        reasonKo: "장기적인 전략적 명확성과 주주 친화적인 자본 배분은 기관 투자자들에게 매력적입니다."
    }
];

// Top 5 Reliable Financial News Sources
const SOURCE_URLS = {
    "Bloomberg": "https://www.bloomberg.com/news/markets", 
    "Reuters": "https://www.reuters.com/markets",
    "Wall Street Journal": "https://www.wsj.com/news/markets", 
    "CNBC": "https://www.cnbc.com/finance/",
    "Financial Times": "https://www.ft.com/news/markets" 
};

const SOURCES = Object.keys(SOURCE_URLS);

// Generate 54 items
for (let i = 1; i <= 54; i++) {
    const company = COMPANIES[Math.floor(Math.random() * COMPANIES.length)];
    const template = NEWS_TEMPLATES[Math.floor(Math.random() * NEWS_TEMPLATES.length)];
    const timeOffset = Math.floor(Math.random() * 48); // Random time within last 48 hours

    const timestamp = new Date();
    timestamp.setHours(timestamp.getHours() - timeOffset);
    
    const randomSource = SOURCES[Math.floor(Math.random() * SOURCES.length)];

    MOCK_NEWS.push({
        id: i,
        title: {
            en: `${company.name} ${template.titleEn}`,
            ko: `${company.name}, ${template.titleKo}`
        },
        source: randomSource,
        url: SOURCE_URLS[randomSource], 
        flag: company.market,
        timestamp: timestamp.toISOString(),
        summary: {
            en: template.summaryEn,
            ko: template.summaryKo
        },
        deep: {
            en: template.deepEn,
            ko: template.deepKo
        },
        relatedStocks: [
            { 
                ticker: company.ticker, 
                name: company.name, 
                change: (Math.random() * 10 - 5).toFixed(1), 
                price: (Math.random() * 500 + 50).toFixed(0),
                reason: {
                    en: template.reasonEn,
                    ko: template.reasonKo
                }
            }
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
        next: "다음",
        deepDive: "🔍 AI 심층 분석 보기",
        deepDiveHeader: "🤖 AI 심층 분석",
        viewOriginal: "뉴스 원문 보기 🔗",
        beneficiaryTitle: "💡 왜 이 종목이 수혜주인가요?"
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
        next: "Next",
        deepDive: "🔍 AI Deep Dive",
        deepDiveHeader: "🤖 AI Deep Analysis",
        viewOriginal: "View Original News 🔗",
        beneficiaryTitle: "💡 Why is this stock affected?"
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
    
    // Update Modal Headers if open
    document.querySelector('.ai-analysis-box h3').textContent = texts.deepDiveHeader;

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

    // Page Numbers logic
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
            <button class="stock-btn" onclick="openStockModal(${news.id}, '${stock.ticker}')">
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
        <h3 class="news-title" onclick="openNewsModal(${news.id})">${title}</h3>
        <span class="news-source">${texts.source}${news.source}</span>
        
        <div class="summary-box">
            <span class="summary-title">${texts.summaryTitle}</span>
            <ul class="summary-list">
                ${summaryItems}
            </ul>
        </div>

        <button class="detail-btn" onclick="openNewsModal(${news.id})">${texts.deepDive}</button>

        <div class="related-section">
            <span class="related-label">${texts.affectedStocks}</span>
            ${stockButtons}
        </div>
    `;

    return card;
}

// --- Modals ---

window.openStockModal = function(newsId, ticker) {
    const modal = document.getElementById('stock-modal');
    
    // Find the news item
    const news = MOCK_NEWS.find(n => n.id === newsId);
    if (!news) return;

    // Find the specific stock within that news item
    const stock = news.relatedStocks.find(s => s.ticker === ticker);
    if (!stock) return;

    // Basic Fallback for general company details
    let details = STOCK_DETAILS[ticker];
    if (!details) details = STOCK_DETAILS["DEFAULT"];
    
    const texts = UI_TEXT[currentLang];

    document.getElementById('modal-stock-name').textContent = stock.name;
    document.getElementById('modal-stock-ticker').textContent = ticker;
    document.getElementById('modal-price').textContent = (ticker.includes('.KS') ? '₩' : '$') + parseInt(stock.price).toLocaleString();
    
    const changeEl = document.getElementById('modal-change');
    const change = parseFloat(stock.change);
    changeEl.textContent = (change >= 0 ? '+' : '') + change + '%';
    changeEl.className = 'price-change ' + (change >= 0 ? 'positive' : 'negative');

    document.getElementById('modal-market-cap').textContent = details.marketCap;
    document.getElementById('modal-per').textContent = details.per;
    document.getElementById('modal-sector').textContent = details.sector;
    
    const descText = (typeof details.desc === 'object') ? details.desc[currentLang] : details.desc;
    document.getElementById('modal-desc').textContent = descText;

    // Populate Beneficiary Analysis
    const beneficiarySection = document.getElementById('beneficiary-analysis-section');
    beneficiarySection.querySelector('h3').textContent = texts.beneficiaryTitle;
    document.getElementById('modal-beneficiary-reason').textContent = stock.reason[currentLang];


    // Update Modal Labels
    const labels = document.querySelectorAll('.info-item label');
    labels[0].textContent = texts.marketCap;
    labels[1].textContent = texts.per;
    labels[2].textContent = texts.sector;
    labels[3].textContent = texts.rating;
    document.querySelector('.modal-description h3').textContent = texts.companyInfo;
    document.getElementById('modal-rating').textContent = texts.buy;

    // Render Chart
    renderTradingViewWidget(ticker);

    modal.classList.remove('hidden');
};

function renderTradingViewWidget(ticker) {
    const container = document.getElementById('tradingview-widget-container');
    container.innerHTML = ''; // Clear previous widget

    // Map internal ticker to TradingView symbol format
    let symbol = ticker;
    if (ticker.endsWith('.KS')) {
        symbol = `KRX:${ticker.replace('.KS', '')}`; // e.g. 005930.KS -> KRX:005930
    } else {
        symbol = `NASDAQ:${ticker}`; // Default assumption for US stocks (Simplification)
        // Refinement: Some might be NYSE, but for this mock data NASDAQ covers tech giants mostly.
        if (['UPS', 'NYSE:UPS'].includes(ticker)) symbol = 'NYSE:UPS'; // Manual override example if needed
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
        "symbols": [
            [
                symbol + "|1D"
            ]
        ],
        "chartOnly": false,
        "width": "100%",
        "height": "100%",
        "locale": currentLang === 'ko' ? 'kr' : 'en',
        "colorTheme": "light",
        "autosize": true,
        "showVolume": false,
        "showMA": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "fontSize": "10",
        "noTimeScale": false,
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "chartType": "area",
        "maLineColor": "#2962FF",
        "maLineWidth": 1,
        "maLength": 9,
        "lineWidth": 2,
        "lineType": 0,
        "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
        ]
    });
    
    container.appendChild(script);
}

window.openNewsModal = function(id) {
    const news = MOCK_NEWS.find(n => n.id === id);
    if (!news) return;

    const modal = document.getElementById('news-modal');
    const texts = UI_TEXT[currentLang];

    // Populate
    document.getElementById('news-modal-flag').textContent = news.flag;
    document.getElementById('news-modal-date').textContent = new Date(news.timestamp).toLocaleString();
    document.getElementById('news-modal-title').textContent = news.title[currentLang];
    
    document.getElementById('news-modal-body').textContent = news.deep[currentLang];
    
    document.querySelector('.ai-analysis-box h3').textContent = texts.deepDiveHeader;

    // Footer Info
    document.getElementById('news-modal-source').textContent = texts.source + news.source;
    const linkBtn = document.getElementById('news-modal-link');
    linkBtn.textContent = texts.viewOriginal;
    linkBtn.href = news.url;

    modal.classList.remove('hidden');
}

window.closeStockModal = function() {
    document.getElementById('stock-modal').classList.add('hidden');
};

window.closeNewsModal = function() {
    document.getElementById('news-modal').classList.add('hidden');
};

function setupEventListeners() {
    window.onclick = function(event) {
        const stockModal = document.getElementById('stock-modal');
        const newsModal = document.getElementById('news-modal');
        if (event.target == stockModal) {
            closeStockModal();
        }
        if (event.target == newsModal) {
            closeNewsModal();
        }
    }

    document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
}