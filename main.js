// Mock Data: News Items (Extended)
const MOCK_NEWS = [
    {
        id: 1,
        title: {
            en: "Apple Vision Pro 2 Release Rumors Heat Up",
            ko: "애플 비전 프로 2 출시설 가열"
        },
        source: "Bloomberg",
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
        source: "Yonhap News",
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
        source: "Reuters",
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
        source: "The Korea Herald",
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
    },
    {
        id: 5,
        title: {
            en: "Nvidia Unveils Next-Gen 'Rubin' GPU Architecture",
            ko: "엔비디아, 차세대 '루빈' GPU 아키텍처 공개"
        },
        source: "CNBC",
        flag: "🇺🇸 US Market",
        timestamp: "2026-01-27T06:00:00",
        summary: {
            en: [
                "Claims 3x performance leap over Blackwell chips.",
                "TSMC 2nm process confirmed for production.",
                "Data center revenue projection increased by 20%."
            ],
            ko: [
                "블랙웰 칩 대비 성능 3배 향상 주장.",
                "TSMC 2나노 공정 생산 확정.",
                "데이터센터 매출 전망치 20% 상향."
            ]
        },
        relatedStocks: [
            { ticker: "NVDA", name: "Nvidia", change: 5.2, price: 920.00 },
            { ticker: "TSM", name: "TSMC", change: 2.5, price: 155.00 }
        ]
    },
    {
        id: 6,
        title: {
            en: "Hyundai Motor Sets New EV Sales Record in Europe",
            ko: "현대차, 유럽서 전기차 판매 신기록 달성"
        },
        source: "Reuters",
        flag: "🇰🇷 KR Market",
        timestamp: "2026-01-27T07:45:00",
        summary: {
            en: [
                "IONIQ 9 launch boosts quarterly sales by 15%.",
                "Gains market share from German competitors.",
                "Announces new battery plant in Hungary."
            ],
            ko: [
                "아이오닉 9 출시로 분기 판매량 15% 증가.",
                "독일 경쟁사들로부터 시장 점유율 확보.",
                "헝가리에 신규 배터리 공장 발표."
            ]
        },
        relatedStocks: [
            { ticker: "005380.KS", name: "Hyundai Motor", change: 2.1, price: 240000 },
            { ticker: "000270.KS", name: "Kia", change: 1.8, price: 110000 }
        ]
    },
    {
        id: 7,
        title: {
            en: "Microsoft Azure AI Partners with OpenAI for GPT-6",
            ko: "마이크로소프트 애저 AI, 오픈AI와 GPT-6 협력"
        },
        source: "TechCrunch",
        flag: "🇺🇸 US Market",
        timestamp: "2026-01-26T20:00:00",
        summary: {
            en: [
                "Exclusive cloud partnership extended to 2030.",
                "GPT-6 training to utilize new custom Azure silicon.",
                "Cloud infrastructure stock sees renewed interest."
            ],
            ko: [
                "독점 클라우드 파트너십 2030년까지 연장.",
                "GPT-6 학습에 새로운 맞춤형 애저 실리콘 활용.",
                "클라우드 인프라 관련주 관심 재점화."
            ]
        },
        relatedStocks: [
            { ticker: "MSFT", name: "Microsoft", change: 0.9, price: 420.50 },
            { ticker: "GOOGL", name: "Alphabet", change: -0.5, price: 175.20 }
        ]
    },
    {
        id: 8,
        title: {
            en: "LG Energy Solution Breakthrough in Solid-State Battery",
            ko: "LG에너지솔루션, 전고체 배터리 기술 돌파구 마련"
        },
        source: "Electronic Times",
        flag: "🇰🇷 KR Market",
        timestamp: "2026-01-27T11:00:00",
        summary: {
            en: [
                "Successful prototype test with 800km range.",
                "Mass production timeline moved up to 2027.",
                "Shares jump on potential Tesla contract rumors."
            ],
            ko: [
                "주행거리 800km 시제품 테스트 성공.",
                "양산 일정 2027년으로 앞당겨짐.",
                "테슬라 계약 루머에 주가 급등."
            ]
        },
        relatedStocks: [
            { ticker: "373220.KS", name: "LG Energy Sol", change: 4.8, price: 395000 },
            { ticker: "051910.KS", name: "LG Chem", change: 2.2, price: 450000 }
        ]
    },
    {
        id: 9,
        title: {
            en: "Amazon Prime Air Expands Drone Delivery Nationwide",
            ko: "아마존 프라임 에어, 드론 배송 전국 확대"
        },
        source: "The Wall Street Journal",
        flag: "🇺🇸 US Market",
        timestamp: "2026-01-26T18:00:00",
        summary: {
            en: [
                "FAA clears Amazon for beyond-line-of-sight flights.",
                "Delivery time reduced to under 30 minutes for essentials.",
                "Cost reduction expected to boost retail margins."
            ],
            ko: [
                "미 연방항공청(FAA), 가시권 밖 비행 승인.",
                "필수품 배송 시간 30분 이내로 단축.",
                "비용 절감으로 소매 마진 개선 기대."
            ]
        },
        relatedStocks: [
            { ticker: "AMZN", name: "Amazon", change: 1.5, price: 195.00 },
            { ticker: "UPS", name: "UPS", change: -1.2, price: 140.00 }
        ]
    },
    {
        id: 10,
        title: {
            en: "Celltrion Biosimilar Gains Fast-Track FDA Approval",
            ko: "셀트리온 바이오시밀러, 미 FDA 패스트트랙 승인"
        },
        source: "BioWorld",
        flag: "🇰🇷 KR Market",
        timestamp: "2026-01-27T09:30:00",
        summary: {
            en: [
                "New autoimmune drug clears Phase 3 trials early.",
                "US market entry expected within 6 months.",
                "Projected annual revenue of $1B from new drug."
            ],
            ko: [
                "신규 자가면역질환 치료제 임상 3상 조기 통과.",
                "6개월 내 미국 시장 진입 예상.",
                "신약으로 연간 10억 달러 매출 전망."
            ]
        },
        relatedStocks: [
            { ticker: "068270.KS", name: "Celltrion", change: 3.5, price: 180000 },
            { ticker: "207940.KS", name: "Samsung Bio", change: 0.5, price: 780000 }
        ]
    },
    {
        id: 11,
        title: {
            en: "Meta Reality Labs Reports First Profit",
            ko: "메타 리얼리티 랩스, 첫 흑자 전환 달성"
        },
        source: "The Verge",
        flag: "🇺🇸 US Market",
        timestamp: "2026-01-26T21:30:00",
        summary: {
            en: [
                "Quest 4 sales exceed expectations over holidays.",
                "Ad revenue from metaverse platform grows 200%.",
                "Zuckerberg declares 'Metaverse Winter' over."
            ],
            ko: [
                "퀘스트 4, 연휴 기간 판매량 예상치 상회.",
                "메타버스 플랫폼 광고 수익 200% 성장.",
                "저커버그, '메타버스의 겨울' 끝났다고 선언."
            ]
        },
        relatedStocks: [
            { ticker: "META", name: "Meta", change: 6.7, price: 550.00 },
            { ticker: "U", name: "Unity", change: 4.1, price: 35.00 }
        ]
    },
    {
        id: 12,
        title: {
            en: "KakaoBank Reaches 20 Million Active Users",
            ko: "카카오뱅크, 활성 사용자 2천만 명 돌파"
        },
        source: "The Korea Times",
        flag: "🇰🇷 KR Market",
        timestamp: "2026-01-27T10:00:00",
        summary: {
            en: [
                "Dominated youth market with new 'Mini' card features.",
                "Mortgage loan platform captures record market share.",
                "Fintech sector rallies on the news."
            ],
            ko: [
                "새로운 '미니' 카드 기능으로 청소년 시장 장악.",
                "주택담보대출 플랫폼 사상 최대 점유율 확보.",
                "핀테크 섹터, 해당 소식에 동반 상승."
            ]
        },
        relatedStocks: [
            { ticker: "323410.KS", name: "KakaoBank", change: 1.9, price: 28000 },
            { ticker: "105560.KS", name: "KB Financial", change: -0.3, price: 65000 }
        ]
    },
    {
        id: 13,
        title: {
            en: "Google Faces New EU Antitrust Fine Over AI Search",
            ko: "구글, AI 검색 관련 EU의 새로운 반독점 벌금 직면"
        },
        source: "Financial Times",
        flag: "🇺🇸 US Market",
        timestamp: "2026-01-26T16:00:00",
        summary: {
            en: [
                "EU Commission claims AI Overviews favor Google ads.",
                "Potential fine up to 5% of global turnover.",
                "Stock dips slightly on regulatory concerns."
            ],
            ko: [
                "EU 집행위, AI 오버뷰가 구글 광고 우대한다고 주장.",
                "전 세계 매출의 최대 5% 벌금 가능성.",
                "규제 우려로 주가 소폭 하락."
            ]
        },
        relatedStocks: [
            { ticker: "GOOGL", name: "Alphabet", change: -1.5, price: 173.00 },
            { ticker: "MSFT", name: "Microsoft", change: 0.2, price: 420.00 }
        ]
    },
    {
        id: 14,
        title: {
            en: "Posco Holdings Strikes Major Lithium Deal in Chile",
            ko: "포스코홀딩스, 칠레서 대규모 리튬 계약 체결"
        },
        source: "Bloomberg",
        flag: "🇰🇷 KR Market",
        timestamp: "2026-01-27T08:00:00",
        summary: {
            en: [
                "Secures rights to 50,000 tons of lithium annually.",
                "Stabilizes supply chain for battery materials business.",
                "Strategic move to counter Chinese dominance."
            ],
            ko: [
                "연간 5만 톤 리튬 채굴권 확보.",
                "배터리 소재 사업의 공급망 안정화.",
                "중국의 지배력에 대응하기 위한 전략적 행보."
            ]
        },
        relatedStocks: [
            { ticker: "005490.KS", name: "POSCO Holdings", change: 3.2, price: 420000 },
            { ticker: "006400.KS", name: "Samsung SDI", change: 1.4, price: 380000 }
        ]
    }
];

