# Atomic Smash Packages

This is a monorepo for Atomic Smash packages

## To add a package

1. Add a package based off the template package.
2. Name the folder appropriately
3. Add the folder to the "workspaces" property in the root package.json and run npm install to symlink your new package (this lets you reference the package how you would when you use the published package.)
4. Add the folder to the "references" section in the root tsconfig.json
5. Update the name, description, keywords and repository directory in the package.json file for your new package.
