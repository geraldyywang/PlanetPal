# PlanetPal

## 🖥️ Tech Stack 🖥️
Built with ❤️ &

css3 express git html5 mongodb react tailwind

## 💡 Inspiration💡

According to the City of Toronto, "contaminated recycling is currently costing the City millions annually. Approximately one third of what is put in the Blue Bin doesn’t belong there or was ruined as a result of the wrong items being put into the bin." Missing out on being able to recycle one third of what is put in the Blue Bin is huge, especially when this issue can be solved by spreading more actionable awareness to the city's residents. Furthermore, Toronto cannot be the only place in the world that is having these issues. Thus, it becomes increasingly important for us to become mindful citizens of the world we inhabit, for the benefit of our communities and most importantly, for the wildlife and world around us!

## ? What is PlanetPal ?

PlanetPal is a gamified recycling app that is designed to promote good recycling habits and spread more awareness about recycling correctly. Users subscribe to the app monthly, paying upwards of $10 per month, where every time they recycle, they build progress to recovering the money put towards their description. When the user completes a threshold of recycling per month, not only are they refunded their money, but are also awarded with a limited monthly challenge badge that displays their dedication to the environment. Users are given recycling instructions when they take a picture of their trash, their trash is classified with a CNN into 6 categories. The user is then told how to recycle the item that they are holding. After disposing of the item, the user gains progress towards the monthly challenge.

## 🔧 How we built it 🔧

Our front end mobile application is developed with React Native and Expo, using packages such as React Native Paper to speed up the development process. Additionally, we used React Navigation for smooth UI transitions, and Expo Camera to take photos.

Our back end is built with Python and Flask, which hosts our CNN that classifies images of trash into 6 different categories. We manage the player's progress, badges, and in-game currency, as well as classfy the images passed from the front end mobile app.

Our machine learning model is a CNN transfer learning model built on VGG19, a model trained on ImageNet. We used a Kaggle dataset, Garbage Classification, to train the VGG19 model and fine tune it. Our model classifies images correctly at around 82.31%!


## 🤔 Challenges we ran into 🤔

Since this was our first time ever training a machine learning model, we initially decided to train our model directly on Kaggle, where we had access to cloud GPUs. Unfortunately, we realized that we could not actually download our model! We also ran into issues in terms of figuring out how to implement our machine learning model into our backend code so that we could actually run it to classify new images that it has not seen before.

## 🏆 Accomplishments that we're proud of 🏆

## 🤓 What we learned 🤓

## 👀 What's next for PlanetPal 👀
