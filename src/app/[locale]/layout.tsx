import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import "@/app/globals.css";
import {Footer} from "@/components/layout/footer";
import {SiteHeader} from "@/components/layout/site-header";
import {StickyMobileCTA} from "@/components/layout/sticky-mobile-cta";
import {JsonLd} from "@/components/json-ld";
import {isLocale, locales} from "@/lib/routes";
import {organizationJsonLd, siteName, siteUrl} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    telephone: false
  }
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale: rawLocale} = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={rawLocale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="site-shell">
            <SiteHeader locale={rawLocale} />
            <main>{children}</main>
            <Footer locale={rawLocale} />
            <StickyMobileCTA locale={rawLocale} />
          </div>
          <JsonLd data={organizationJsonLd(rawLocale)} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
