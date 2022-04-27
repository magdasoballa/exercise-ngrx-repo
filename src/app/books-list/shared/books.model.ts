export interface Book {
  id: string;
  saleInfo: {
    listPrice: {
      amount: number;
    };
    saleability: string;
  };
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishDate: string;
    description: string;
    averageRating: number;
    ratingsCount: number;
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
    };
  };
}

export interface Books {
  items: Book[];
}
