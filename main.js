const MOCK_NEWS = [];
const COMPANIES = [
    { name: { en: "Apple", ko: "애플" }, ticker: "AAPL", market: "🇺🇸 US Market" },
    { name: { en: "Samsung Elec", ko: "삼성전자" }, ticker: "005930.KS", market: "🇰🇷 KR Market" },
    { name: { en: "Tesla", ko: "테슬라" }, ticker: "TSLA", market: "🇺🇸 US Market" },
    { name: { en: "Naver", ko: "네이버" }, ticker: "035420.KS", market: "🇰🇷 KR Market" },
    { name: { en: "Nvidia", ko: "엔비디아" }, ticker: "NVDA", market: "🇺🇸 US Market" },
    { name: { en: "SK Hynix", ko: "SK하이닉스" }, ticker: "000660.KS", market: "🇰🇷 KR Market" },
    { name: { en: "Microsoft", ko: "마이크로소프트" }, ticker: "MSFT", market: "🇺🇸 US Market" },
    { name: { en: "LG Energy Sol", ko: "LG에너지솔루션" }, ticker: "373220.KS", market: "🇰🇷 KR Market" },
    { name: { en: "Google", ko: "구글(알파벳)" }, ticker: "GOOGL", market: "🇺🇸 US Market" },
    { name: { en: "Kakao", ko: "카카오" }, ticker: "035720.KS", market: "🇰🇷 KR Market" },
    { name: { en: "Marathon Digital", ko: "마라톤 디지털" }, ticker: "MARA", market: "🇺🇸 US Market" }
];

const INVESTING_HEADLINES = [
    {
        title: "Fed Chair Powell signals 'higher for longer' rates unlikely",
        summary: "Federal Reserve Chair Jerome Powell suggested that interest rates may not need to stay elevated for as long as previously feared.",
        deep: "In a surprisingly dovish statement, Fed Chair Powell indicated that recent inflation data gives the central bank confidence to consider rate cuts sooner than expected. Markets rallied instantly, with tech stocks leading the charge. The implication is a potential 'soft landing' for the economy, avoiding a deep recession while curbing inflation.",
        summaryPoints: {
            en: [
                "Powell signals potential early rate cuts.",
                "Inflation data boosts 'soft landing' hopes.",
                "Tech stocks rally on dovish sentiment."
            ],
            ko: [
                "파월 의장, 예상보다 빠른 금리 인하 가능성 시사.",
                "인플레이션 둔화로 '연착륙' 기대감 상승.",
                "비둘기파적 발언에 기술주 중심 안도 랠리."
            ]
        },
        reason: "Dovish Fed signals lower borrowing costs, boosting growth stocks and general market sentiment.",
        url: "https://www.investing.com/news/economy/fed-chair-powell-signals-higher-for-longer-rates-unlikely-43220"
    },
    {
        title: "NVIDIA shares jump 4% in premarket on analyst upgrade",
        summary: "NVIDIA stock surges in premarket trading after major bank raises price target.",
        deep: "Shares of AI chip giant NVIDIA surged 4% in premarket trading after Goldman Sachs raised its 12-month price target to $1,200. The analysts cited 'insatiable demand' for data center GPUs and the upcoming Blackwell architecture as key drivers. This upgrade reinforces the 'AI Supercycle' narrative.",
        summaryPoints: {
            en: [
                "Goldman Sachs raises price target to $1,200.",
                "Driven by insatiable AI data center demand.",
                "Blackwell architecture seen as key catalyst."
            ],
            ko: [
                "골드만삭스, 목표주가 1,200달러로 상향 조정.",
                "데이터센터 AI 칩 수요 폭발적 증가 지속.",
                "차세대 블랙웰 아키텍처가 핵심 동력으로 작용."
            ]
        },
        reason: "Analyst upgrades directly influence investor confidence and drive short-term price action.",
        url: "https://www.investing.com/news/stock-market-news/nvidia-shares-jump-4-in-premarket-on-analyst-upgrade-43221"
    },
    {
        title: "Bitcoin reclaims $95,000 level amid ETF inflows",
        summary: "Crypto market rallies as institutional capital flows into Spot Bitcoin ETFs accelerate.",
        deep: "Bitcoin has broken back above the $95,000 resistance level, driven by a record week of inflows into US Spot Bitcoin ETFs. Institutional demand appears to be accelerating, with major wealth management platforms now offering access to these products. The rally has dragged related crypto-mining stocks higher.",
        summaryPoints: {
            en: [
                "BTC breaks $95k resistance on strong volume.",
                "Record weekly inflows into Spot ETFs.",
                "Institutional adoption accelerates market rally."
            ],
            ko: [
                "비트코인, 강력한 거래량 동반 95,000달러 돌파.",
                "현물 ETF 주간 자금 유입 역대 최고치 경신.",
                "기관 투자자 진입 가속화로 시장 상승 견인."
            ]
        },
        reason: "Rising crypto prices boost sentiment for fintech and crypto-exposed equities.",
        url: "https://www.investing.com/news/cryptocurrency-news/bitcoin-reclaims-95000-level-amid-etf-inflows-43223"
    },
];

