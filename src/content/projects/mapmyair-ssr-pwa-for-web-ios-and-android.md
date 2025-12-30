---
title: MapMyAir
summary: Single code base deploying to iOS, Android and desktop web with Server Side Rendering.
year: 2022
tags:
  - Custom Software
heroImage: /images/projects/mapmyair-ssr-pwa-for-web-ios-and-android/hero.jpg
gallery:
  - /images/projects/mapmyair-ssr-pwa-for-web-ios-and-android/gallery-01.jpg
  - /images/projects/mapmyair-ssr-pwa-for-web-ios-and-android/gallery-02.jpg
  - /images/projects/mapmyair-ssr-pwa-for-web-ios-and-android/gallery-03.jpg
  - /images/projects/mapmyair-ssr-pwa-for-web-ios-and-android/gallery-04.jpg
  - /images/projects/mapmyair-ssr-pwa-for-web-ios-and-android/gallery-05.jpg
---

## The Problem

Oransi had a vision for marketing their high performance air purifier systems with a free pollen tracking mobile app. 

## The Challenge

Is it possible to support server side rendering, desktop web, iOS and Android with a single codebase? Typically, web applications that are deployed to iOS and Android are single page applications and thus perform very poorly for SEO purposes. We also needed a framework that could generate a huge number of dynamic routes in order to support having a dedicated pollen page for major cities. 

## The Solution

Angular Universal combined with Ionic Capacitor supported Server Side Rendering, great Search Engine Optimization, dynamically generated routes, and the ability to deploy to Desktop Web, iOS and Android.

The Oransi products displayed in the app were pulled from Oransi's Shopify. We defined a custom tagging scheme so that Oransi could control which product displayed were, directly from Shopify. 

## The Stack

Angular Universal, Nestjs, Redux Toolkit, Observables, Ionic Capacitor, Shopify integration
