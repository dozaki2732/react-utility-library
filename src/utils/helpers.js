const safelyParseJSON = (str) => {
   try {
      JSON.parse(str);
   } catch (err) {
      return str;
   }
   return JSON.parse(str); //could be undefined
};

const convertDataType = (str) => {
   if (str === "null") return null;
   if (str === "undefined") return undefined;
   if (str === "true") return true;
   if (str === "false") return false;
   if (str == Number(str)) return Number(str);
   if (Array.isArray(str)) return safelyParseJSON(str);
};
