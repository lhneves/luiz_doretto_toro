## Getting Started

First, install all dependencies:

```bash
npm install
```

After that, install Husky dependencies:

```bash
npm run prepare
```

Finally, run the development server:

```bash
npm run dev
```

## Project Structure

### ESLint and Prettier

Used to check sintax, find problems and enforce code style.

### Husky, commitlint and commitzen

Used to follow convencional commits, a commit pattern.

### Tailwind, tailwind-variants and framer-motion

Used to make some animations easily (framer-motion), to use CSS directly in markup (Tailwind), and to organize it better (TV).

### Jest and React Testing Library

Used to create tests.

## Performance and Responsiveness

One of the main focuses of the project was performance. With that in mind, one important step was to import larger images as WebP. Another significant step was to use the Image component from next/image. This component allows us to use a blur placeholder while the image is being loaded and also loads the image using lazy loading by default. This combination results in performance improvements, as shown in the images below from the PageSpeed Insights website:

![Desktop Performance](./.github/desktop-performance.png)

![Mobile Performance](./.github/mobile-performance.png)

## Deploy and Actions

You can visit the deployment at [this link](https://luiz-doretto-toro.vercel.app), also included in the project's "About" section.

You can also check the actions in the "Actions" tab. This action was created to ensure that no tests fail while creating a new PR.
