// export const getShowFlags = (items) => {
//     // Return an array of false bools for each page item
//     flags = [];
//     for (item in items) {
//         flags.push(false);   
//     }
//     return flags;
// };

// Creates an object with JSX elements. By default, the object can be split in two columns in the DOM
export const Item = (thisContent, thisCanSplit = true) => {
    return (
        {
            content: thisContent,
            canSplit: thisCanSplit
        }
    );
};