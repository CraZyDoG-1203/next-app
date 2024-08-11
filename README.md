This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



# Next.js 主頁

## 簡介
這個 Next.js 主頁元件是整個應用程式的入口點，負責渲染主頁面上的基本結構。

## 功能
- 渲染 `ClientSideMenu` 元件，作為頁面的側邊導航菜單，按下即可跳出側邊欄。

## 依賴模組
- `next/link` 用於導航鏈接。
- `ClientSideMenu` 自定義側邊菜單元件，並在主頁中渲染。

## 元件說明

### `ClientSideMenu`
從 `./components/sideMenu/page` 模組引入，這個元件是在頁面中渲染的側邊菜單，提供頁面的導航功能。

## 使用指南
- 安裝依賴項：確保你已經安裝了 Next.js 和 React。
- 執行應用程式：在 terminal 執行 `npm run dev`。

---

# ClientSideMenu

## 簡介
`ClientSideMenu` 是一個使用 Next.js 構建的客戶端側導航菜單元件。此元件使用 React 的 `useState` 鉤子來控制子菜單的顯示和隱藏，並提供多個導航鏈接，方便用戶在應用程式的不同頁面之間進行切換。

## 功能
- 顯示或隱藏導航子菜單。
- 提供指向應用程式內部不同頁面的快速鏈接。

## 使用的技術
- Next.js：React 框架，用於伺服器端渲染和生成靜態網站。
- React：用於構建使用者介面的 JavaScript 庫。
- `useState` 鉤子：管理子菜單的開關狀態。

## 方法和操作

### `useState` 鉤子
- `Contents`: 一個布林值，用於控制子菜單的顯示 (`true`) 或隱藏 (`false`)。
- `toggleSubmenu`: 切換 `Contents` 狀態的函數，用於顯示或隱藏子菜單。

## 返回的 JSX
元件返回一個包含導航按鈕和鏈接的 `div` 元素。當用戶點擊導航按鈕時，子菜單顯示或隱藏。子菜單中包含多個指向應用程式內不同頁面的 `Link` 鏈接。

## 結構
- `button` 元素：用於控制子菜單的顯示或隱藏。
- `div` 元素：包含導航鏈接，只有在 `Contents` 為 `true` 時才顯示。

## 子菜單內容
- **Users**: 導航到 `/components/users` 頁面。
- **City List**: 導航到 `/components/cityList` 頁面。
- **Zero Knowledge Proof**: 導航到 `/components/zkp` 頁面。
- **Next.js**: 導航到 `/components/next.js` 頁面。
- **RESTful API**: 導航到 `/components/RestfulAPI` 頁面。
- **Node**: 導航到 `/components/Node` 頁面。
- **Javascript**: 導航到 `/components/Javascript` 頁面。

---

# UsersPage

## 簡介
`UsersPage` 是一個用於顯示使用者列表的 Next.js 頁面元件。它從 JSONPlaceholder (external API) 中獲取使用者資料，並將這些資料渲染成一個表格顯示在頁面上。這個頁面還包括當前時間的顯示以及一個返回到側邊菜單的鏈接。

## 功能
- 從外部 API 獲取使用者資料。
- 將使用者的名稱和電子郵件顯示在表格中。
- 顯示當前時間。
- 提供一個返回側邊菜單的鏈接。

## 使用的技術
- Next.js：React 框架，用於伺服器端渲染和生成靜態網站。
- TypeScript：為 React 元件定義型別，增強程式碼的健壯性和可維護性。

## 依賴模組
- `next/link` 用於在頁面之間導航。
- `React` 用於構建使用者介面的 JavaScript 庫。

### `User` 介面
- `id`: 使用者的唯一標識符，數字型別。
- `name`: 使用者的名稱，字串型別。
- `email`: 使用者的電子郵件，字串型別。

### `fetch` 操作
`UsersPage` 中使用 `fetch` 方法從 `https://jsonplaceholder.typicode.com/users` 這個 API 端點獲取使用者資料。資料會被解析成 `User` 對象的數組。

## 返回的 JSX
元件返回一個包含使用者名稱和電子郵件的表格，還顯示了當前時間。頁面底部有一個返回到側邊菜單的鏈接。

## 使用指南
- 頁面訪問：此元件被作為 Next.js 應用中的一個頁面元件，可以通過在瀏覽器中訪問 `/users` 來查看。
- 資料更新：每次訪問頁面時，元件都會從 API 實時獲取最新的使用者資料，並顯示在頁面上。

## 結構
- `h1` 標籤顯示頁面標題 "Users"。
- `table` 標籤顯示使用者資料的表格。
- `p` 標籤顯示當前時間。
- `Link` 元件用於導航回側邊菜單頁面。

---

# CityList

