import { defineConfig } from "vitest/config";
import { setup, teardown } from "./src/test-setup";

export default defineConfig({
	test: {
		include: ["src/**/*.test.{js,mjs,cjs,ts,jsx,tsx}"],
		watchExclude: ["**/node_modules/**", "**/dist/**"],
		globalSetup: ["./src/test-setup.ts"],
		reporters: ["default", { async onWatcherRerun() {
			// Delete test package and node_modules
			await teardown();
			// re-create new test package based on new build
			await setup();
		}}]
	},
});
