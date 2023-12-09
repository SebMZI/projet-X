// "use client";
// // import { useState, useEffect, SyntheticEvent } from "react";

// import Papa from "papaparse";

// const ReadCsv = () => {
//   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     // Assurez-vous que l'input est de type "file"
//     const fileInput = event.target as HTMLInputElement;
//     const file = fileInput.files?.[0];

//     if (file) {
//       Papa.parse(file, {
//         header: true,
//         skipEmptyLines: true,
//         complete: function (results) {
//           console.log(results.data, "lalal");

//         },
//       });
//     }
//   };
//   return (
//     <div className="custom-file-input">
//       <label htmlFor="fileInput" className="file-label">
//         select your file
//       </label>
//       <input
//         type="file"
//         id="fileInput"
//         name="file"
//         accept=".csv"
//         onChange={changeHandler}
//         className="mt-10 block w-0 text-sm text-slate-500
//     file:mr-4 file:py-2 file:px-4
//     file:rounded-full file:border-0
//     file:text-sm file:font-semibold
//     file:bg-[#d681f035]] file:text-[#5903A4]
//     hover:file:bg-[#d681f04b] cursor-pointer"
//       />
//     </div>
//   );
// };

// export default ReadCsv;

import Papa from "papaparse";

const ReadCsv = () => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file) {
      Papa.parse(file, {
        header: false,
        skipEmptyLines: true,
        complete: function (results) {
          const data = results.data;

          // Identifiez les indices de début et de fin des différentes sections
          const historyStartIndex = data.findIndex((row) => row[0]?.toLowerCase().includes("trade history report"));
          const positionsStartIndex = data.findIndex((row) => row[0]?.toLowerCase().includes("positions"));
          const ordersStartIndex = data.findIndex((row) => row[0]?.toLowerCase().includes("orders"));
          const dealsStartIndex = data.findIndex((row) => row[0]?.toLowerCase().includes("deals"));
          const resultStartIndex = data.findIndex((row) => row[0]?.toLowerCase().includes("result"));
          const endIndices = [positionsStartIndex, ordersStartIndex, dealsStartIndex, resultStartIndex].filter((index) => index !== -1);
          let indexes = [];

          data.forEach((innerArray, index) => {
            // Vérifier si le premier élément est une chaîne non vide
            // et si les 13 éléments suivants sont des chaînes vides
            if (innerArray.length === 14 && typeof innerArray[0] === "string" && innerArray[0].trim() !== "" && innerArray.slice(1).every((element) => element === "")) {
              indexes.push(index);
            }
          });
          console.log(indexes);

          // Séparez les données en différentes parties en utilisant les indices
          const history = data.slice(0, 5);
          const positions = data.slice(indexes[1], indexes[2]);
          const orders = data.slice(indexes[2], indexes[3]);
          const deals = data.slice(indexes[3], indexes[4]);
          const result = data.slice(data.length - 13, data.length);

          // Faites quelque chose avec les trois parties

          console.log("History:", history);
          console.log("Positions:", positions);
          console.log("Orders:", orders);
          console.log("Deals:", deals);
          console.log("Result:", result);
        },
      });
    }
  };

  return (
    <div className="custom-file-input">
      <label htmlFor="fileInput" className="file-label">
        Select your file
      </label>
      <input
        type="file"
        id="fileInput"
        name="file"
        accept=".csv"
        onChange={changeHandler}
        className="mt-10 block  text-sm text-slate-500
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
