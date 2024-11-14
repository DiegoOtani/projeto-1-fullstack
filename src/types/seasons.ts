type Country = {
  name: string;
  code: string;
  timezone: string;
}

type Network = {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

type Image = {
  medium: string;
  original: string;
}

type Links = {
  self: {
    href: string;
  };
}

export type Season = {
  id: number;
  url: string;
  number: number;
  name: string;
  episodeOrder: number;
  premiereDate: string;
  endDate: string;
  network: Network | null;
  webChannel: null | string;
  image: Image | null;
  summary: string | null;
  _links: Links;
}

export type SeasonsArray = Season[];