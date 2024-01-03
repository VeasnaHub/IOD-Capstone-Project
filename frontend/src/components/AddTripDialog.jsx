import { useState } from "react";
import AddTripCard from "./AddTripCard";
import CloseIcon from '@mui/icons-material/Close';

function AddTripDialog() {
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setDialogOpen(true)
    }

    const handleCloseDialog = () => {
        setDialogOpen(false);
      };

    return (
        <div className="AddTripDialog">
            <button className="green-button" onClick={handleOpenDialog}>OFFER NEW TRIP</button>
            {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-content">
            <div className="dialog-header">
              <h1 className="white-font bold-font">ADD TRIP</h1>
              <CloseIcon onClick={handleCloseDialog} />
            </div>
            <AddTripCard />
          </div>
        </div>
      )}
        </div>
    )
}

export default AddTripDialog;
