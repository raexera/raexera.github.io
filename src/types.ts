export type Page = {
  TITLE: string;
  DESCRIPTION: string;
};

export interface Site extends Page {
  AUTHOR: string;
  REPO_URL: string;
}

export type Links = {
  TEXT: string;
  HREF: string;
}[];
