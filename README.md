<h1 align="center">Content Connector</h1>

## Summary

A streamlined content solution connecting businesses with local digital media creators.

## Purpose

This application was created during the final week of the Lighthouse Labs' Web Development Bootcamp as the capstone course project.

## User Experience

- Businesses post projects viewable as points on a map and list view
- Creators can create and edit searchable portfolios of their previous work
- Geolocated user matching between businesses and creators
- Realtime messaging between users

## Technologies Utilized

- NextJS
- Firebase: Authentication, Firestore Database, Storage
- MapBox
- GeoLib
- SASS

## Screenshots

### Home Page

![Home Page](./screenshots/home-page.png)

### Find Projects

![Find Projects](./screenshots/map.png)

### Find Creators

![Find Creators](./screenshots/find-creators.png)

### User Profile

![User Profile](./screenshots/user-profile.png)

### User Portfolio

![User Porfolio](./screenshots/user-portfolio.png)

### Messaging

![Messaging](./screenshots/messaging.png)

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
