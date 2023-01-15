export interface ISearch {
  term: string;
  onTermChange: Function;
  onTermSubmit: () => void;
}
