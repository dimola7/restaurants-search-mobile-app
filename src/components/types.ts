export interface ISearch {
  term: string;
  onTermChange: Function;
  onTermSubmit: () => void;
}

export interface IResults {
  title: string;
  results: any;
}

export interface IResultDetails {
  result: {
    name: string;
    image_url: string;
    rating: number;
    review_count: number;
  };
}
