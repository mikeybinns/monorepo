import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		include: ["src/**/*.test.{js,mjs,cjs,ts,jsx,tsx}"],
		watchExclude: ["**/node_modules/**", "**/dist/**"],
	},
});