## 簡介
`CityList` 是一個 React 元件，用於根據條件渲染內容。具體來說，它會顯示一個城市列表，如果列表為空，則會顯示一條消息 "No items found"。這個元件展示了如何在 React 中進行條件渲染，並且使用了不同的方式來實現這一功能。

## 功能
- 顯示一個城市列表。
- 使用條件運算符 `&&` 來進行條件渲染。

## 使用的技術
- React：用於構建使用者介面的 JavaScript 庫。
- CSS 模塊：使用 `./ConditionalRendering.module.css` 進行樣式設置。
- Next.js：React 框架，用於伺服器端渲染和生成靜態網站。

## 方法和操作

### 頁面標題 "List"。
- 當城市列表為空時，顯示消息 "No items found"。
- 當城市列表不為空時，顯示一個無序列表（`<ul>`），其中包含所有城市的列表項目（`<li>`）。
- 返回側邊菜單的鏈接。

### `city` 列表
- `city`: 包含城市名稱的數組（`["New York", "Tokyo", "London", "Paris", "Berlin"]`）。通過設置該數組可以控制渲染的內容，將 `city` 設置為空數組可以測試顯示 "No items found" 的效果。

### 條件渲染
- 條件運算符 `&&`: 當 `city.length === 0` 時，顯示消息 "No items found"。
- 備選方法: 注釋部分展示了其他可用的條件渲染方法，如三元運算符和函數調用。

## 使用指南
- 列表展示: 默認情況下會展示五個城市的列表。可以通過修改 `city` 數組來測試不同的情況，例如將 `city` 設置為空數組來觸發 "No items found" 消息。
- 樣式設置: `ConditionalRendering.module.css` 模塊包含了自定義的樣式設置，可以根據需要進行修改。
- 導航: 頁面底部提供了返回側邊菜單的鏈接，用戶可以點擊此鏈接返回導航頁面。

## 結構
- `h1` 標籤: 顯示頁面標題 "List"。
- `p` 標籤: 顯示提示消息。
- `ul` 標籤: 當城市列表不為空時，顯示每個城市的 `li` 元素。
- `Link` 元件: 用於返回側邊菜單頁面。

---

# 零知識證明 (ZKP) - 外部文檔

## 檔案描述
該檔案

旨在提供關於零知識證明 (ZKP) 的概述，這是一種在不暴露秘密資訊的情況下證明陳述真實性的方法。

## 功能
提供零知識證明的基本概念及其應用。

## 使用指南
由於此檔案不包含特定的程式碼，只是對概念的描述，用戶可以參考以瞭解更多技術細節和應用場景。

---

# Next.js 應用 (外部文檔)

## 檔案描述
該檔案為 Next.js 的基本介紹，包括如何安裝、設定、及使用該框架來構建伺服器端渲染的 React 應用程式。

## 功能
提供 Next.js 的安裝及基本使用說明。

## 使用指南
該檔案主要適用於對 Next.js 有基本瞭解的開發人員。請遵循檔案中的步驟來安裝和設置 Next.js。

---

# RESTful API - 外部文檔

## 檔案描述
該檔案介紹了如何設計和使用 RESTful API，並列出了一些實際操作的步驟和範例。

## 功能
提供 RESTful API 的設計原則和最佳實踐指南。

## 使用指南
此檔案適用於後端開發者，旨在幫助他們設計和實現基於 REST 的 API。

---

# Node.js 應用 (外部文檔)

## 檔案描述
該檔案為 Node.js 的基本介紹，包括如何使用該環境來執行 JavaScript 程式及構建伺服器端應用。

## 功能
提供 Node.js 的安裝及基本操作指南。

## 使用指南
檔案中的內容適合新手開發者，可以幫助他們了解並開始使用 Node.js。

---

# JavaScript - 外部文檔

## 檔案位置
Page.js

## 檔案描述
該檔案是使用 Next.js 框架開發的 React 組件，介紹了 JavaScript 的基本概念、歷史及其在網頁開發中的應用。頁面還描述了 JavaScript 是如何成為現代網頁開發的核心語言，並涵蓋了其動態性、跨平台能力及主要用途。

## 主要功能
- 提供 JavaScript 的基本介紹和歷史背景。
- 解釋 JavaScript 在現代網頁開發中的應用和重要性。
- 提供相關參考資料連結。
- 允許使用者返回上一頁的選項。

## 關鍵部分
- **h1**: 顯示標題 "JavaScript"。
- **p**: 詳細描述 JavaScript 的歷史、特點及應用場景。
- **ul**: 列出 JavaScript 的主要用途和優勢。
- **Link**: 提供返回上一頁的連結。

## 使用指南
- **導航**: 頁面底部提供了返回側邊菜單的鏈接，用戶可以點擊此鏈接返回導航頁面。
