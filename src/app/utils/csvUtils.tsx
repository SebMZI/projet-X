// import fs from "fs/promises";
// import csv from "csv-parser";

// export async function csvUtils(filePath: string): Promise<any[]> {
//   try {
//     console.log("Fetching CSV file from:", filePath);

//     const response = await fetch(filePath);
//     const fileData = await response.text();

//     console.log("File data:", fileData);

//     const rows = fileData.split("\n");
//     const results: any[] = [];

//     rows.forEach((row) => {
//       // Utiliser csv-parser ou une autre méthode pour traiter les données CSV
//       // Exemple avec csv-parser :
//       const parsedRow = parseCSVRow(row);
//       results.push(parsedRow);
//     });

//     console.log("Parsed CSV data:", results);

//     return results;
//   } catch (error) {
//     console.error("Erreur lors de la récupération des données CSV:", error);
//     throw error;
//   }
// }

// function parseCSVRow(row: string): any {
//   // Ajoutez votre logique pour traiter une ligne CSV ici
//   // Par exemple, pour le CSV simple, vous pourriez faire quelque chose comme :
//   return row.split(",");
// }
