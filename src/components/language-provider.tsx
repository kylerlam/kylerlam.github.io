"use client";

import { isLocale, Locale, localeStorageKey, resolveLocale } from "@/i18n/locales";
import { messages } from "@/i18n/messages";
import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Match the static English HTML on the first render to avoid hydration errors.
  const [locale, updateLocale] = useState<Locale>("en");

  useEffect(() => {
    let preferred = resolveLocale(navigator.languages);
    try {
      const saved = localStorage.getItem(localeStorageKey);
      if (isLocale(saved)) preferred = saved;
    } catch {
      // Language switching also works when browser storage is unavailable.
    }
    updateLocale(preferred);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function setLocale(nextLocale: Locale) {
    updateLocale(nextLocale);
    try {
      localStorage.setItem(localeStorageKey, nextLocale);
    } catch {
      // Keep the selection for this visit even if it cannot be persisted.
    }
  }

  return <LanguageContext.Provider value={{ locale, setLocale }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return { ...context, t: messages[context.locale] };
}
