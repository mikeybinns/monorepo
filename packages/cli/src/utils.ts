import type { ExecException } from "node:child_process";
import type { PackageJson } from "type-fest";
import { exec } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
export const packageJson = require("../package.json") as PackageJson;
if (packageJson.bin === undefined) {
	throw new Error("Script name is not defined.");
}
export const mainCommand = Object.keys(packageJson.bin)[0];
if (!packageJson.version) {
	throw new Error("Package has no version number set.");
}
export const packageVersion = packageJson.version;

export function hasHelpFlag(args: string[]) {
	return !!args.find((arg) => arg === "--help" || arg === "-h");
}

export async function execute(command: string) {
	return new Promise<{
		error: ExecException | null;
		stdout: string;
		stderr: string;
	}>((resolve, reject) => {
		exec(command, (error, stdout, stderr) => {
			if (error) {
				reject({ error, stdout, stderr });
			}
			resolve({ error, stdout, stderr });
		});
	});
}
