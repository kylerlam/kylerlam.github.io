"use client";

import { useLanguage } from "@/components/language-provider";
import BlurFade from "@/components/magicui/blur-fade";
import type { Locale } from "@/i18n/locales";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

type PostSummary = { title: string; publishedAt: string; locale: string };

export function BlogList({ posts }: { posts: { slug: string; translations: Record<Locale, PostSummary> }[] }) {
  const { locale, t } = useLanguage();
  return (
    <section>
      <BlurFade delay={0.04}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">{t.blog}</h1>
      </BlurFade>
      {posts.map(({ slug, translations }, id) => {
        const post = translations[locale];
        return (
          <BlurFade delay={0.08 + id * 0.05} key={slug}>
            <Link className="mb-4 flex flex-col gap-1" href={`/blog/${slug}`}>
              <p className="tracking-tight" lang={post.locale}>
                {post.title}
              </p>
              <time dateTime={post.publishedAt} className="h-6 text-xs text-muted-foreground">
                {post.publishedAt}
              </time>
            </Link>
          </BlurFade>
        );
      })}
    </section>
  );
}

export function BlogPostContent({ posts }: { posts: Record<Locale, PostSummary & { source: string }> }) {
  const { locale } = useLanguage();
  const post = posts[locale];
  const date =
    locale === "en"
      ? formatDate(post.publishedAt)
      : new Intl.DateTimeFormat(locale, {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(new Date(`${post.publishedAt.split("T")[0]}T00:00:00`));

  return (
    <>
      <h1 lang={post.locale} className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <time dateTime={post.publishedAt} className="text-sm text-muted-foreground">
          {date}
        </time>
      </div>
      <article lang={post.locale} className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.source }} />
    </>
  );
}
