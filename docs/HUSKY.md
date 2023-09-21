# Husky 🐶

Husky is our go-to tool for keeping our git commits and pushes in check. With Husky, we can set up hooks that run on specific git actions, ensuring that our codebase remains top-notch and ready to rock!

## Why Husky?

Think of committing code with issues as going on stage with a guitar that's out of tune. Not cool, right? Husky is like our roadie, making sure our code hits all the right notes before it goes live.

Every time we try to commit, Husky checks our code. If something's not right, Husky stops the show, letting us know what needs fixing. This way, our codebase stays clean, consistent, and always on beat.

## Our Husky Hooks

- **pre-commit**: This runs tasks (like linting) before we make a commit. If something's off, the commit won't go through until we fix it.
- **pre-push**: This one checks our code before we push it up to the repo. If there's an issue, the push is halted.

## Setting Up Husky

If you're new to the band or if Husky seems to have taken a break, here's how to get things set up:

1. Make sure you've got all the necessary packages:

   ```bash
   npm install
   ```

2. Get Husky set up:

   ```bash
   npx husky install
   ```

3. Add in our pre-set hooks:
   ```bash
   npx husky add .husky/pre-commit "npm run lint"
   npx husky add .husky/pre-push "npm test"
   ```

Rock on and code responsibly! 🎸🔥

### Return to the [main README](../README.md).
