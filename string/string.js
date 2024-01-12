// function replaceAlphabets(inputString, n) {
//   return inputString.replace(/[a-zA-Z]/g, (char) => {
//     const isUpperCase = char === char.toUpperCase();
//     const baseCharCode = isUpperCase ? 65 : 97;
//     const shiftedCharCode =
//       ((char.charCodeAt(0) - baseCharCode + n) % 26) + baseCharCode;
//     return String.fromCharCode(shiftedCharCode);
//   });
// }

// // Example usage
// const inputString = "Hello, World!";
// const shiftedString = replaceAlphabets(inputString, 3);
// console.log(shiftedString);


    function replaceAlphabets(string,n){
        return string.replace(/[a-zA-z]/g,(char)=>{
            const isUpperCase = char ==char.toUpperCase()
            const baseCharCode = isUpperCase ? 65 :97
            const shiftedCharCode =
            ((char.charCodeAt(0)-baseCharCode+n)%26)+baseCharCode
            return string.fromCharCode(shiftedCharCode)
    }