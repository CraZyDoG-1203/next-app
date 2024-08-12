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
 4. Paragraph techniques
 5. Zero knowledge proof
 6. Next.js
 7. RESTful API
 8. Node.js
 9. JavaScript

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

## Paragraph Techniques
### Spaces 
```typescript
<li style={{ textIndent: '2em' }}></li>
```
### Display words
```html
<p></p>
<li></li>
<h1 ~ h6> <h1 ~h6>
<div></div>
<b></b>
```
### Links
Mostly used in return
```html
<a></a>
<Link href = "...">...</Link>
```

## Zero Knowledge Proof (Paragraph)
Zero Knowledge Proof (ZKP) is a cryptographic method that allows one party (the prover) to prove the truth of a statement to another party (the verifier) without revealing any specific information about the statement itself.
### Summary
- History
- Author
- Underdraw how it works
- Advantages
- Resources
### Hypothesis
Everyone is honest
### Three conditions to achieve
1. **Completeness**
2. **Reliability**
3. **Zero Knowledge**


## Next.js (Paragraph)
Next.js is a web develop framework build on react and node.js.
### Summary
- History
- Coding Language
- Capabilities
- Hot Reloading
- 3 Rendering method
- Resources
### Coding Language
- Javascript
- Typescript
### Features
- Own Routing System
- Auto static optimization
- API router
### 3 Rendering method
- **SSG Static Site Generation**
- **ISR Incremental Site Regeneration**
- **SSR Server side Rendering**

## RESTful API (Paragraph)
RESTful API(Representational State Transfer API) is used in communication upon idividual programs or applications.
### Summary
- History
- Where to use
- Conveniences
- Advantages
- Resources
### Conveniences 
- No need to read API documents before using it.
### Advantages
- **Scalability**
- **Flexibilty**
- **Independency**


## Node.js (Paragraph)
Used to develop server side application. Node.js is a open-source, cross-platform Javascript runtime environment.
### Summary
- Specialities
- Where to use
- Frame and software eco-system
- Advantages
### Specialities
- Non-blocking I/O model
- Event-driven
- Light weight and Efficient
### Advantages
- High performace
- High scalable
- cross platform
- High develop efficiency



## JavaScript (Paragraph)
JavaScript is a high-level, straight-interpreted, versatile programing language. Used with HTML, CSS to control webpages. In a nutshell, JavaScript controls the behaviors on webpages.
### Summary
- History
- Where to use
- Commeon frames
- Advantages
- Resources
### Common frames
- React
- Angular
- Vue
- jQuery
### Advantages
- High effeciency
- Highly support
- 
