const generateUniqueCodes = (count) => {
    const codes = [];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    let i = 0;
    while (codes.length < count) {
      const prefix = alphabet[Math.floor(i / 100000)] + alphabet[i % 26];
      const suffix = String(i).padStart(5, '0');
      codes.push(prefix + suffix);
      i++;
    }
    
    return codes;
  };
  
  module.exports = generateUniqueCodes;
  