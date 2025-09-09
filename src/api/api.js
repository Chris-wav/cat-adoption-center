import axios from "axios";

export const fetchCats = async () => {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/breeds`, {
      headers: {
        "x-api-key": import.meta.env.VITE_CAT_API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch cats:", error);
    return []; // Επιστρέφει κενό array σε περίπτωση σφάλματος
  }
};

export const getFilteredCats = async (query) => {
  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/breeds`, {
      headers: {
        "x-api-key": import.meta.env.VITE_CAT_API_KEY,
      },
    });

    const data = response.data;
    if (!query || query.trim() === "") {
      return data;
    }
    const filtered = data.filter((cat) =>
      cat.name.toLowerCase().includes(query.toLowerCase().trim())
    );
    return filtered;
  } catch (err) {
    console.error("Error fetching cats:", err);
    return [];
  }
};