// Professional filler phrases to use when API content is too short
const ANALYST_COMMENTS = {
    en: [
        "Market volatility is expected to remain high in the short term.",
        "Investors are closely monitoring key technical support levels.",
        "Sector rotation is evident as liquidity moves to safe havens.",
        "Volume analysis suggests a potential trend reversal.",
        "Macroeconomic indicators are currently driving sentiment."
    ],
    ko: [
        "단기적으로 시장 변동성이 높게 유지될 것으로 예상됩니다.",
        "투자자들은 주요 기술적 지지선을 주시하고 있습니다.",
        "유동성 이동에 따른 섹터 로테이션이 관측됩니다.",
        "거래량 분석상 추세 전환 가능성이 제기됩니다.",
        "거시경제 지표가 현재 투자 심리를 주도하고 있습니다."
    ]
};

const BACKUP_KOREAN_NEWS = [
    {
        title: "삼성전자, AI 반도체 점유율 확대 기대감에 상승",
        description: "삼성전자가 차세대 HBM 공급 소식에 힘입어 주가가 강세를 보이고 있다. 외국인 매수세가 유입되며 7만전자를 회복했다.",
        content: "삼성전자의 주가가 차세대 고대역폭메모리(HBM) 공급 확대 기대감으로 상승세를 타고 있다. 특히 외국인 투자자들의 대규모 매수세가 유입되면서 주가 상승을 견인하고 있다. 전문가들은 반도체 업황 회복과 AI 수요 증가가 맞물려 실적 개선이 가속화될 것으로 전망하고 있다.",
        source: "한국경제",
        url: "#",
        publishedAt: new Date().toISOString()
    },
    {
        title: "미국 CPI 발표 앞두고 관망세... 환율 1,300원대 유지",
        description: "미국 소비자물가지수(CPI) 발표를 앞두고 시장에 관망세가 짙어지고 있다. 원달러 환율은 보합세를 유지 중이다.",
        content: "이번 주 발표될 미국 소비자물가지수(CPI)에 시장의 이목이 쏠리고 있다. 인플레이션 둔화 속도가 확인될 경우 연준의 금리 인하 시점이 앞당겨질 수 있다는 기대가 나오지만, 여전히 불확실성이 상존해 투자자들은 신중한 모습을 보이고 있다.",
        source: "매일경제",
        url: "#",
        publishedAt: new Date().toISOString()
    },
    {
        title: "이더리움 현물 ETF 승인 가능성, 가상자산 시장 들썩",
        description: "비트코인에 이어 이더리움 현물 ETF 승인 기대감이 커지면서 알트코인 전반이 상승세를 보이고 있다.",
        content: "미국 증권거래위원회(SEC)가 이더리움 현물 ETF를 승인할 가능성이 제기되면서 가상자산 시장이 다시 한 번 달아오르고 있다. 주요 알트코인들이 동반 상승하고 있으며, 이는 기관 자금 유입에 대한 기대감이 반영된 결과로 풀이된다.",
        source: "CoinDesk Korea",
        url: "#",
        publishedAt: new Date().toISOString()
    },
    {
        title: "테슬라, 자율주행 FSD 베타 버전 업데이트 소식에 반등",
        description: "테슬라가 FSD(Full Self-Driving) 베타 버전의 대규모 업데이트를 발표하며 주가가 반등하고 있다. 기술적 완성도에 대한 기대감이 높다.",
        content: "테슬라가 FSD 베타 버전 12를 배포하기 시작했다는 소식이 전해지면서 주가가 상승세로 돌아섰다. 이번 업데이트는 인공지능 신경망을 기반으로 주행 성능을 대폭 개선한 것으로 알려졌다. 시장에서는 로보택시 사업의 가시화 여부에 주목하고 있다.",
        source: "블룸버그",
        url: "#",
        publishedAt: new Date().toISOString()
    },
    {
        title: "네이버, 하이퍼클로바X B2B 시장 공략 가속화",
        description: "네이버가 생성형 AI '하이퍼클로바X'를 앞세워 기업용 시장 공략에 속도를 내고 있다. 다양한 산업군과의 협업이 논의 중이다.",
        content: "네이버가 자체 개발한 거대언어모델(LLM) 하이퍼클로바X의 B2B 적용 사례를 늘려가고 있다. 금융, 유통, 교육 등 다양한 분야의 기업들과 협력하여 맞춤형 AI 솔루션을 제공한다는 계획이다. 이는 네이버의 새로운 성장 동력이 될 것으로 기대된다.",
        source: "전자신문",
        url: "#",
        publishedAt: new Date().toISOString()
    },
    {
        title: "SK하이닉스, HBM3E 양산 준비 완료... 엔비디아 공급 임박",
        description: "SK하이닉스가 차세대 고대역폭메모리 HBM3E의 양산 준비를 마쳤다는 소식이다. 엔비디아 향 공급이 곧 시작될 전망이다.",
        content: "SK하이닉스가 5세대 HBM인 HBM3E의 양산 체제를 갖추고 엔비디아에 샘플 공급을 진행 중이다. 경쟁사 대비 앞선 기술력을 바탕으로 AI 메모리 시장 주도권을 공고히 하겠다는 전략이다. 증권가에서는 SK하이닉스의 목표주가를 잇달아 상향 조정하고 있다.",
        source: "서울경제",
        url: "#",
        publishedAt: new Date().toISOString()
    },
    {
        title: "비트코인 반감기 도래, 채굴 기업들의 생존 경쟁",
        description: "비트코인 반감기가 다가오면서 채굴 기업들의 수익성 악화 우려가 커지고 있다. 효율성이 높은 기업만이 살아남을 것이라는 분석이다.",
        content: "비트코인 채굴 보상이 절반으로 줄어드는 반감기가 임박했다. 채굴 비용 증가로 인해 경쟁력 없는 중소형 채굴 업체들은 도태될 위기에 처했다. 반면 마라톤 디지털 등 대형 업체들은 장비 효율화와 사업 다각화를 통해 위기를 기회로 삼고 있다.",
        source: "코인텔레그래프",
        url: "#",
        publishedAt: new Date().toISOString()
    },
    {
        title: "현대차, 전기차 판매 호조에 실적 기대감 상승",
        description: "현대차의 아이오닉 시리즈가 북미와 유럽 시장에서 판매 호조를 보이며 실적 기대감을 높이고 있다.",
        content: "현대자동차의 전기차 전용 브랜드 아이오닉 시리즈가 글로벌 시장에서 호평을 받고 있다. 특히 미국 인플레이션 감축법(IRA)의 영향에도 불구하고 견조한 판매량을 유지하고 있어 고무적이다. 하이브리드 차량 판매 증가도 실적 방어에 기여하고 있다.",
        source: "오토데일리",
        url: "#",
        publishedAt: new Date().toISOString()
    },
    {
        title: "카카오, 경영 쇄신안 발표... 주가 바닥 찍었나",
        description: "카카오가 고강도 경영 쇄신안을 발표하며 신뢰 회복에 나섰다. 주가가 바닥을 다지고 반등할 수 있을지 주목된다.",
        content: "카카오 그룹이 사법 리스크와 골목상권 침해 논란 등을 해소하기 위해 비상경영체제에 돌입했다. 계열사 정리와 경영진 교체 등 강도 높은 쇄신안을 내놓으며 시장의 신뢰 회복을 꾀하고 있다. 저가 매수세가 유입되며 주가는 소폭 반등하는 모습이다.",
        source: "머니투데이",
        url: "#",
        publishedAt: new Date().toISOString()
    },
    {
        title: "구글 제미나이, AI 검색 엔진 시장 판도 흔들까",
        description: "구글의 멀티모달 AI 제미나이가 검색 엔진에 통합되면서 검색 시장의 변화가 예상된다.",
        content: "구글이 최신 AI 모델 제미나이를 검색 엔진에 전면 도입했다. 기존 키워드 검색 방식을 넘어 복잡한 질문에도 정확한 답변을 제공하는 것이 특징이다. 마이크로소프트의 빙(Bing)과의 AI 검색 주도권 경쟁이 더욱 치열해질 전망이다.",
        source: "ITWorld",
        url: "#",
        publishedAt: new Date().toISOString()
    },
    {
        title: "국제 유가, 중동 지정학적 리스크에 상승세",
        description: "중동 지역의 지정학적 긴장이 고조되면서 국제 유가가 상승세를 보이고 있다. 에너지 관련주에 대한 관심이 필요하다.",
        content: "홍해 물류 대란 등 중동발 리스크가 지속되면서 국제 유가가 배럴당 80달러선을 위협하고 있다. 공급 차질 우려가 커지면서 정유주와 에너지 관련 기업들의 주가가 수혜를 입을 것으로 예상된다.",
        source: "연합뉴스",
        url: "#",
        publishedAt: new Date().toISOString()
    },
    {
        title: "애플, 비전 프로 출시... 메타버스 시장 재점화",
        description: "애플의 공간 컴퓨터 비전 프로가 공식 출시되면서 침체되었던 메타버스 시장이 다시 주목받고 있다.",
        content: "애플이 야심차게 내놓은 MR 헤드셋 비전 프로가 미국에서 판매를 시작했다. 높은 가격에도 불구하고 초기 물량이 매진되는 등 뜨거운 반응을 얻고 있다. 관련 콘텐츠 및 부품주들의 동반 상승이 기대된다.",
        source: "ZDNet Korea",
        url: "#",
        publishedAt: new Date().toISOString()
    }
];

