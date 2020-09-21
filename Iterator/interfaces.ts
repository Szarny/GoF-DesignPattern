export interface Aggregate {
  iterator: (isReverse: boolean) => Iterator;
}

export interface Iterator {
  hasNext: () => boolean;
  next: () => any;
}