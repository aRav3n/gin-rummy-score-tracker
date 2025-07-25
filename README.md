# Gin Rummy Score Tracker

## Table of Contents

- [Description](#description)
- [Usage and Screenshots](#usage-and-screenshots)
- [Technologies Used](#technologies-used)
- [Dependencies and Credits](#dependencies-and-credits)
- [Project Structure](#project-structure)

## Description

I built this to fulfill a need for easier score tracking than writing on a napkin or using a spreadsheet

## Usage and Screenshots

<div><img src="./public/start_screenshot.png" alt="signup page screenshot" style="height: 50vh; width: auto;"><span> </span><img src="./public/gameplay_screenshot.png" alt="gameplay on a phone screenshot" style="height: 50vh; width: auto;"></div>

On the main page type in the two player names and then select the score that you will play to (recommended to start with 100). Once a player gets gin, click the "Gin!" button then enter their extra points from the opponent's hand. Once a player has enough points to win you will be brought back to the starting screen with a message of which player won. You can now start a new game if you'd like.

- [Link to live preview](https://gin-rummy-score-tracker.pages.dev/)

### Features

- Simple and lightweight
- Stores scores in state
- Resets scores when the game is over

### Future improvement ideas

- Convert to a React Native app for offline use
- Make a dedicated winner page

## Technologies Used

### Frontend

- <a href="https://vite.dev/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" style="height: 2rem; width: auto; vertical-align: middle;"> Vite </a>
- <a href="https://react.dev/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" style="height: 2rem; width: auto;"> React</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" style="height: 2rem; width: auto;"> JavaScript</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" style="height: 2rem; width: auto;"> HTML</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" style="height: 2rem; width: auto;"> CSS</a>

### Development Tools

- <a href="https://code.visualstudio.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" style="height: 24px; width: auto;"/> VS Code</a>
- <a href="https://www.npmjs.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg" style="height: 24px; width: auto;"/> NPM</a>
- <a href="https://git-scm.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" style="height: 24px; width: auto;"/> Git</a>

### Hosting

- <a href="https://www.cloudflare.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg" style="height: 24px; width: auto;"/> Cloudflare</a>
- <a href="https://github.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" style="height: 24px; width: auto;"/> Github</a>

## Dependencies and Credits

### Package Dependencies

- [@eslint/js](https://www.npmjs.com/package/@eslint/js)
- [@types/react](https://www.npmjs.com/package/@types/react)
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom)
- [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react)
- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh)
- [globals](https://www.npmjs.com/package/globals)
- [react-dom](https://www.npmjs.com/package/react-dom)

### Other Credits

- [Devicion](https://devicon.dev/)
- [Skillicons](https://skillicons.dev/)


## Project Structure

```bash
├──public/                 # Locally stored images are here
└──src/                    # React components are here
```
