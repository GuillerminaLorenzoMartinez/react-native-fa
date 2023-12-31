const fetchData = async () => {
  try {
    const response = await fetch(
      "https://fundingawards.nihr.ac.uk/api/latest/6"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export { fetchData };
