export const filterNestedObjectsByString = (data, searchString) => {
  const lowerCaseSearchString = searchString.toLowerCase();

  const search = (data) => {
    if (typeof data === "string") {
      return data.toLowerCase().includes(lowerCaseSearchString) ? data : null;
    } else if (Array.isArray(data)) {
      const filteredArray = data
        .map((item) => search(item))
        .filter((item) => item !== null);
      return filteredArray.length > 0 ? filteredArray : null;
    } else if (typeof data === "object" && data !== null) {
      let hasMatch = false;
      const filteredObject = {};

      for (const [key, value] of Object.entries(data)) {
        const filteredValue = search(value);
        if (filteredValue !== null) {
          filteredObject[key] = filteredValue;
          hasMatch = true;
        }
      }

      // Preserve siblings only if there is a match in the current object
      if (hasMatch) {
        for (const [key, value] of Object.entries(data)) {
          if (!(key in filteredObject)) {
            filteredObject[key] = value;
          }
        }
      }

      return hasMatch ? filteredObject : null;
    }

    return null;
  };

  return search(data);
};
