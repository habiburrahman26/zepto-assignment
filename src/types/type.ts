export interface BookType  {
    id: number;
    title: string;
    authors: {
      name: string;
      birth_year: number;
      death_year: number;
    }[];
    subjects: string[];
    bookshelves: string[];
    languages: string[];
    formats: {
      "text/html"?: string;
      "application/epub+zip"?: string;
      "application/x-mobipocket-ebook"?: string;
      "application/rdf+xml"?: string;
      "image/jpeg"?: string;
      "text/plain; charset=us-ascii"?: string;
      "application/octet-stream"?: string;
    };
  };
  