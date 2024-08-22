export interface BlogPost {
  title: string;
  date: string;
  description: string;
  link: string;
  image: string;
}

export type BlogSection =
  | { type: 'image'; url: string; alt: string }
  | { type: 'paragraph'; content: string }
  | { type: 'heading'; content: string }
  | { type: 'sub-heading'; content: string };

export type BlogAuthor = {
  name: string;
  title: string;
  desc: string;
  profileImageUrl: string;
  socialMedia: {
    linkedin: string;
  };
};

export type RelatedArticle = {
  title: string;
  url: string;
};

export type BlogData = {
  blog: {
    title: string;
    datePublished: string;
    readingTime: string;
    author: BlogAuthor;
    sections: BlogSection[];
    relatedArticles: RelatedArticle[];
  };
};
