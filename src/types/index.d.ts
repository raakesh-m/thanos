export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  keywords: string[];
  creator: {
    name: string;
    url: string;
  };
  socials: {
    github: string;
  };
};
