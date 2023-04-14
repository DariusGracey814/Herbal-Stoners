// Extracts
export async function getExtracts() {
  try {
    const response = await fetch(
      "https://api.otreeba.com/v1/extracts?count=15&sort=-createdAt"
    );
    const data = await response.json();
    let id = 1;

    const updatedExtracts = data.data.map(
      (extract) => (extract = { id: id++, ...extract })
    );

    return updatedExtracts;
  } catch (err) {
    return err.message;
  }
}

// Extracts
export async function getEdibles() {
  try {
    const response = await fetch(
      "https://api.otreeba.com/v1/edibles?count=15&sort=-createdAt"
    );
    const data = await response.json();
    let id = 1;

    const updatedEdibles = data.data.map(
      (edible) => (edible = { id: id++, ...edible })
    );

    return updatedEdibles;
  } catch (err) {
    return err.message;
  }
}
