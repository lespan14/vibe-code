# Project Blueprint: Stock News Insight (주식 뉴스 인사이트)

## Overview
A dashboard application that aggregates US and Korean stock market news, provides AI-generated 3-line summaries, and visually links news to related beneficiary stocks.

## Key Features
1.  **News Feed:** Displays curated market news (refreshed conceptually every 12 hours).
2.  **Smart Summaries:** Each news item includes a concise 3-line summary.
3.  **Impact Analysis:** clearly identifies related stocks (Beneficiaries/Affected tickers).
4.  **Stock Details:** Interactive elements allowing users to click a stock ticker to view detailed information (Price, Trend, Company Info).

## Architecture
-   **Frontend:** Vanilla HTML, CSS (Modern Flexbox/Grid), JavaScript (ES Modules).
-   **Data Simulation:** 
    -   Since real-time financial APIs require keys/backend, we will use a **Mock Data Service** that simulates fetching fresh news with summaries and stock data.
    -   The "12-hour update" will be simulated by timestamp logic in the frontend.

## User Interface (UI)
-   **Theme:** Professional Financial Dashboard (Dark/Light mode support, default Light).
-   **Layout:** Masonry or Grid layout for News Cards.
-   **Components:**
    -   `NewsCard`: Title, Summary, Tags, Related Stock Buttons.
    -   `StockModal`: Overlay showing specific stock details when clicked.
    -   `Header`: Date, Market Status (Open/Close).

## Plan
1.  **Setup:** clear previous files and initialize new structure.
2.  **UI Development:** Build the responsive grid and card styles.
3.  **Logic:** Implement the mock data generator and rendering logic.
4.  **Interactivity:** Add click handlers for stock details and modal views.