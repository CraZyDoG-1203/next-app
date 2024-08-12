'use client'; // user components

import { useState } from 'react';
import Link from 'next/link';

export default function ClientSideMenu() {
  const [Contents, setShowSubmenu] = useState(false);
  const toggleSubmenu = () => {
    setShowSubmenu(!Contents);
  };

  return (
    <div>
      <button onClick={toggleSubmenu}>
        {Contents ? '' : ''} Contents
      </button>
      {Contents && (
        <div style={{ marginTop: '10px' }}>
          <Link href="/components/users">Users</Link><br />
          <Link href="/components/cityList">City List</Link><br />
          <Link href="/components/zkp">Zero knowledge proof</Link><br />
          <Link href="/components/next.js">Next.js</Link><br />
          <Link href="/components/RestfulAPI">RESTful API</Link><br />
          <Link href="/components/Node">Node</Link><br />
          <Link href="/components/Javascript">Javascript</Link><br />
        </div>
      )}
    </div>
  );
}
