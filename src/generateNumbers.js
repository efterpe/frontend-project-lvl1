const generateNumbers = (min, max) => {
    const r = min + Math.random() * (max + 1 - min);
    return Math.floor(r);
};
export default generateNumbers;
