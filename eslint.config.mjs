import { defineConfig } from "eslint/config";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default defineConfig(
  { ignores: ["dist/", ".astro/", "src/env.d.ts"] },
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
);
