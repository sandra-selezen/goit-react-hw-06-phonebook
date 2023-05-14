// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import { RiUserSearchFill } from "react-icons/ri";
import { getFilter, setFilter } from 'redux/filterSlice';
// import { Title } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(setFilter(event.target.value.toLowerCase()));
  };

  return (
    <>
      <p>Find contact by name</p>
      {/* <Title><RiUserSearchFill /> Find contact by name </Title> */}
      <input value={filter} onChange={handleFilter} autoComplete="off" />
    </>

  )
}