function assignRelatedAssets(title, description) {
    const text = (title + " " + description).toLowerCase();
    const assets = [];
    
    // Check for specific keywords to map assets
    if (text.includes('bitcoin') || text.includes('crypto') || text.includes('비트코인') || text.includes('가상자산') || text.includes('etf')) {
        assets.push(
            { type: 'coin', ticker: 'BTC', name: {en: 'Bitcoin', ko: '비트코인'}, change: (Math.random() * 5 + 1).toFixed(1), price: '96,500', reason: { en: "Market sentiment driven by crypto news.", ko: "가상자산 시장 뉴스에 직접적인 영향을 받습니다." } }
        );
        assets.push(
             { type: 'stock', ticker: 'MARA', name: {en: 'Marathon Digital', ko: '마라톤 디지털'}, change: (Math.random() * 8 - 2).toFixed(1), price: '24.10', reason: { en: "Correlation with Bitcoin price movement.", ko: "비트코인 가격 변동과 높은 상관관계를 가집니다." } }
        );
    } 
    
    if (text.includes('samsung') || text.includes('삼성')) {
        const company = COMPANIES.find(c => c.ticker === '005930.KS');
        if (company) assets.push({ type: 'stock', ...company, change: (Math.random() * 4 - 1).toFixed(1), price: '72,800', reason: { en: "News directly mentions Samsung.", ko: "삼성전자는 HBM 공급 확대로 직접적인 수혜가 예상됩니다." } });
    }

    if (text.includes('apple') || text.includes('애플') || text.includes('iphone')) {
        const company = COMPANIES.find(c => c.ticker === 'AAPL');
        if (company) assets.push({ type: 'stock', ...company, change: (Math.random() * 3 - 1).toFixed(1), price: '182.50', reason: { en: "News directly mentions Apple.", ko: "애플은 신제품 출시 및 시장 반응에 직접적인 영향을 받습니다." } });
    }

    if (text.includes('tesla') || text.includes('테슬라') || text.includes('ev') || text.includes('전기차')) {
        const company = COMPANIES.find(c => c.ticker === 'TSLA');
        if (company) assets.push({ type: 'stock', ...company, change: (Math.random() * 6 - 3).toFixed(1), price: '190.20', reason: { en: "News related to EV market.", ko: "전기차 시장 및 테슬라 관련 뉴스입니다." } });
    }

    if (text.includes('hynix') || text.includes('하이닉스') || text.includes('hbm')) {
        const company = COMPANIES.find(c => c.ticker === '000660.KS');
        if (company) assets.push({ type: 'stock', ...company, change: (Math.random() * 5 + 1).toFixed(1), price: '142,000', reason: { en: "News related to HBM/Semiconductor.", ko: "SK하이닉스는 HBM 시장의 핵심 수혜주입니다." } });
    }
    
    if (text.includes('kakao') || text.includes('카카오')) {
        const company = COMPANIES.find(c => c.ticker === '035720.KS');
        if (company) assets.push({ type: 'stock', ...company, change: (Math.random() * 4 - 2).toFixed(1), price: '54,300', reason: { en: "News directly mentions Kakao.", ko: "카카오는 경영 쇄신 및 플랫폼 사업과 직접 연관되어 있습니다." } });
    }

    if (text.includes('naver') || text.includes('네이버') || text.includes('ai')) {
        const company = COMPANIES.find(c => c.ticker === '035420.KS');
        if (company) assets.push({ type: 'stock', ...company, change: (Math.random() * 3 + 0.5).toFixed(1), price: '205,000', reason: { en: "News related to AI/Platform.", ko: "네이버는 AI 및 플랫폼 사업의 핵심 종목입니다." } });
        // Also add Nvidia for AI news if not already present
         if (text.includes('ai') && !text.includes('naver')) {
             const nvda = COMPANIES.find(c => c.ticker === 'NVDA');
             if (nvda) assets.push({ type: 'stock', ...nvda, change: (Math.random() * 5 + 2).toFixed(1), price: '720', reason: { en: "AI sector news strongly affects Nvidia.", ko: "엔비디아는 글로벌 AI 반도체 시장의 대장주입니다." } });
         }
    }

    // Fallback: If no specific assets found, add a random one relevant to "Market"
    if (assets.length === 0) {
        const randomCompany = COMPANIES[Math.floor(Math.random() * COMPANIES.length)];
        assets.push({ 
            type: 'stock', 
            ...randomCompany, 
            change: (Math.random() * 4 - 2).toFixed(1), 
            price: (Math.random() * 200 + 50).toFixed(0), // Mock price
            reason: { en: "General market movement affects large cap stocks.", ko: "시장 전반의 흐름은 대형주 주가에 영향을 줍니다." } 
        });
    }

    return assets;
}

