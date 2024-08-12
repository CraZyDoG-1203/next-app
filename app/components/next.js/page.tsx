import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', margin: '20px' }}>
      <h1>Next.js</h1>
      <br />
      <p style={{ textIndent: '2em' }}>
        Next.js 於 2016 年釋出，是一個 Web 開發框架建構於 Node.js 上，同樣都可以使用 Node Package Manager (NPM)，該框架可以用 TypeScript, JavaScript 來撰寫，是一個能建構高效、SEO friendly 的 React 框架，Next.js 可以利用伺服器端渲染來減少網頁的負擔並同時增強安全性，這項可以應用在程式的整個或是部分，來允許將頁面單獨呈現並渲染。Next.js 可以在程式碼有更動時立即在瀏覽器上產生變化而不會重新啟動伺服器，也就是說 Next.js 可以達成熱重載 (Hot Reloading)。
      </p>

      <p style={{ textIndent: '2em' }}>
        他還擁有路由系統、自動靜態優化、服務器端渲染、靜態網站生成，以及 API 路由，主要用於開發和渲染 web 應用。
      </p>

      <h2>渲染方式可以分為三項：</h2>
      <ul>
        <li><b>1. 靜態網頁生成 (Static Site Generation, SSG):</b><br />在構建時預先生成 HTML 文件，在構建過程中由伺服器生成並部署到 CDN 上。</li>
        <li><b>2. 增量靜態生成 (Incremental Static Regeneration, ISR):</b><br />
        結合 SSG 和 SSR 的特點，首次生成靜態頁面後，根據需要動態更新內容。可以在 getStaticProps 函數中添加 revalidate 屬性，以指定重新生成頁面的間隔時間。<br /> (revalidate：10 = 每 10 秒更新頁面)</li>
        <li><b>3. 服務器端渲染 (Server-Side Rendering, SSR):</b><br />頁面渲染由伺服器處理，每次都會生成新的 HTML 頁面並傳回給瀏覽器，伺服器從資源或模板中獲取數據並渲染 HTML 頁面。</li>
      </ul>
      <br />
    
      <Link href = "./sideMenu"> Return </Link>
    </div>
  );
};

export default Page;
