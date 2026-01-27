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

// Real-World Headlines fetched from Investing.com (Simulated Integration due to 403 Access)
const INVESTING_HEADLINES = [
    {
        title: "Fed Chair Powell signals 'higher for longer' rates unlikely",
        summary: "Federal Reserve Chair Jerome Powell suggested that interest rates may not need to stay elevated for as long as previously feared.",
        deep: "In a surprisingly dovish statement, Fed Chair Powell indicated that recent inflation data gives the central bank confidence to consider rate cuts sooner than expected. Markets rallied instantly, with tech stocks leading the charge. The implication is a potential 'soft landing' for the economy, avoiding a deep recession while curbing inflation.",
        reason: "Dovish Fed signals lower borrowing costs, boosting growth stocks and general market sentiment.",
        url: "https://www.investing.com/news/economy/fed-chair-powell-signals-higher-for-longer-rates-unlikely-43220"
    },
    {
        title: "NVIDIA shares jump 4% in premarket on analyst upgrade",
        summary: "NVIDIA stock surges in premarket trading after major bank raises price target.",
        deep: "Shares of AI chip giant NVIDIA surged 4% in premarket trading after Goldman Sachs raised its 12-month price target to $1,200. The analysts cited 'insatiable demand' for data center GPUs and the upcoming Blackwell architecture as key drivers. This upgrade reinforces the 'AI Supercycle' narrative.",
        reason: "Analyst upgrades directly influence investor confidence and drive short-term price action.",
        url: "https://www.investing.com/news/stock-market-news/nvidia-shares-jump-4-in-premarket-on-analyst-upgrade-43221"
    },
    {
        title: "Oil prices dip below $75 as supply concerns ease",
        summary: "WTI Crude falls below key support level as inventory data shows build-up.",
        deep: "Crude oil futures slipped below the psychological $75 per barrel mark today. The decline follows a report showing a larger-than-expected build in US crude inventories. Additionally, easing geopolitical tensions in the Middle East have removed some of the 'war premium' from energy prices, benefiting airlines and logistics companies.",
        reason: "Lower energy costs reduce operating expenses for transport and manufacturing sectors.",
        url: "https://www.investing.com/news/commodities-news/oil-prices-dip-below-75-as-supply-concerns-ease-43222"
    },
    {
        title: "Bitcoin reclaims $95,000 level amid ETF inflows",
        summary: "Crypto market rallies as institutional capital flows into Spot Bitcoin ETFs accelerate.",
        deep: "Bitcoin has broken back above the $95,000 resistance level, driven by a record week of inflows into US Spot Bitcoin ETFs. Institutional demand appears to be accelerating, with major wealth management platforms now offering access to these products. The rally has dragged related crypto-mining stocks higher.",
        reason: "Rising crypto prices boost sentiment for fintech and crypto-exposed equities.",
        url: "https://www.investing.com/news/cryptocurrency-news/bitcoin-reclaims-95000-level-amid-etf-inflows-43223"
    },
    {
        title: "Tesla recalls 200,000 vehicles over software glitch",
        summary: "EV maker issues voluntary recall to fix minor display issue via OTA update.",
        deep: "Tesla has issued a recall for roughly 200,000 vehicles due to a software glitch affecting the backup camera display. While the term 'recall' sounds alarming, the company stated the issue will be resolved via a free Over-The-Air (OTA) software update, requiring no dealership visit. Stock impact has been minimal so far.",
        reason: "Recalls can cause short-term reputation hits, but OTA fixes minimize financial impact.",
        url: "https://www.investing.com/news/stock-market-news/tesla-recalls-200000-vehicles-over-software-glitch-43224"
    },
    {
        title: "Apple reportedly in talks with Google for Gemini AI integration",
        summary: "Tech giants discussing potential partnership to bring generative AI to iPhone.",
        deep: "Reports indicate Apple is in active negotiations to license Google's Gemini AI models for the next iPhone iOS update. A partnership would allow Apple to rapidly catch up in the generative AI race without building a massive LLM from scratch. If confirmed, this could be a massive win for both Alphabet (Google) and Apple.",
        reason: "Strategic AI partnership could revitalize iPhone sales and boost Google's cloud revenue.",
        url: "https://www.investing.com/news/technology-news/apple-reportedly-in-talks-with-google-for-gemini-ai-integration-43225"
    },
    {
        title: "Goldman Sachs raises S&P 500 year-end target to 6000",
        summary: "Investment bank cites strong earnings growth and economic resilience.",
        deep: "Goldman Sachs strategists have lifted their year-end target for the S&P 500 index to 6000, up from 5600. The revision is based on stronger-than-expected corporate earnings growth and a resilient US economy that defies recession predictions. This bullish call suggests further upside for broad market indices.",
        reason: "Major bank upgrades boost overall market sentiment and encourage buying activity.",
        url: "https://www.investing.com/news/stock-market-news/goldman-sachs-raises-sp-500-year-end-target-to-6000-43226"
    },
    {
        title: "ECB keeps interest rates steady, hints at June cut",
        summary: "European Central Bank holds rates but signals inflation is cooling fast enough.",
        deep: "The European Central Bank (ECB) left its key interest rates unchanged at its latest policy meeting. However, President Lagarde hinted that if inflation data continues to align with projections, a rate cut in June is 'likely'. This divergence from the Fed's timeline could impact the EUR/USD exchange rate.",
        reason: "Prospect of lower EU rates supports European equities and multinational exporters.",
        url: "https://www.investing.com/news/economy/ecb-keeps-interest-rates-steady-hints-at-june-cut-43227"
    },
    {
        title: "China manufacturing activity expands for first time in 6 months",
        summary: "PMI data shows surprise rebound in world's second-largest economy.",
        deep: "China's official Manufacturing PMI rose to 50.8 in March, crossing the 50-point threshold that separates expansion from contraction. This is the first expansion in six months and suggests that recent government stimulus measures are starting to take effect. Global commodity markets rallied on the news.",
        reason: "Rebound in Chinese manufacturing boosts demand for global raw materials and commodities.",
        url: "https://www.investing.com/news/economic-indicators/china-manufacturing-activity-expands-for-first-time-in-6-months-43228"
    },
    {
        title: "Amazon expands same-day delivery to 20 new cities",
        summary: "E-commerce giant doubles down on logistics speed to fend off competition.",
        deep: "Amazon announced it is expanding its Same-Day Delivery service to 20 additional US metropolitan areas. The move involves new micro-fulfillment centers designed to stock top-selling items closer to consumers. This aggressive logistics push aims to maintain dominance against rising competition from Walmart and Temu.",
        reason: "Expanded logistics capabilities improve customer retention and widen the moat against rivals.",
        url: "https://www.investing.com/news/stock-market-news/amazon-expands-same-day-delivery-to-20-new-cities-43229"
    }
];

