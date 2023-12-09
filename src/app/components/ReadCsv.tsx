"use client";
import { useEffect} from "react";
import Papa from "papaparse";


const MyComponent: React.FC = () => {
  useEffect(() => {
    const handleFileChange = async (event: Event) => {
      const fileInput = event.target as HTMLInputElement;
      if (fileInput.files && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        if (file) {
          handleAnalyse(file);
        }
      }
    };
    const handleAnalyse = (file: File) => {
      console.log(file);
      Papa.parse(file, {
        header: false,
        skipEmptyLines: true,
        complete(results) {
          const rows = results.data;
          const categoryIndices: number[] = [];
          rows.map((row: any, index: number) => {
            if (
              row[0].length > 0 &&
              row.slice(1).every((element: string) => element === "")
            ) {
              categoryIndices.push(index);
            }
          });
          const history = rows.slice(0, 5);
          const positions = rows.slice(categoryIndices[1], categoryIndices[2]);
          const orders = rows.slice(categoryIndices[2], categoryIndices[3]);
          const deals = rows.slice(categoryIndices[3], categoryIndices[4]);
          const result = rows.slice(rows.length - 13, rows.length);
        },
      });
    };
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.addEventListener("change", handleFileChange);
    }
    return () => {
      if (fileInput) {
        fileInput.removeEventListener("change", handleFileChange);
      }
    };
  }, []); 

  return (
    <div>
      <input type="file" accept=".csv" id="fileInput" />
    </div>
  );
};

export default MyComponent;
