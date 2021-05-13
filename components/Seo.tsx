import Head from 'next/head';

import config from '../config';

const Seo = ({
  title,
  description,
  image,
}: {
  title?: string;
  description?: string;
  image?: string;
}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta content="ie=edge" httpEquiv="x-ua-compatible" />
      <meta content="initial-scale=1, width=device-width" name="viewport" />
      <meta
        content={description ? description : config.SEO.description}
        name="description"
      />
      <meta content={config.SEO.keywords} name="keywords" />
      <meta content={config.SEO.themeColor} name="theme-color" />
      <meta content={config.SEO.themeColor} name="msapplication-TileColor" />
      <meta content={config.SEO.themeColor} name="msapplication-TileColor" />
      <meta content="yes" name="mobile-web-app-capable" />
      <meta content="Tool Box" name="application-name" />
      <meta content="yes" name="apple-mobile-web-app-capable" />
      <meta
        content={config.SEO.themeColor}
        name="apple-mobile-web-app-status-bar-style"
      />
      <meta content="Tool Box" name="apple-mobile-web-app-title" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="website" property="og:type" />
      <meta content="en-US" property="og:locale" />
      {/* twitter */}
      <meta content={config.SEO.twitterUsername} name="twitter:site" />
      <meta
        content={title ? `${title} - Tool Box` : config.SEO.title}
        name="twitter:title"
      />
      <meta
        content={description ? description : config.SEO.description}
        name="twitter:description"
      />
      <meta content={image ? image : config.SEO.image} name="twitter:image" />
      <meta content={config.SEO.name} name="twitter:image:alt" />
      {/* open graph */}
      <meta property="og:image" content={image ? image : config.SEO.image} />
      <meta property="og:site_name" content={config.SEO.name} />
      <meta content={config.siteUrl} property="og:url" />
      <meta
        content={title ? `${title} - Tool Box` : config.SEO.title}
        property="og:title"
      />
      <meta
        content={description ? description : config.SEO.description}
        property="og:description"
      />
      <meta content={image ? image : config.SEO.image} property="og:image" />

      <title>{title ? `${title} - Tool Box` : config.SEO.title}</title>
    </Head>
  );
};

export default Seo;
