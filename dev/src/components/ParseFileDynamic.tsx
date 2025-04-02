import { useEffect, useState } from "react";

export function useParseFileDynamic() {
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    const fetchFile = async () => {
      try {
        const response = await fetch(
          "/assets/ServerInformation/server_information.csv" // Fetch from the public folder
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        const parsedData = text
          .trim()
          .split("\n")
          .flatMap((line) => line.split(",").map((value) => parseFloat(value))); // Parse all values
        setData(parsedData);
      } catch (error) {
        console.error("Error fetching file:", error);
      }
    };

    fetchFile(); // Initial fetch

    const interval = setInterval(fetchFile, 60000); // Fetch every 60 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return data; // Return the parsed data array
}
