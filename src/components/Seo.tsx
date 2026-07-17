import { Helmet } from 'react-helmet-async';

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
};

const BASE = 'Saurabh Kumar — Full Stack Developer & AI Engineer';
const DEFAULT_DESC =
  'Portfolio of Saurabh Kumar, a Full Stack Developer and AI Engineer from Meerut, India. Building scalable web applications and exploring AI.';

export default function Seo({ title, description = DEFAULT_DESC, path = '/' }: SeoProps) {
  const fullTitle = title ? `${title} | Saurabh Kumar` : BASE;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={`https://saurabhkumar.dev${path}`} />
    </Helmet>
  );
}
