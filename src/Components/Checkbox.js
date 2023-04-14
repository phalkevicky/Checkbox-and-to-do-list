import React, { useState } from 'react'

const Checkbox = () => {

    const [checkboxes, setCheckboxes] = useState({
        option1: false,
        option2: false,
        option3: false
      });

    const handleCheckboxChange = (event) => {
        const checkboxName = event.target.name;
        const checkboxValue = event.target.checked;
      
        setCheckboxes({
          ...checkboxes,
          [checkboxName]: checkboxValue
        });
      };

      const checkedValues = Object.entries(checkboxes)
  .filter(([key, value]) => value)
  .map(([key, value]) => key);

      console.log("checkboxes",checkedValues);
  return (
    <div>Checkbox

<input type="checkbox" id="check-all" checked={Object.values(checkboxes).every((value) => value)} onChange={(event) => {
  const isChecked = event.target.checked;
  const newCheckboxes = Object.keys(checkboxes).reduce((acc, key) => {
    acc[key] = isChecked;
    return acc;
  }, {});
  setCheckboxes(newCheckboxes);
}} /> Check All
<br />
<input type="checkbox" name="option1" checked={checkboxes.option1} onChange={handleCheckboxChange} /> Option 1
<br />
<input type="checkbox" name="option2" checked={checkboxes.option2} onChange={handleCheckboxChange} /> Option 2
<br />
<input type="checkbox" name="option3" checked={checkboxes.option3} onChange={handleCheckboxChange} /> Option 3
<br />
    </div>
  )
}

export default Checkbox