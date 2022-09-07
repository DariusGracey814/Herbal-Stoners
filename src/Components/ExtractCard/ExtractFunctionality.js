 // Image functionality
export const displayImage = (extract, data, randNum1, randNum2) => {
    // Display Extract Image
    if (extract.type === "vaporizer cartridge" || extract.type === "oil") {
      return data.extracts[randNum1];
    }
    else {
      return data.wax[randNum2];
    }
};

export const displayBreeder = (extract, data, randNum1, randNum2) => {
     // Display Extract Image
     if (extract.type === "vaporizer cartridge" || extract.type === "oil") {
        return data.extractBreeders[randNum1];
      }
      else {
        return data.waxBreeders[randNum2];
      }
}
