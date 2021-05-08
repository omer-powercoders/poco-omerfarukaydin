/* First way



const numberChildren = [1 , 2 , 3, 4, 10];
const namePartner = ['Ali', 'Mary', 'King'];
const geoLocation = ['Paris', 'Barcelona', 'London', 'Zurich'];
const jobTitle = ['Software Engineer', 'teacher', 'architect', 'doctor'];

const number = numberChildren[Math.floor(Math.random() * numberChildren.length)];
const partner = namePartner[Math.floor(Math.random() * namePartner.length)];
const place = geoLocation[Math.floor(Math.random() * geoLocation.length)];
const job = jobTitle[Math.floor(Math.random() * jobTitle.length)];

const firstName = prompt('Enter your name please');
alert(`${firstName} will be a ${job} in ${place}, and married to ${partner} with ${number} kids.`);
*/

//Second way
function fortune(job, geo, partner, kids) {
    let future = 'You will be a ' + job + ' in ' + geo + ' and married to ' +
   partner + ' ' + ' with ' + kids + ' kids.';
    alert(future);
}

fortune('IT trainer', 'Switzerland', 'Anna', 2);
fortune('engineer', 'Turkey', 'Leyla', 4);
fortune('teacher', 'England', 'Mary', 0);