async function fetchNewsFromGNews() {
    try {
        // Correctly encode the query for Korean characters
        const query = encodeURIComponent('미국 증시 OR 코인 OR 경제');
        const gnewsUrl = `/api/gnews?q=${query}&lang=ko&max=50`;

        // Add timeout to prevent hanging
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        const response = await fetch(gnewsUrl, { signal: controller.signal });
        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`GNews API error: ${response.statusText}`);
        }
        const data = await response.json();

        if (!data.articles || data.articles.length === 0) {
            console.warn('No articles fetched from GNews API, using backup.');
            throw new Error('No articles found'); // Trigger catch to use backup
        }

        return data.articles.map((article, index) => {
            const smartSummary = generateSmartSummary(article.description, article.content);
            const relatedAssets = assignRelatedAssets(article.title, article.description); // Assign related assets
            return {
                id: `gnews-${index}`,
                title: { en: article.title, ko: article.title },
                source: article.source.name,
                url: article.url,
                flag: '📰 주요 뉴스',
                timestamp: article.publishedAt,
                summary: smartSummary,
                deep: { en: article.content || article.description || 'No detailed content available.', ko: article.content || article.description || '상세 내용 없음.' },
                relatedAssets: relatedAssets
            };
        });
    } catch (error) {
        console.warn("Using Backup Korean News due to API error:", error);

        // Return Backup Data formatted correctly
        return BACKUP_KOREAN_NEWS.map((article, index) => {
            const smartSummary = generateSmartSummary(article.description, article.content);
            const relatedAssets = assignRelatedAssets(article.title, article.description); // Assign related assets
            return {
                id: `backup-news-${index}`,
                title: { en: article.title, ko: article.title },
                source: article.source,
                url: article.url,
                flag: '📰 주요 뉴스 (백업)',
                timestamp: article.publishedAt,
                summary: smartSummary,
                deep: { en: article.content, ko: article.content },
                relatedAssets: relatedAssets
            };
        });
    }
}

