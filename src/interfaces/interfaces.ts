export interface HeroCard {
  image: string;
  title: string;
  info: string;
}

 export interface HeroProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export interface LinkItem {
  name: string;
  to: string;
}

export interface NavbarProps {
  links: LinkItem[];
  logo: string;
  bttn: string;
}
export interface CardHeroContainerProps {
  cards: HeroCard[];
}

export interface Title {
  title: string;
  description: string;
}

export interface ActionCardProps {
  icon: string;
  title: string;
  description: string;
  className?: boolean;
}

export interface ApartmentCardProps {
  image: string;
  price: string;
  title: string;
  location: string;
}

export type ColumnItem = string | string[];

export interface Column {
  title: string;
  items: ColumnItem[];
}

export interface FooterProps {
  logo: string;
  description: string;
  columns: Column[];
  bottomLeft: string;
  bottomRight: string[];
}

export interface Properties {
  button: string;
  images: string[];
}
