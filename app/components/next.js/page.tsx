import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', margin: '20px' }}>
      <h1>Next.js</h1>
      <br />
      <p style={{ textIndent: '2em' }}>
        Next.js 於 2016 年釋出，是一個 Web 開發框架建構於 Node.js 上，同樣都可以使用 Node Package Manager (NPM)，該框架可以用 TypeScript, JavaScript 來攥寫，是一個能建構高效、SEO friendly 的 React 框架。Next.js 可以利用伺服器端渲染來減少網頁的負擔並同時增強安全性，這項可以應用在程式的整個或是部分，來允許將頁面單獨呈現並渲染。Next.js 可以在程式碼有更動時立即在瀏覽器上產生變化而不會重新啟動伺服器，也就是說 Next.js 可以達成熱重載 (Hot Reloading)。
      </p>

      <p style={{ textIndent: '2em' }}>
        他還擁有路由系統、自動靜態優化、服務器端渲染、靜態網站生成，以及 API 路由，主要用於開發和渲染 web 應用。
      </p>

      <h2>渲染方式可以分為三項：</h2>
      <ul>
        <li><b>1. 靜態網頁生成 (Static Site Generation, SSG)</b>：在構建時預先生成 HTML 文件，在構建過程中由伺服器生成並部署到 CDN 上。</li>
        <li><b>2. 增量靜態生成 (Incremental Static Regeneration, ISR)</b>：結合 SSG 和 SSR 的特點，首次生成靜態頁面後，根據需要動態更新內容。可以在 getStaticProps 函數中添加 revalidate 屬性，以指定重新生成頁面的間隔時間。 (revalidate：10 = 每 10 秒更新頁面)</li>
        <li><b>3. 服務器端渲染 (Server-Side Rendering, SSR)</b>：頁面渲染由伺服器處理，每次都會生成新的 HTML 頁面並傳回給瀏覽器，伺服器從資源或模板中獲取數據並渲染 HTML 頁面。</li>
      </ul>
      <br />
      <h1>零知識證明 (Zero Knowledge Proof - 簡稱 ZKP)</h1>
      <br />
      <p style={{ textIndent: '2em' }}>
        零知識證明是由麻省理工學院的研究人員 Shafi Goldwasser、Silvio Micali 和 Charles Rakoff 在科學文章《交互式證明系統的知識複雜性》(1985) 中提出，是一種加密協議。它讓證明者可以向驗證者確認事實的真實性，並且在過程中不需要透露任何內容。驗證者可以通過提出一連串的問題來向證明者確認他知道秘密資料的內容。若證明者知道該加密資料，他便可以正確地回答所有問題；若證明者不知道資料，那說服驗證者只有 50% 的機率，而這個機率在經過一定數量的提問（如 20 次，那機率會只有 1/1,048,576）後，驗證者可以確定證明者知不知道協議內容。上述互相提問並不會透露雙方任何不關於該協議的訊息。
      </p>
      <h2>零知識需要具備三件事情：</h2>
      <ul>
        <li><b>1. 完備性</b> - 若所要證明的知識為真，那證明者可以說服驗證者。</li>
        <li><b>2. 可靠性</b> - 若所要證明的知識為假，那證明者只有極小的機率可騙過驗證者。</li>
        <li><b>3. 零知識</b> - 驗證者不管任何情況下，都不會得知證明者任何與需證之事不相關的訊息。</li>
      </ul>
      <p style={{ textIndent: '2em' }}>
        零知識證明的優勢有兩點，其一為可以提升隱私，另外為可以將資料最小化。在提升隱私層面，因為不必公開實際資料，所以可以防止未授權存取，減少身份訊息和資料被盜取的風險。而在資料最小化方面，因為只需要必要的資訊，所以資料量可以降低很多。
      </p>
      <br />
      <h2>參考資料：</h2>
      <ul>
        <li><a href="https://www.blocktempo.com/zero-knowledge-proof-zkp-chagelly-column/" target="_blank" rel="noopener noreferrer">BlockTempo</a></li>
        <li><a href="https://blog.twnic.tw/2024/06/01/29670/" target="_blank" rel="noopener noreferrer">TWNIC</a></li>
        <li><a href="https://www.btcc.com/zh-TW/academy/crypto-basics/what-is-zero-knowledge-proof-zkp" target="_blank" rel="noopener noreferrer">BTCC Academy</a></li>
        <li><a href="https://zh.wikipedia.org/zh-tw/%E9%9B%B6%E7%9F%A5%E8%AF%86%E8%AF%81%E6%98%8E" target="_blank" rel="noopener noreferrer">Wikipedia</a></li>
      </ul>
      <br />
      <Link href = "./sideMenu"> Return </Link>
    </div>
  );
};

export default Page;