function generateSmartSummary(description, content) {
    // 1. Try to use description first
    let text = description || content || "";
    
    // Remove ellipses and clean up
    text = text.replace(/\.\.\.$/, '').trim();

    // Split into sentences using regex that looks for . ! ? followed by space or end of string
    let sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    sentences = sentences.map(s => s.trim()).filter(s => s.length > 10); // Filter out very short junk

    // If we have less than 3 sentences, try to look at 'content' if it's different/longer
    if (sentences.length < 3 && content && content !== description) {
        let contentSentences = content.match(/[^.!?]+[.!?]+/g) || [];
        contentSentences = contentSentences.map(s => s.trim()).filter(s => s.length > 10);
        // Add unique sentences from content
        for (let s of contentSentences) {
            if (!sentences.includes(s)) sentences.push(s);
            if (sentences.length >= 3) break;
        }
    }

    // Since source is now Korean:
    let koSummary = [];
    if (sentences.length >= 3) {
        koSummary = sentences.slice(0, 3);
    } else {
        koSummary = [...sentences];
        // Fill remaining lines with varied professional Korean comments
        while (koSummary.length < 3) {
            const randomComment = ANALYST_COMMENTS.ko[Math.floor(Math.random() * ANALYST_COMMENTS.ko.length)];
            if (!koSummary.includes(randomComment)) {
                koSummary.push(randomComment);
            } else {
                koSummary.push("전문가들은 시장 추이를 주시하고 있습니다.");
            }
        }
    }

    // For English summary, we just copy the Korean summary since we can't translate.
    // Ideally we would have English news, but the requirement is to fix the Korean view.
    let enSummary = [...koSummary]; 

    return {
        en: enSummary,
        ko: koSummary
    };
}

