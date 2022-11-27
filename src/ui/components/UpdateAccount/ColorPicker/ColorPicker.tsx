import React from "react";
import styles from "./ColorPicker.module.scss";

export const ColorPicker = (props: any) => {
  return (
    <div className={styles.ColorPickerContainer}>
      <div>
        <p className="hint">Farvepalette</p>
        <input
          type="color"
          id="color"
          name="color"
          // list="colors"
          placeholder="&nbsp;"
          {...props}
        />
        <datalist id="colors">
          <option value="#C9E9FB">#C9E9FB</option>
          <option value="#005776">#005776</option>
          <option value="#ED8B00">#ED8B00</option>
          <option value="#00BEF0">#00BEF0</option>
        </datalist>
      </div>
      <div>
        <p className="hint">Hexcode</p>
        <input type="text" id="colorText" placeholder="&nbsp;" name="colorText" {...props} />
      </div>
    </div>
  );
};
