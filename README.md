<p align="center">
<img src="brightLogo.png" width="250" align="center">
</p>

# 🚀 Bright Toolkit

Bright Toolkit is a comprehensive development toolset designed to accelerate the software development process. It aims to streamline and automate common development tasks, empowering developers to build high-quality applications efficiently.

# ⚡️ UI Kit

UI libraries aim to provide a comprehensive set of commonly used components and utilities to help developers build user interfaces more efficiently. Using a UI library can significantly speed up the development process, improve the user interface quality, and enhance the overall developer experience when building web applications.

# 👨🏻‍💻Tech Stack - Developer First

- [Next.js](https://nextjs.org) for Static Site Generator
- Type checking [TypeScript](https://www.typescriptlang.org)
- Integrate with [Tailwind CSS](https://tailwindcss.com)
- [Storybook](https://storybook.js.org) for components documentation
- Strict Mode for TypeScript and React 18
- Linter with [ESLint](https://eslint.org)
- Code Formatter with [Prettier](https://prettier.io)
- [Husky](https://typicode.github.io/husky/#/) for Git Hooks
- [Lint-staged](https://github.com/okonet/lint-staged) for running linters on Git staged files
- Testing with [Jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/)
- Absolute Imports using `@` prefix
- Nextjs custom layouts
- [T3 env](https://env.t3.gg/) Manage your environment variables with ease
- Message convention for git
- Maximize lighthouse score
- GH actions
- Components generation with [Plop](https://plopjs.com/) and [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) convention

## 🧪 Testing

All tests are collocated with the source code inside the same directory. So, it makes it easier to find them. Coverage threshold is set to `70%`. In the `.jest` folder there is a custom provider for the all tests.

## :gear: Generating components

```bash
yarn generate Button
```

Result (if you chose an atom component):

```
└── components
      └── atoms
        └── Button
          ├── index.ts
          ├── Button.stories.tsx
          ├── Button.test.tsx
          └── Button.tsx
```