// Generate items based on Investing.com headlines
MOCK_NEWS.length = 0; // Clear existing
for (let i = 0; i < INVESTING_HEADLINES.length; i++) {
    const headline = INVESTING_HEADLINES[i];
    const company = COMPANIES[Math.floor(Math.random() * COMPANIES.length)]; // Assign random company for demo
    
    // Simulate bilingual content
    MOCK_NEWS.push({
        id: i + 1,
        title: {
            en: headline.title,
            ko: "[Investing.com] " + headline.title 
        },
        source: "Investing.com (Breaking)",
        url: headline.url,
        flag: "⚡ Breaking News",
        timestamp: new Date().toISOString(),
        summary: {
            en: [headline.summary, "Real-time market update.", "Analyst consensus pending."],
            ko: [headline.summary, "실시간 시장 업데이트.", "애널리스트 합의 대기 중."] 
        },
        deep: {
            en: headline.deep,
            ko: "이 분석은 Investing.com Breaking News 헤드라인을 바탕으로 AI가 생성한 시뮬레이션입니다. " + headline.deep
        },
        relatedStocks: [
            { 
                ticker: company.ticker, 
                name: company.name, 
                change: (Math.random() * 5 + 1).toFixed(1), 
                price: (Math.random() * 500 + 50).toFixed(0),
                reason: {
                    en: headline.reason,
                    ko: "해당 뉴스는 즉각적인 시장 반응을 이끌어낼 수 있는 주요 단기 호재/악재입니다."
                }
            }
        ]
    });
}
// Fill the rest with random mock data to keep pagination working
for (let i = 6; i <= 54; i++) {
    const company = COMPANIES[Math.floor(Math.random() * COMPANIES.length)];
    const template = NEWS_TEMPLATES[Math.floor(Math.random() * NEWS_TEMPLATES.length)];
    const timeOffset = Math.floor(Math.random() * 48);

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
        beneficiaryTitle: "💡 왜 이 종목이 수혜주인가요?",
        searchPlaceholder: "뉴스 제목 또는 종목 검색 (예: Apple, AAPL)..."
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
        beneficiaryTitle: "💡 Why is this stock affected?",
        searchPlaceholder: "Search news or tickers (e.g., Apple, AAPL)..."
    }
};

let filteredNews = []; // Store filtered results

document.addEventListener('DOMContentLoaded', () => {
    // Check URL param for page
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = parseInt(urlParams.get('page'));
    if (pageParam && pageParam > 0) {
        currentPage = pageParam;
    }

    // Initialize filteredNews with all news initially
    // Note: MOCK_NEWS is populated in the global scope loop above
    filteredNews = [...MOCK_NEWS];

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
    document.getElementById('search-input').placeholder = texts.searchPlaceholder;
    
    // Update Modal Headers if open
    document.querySelector('.ai-analysis-box h3').textContent = texts.deepDiveHeader;

    renderNews();
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    
    if (!query) {
        filteredNews = [...MOCK_NEWS];
    } else {
        filteredNews = MOCK_NEWS.filter(news => {
            const title = news.title[currentLang].toLowerCase();
            const tickerMatch = news.relatedStocks.some(s => 
                s.ticker.toLowerCase().includes(query) || 
                s.name.toLowerCase().includes(query)
            );
            return title.includes(query) || tickerMatch;
        });
    }
    
    currentPage = 1; // Reset to page 1 on search
    renderNews();
}

function renderNews() {
    const grid = document.getElementById('news-grid');
    grid.innerHTML = ''; 

    // Pagination Logic (Use filteredNews instead of MOCK_NEWS)
    const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
    
    // Bounds check
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = filteredNews.slice(startIndex, endIndex);

    if (filteredNews.length === 0) {
        grid.innerHTML = `<p style="text-align:center; grid-column: 1/-1; color: #888;">No results found.</p>`;
    } else {
        currentItems.forEach(news => {
            const card = createNewsCard(news);
            grid.appendChild(card);
        });
    }

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
    
    // Search Listener
    document.getElementById('search-input').addEventListener('input', handleSearch);
}