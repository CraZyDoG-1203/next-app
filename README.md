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


# Introduction
This code is a practice of basic next.js.Function, skills including:
- Using typscript (tsx)
- Conditional Rendering 
- Paragraph Display
- Data Fetching
- DaisyUI

# Warnings 
 1. Please make sure that you have installed React and Next in your computer.
 2. Start the server using `npm run dev` in terminal.

# Contents
 1. ClientSideMenu
 2. City List
 3. User
 4. Zero knowledge proof
 5. Next.js
 6. RESTful API
 7. Node.js
 8. Javascript

## ClientSideMenu
Opening the content of submenu
### Function
- Display all links
- Using `useState` to control whether show or hide the menu.
``` typescript
const [Contents, setShowSubmenu] = useState(false);
const toggleSubmenu = () => {
    setShowSubmenu(!Contents);
};
<button onClick={toggleSubmenu}>
    {Contents ? '' : ''} Contents
</button>
```

##  City List 
Use list method to show the city.
### Function
- Switch content to show or hide.
- Two ways to show list `city.map` , `city = []`.
- Deal with empty arrays.
``` typescript
 {city.length === 0 && <p> No items found </p> }
```

## User 
Practicing data fetching with json, using cache with a better effcient.
### Function
- Get user data from JSONPlaceholder API   
``` typescript
const res = await fetch("https://jsonplaceholder.typicode.com/users")
```
- Display user's name and email address
- Display current time

## zkp (Paragraph)
Introducting Zero knowledge Proof. A way to confirm data without giving out identity.
## Summary
- History
- Author
- Underdraw how it works
- Three Conditions needed
1.1 完備性
1.2 可靠性
1.3 零知識
- Advantage
- Resources

## Next.js (Paragraph)
Introducing next.js
## Summary


## RESTful API (Paragraph)
Intoducting RESTful API
## Summary

## Node.js (Paragraph)
Introducing Node.js 
## Summary

## JavaScript (Paragraph)
Introducting JavaScript
## Summary
