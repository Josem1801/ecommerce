import React from 'react';
import { Button } from 'shared/styles';
import { GoSearch } from 'react-icons/go';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SearchForm, SearchSection } from './styles';

type SearchFormTypes = {
  search: string;
};

interface SearchProps {
  handleSearch: (data: SearchFormTypes) => void;
}

const schema = Yup.object({
  search: Yup.string().required().min(3),
});
export default function Search({ handleSearch }: SearchProps) {
  const { register, handleSubmit } = useForm<SearchFormTypes>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<SearchFormTypes> = (data) => handleSearch(data);
  return (
    <SearchSection>
      <SearchForm onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Product, category and brand name..."
          {...register('search')}
        />
        <Button>
          <GoSearch fontSize={20} /> Search
        </Button>
      </SearchForm>
    </SearchSection>
  );
}
