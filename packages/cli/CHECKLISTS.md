# Adding a CLI script

1. Propose the CLI command in Dev Collab, including parameters, flags, and functionality.
2. Create a new branch for your command.
3. Add a switch case for your command in the index.ts file.
4. Add your command to the main help message under 'Available commands'.
5. Add a help message for your command, including options and example usage.
   - Indent help messages with spaces instead of tabs.
   - Show your help message and return before executing the command.
   - Show your help message if `--help` or `-h` is present anywhere in the command.
6. Write a test for your command, and include any testing materials in the `tests` folder so they are stripped on publish.
7. Create a merge request for your command to be reviewed.

# Editing an existing CLI script

1. Propose any changes to the CLI command in Dev Collab.
2. Create a new branch for editing the command.
3. Make the necessary changes to the command code (not the tests yet).
4. Check both the main help message and the command help message and ensure they are still correct.
5. Run the existing tests.
   - If the tests fail, this is a BREAKING CHANGE. Be sure to note this correctly in your commit message.
   - If the tests pass, this is probably not a breaking change, but use your best judgement.
6. Update the tests to cover the changes.
7. Create a merge request for your changes to be reviewed.
