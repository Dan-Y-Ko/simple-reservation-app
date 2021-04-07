**Installation / Running**
For physical phone

```
yarn install
yarn start
scan qr code with camera
```

For ios

```
yarn install
yarn ios
```

For android

```
yarn install
yarn android
```

This is an expo based react native project so expo app will need to be installed if you want to run the project on physical phone.
No env or other config needed

**Project Overview**

This was a short take-home project I did for a company. Nothing fancy or extensive, just did enough to display knowledge in React
Native.

**Folder Structure**

I like to organize my project into folders grouped by features. App file is where all initial loading / config and provider wrappers go. Features folder is where
the core application features are placed. Inside here I followed this structure (where applicable):

```
/features
  /feature
    /screens
      /styles
        - somefile.ts
      - somefile.tsx
    /components
      /styles
        - somefile.ts
      - somefile.tsx
```

I like to separate my files into container components and presentation components. The container components go into screens folder and presentation components
go into components folder. I also like to place my styles into separate styles folder.

Next, is store folder. All the files related to global state management go here. I also grouped by feature here as well.

Last, I have a ui folder where I have reusable components that are not strictly tied to an application feature and all theme config is located here as well.

**Dependencies Used**

First and most importantly, I worked on this with Typescript. I'm not an expert with Typescript at all, but I have seen the benefits it gives
and I pretty much do every project with Typescript now. I have bootstrapped this project with Expo, simply because I have to (I am Windows user),
but also because I think Expo is really great for quickly building out features and in my opinion, most application needs are covered
well by Expo. I used React Navigation for navigation solution. I think it's the easiest and "best" library to use for React Native. I used
Styled Components because it makes creating themes way easier and also just the amount of customization options it gives while also making
it easy is great. I used Redux for global state management. I have used Redux for awhile and think it's simply the best option out there still.
I opted for Redux Saga for asynchronus actions as it is an ideal solution to handle redux stores at scale. I used Reselect to handle extensive
computations and caching of redux state.
