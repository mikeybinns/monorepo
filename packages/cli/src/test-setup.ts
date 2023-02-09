import { unlink, writeFile } from "node:fs";
import { execute, packageJson } from "./utils";

const packageName = packageJson.name;
const packageVersion = packageJson.version;
function isValidPackageName(packageName: string|undefined): packageName is string {
	return !!packageName;
}
function isValidPackageVersion(packageVersion: string|undefined): packageVersion is string {
	return !!packageVersion;
}
if (!isValidPackageName(packageName) || !isValidPackageVersion(packageVersion)) {
	throw new Error("Invalid package, must have name and version");
}
const packName = `${packageName.replaceAll("@", "").replaceAll(`/`, "-")}-${packageVersion}.tgz`;

export async function setup() {
  console.log('Packing a test version...')
	await execute(`npm pack --pack-destination ${process.cwd()}/src/tests/artifacts`);
  console.log(`Install test package...`)
	writeFile('./src/tests/package.json', '{}', (err) => {
		if (err) throw err;
	});
	await execute(`cd src/tests && npm pkg set dependencies.@atomicsmash/cli=file:${process.cwd()}/src/tests/artifacts/${packName} && npm install`);
}

export async function teardown() {
	console.log("Deleting test package...")
	unlink(`${process.cwd()}/src/tests/artifacts/${packName}`, (err) => {
		if (err) throw err;
	});
	console.log("Deleting node modules...")
	await execute(`cd src/tests && rm -rf node_modules package.json package-lock.json`);
}
