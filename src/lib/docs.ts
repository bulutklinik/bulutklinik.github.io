// Shared metadata + helpers for the SDK documentation section.

export const DOC_VERSION = "v0.x";

export interface LangMeta {
  /** URL/id segment under src/content/docs. */
  key: string;
  /** Human label. */
  name: string;
  /** Short label for the sidebar switcher. */
  short: string;
  /** Package registry + coordinate, shown on cards. */
  registry: string;
  pkg: string;
  install: string;
  repo: string;
}

const ORG = "https://github.com/bulutklinik";

// Display order on the docs landing page + language switcher.
export const LANGS: LangMeta[] = [
  {
    key: "js",
    name: "JavaScript / TypeScript",
    short: "JS / TS",
    registry: "npm",
    pkg: "@bulutklinik/sdk",
    install: "npm install @bulutklinik/sdk",
    repo: `${ORG}/js-sdk`,
  },
  {
    key: "python",
    name: "Python",
    short: "Python",
    registry: "PyPI",
    pkg: "bulutklinik-sdk",
    install: "pip install bulutklinik-sdk",
    repo: `${ORG}/python-sdk`,
  },
  {
    key: "php",
    name: "PHP",
    short: "PHP",
    registry: "Packagist",
    pkg: "bulutklinik/sdk",
    install: "composer require bulutklinik/sdk",
    repo: `${ORG}/php-sdk`,
  },
  {
    key: "go",
    name: "Go",
    short: "Go",
    registry: "Go modules",
    pkg: "github.com/bulutklinik/go-sdk",
    install: "go get github.com/bulutklinik/go-sdk",
    repo: `${ORG}/go-sdk`,
  },
  {
    key: "java",
    name: "Java",
    short: "Java",
    registry: "Maven Central",
    pkg: "com.bulutklinik:sdk",
    install: 'implementation("com.bulutklinik:sdk:0.1.0")',
    repo: `${ORG}/java-sdk`,
  },
  {
    key: "csharp",
    name: "C# / .NET",
    short: "C#",
    registry: "NuGet",
    pkg: "Bulutklinik.Sdk",
    install: "dotnet add package Bulutklinik.Sdk",
    repo: `${ORG}/csharp-sdk`,
  },
  {
    key: "cpp",
    name: "C++",
    short: "C++",
    registry: "vcpkg · Conan · CMake",
    pkg: "bulutklinik-sdk",
    install: "find_package(bulutklinik CONFIG REQUIRED)",
    repo: `${ORG}/cpp-sdk`,
  },
];

export const LANG_BY_KEY: Record<string, LangMeta> = Object.fromEntries(
  LANGS.map((l) => [l.key, l]),
);

/** Strip a trailing `/index` (or bare `index`) so index pages map to their folder URL. */
export function normalizeSlug(id: string): string {
  return id.replace(/(^|\/)index$/, "") || id;
}

/** Pull the language key out of a content entry id, e.g. `js/v0.x/authentication` → `js`. */
export function langKeyOf(id: string): string {
  return id.split("/")[0];
}
