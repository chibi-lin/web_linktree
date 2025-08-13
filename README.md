# MUJIN 作品集網站

## 概述
這是 **MUJIN** 的個人作品集網站原始碼，用於展示插畫和動畫委託服務。網站使用 **HTML**、**CSS** 和 **JavaScript** 構建，託管於 **GitHub Pages**，並透過 **Cloudflare** 管理自定義域名（`mujinbensin.com`）及 SSL/TLS 設置。

網站採用清新、響應式的設計，包含五個導航標籤：社群連結、插畫委託、動畫委託、注意事項和關於我。網站內提供詳細的價格表、工作流程和委託指南，方便潛在客戶了解服務內容。

## 功能
- **響應式設計**：適配桌面和移動設備，具備自適應佈局和觸控友好的導航。
- **標籤導航**：基於 JavaScript 的標籤系統，支援在社群連結、插畫、動畫、注意事項和關於我之間切換。
- **價格表**：提供插畫和動畫委託的詳細價格，包括時程和起價。
- **工作流程展示**：詳細介紹插畫和動畫委託的步驟流程。
- **自定義樣式**：採用柔和色調的設計，包含平滑動畫和懸停效果，使用 CSS 自定義屬性。
- **返回頂部按鈕**：提供平滑滾動至頁面頂部的功能，提升用戶體驗。
- **外部連結**：提供社群平台連結（例如 Discord、Patreon、Pixiv），方便客戶聯繫。

## 檔案結構
- **index.html**：網站主檔案，包含頁頭、導航標籤、內容區塊和頁腳的結構。
- **style.css**：包含所有樣式，支援 CSS 自定義屬性、響應式設計和動畫（例如名稱波浪效果、懸停效果）。
- **main.js**：處理標籤導航、活動狀態管理和返回頂部功能，使用原生 JavaScript。
- **CNAME**：包含自定義域名（`mujinbensin.com`），用於 GitHub Pages 配置。

## 設置與部署
1. **克隆儲存庫**：
   ```bash
   git clone https://github.com/chibi-lin/mujinbensin.com.git
   ```
2. **安裝依賴**：本專案使用純 HTML、CSS 和 JavaScript，無需額外依賴。
3. **本地開發**：
   - 在瀏覽器中打開 `index.html` 以預覽網站。
   - 或者使用本地伺服器（例如 `python -m http.server` 或 `npx serve`）進行更準確的預覽。
4. **部署到 GitHub Pages**：
   - 確保儲存庫已啟用 GitHub Pages，並設置為從 `main` 分支發布。
   - 添加 `CNAME` 檔案，內容為自定義域名（`mujinbensin.com`）。
   - 推送更改至 `main` 分支以觸發部署。
5. **配置自定義域名**：
   - 在 GitHub Pages 設置中，將自定義域名設為 `mujinbensin.com`。
   - 在 Cloudflare 中配置 DNS 記錄：
     - A 記錄（`mujinbensin.com`）指向 GitHub Pages 的 IP 地址：
       ```
       185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
       ```
     - CNAME 記錄（`www.mujinbensin.com`）指向 `chibi-lin.github.io`。
     - 將代理狀態設為 **僅 DNS（DNS Only）**，以確保與 GitHub Pages 的 HTTPS 相容。
   - 在 Cloudflare 中，將 SSL/TLS 模式設為 **完全（Full）**，以確保 HTTPS 正常運行。
6. **驗證 HTTPS**：
   - 等待 DNS 傳播（最多 24 小時）後，在 GitHub Pages 設置中啟用 **強制 HTTPS**。
   - 測試網站是否可透過 `https://mujinbensin.com` 訪問。

## 使用方法
- **導航**：點擊標籤按鈕（例如社群連結、插畫、動畫）切換內容區塊。活動標籤會儲存在 `localStorage` 中，頁面重新載入後保持不變。
- **委託詳情**：在插畫和動畫標籤下查看價格表和工作流程。
- **社群連結**：透過社群連結區塊訪問外部平台（例如 Discord、Patreon、Pixiv）。
- **返回頂部**：使用右下角的固定按鈕平滑滾動至頁面頂部。

## 注意事項
- **HTTPS 問題**：若 HTTPS 不可用，請確認 Cloudflare 中 `mujinbensin.com` 和 `www.mujinbensin.com` 的代理狀態為 **僅 DNS**，並確保 SSL/TLS 模式為 **完全（Full）**。等待 GitHub Pages 生成 Let’s Encrypt 證書（可能需數小時）。
- **委託條款**：網站詳細列出委託規則，例如動畫不接受 NSFW 內容、不接受急件、特定檔案格式（例如 .PSD、.MP4）。
- **自定義域名**：網站使用 `mujinbensin.com` 作為自定義域名，DNS 透過 Cloudflare 管理。確保 DNS 記錄正確配置，以避免 HTTPS 或網站訪問問題。

## 聯繫方式
如有委託或問題，請透過以下方式聯繫：
- **Discord**：見社群連結區塊。
- **電子郵件**：見社群連結區塊。
- **其他平台**：Patreon、Pixiv、Twitter (X)、Bluesky 等，詳見社群連結區塊。

## 版權
© 2025 MUJIN — 保留所有權利。