function createInvestingNews() {
    return INVESTING_HEADLINES.map((headline, index) => {
        let relatedAssets = [];
        if (headline.title.toLowerCase().includes('bitcoin')) {
            relatedAssets = [
                { type: 'coin', ticker: 'BTC', name: {en: 'Bitcoin', ko: '비트코인'}, change: (Math.random() * 10 - 2).toFixed(1), price: '95,123', reason: { en: "Bitcoin price is directly impacted by ETF inflows and institutional demand.", ko: "비트코인 가격은 ETF 자금 유입과 기관 수요에 직접적인 영향을 받습니다." } },
                { type: 'stock', ticker: 'MARA', name: {en: 'Marathon Digital', ko: '마라톤 디지털'}, change: (Math.random() * 15 + 1).toFixed(1), price: '25.50', reason: { en: "As a major Bitcoin miner, Marathon's profitability is highly correlated with BTC price movements.", ko: "주요 비트코인 채굴 기업으로서, 마라톤 디지털의 수익성은 BTC 가격 변동과 높은 상관관계를 가집니다." } }
            ];
        } else if (headline.title.toLowerCase().includes('nvidia')) {
            const company = COMPANIES.find(c => c.ticker === 'NVDA');
            relatedAssets.push({ type: 'stock', ...company, change: (Math.random() * 5 + 1).toFixed(1), price: (Math.random() * 500 + 50).toFixed(0), reason: { en: headline.reason, ko: "해당 뉴스는 즉각적인 시장 반응을 이끌어낼 수 있는 주요 단기 호재/악재입니다." } });
        } else {
            const company = COMPANIES[Math.floor(Math.random() * COMPANIES.length)];
            relatedAssets.push({ type: 'stock', ...company, change: (Math.random() * 5 + 1).toFixed(1), price: (Math.random() * 500 + 50).toFixed(0), reason: { en: headline.reason, ko: "해당 뉴스는 즉각적인 시장 반응을 이끌어낼 수 있는 주요 단기 호재/악재입니다." } });
        }

        return {
            id: `investing-${index}`,
            title: { en: headline.title, ko: `[Investing.com] ${headline.title}` },
            source: "Investing.com (Breaking)",
            url: headline.url,
            flag: "⚡ Breaking News",
            timestamp: new Date().toISOString(),
            // Use the pre-defined professional summary points
            summary: headline.summaryPoints, 
            deep: { en: headline.deep, ko: "이 분석은 Investing.com Breaking News 헤드라인을 바탕으로 AI가 생성한 시뮬레이션입니다. " + headline.deep },
            relatedAssets: relatedAssets
        };
    });
}

const STOCK_DETAILS = {
    "DEFAULT": { marketCap: "---", per: "---", sector: "Tech/Industry", desc: { en: "Detailed company information is available in the full version.", ko: "상세 기업 정보는 정식 버전에서 제공됩니다." } }
};

let currentLang = 'ko'; 
const ITEMS_PER_PAGE = 9;
let currentPage = 1;
let filteredNews = [];

const UI_TEXT = {
    'ko': {
        pageTitle: "오늘의 주요 증시 뉴스",
        pageDesc: "실시간 뉴스와 주요 헤드라인을 확인하세요.",
        summaryTitle: "🤖 AI 3줄 요약",
        affectedStocks: "관련 자산:",
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
        beneficiaryTitle: "💡 왜 이 자산이 영향을 받나요?",
        searchPlaceholder: "뉴스 제목 또는 종목 검색 (예: Apple, AAPL)..."
    },
    'en': {
        pageTitle: "Today's Top Market News",
        pageDesc: "Check out real-time news and major headlines.",
        summaryTitle: "🤖 AI 3-Line Summary",
        affectedStocks: "Affected Assets:",
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
        beneficiaryTitle: "💡 Why is this asset affected?",
        searchPlaceholder: "Search news or tickers (e.g., Apple, AAPL)..."
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = parseInt(urlParams.get('page'));
    if (pageParam && pageParam > 0) {
        currentPage = pageParam;
    }

    const investingNews = createInvestingNews();
    const gNews = await fetchNewsFromGNews();
    
    MOCK_NEWS.length = 0;
    MOCK_NEWS.push(...investingNews, ...gNews);
    MOCK_NEWS.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    filteredNews = [...MOCK_NEWS];

    initTheme();
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
            const tickerMatch = news.relatedAssets.some(a => 
                a.ticker.toLowerCase().includes(query) || 
                a.name[currentLang].toLowerCase().includes(query)
            );
            return title.includes(query) || tickerMatch;
        });
    }
    
    currentPage = 1;
    renderNews();
}

