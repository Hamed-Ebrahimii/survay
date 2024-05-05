import { HTMLAttributes, ReactNode } from "react";

interface DropDownProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  multiple?: boolean;
  search?: boolean;
  isLoading?: boolean;
  setSearchValue?: Dispatch<React.SetStateAction<ISearch>>;
  checkBox?: boolean;
  data?: string[];
  searchData?: ISearch;
  name:
    | "name"
    | "website"
    | "company"
    | "phone"
    | "city"
    | "job"
    | "education"
    | "militaryService"
    | string;
  lable: string;
  requier?: boolean;
  error?: string;
  onChange?: (value: string | undefined) => void;
  placeholder?: string;
  selectAll? : boolean
}
interface ISearch {
 [key : string] : string
}
