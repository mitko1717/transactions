import Button from '@mui/material/Button';
import SelectStatus from "./StatusSelect";
import SelectType from "./TypeSelect";

const Header = () => {

  return (
    <div className="flex gap-x-6">
      <div className="flex gap-x-2">
        <SelectStatus />
        <SelectType />
      </div>
      <div className="flex gap-x-2">
      <Button variant="contained" disabled>Import</Button>
      <Button variant="contained" disabled>Export</Button>
      </div>
    </div>
  );
};

export default Header;
