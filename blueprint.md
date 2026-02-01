# Project Blueprint: Stock News Insight (주식 뉴스 인사이트)

## Overview
A dashboard application that aggregates US and Korean stock market news, provides AI-generated 3-line summaries, and visually links news to related beneficiary stocks.

## Key Features
1.  **News Feed:** Displays curated market news (refreshed conceptually every 12 hours).
2.  **Smart Summaries:** Each news item includes a concise 3-line summary.
3.  **Impact Analysis:** clearly identifies related stocks (Beneficiaries/Affected tickers).
4.  **Stock Details:** Interactive elements allowing users to click a stock ticker to view detailed information (Price, Trend, Company Info).
5.  **Language and Theme Toggles:** Allows users to switch between English and Korean, and between light and dark themes.
6.  **Search:** Users can search for news by title or ticker.

## Architecture
-   **Frontend:** Vanilla HTML, CSS (Modern Flexbox/Grid), JavaScript (ES Modules).
-   **Backend:** A simple Node.js proxy server to handle API requests to the GNews API, avoiding CORS issues and securely managing the API key.
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

## Changes and Fixes
-   **Fixed Search Functionality:** The search was broken due to a bug where the code was trying to perform a string operation on an object. This has been fixed to correctly search by asset name in the selected language.
-   **Fixed Modal Close Button:** The stock detail modal's close button was not working because it was calling a non-existent function. This has been corrected.
-   **Implemented a Proxy Server:** Replaced the unreliable `cors-anywhere` proxy with a local Node.js proxy server. This makes the application more robust and secure.
-   **Secured API Key:** The GNews API key is no longer hardcoded in the frontend JavaScript. It is now stored as an environment variable and used by the proxy server, which is a much more secure practice.

## Original Plan
1.  **Setup:** clear previous files and initialize new structure.
2.  **UI Development:** Build the responsive grid and card styles.
3.  **Logic:** Implement the mock data generator and rendering logic.
4.  **Interactivity:** Add click handlers for stock details and modal views.