function renderNews() {
    const grid = document.getElementById('news-grid');
    grid.innerHTML = ''; 

    const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
    
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = filteredNews.slice(startIndex, endIndex);

    if (filteredNews.length === 0) {
        grid.innerHTML = `<p style="text-align:center; grid-column: 1/-1; color: #888;">No news found. Please try again later.</p>`;
    } else {
        currentItems.forEach(news => {
            const card = createNewsCard(news);
            grid.appendChild(card);
        });
    }

    renderPagination(totalPages);
    
    const url = new URL(window.location);
    url.searchParams.set('page', currentPage);
    window.history.pushState({}, '', url);
}

function renderPagination(totalPages) {
    const container = document.getElementById('pagination');
    container.innerHTML = '';
    
    if (totalPages <= 1) return;

    const texts = UI_TEXT[currentLang];

    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn';
    prevBtn.textContent = texts.prev;
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => changePage(currentPage - 1);
    container.appendChild(prevBtn);

    let startPage = Math.max(1, currentPage - 3);
    let endPage = Math.min(totalPages, currentPage + 3);

    if (currentPage < 5) {
        endPage = Math.min(totalPages, 7);
    }
    if (currentPage > totalPages - 4) {
        startPage = Math.max(1, totalPages - 6);
    }


    for (let i = startPage; i <= endPage; i++) {
        const btn = document.createElement('button');
        btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        btn.textContent = i;
        btn.onclick = () => changePage(i);
        container.appendChild(btn);
    }

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

    const assetButtons = news.relatedAssets.map(asset => {
        const trendClass = asset.change >= 0 ? 'trend-up' : 'trend-down';
        const arrow = asset.change >= 0 ? '▲' : '▼';
        // Handle localized name object or fallback string
        const assetName = (typeof asset.name === 'object' && asset.name[currentLang]) ? asset.name[currentLang] : (asset.name.en || asset.name);

        if (asset.type === 'coin') {
            return `
                <button class="coin-btn" onclick="openAssetModal('${news.id}', '${asset.ticker}')">
                    <span class="asset-ticker">${assetName}</span>
                    <span class="${trendClass}">${arrow} ${Math.abs(asset.change)}%</span>
                </button>
            `;
        }
        return `
            <button class="stock-btn" onclick="openAssetModal('${news.id}', '${asset.ticker}')">
                <span class="asset-ticker">${assetName}</span>
                <span class="${trendClass}">${arrow} ${Math.abs(asset.change)}%</span>
            </button>
        `;
    }).join('');

    card.innerHTML = `
        <div class="news-header">
            <span class="news-flag">${news.flag}</span>
            <span class="news-time">${new Date(news.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        </div>
        <h3 class="news-title" onclick="openNewsModal('${news.id}')">${title}</h3>
        <span class="news-source">${texts.source}${news.source}</span>
        
        <div class="summary-box">
            <span class="summary-title">${texts.summaryTitle}</span>
            <ul class="summary-list">
                ${summaryItems}
            </ul>
        </div>

        <button class="detail-btn" onclick="openNewsModal('${news.id}')">${texts.deepDive}</button>

        <div class="related-section">
            <span class="related-label">${texts.affectedStocks}</span>
            ${assetButtons}
        </div>
    `;

    return card;
}

