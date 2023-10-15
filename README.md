# PlanetPal
![planetpallogo](https://github.com/markestiller/PlanetPal/assets/117526873/c1d0a4f5-9b52-4377-9459-f24fadc74491)

## 🖥️ Tech Stack 🖥️
Built with ❤️ &

<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://flask.palletsprojects.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> <a href="https://reactnative.dev/" target="_blank" rel="noreferrer"> <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40"/> </a> <a href="https://www.tensorflow.org" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="tensorflow" width="40" height="40"/> </a> </p>

## 💡 Inspiration💡

According to the City of Toronto, "contaminated recycling is currently costing the City millions annually. Approximately one third of what is put in the Blue Bin doesn’t belong there or was ruined as a result of the wrong items being put into the bin." Missing out on being able to recycle one third of what is put in the Blue Bin is huge, especially when this issue can be solved by spreading more actionable awareness to the city's residents. Furthermore, Toronto cannot be the only place in the world that is having these issues. Thus, it becomes increasingly important for us to become mindful citizens of the world we inhabit, for the benefit of our communities and most importantly, for the wildlife and world around us!

## ? What is PlanetPal ?

PlanetPal is a gamified recycling app that is designed to promote good recycling habits and spread more awareness about recycling correctly. Users subscribe to the app monthly, paying upwards of $10 per month, where every time they recycle, they build progress to recovering the money put towards their description. Everytime the user recyles something, they earn Green tokens (our exclusive currency), which can be redeemed for real world money. Furthermore, completing monthly challenges and consistently recycling awards users with a limited monthly challenge badge that displays their dedication to the environment. By collecting these badges, users will have the opportunity to earn even more tokens! Users are given recycling instructions when they take a picture of their trash, their trash is classified with a CNN into 6 categories. The user is then told how to recycle the item that they are holding. After disposing of the item, the user gains progress towards the monthly challenge, as well as tokens.

## 🔧 How we built it 🔧

Our front end mobile application is developed with React Native and Expo, using packages such as React Native Paper to speed up the development process. Additionally, we used React Navigation for smooth UI transitions, and Expo Camera to take photos.

Our back end is built with Python and Flask, which hosts our CNN that classifies images of trash into 6 different categories. We manage the player's progress, badges, and in-game currency, as well as classify the images passed from the front end mobile app. Moreover, the logic behind generating advice on proper recycling lies here, where we passed the classified object into Cogenerate's command-nightly generative AI model.

Our machine learning model is a CNN transfer learning model built on VGG19, a model trained on ImageNet. We used a Kaggle dataset, Garbage Classification, to train the VGG19 model and fine tune it. Our model classifies images correctly at around 82.31%!

![traintest](https://github.com/markestiller/PlanetPal/assets/117526873/4e3cc498-c984-4c5b-8030-dc684c5c2e0d)

## 🤔 Challenges we ran into 🤔

Since this was our first time ever training a machine learning model, we initially decided to train our model directly on Kaggle, where we had access to cloud GPUs. Unfortunately, we realized that we could not actually download our model! We also ran into issues in terms of figuring out how to implement our machine learning model into our backend code so that we could actually run it to classify new images that it has not seen before.

For some of our team members, this project marked their first experience with React Native and Flask. This added another layer of complexity to the development process as they were learning and adapting to these technologies on the fly. 

## 🏆 Accomplishments that we're proud of 🏆

Despite our team's limited experience in mobile app development, we are proud to have successfully created a functional and aesthetically pleasing UI.

## 🤓 What we learned 🤓

## 👀 What's next for PlanetPal 👀

We are currently looking at ways to incentivize users to consistently recycle. Implementing actual challenges such as recycling a certain amount of materials each month, or a daily streak mechanism would help users stay engaged.
