export interface Page {
  readonly name: string;
  readonly to: string;
}

export interface AboutSection {
  readonly title: string;
  readonly text: string;
}

export interface Project {
  readonly title: string;
  readonly text: string;
  readonly frontEnd: readonly string[];
  readonly backEnd: readonly string[];
  readonly github: string;
  readonly deployLink: string;
  readonly images: readonly string[];
}

export interface About {
  readonly heroTitle: string;
  readonly heroText: string;
  readonly about: readonly AboutSection[];
}

export interface Projects {
  readonly heroTitle: string;
  readonly heroText: string;
  readonly projects: readonly Project[];
}

export interface Content {
  readonly pages: readonly Page[];
  readonly about: About;
  readonly projects: Projects;
}