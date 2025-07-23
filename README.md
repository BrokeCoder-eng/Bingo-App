# Bingo Web App

This is a simple web application that presents a Bingo experience with three main views:

- 📍 Current Bingo
- 🕑 Next Bingo
- 🏆 Leaderboards

Built with **HTML**, **CSS**, and **JavaScript**, this app can be previewed live in your browser and later extended into frameworks like React.

## 🚀 Full Setup Guide (Windows)

This README walks you through setting up everything from scratch:
- Installing Git
- Cloning this repository
- Installing VS Code
- Setting up the Live Preview extension
- Running the project

## 📦 Step 1: Install Git on Windows

Git is required to clone the project and track changes.

1. Go to: [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Download and launch the installer.
3. In the setup wizard:
   - Leave most options as default
   - Make sure “**Git from the command line and also from 3rd-party software**” is selected
4. Finish installation.

### ✅ Verify Git

Open **Command Prompt** or **Git Bash** and run:

```bash
git --version
```

## Step 2: Clone repository

To start working on this project you will need to clone the project itself first.

1. Make a directory of where you would like to save this project.
2. Open **Command Prompt** or **Git Bash** and run:
```bash
git clone https://github.com/BrokeCoder-eng/Bingo-App
```

Now you should have all of the files necessary to work on this project.

## Step 3: Download VS Code

**VS Code** is a easy to learn and highly customisable IDE to help make development be more convenient.

1. Go to: [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Download for Windows and follow the steps to install.
3. After the installation is finished you should have the icon on your Desktop or searchable on your computer.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
