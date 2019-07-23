## Waes Text Highglighter

### Description

This project is an app that allows you to set a text, highlight it with different colors, store those highlights and display them filtered by color.

### How to install the repo

- You will need to have installed [NodeJS](https://nodejs.org/es/download/) and [NPM](https://www.npmjs.com/get-npm) in order to run this project. Once you have them, please continue with instructions.
- Clone the repo in the desire location
    - [git@github.com:hernanfarruggia/waes-text-highlighter.git](git@github.com:hernanfarruggia/waes-text-highlighter.git)
- Open the project folder in your command line:
    - `$ cd waes-text-highlighter`
- Install required dependencies
    - `$ npm install`
- Run the application dev server
    - `$ npm start`

Now the app should be working and a chrome windows should start to show the app.

### How it works

- Lets start by taking a look at the general layout:
    - ![General Layout](https://github.com/hernanfarruggia/waes-text-highlighter/blob/master/extras/1.png)
- - -
- You will have a Form, where you will introduce your text, a middle section or the Highlighter area where you can select your text and apply colors, and the las section is the Filter, where you can select the colors and the app will show you the text fragmens you have selected.

- The first thing you need to do is to introduce some text and hit the button `Add Text`, you will notice when the Textarea is empty, the button is disabled. Here you have a Lorem Ipsum fragment to make it easier:
    > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

    - ![Form with text](https://github.com/hernanfarruggia/waes-text-highlighter/blob/master/extras/2.png)
    
- - -

- Once you clicked the `Add Text` button, you will see the Textarea is cleaned up and the text will appear in the Highlighter area:
    - ![Highlighter area with text](https://github.com/hernanfarruggia/waes-text-highlighter/blob/master/extras/3.png)

- - - 

- Once you are there, you can start switching the colors and selecting text. The text will be ihghlighted with the selected color as soon as you end your selection. By default, the initial color is `red`.
    - ![Selected text](https://github.com/hernanfarruggia/waes-text-highlighter/blob/master/extras/4.png)

- - -

- Once you finished with all your selections, you can start filtering your results, by clicking the buttons in the Filter area. You can toggle the results by color, or even select all of them at the same time:
    - ![Ony red results](https://github.com/hernanfarruggia/waes-text-highlighter/blob/master/extras/5.png)

    - ![Ony yellow results](https://github.com/hernanfarruggia/waes-text-highlighter/blob/master/extras/6.png)

    - ![Ony green results](https://github.com/hernanfarruggia/waes-text-highlighter/blob/master/extras/7.png)

    - ![All results](https://github.com/hernanfarruggia/waes-text-highlighter/blob/master/extras/8.png)
