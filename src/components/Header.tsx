import Button from "@mui/material/Button";
import { useState } from "react";
import ModalForm from "./ModalDownload";
import SelectStatus from "./StatusSelect";
import SelectType from "./TypeSelect";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex gap-x-6">
      <div className="flex gap-x-2">
        <SelectStatus />
        <SelectType />
      </div>
      <div className="flex gap-x-2">
        <Button variant="contained" onClick={handleOpen}>
          Import
        </Button>
        <Button variant="contained" disabled>
          Export
        </Button>
      </div>

      <ModalForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </div>
  );
};

export default Header;
