import { useState } from "react";
import DropDown from "../components/DropDown";

function DropDownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
    { label: "Yellow", value: "yellow" },
    { label: "Purple", value: "purple" },
  ];

  return (
    <div className="flex">
      <DropDown value={selection} options={options} onChange={handleSelect} />
    </div>
  );
}

export default DropDownPage;
