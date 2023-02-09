import React from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Header = () => {
const [age, setAge] = React.useState('');

const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
};
  return (
    <div>Header</div>
  )
}

export default Header