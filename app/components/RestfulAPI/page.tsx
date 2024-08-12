import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', margin: '20px' }}>
      <h1>RESTful API</h1>
      <br />
      <p style={{ textIndent: '2em' }}>
        RESTful API (Representational State Transfer, 簡稱：REST) 表現層狀態轉換，是由 Dr. Roy Thomas Fielding 於 2000 年在他的博士論文中提出。REST 主要用於不同程式或軟體之間的溝通。以下舉一個例子：一般由於不同工程師設計的 API 內部可能存在相同功能但命名方式不同，這導致在使用不同人設計的 API 時皆需要先閱讀 API 文件。若以 RESTful API 開發，我們用一個唯一的 URL 定位資源，並將動作藏在 HTTP 的 method 裡面，由上述可以看出 REST 可以統一 API interface 達成程式間的溝通。
      </p>
      <br />
      <h2>RESTful API 的優勢：</h2>
      <ul>
        <li><b>1.可擴展性：</b><br />REST 的每一項請求都是獨立的（又稱無狀態），伺服器不需要保留過去用戶端的請求，且 REST 會最佳化用戶端與伺服器之間的互動，從而降低伺服器負載。</li>
        <li><b>2.靈活性：</b><br />RESTful Web 支援用戶端與伺服器完全分離，這項服務簡化並去耦合各伺服器元件，讓每一部分都可以獨立演進。因用戶端與伺服器是完全分離，平台的變更不會影響用戶端的應用程式。</li>
        <li><b>3.獨立性：</b><br />可以使用任意程式語言來設計用戶端和伺服器的應用，而不會影響 API 的設計。此外，還可以在不影響通訊的情況下變更任一端的基礎技術。</li>
      </ul>
      <br />
      <h2>參考資料：</h2>
      <ul>
        <li><a href="https://medium.com/itsems-frontend/api-%E6%98%AF%E4%BB%80%E9%BA%BC-restful-api-%E5%8F%88%E6%98%AF%E4%BB%80%E9%BA%BC-a001a85ab638" target="_blank" rel="noopener noreferrer">Medium</a></li>
        <li><a href="https://aws.amazon.com/tw/what-is/restful-api/" target="_blank" rel="noopener noreferrer">AWS</a></li>
        <li><a href="https://zh.wikipedia.org/zh-tw/%E8%A1%A8%E7%8E%B0%E5%B1%82%E7%8A%B6%E6%80%81%E8%BD%AC%E6%8D%A2" target="_blank" rel="noopener noreferrer">Wikipedia</a></li>
        <li><a href="https://www.explainthis.io/zh-hant/swe/restful-api" target="_blank" rel="noopener noreferrer">Explain this</a></li>
      </ul>
      <br />
      <Link href = "./sideMenu"> Return </Link>
    </div>
  );
};

export default Page;
