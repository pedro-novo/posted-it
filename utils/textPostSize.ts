export const textPostSize = (text: string, wordsSize: number) => {
   let textAbbreviation = text?.split(" ");

   if (textAbbreviation?.length < wordsSize) {
      return text;
   } else {
      return textAbbreviation?.slice(0, wordsSize)?.join(" ") + "...";
   }
};
