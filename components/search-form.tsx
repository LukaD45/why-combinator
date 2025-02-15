import Form from "next/form";
import SearchFormReset from "./search-form-reset";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchFormProps {
  query: string;
}

const SearchForm = ({ query }: SearchFormProps) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn text-white">
          <SearchIcon className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