window.openAssetModal = function(newsId, ticker) {
    const modal = document.getElementById('stock-modal');
    modal.dataset.newsId = newsId;
    const news = MOCK_NEWS.find(n => n.id === newsId);
    if (!news) return;

    const asset = news.relatedAssets.find(a => a.ticker === ticker);
    if (!asset) return;

    const texts = UI_TEXT[currentLang];
    
    // Handle localized name
    const assetName = (typeof asset.name === 'object' && asset.name[currentLang]) ? asset.name[currentLang] : (asset.name.en || asset.name);
    document.getElementById('modal-stock-name').textContent = assetName;
    
    document.getElementById('modal-stock-ticker').textContent = ticker;
    document.getElementById('modal-price').textContent = (asset.type === 'stock' && asset.ticker.includes('.KS')) ? '₩' + asset.price : '$' + asset.price;
    
    const changeEl = document.getElementById('modal-change');
    const change = parseFloat(asset.change);
    changeEl.textContent = (change >= 0 ? '+' : '') + change + '%';
    changeEl.className = 'price-change ' + (change >= 0 ? 'positive' : 'negative');
    
    const beneficiarySection = document.getElementById('beneficiary-analysis-section');
    beneficiarySection.querySelector('h3').textContent = texts.beneficiaryTitle;
    document.getElementById('modal-beneficiary-reason').textContent = asset.reason[currentLang];

    const stockInfoGrid = document.querySelector('.stock-info-grid');
    const companyDescription = document.querySelector('.modal-description');

    if (asset.type === 'coin') {
        stockInfoGrid.style.display = 'none';
        companyDescription.style.display = 'none';
    } else {
        stockInfoGrid.style.display = 'grid';
        companyDescription.style.display = 'block';

        let details = STOCK_DETAILS[ticker] || STOCK_DETAILS["DEFAULT"];
        
        document.getElementById('modal-market-cap').textContent = details.marketCap;
        document.getElementById('modal-per').textContent = details.per;
        document.getElementById('modal-sector').textContent = details.sector;
        
        const descText = (typeof details.desc === 'object') ? details.desc[currentLang] : details.desc;
        document.getElementById('modal-desc').textContent = descText;

        const labels = document.querySelectorAll('.info-item label');
        labels[0].textContent = texts.marketCap;
        labels[1].textContent = texts.per;
        labels[2].textContent = texts.sector;
        labels[3].textContent = texts.rating;
        document.querySelector('.modal-description h3').textContent = texts.companyInfo;
        document.getElementById('modal-rating').textContent = texts.buy;
    }

    renderTradingViewWidget(asset.ticker, asset.type);
    modal.classList.remove('hidden');
};

function renderTradingViewWidget(ticker, type) {
    const container = document.getElementById('tradingview-widget-container');
    container.innerHTML = '';

    let symbol;
    if (type === 'coin') {
        symbol = `BINANCE:${ticker}USDT`;
    } else {
        symbol = ticker.endsWith('.KS') ? `KRX:${ticker.replace('.KS', '')}` : `NASDAQ:${ticker}`;
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
        "symbols": [[symbol + "|1D"]],
        "chartOnly": false,
        "width": "100%",
        "height": "100%",
        "locale": currentLang === 'ko' ? 'kr' : 'en',
        "colorTheme": currentTheme,
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
        "dateRanges": ["1d|1", "1m|30", "3m|60", "12m|1D", "60m|1W", "all|1M"]
    });
    
    container.appendChild(script);
}

window.openNewsModal = function(id) {
    const news = MOCK_NEWS.find(n => n.id === id);
    if (!news) return;

    const modal = document.getElementById('news-modal');
    const texts = UI_TEXT[currentLang];

    document.getElementById('news-modal-flag').textContent = news.flag;
    document.getElementById('news-modal-date').textContent = new Date(news.timestamp).toLocaleString();
    document.getElementById('news-modal-title').textContent = news.title[currentLang];
    document.getElementById('news-modal-body').textContent = news.deep[currentLang];
    document.querySelector('.ai-analysis-box h3').textContent = texts.deepDiveHeader;
    document.getElementById('news-modal-source').textContent = texts.source + news.source;
    const linkBtn = document.getElementById('news-modal-link');
    linkBtn.textContent = texts.viewOriginal;
    linkBtn.href = news.url;

    modal.classList.remove('hidden');
}

window.closeAssetModal = function() {
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
            closeAssetModal();
        }
        if (event.target == newsModal) {
            closeNewsModal();
        }
    }

    document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
    document.getElementById('search-input').addEventListener('input', handleSearch);
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
}

let currentTheme = 'light';

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    applyTheme();
}

function applyTheme() {
    document.body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    
    const modal = document.getElementById('stock-modal');
    if (!modal.classList.contains('hidden')) {
        const ticker = document.getElementById('modal-stock-ticker').textContent;
        const newsId = modal.dataset.newsId;
        if (ticker && newsId) {
            const newsItem = MOCK_NEWS.find(n => n.id === newsId);
            if (newsItem) {
                const asset = newsItem.relatedAssets.find(a => a.ticker === ticker);
                if (asset) {
                    renderTradingViewWidget(ticker, asset.type);
                }
            }
        }
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme();
}
