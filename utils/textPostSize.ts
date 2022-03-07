export const textPostSize = (text: string) => {
   let textAbbreviation = text.split(" ");

   if (textAbbreviation.length < 8) {
      return text;
   } else {
      return textAbbreviation.slice(0, 8).join(" ") + "...";
   }
};
