import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', margin: '20px' }}>
      {/* JavaScript Section */}
      <h1>JavaScript</h1>
      <br />
      <p style={{ textIndent: '2em' }}>
        JavaScript 是一種高級、直譯式、動態的程式語言，最初由 Netscape 的 Brendan Eich 於 1995 年創造，並成為 ECMAScript 標準的一部分，JavaScript、HTML 和 CSS 共同運作，用於增強網頁的互動性和動態行為，JavaScript 能夠在桌面瀏覽器、移動瀏覽器和伺服器端環境（如 Node.js）上運行，並且允許變量在運行時改變其類型，採用原型繼承模型。
      </p>
      <br />
      <h2>應用領域：</h2>
      <p style={{ textIndent: '2em' }}>
        JavaScript 的應用包括網頁前端開發、伺服器端開發、行動應用開發和桌面應用開發，在網頁前端開發中，JavaScript 主要用於增強網頁的互動性，實現各種動態效果和用戶界面功能，常見的應用包括表單驗證、動畫效果和即時數據更新等，在伺服器端開發方面，利用 Node.js，JavaScript 也可以在伺服器端運行，開發高效的網路應用和後端服務，Node.js 提供了豐富的工具，使伺服器端的開發變得更加便捷，JavaScript 還可以用於開發行動應用程式，例如：利用 React Native 可以開發跨平台的行動應用，利用 Electron 框架可以用於開發跨平台的桌面應用。
      </p>
      <br />
      <h2>常見框架：</h2>
      <ul>
        <li><b>React：</b> 由 Facebook 開發，用於構建用戶界面，特別是單頁應用程式（SPA）。</li>
        <li><b>Angular：</b> 由 Google 開發，用於構建複雜的單頁應用程式，提供了完整的解決方案。</li>
        <li><b>Vue.js：</b> 漸進式框架，用於構建用戶界面，易於學習和使用。</li>
        <li><b>jQuery：</b> 輕量級庫，用於簡化 DOM 操作和事件處理。</li>
      </ul>
      <br />
      <h2>優勢：</h2>
      <p style={{ textIndent: '2em' }}>
        JavaScript 的優勢在於其高性能、廣泛支持和豐富的生態系統，現代瀏覽器引擎對 JavaScript 進行了高度優化，使其運行速度非常快，作為網頁開發的標準，所有現代瀏覽器都支持 JavaScript。
      </p>
      <p style={{ textIndent: '2em' }}>
        總的來說，JavaScript 是一種強大且靈活的程式語言，適用於各種網路應用和服務的開發，它的高性能、跨平台性和豐富的生態系統使其成為許多開發者的首選。
      </p>
      <br />
      <h2>參考資料：</h2>
      <ul>
        <li><a href="https://aws.amazon.com/tw/what-is/javascript/" target="_blank" rel="noopener noreferrer">AWS</a></li>
        <li><a href="https://zh.wikipedia.org/zh-tw/JavaScript" target="_blank" rel="noopener noreferrer">Wikipedia</a></li>
        <li><a href="https://developer.mozilla.org/zh-TW/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">MDN Web Docs - JavaScript 基礎</a></li>
        <li><a href="https://developer.mozilla.org/zh-TW/docs/Learn/Getting_started_with_the_web/JavaScript_basics" target="_blank" rel="noopener noreferrer">MDN Web Docs - JavaScript</a></li>
      </ul>
      <br />
      <Link href = "./sideMenu"> Return </Link>
    </div>
  );
};

export default Page;
