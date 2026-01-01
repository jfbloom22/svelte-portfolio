---
title: MyMedGas
summary: "Leveraged PWA, service workers, and IndexDB to create an installable web app with offline functionality. This enabled a mobile workforce to service critical medical gas equipment in locations without internet access. Tech Stack: React, Redux, .Net Core, MS SQL."
year: 2022
tags:
  - Custom Software
heroImage: /images/projects/mymedgas-installable-pwa-with-offline-support/hero.jpg
gallery:
  - /images/projects/mymedgas-installable-pwa-with-offline-support/gallery-01.jpg
  - /images/projects/mymedgas-installable-pwa-with-offline-support/gallery-02.jpg
  - /images/projects/mymedgas-installable-pwa-with-offline-support/gallery-03.jpg
  - /images/projects/mymedgas-installable-pwa-with-offline-support/hero.jpg
---

## The Problem

BeaconMadaes was creating a mobile workforce to inspect and maintain medical gas equipment. They needed a mobile application to handle inventory management, asset tracking, maintenance scheduling, and training. 

## The Challenge

What is the best way to create a web application that supports Windows tablet computers?

Can a web app support potentially multiple gigs of information needed for offline functionality and how do you make sure this information is up to date?

## The Solution

I considere deploying a web based app through Electron, but we also wanted to leave open the possibility of supporting Apple iPads. An installable PWA was the best solution because it enabled us to leverage service workers, IndexDB, React, and Redux to create an installable web app. Windows users really enjoyed having a desktop app experience after installing the PWA. Tech Stack: React, Redux, .Net Core, MS SQL.
