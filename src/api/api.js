// Weed Strains
export async function getWeedStrains(evt) {
  try {
    const response = await fetch(
      "https://herbal-stoners-default-rtdb.firebaseio.com/strains"
    );
    const data = await response.json();

    return data;
  } catch (error) {
    return error.message;
  }
}

// Extracts
export async function getExtracts() {
  try {
    const response = await fetch(
      "https://api.otreeba.com/v1/extracts?count=25&sort=-createdAt"
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
      "https://api.otreeba.com/v1/edibles?count=25&sort=-createdAt"
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
