import { IDoctor } from 'src/app/pages/doctors/model/doctor';

export interface IPageable {
  content?: IDoctor[] | null;
  pageable: IPageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: ISort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface IPageableOptions {
  sort: ISort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}
export interface ISort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
