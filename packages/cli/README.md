# Atomic Smash CLI

A collection of CLI tools by Atomic Smash.

For help using the cli, use the following command:

```sh
smash-cli --help
```

## Development

To develop this npm package, you will need to do the following after cloning the repo:

1. `nvm use`

- This will set the correct node environment (this is important for permissions for the following step)

2. `npm link`

- This will create a symlink in your npm global config, effectively pretending that you've installed the package globally.

3. `npm run dev`

- This will transpile all `.ts` files down into usable `.js` files in dist.

Once these commands are done, you're ready to start working on this project. Check the "CHECKLISTS" file for a checklist of tasks for any development work.
