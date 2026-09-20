import { BlogList } from "@/components/localized-blog";
import { getBlogPosts, getPostTranslations } from "@/data/blog";
import { Locale, locales } from "@/i18n/locales";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const localizedPosts = await Promise.all(
    posts
      .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
      .map(async (post) => {
        const translations = await getPostTranslations(post.slug);
        return {
          slug: post.slug,
          translations: Object.fromEntries(
            locales.map((locale) => [
              locale,
              {
                title: translations[locale].metadata.title as string,
                publishedAt: translations[locale].metadata.publishedAt as string,
                locale: translations[locale].locale,
              },
            ]),
          ) as Record<Locale, { title: string; publishedAt: string; locale: string }>,
        };
      }),
  );
  return <BlogList posts={localizedPosts} />;
}
