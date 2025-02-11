'use client';

import './searchFilter.scss';
import { Button, TextField } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListings, setSearchQueryCity } from '@/redux/listings/listings';
import { AppDispatch } from '@/store/store';

interface SearchFilterProps {
  searchQuery: string;
}

export default function SearchFilter(props: SearchFilterProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { searchQuery, listings } = useSelector((state: any) =>  state.searchListings);
  const { city } = searchQuery;
  const listingsCount = listings.length > 0;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(fetchListings());
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(setSearchQueryCity(value));
  };

  return (
    <div className="max-w-7xl pt-10 pb-5">
      {listingsCount  && ( 
        <h3 className="mb-5"> 
          {<span>{listings.length} rental apartments in {city}</span>} 
        </h3>
      )} 
      <form 
        className="search__form bg-white" 
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row gap-2">
          <TextField 
            placeholder="Where will you go ?" 
            className="w-full md:w-1/5" 
            value={city}
            onChange={handleChange}
          />
          <div className="flex w-full  md:w-2/5 gap-2">
            <TextField placeholder="Move-in date" className="w-1/2"  />
            <TextField placeholder="Move-out date" className="w-1/2 " />
          </div>
          <Button variant="contained" className="w-full md:w-1/5"><SortIcon /> Filter</Button>
          <Button variant="contained" className="w-full md:w-1/5" type='submit'> <SearchIcon /> Search</Button>
        </div>
      </form>
    </div>
  );
};