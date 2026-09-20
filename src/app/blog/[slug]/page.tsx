import { BlogPostContent } from "@/components/localized-blog";
import { getBlogPosts, getPost, getPostTranslations } from "@/data/blog";
import { DATA } from "@/data/resume";
import { Locale, locales } from "@/i18n/locales";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  let { title, publishedAt: publishedTime, summary: description, image } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const translations = await getPostTranslations(params.slug);
  const localizedPosts = Object.fromEntries(
    locales.map((locale) => [
      locale,
      {
        title: translations[locale].metadata.title as string,
        publishedAt: translations[locale].metadata.publishedAt as string,
        locale: translations[locale].locale,
        source: translations[locale].source,
      },
    ]),
  ) as Record<Locale, { title: string; publishedAt: string; locale: string; source: string }>;

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image ? `${DATA.url}${post.metadata.image}` : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <BlogPostContent posts={localizedPosts} />
    </section>
  );
}
