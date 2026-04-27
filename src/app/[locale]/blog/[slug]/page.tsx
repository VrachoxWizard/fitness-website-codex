import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {BlogPostPage} from "@/components/pages/marketing-pages";
import {JsonLd} from "@/components/json-ld";
import {getBlogPost, getBlogPosts} from "@/lib/site-data";
import {isLocale, locales} from "@/lib/routes";
import type {Locale} from "@/lib/types";
import {absoluteUrl, pageTitle} from "@/lib/seo";

type PageProps = {
  params: Promise<{locale: string; slug: string}>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getBlogPosts(locale).map((post) => ({locale, slug: post.slug}))
  );
}

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const {locale, slug} = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const post = getBlogPost(locale, slug);
  if (!post) {
    notFound();
  }

  const url = absoluteUrl(`${locale === "en" ? "/en" : ""}/blog/${post.slug}`);

  return {
    title: pageTitle(post.title, locale),
    description: post.description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      publishedTime: post.date,
      modifiedTime: post.reviewed,
      authors: [post.author]
    }
  };
}

export default async function BlogArticlePage({params}: PageProps) {
  const {locale, slug} = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const post = getBlogPost(locale, slug);
  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogPostPage locale={locale} post={post} />
      <JsonLd data={articleJsonLd(locale, post)} />
    </>
  );
}

function articleJsonLd(locale: Locale, post: NonNullable<ReturnType<typeof getBlogPost>>) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.reviewed,
    inLanguage: locale,
    author: {
      "@type": "Person",
      name: post.author
    },
    reviewedBy: {
      "@type": "Person",
      name: post.reviewer
    },
    publisher: {
      "@type": "Organization",
      name: "Fight Lab Coaching"
    }
  };
}
