export const locales = ["zh-Hans", "zh-Hant", "en"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  "zh-Hans": "简体中文",
  "zh-Hant": "繁體中文",
  en: "English",
};

export const localeStorageKey = "portfolio.locale.v1";

export function isLocale(value: unknown): value is Locale {
  return locales.some((locale) => locale === value);
}

export function resolveLocale(languages: readonly string[]): Locale {
  for (const language of languages) {
    const [base, ...parts] = language.toLowerCase().split("-");
    if (base === "en") return "en";
    if (base !== "zh") continue;
    if (parts.includes("hant")) return "zh-Hant";
    if (parts.includes("hans")) return "zh-Hans";
    return parts.some((part) => ["tw", "hk", "mo"].includes(part)) ? "zh-Hant" : "zh-Hans";
  }
  return "en";
}