// Mock Data: Stock Details (Simplified dictionary)
const STOCK_DETAILS = {
    // Defaults for everything to save space in this demo
    "DEFAULT": { marketCap: "---", per: "---", sector: "Tech/Industry", desc: { en: "Detailed company information is available in the full version.", ko: "상세 기업 정보는 정식 버전에서 제공됩니다." } },
    "AAPL": { marketCap: "2.9T", per: "28.5", sector: "Electronics", desc: { en: "Apple designs consumer electronics.", ko: "애플은 소비자 가전 제품을 설계합니다." }},
    "NVDA": { marketCap: "3.2T", per: "70.1", sector: "Semiconductors", desc: { en: "Nvidia is the leader in AI computing.", ko: "엔비디아는 AI 컴퓨팅의 선두주자입니다." }},
    "005930.KS": { marketCap: "480T KRW", per: "15.2", sector: "Semiconductors", desc: { en: "Samsung Electronics is a global tech giant.", ko: "삼성전자는 글로벌 기술 거대 기업입니다." }}
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
        source: "출처: "
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
        source: "Source: "
    }
};

document.addEventListener('DOMContentLoaded', () => {
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
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = MOCK_NEWS.slice(startIndex, endIndex);

    currentItems.forEach(news => {
        const card = createNewsCard(news);
        grid.appendChild(card);
    });

    renderPagination();
}

function renderPagination() {
    const container = document.getElementById('pagination');
    container.innerHTML = '';
    const totalPages = Math.ceil(MOCK_NEWS.length / ITEMS_PER_PAGE);

    if (totalPages <= 1) return;

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        btn.textContent = i;
        btn.onclick = () => {
            currentPage = i;
            renderNews();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        container.appendChild(btn);
    }
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
