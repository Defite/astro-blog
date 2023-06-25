export enum Categories {
  Blog = "blog",
  Js = "js",
}
export interface Frontmatter {
  title: string;
  coverImage?: string;
  excerpt: string;
  author: string;
  datetime: string;
  slug: string;
  featured: boolean;
  draft: boolean;
  tags?: string[];
  category: Categories;
}

export type SocialsObject = {
  name: SocialMedia;
  href: string;
  active: boolean;
}[];

export type SocialIcons = {
  [social in SocialMedia]: string;
};

export type SocialMedia =
  | "Github"
  | "Facebook"
  | "Instagram"
  | "Linkedin"
  | "Mail"
  | "Twitter"
  | "Twitch"
  | "YouTube"
  | "WhatsApp"
  | "Snapchat"
  | "Pinterest"
  | "TikTok"
  | "CodePen"
  | "Discord"
  | "GitLab"
  | "Reddit"
  | "Skype"
  | "Steam"
  | "Telegram";
