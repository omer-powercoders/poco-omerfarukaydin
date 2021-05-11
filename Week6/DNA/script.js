let firstDna = 'GAGCCTACTAACGGGAT';
let secondDna = 'CATCGTAATGACGGCCT';
let hamDis = (firstDna = '', secondDna = '') => {
   if (firstDna.length !== secondDna.length) {
      return 0;
   }
   let dist = 0;
   for (let i = 0; i < firstDna.length; i += 1) {
      if (firstDna[i] !== secondDna[i]) {
         dist += 1;
      };
   };
   return dist;
};
alert(hamDis(firstDna, secondDna));