"use client";
// import { useState, useEffect, SyntheticEvent } from "react";

import Papa from "papaparse";

const ReadCsv = () => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Assurez-vous que l'input est de type "file"
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          console.log(results.data, "lalal");
        },
      });
    }
  };
  return (
    <div className="custom-file-input">
      <label htmlFor="fileInput" className="file-label">
        select your file
      </label>
      <input
        type="file"
        id="fileInput"
        name="file"
        accept=".csv"
        onChange={changeHandler}
        className="mt-10 block w-full text-sm text-slate-500
    file:mr-4 file:py-2 file:px-4
    file:rounded-full file:border-0
    file:text-sm file:font-semibold
    file:bg-[#d681f035]] file:text-[#5903A4]
    hover:file:bg-[#d681f04b] cursor-pointer"
      />
    </div>
  );
};

export default ReadCsv;
