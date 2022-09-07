// Weed Strains
export async function getWeedStrains() {
    try {
        const response = await fetch("https://api.otreeba.com/v1/strains?count=20&sort=-createdAt");
        const data = await response.json();
        
        return data.data;

    } catch (error) {
        return error.message;
    };
};

// Extracts
export async function getExtracts() {
    try {
        const response = await fetch("https://api.otreeba.com/v1/extracts?count=25&sort=-createdAt");
        const data = await response.json();

        return data.data;

    } catch (err) {
        return err.message;
    };
};

// Extracts
export async function getEdibles() {
    try {
        const response = await fetch("https://api.otreeba.com/v1/edibles?count=35&sort=-createdAt");
        const data = await response.json();

        return data.data;

    } catch (err) {
        return err.message;
    }
};
