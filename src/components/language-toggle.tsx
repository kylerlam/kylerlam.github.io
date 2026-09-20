"use client";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { isLocale, localeNames, locales } from "@/i18n/locales";
import { Languages } from "lucide-react";
import { useState } from "react";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    <DropdownMenu
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen);
        setTooltipOpen(false);
      }}
      modal={false}
    >
      <Tooltip open={!open && tooltipOpen} onOpenChange={setTooltipOpen}>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              type="button"
              className="size-12 aria-expanded:bg-accent [&_svg]:size-4"
              aria-label={`${t.changeLanguage}: ${localeNames[locale]}`}
            >
              <Languages aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>{t.language}</TooltipContent>
      </Tooltip>
      <DropdownMenuContent
        side="top"
        align="center"
        sideOffset={12}
        collisionPadding={12}
        aria-label={t.language}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            setOpen(false);
          }
        }}
      >
        <DropdownMenuLabel>{t.language}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(value) => {
            if (isLocale(value)) setLocale(value);
          }}
        >
          {locales.map((language) => (
            <DropdownMenuRadioItem key={language} value={language} lang={language}>
              {localeNames[language]}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
