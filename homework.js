const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = [];

employersNames = employers.filter((name) => {
    return (name.length > 0 && name.length != '');
})

employersNames = employersNames.map ((item) => item.toLowerCase().trim());

console.log(employersNames)



const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors;

function calcCash(own = 0, everyCash) {
    let total = everyCash.reduce((total, currentValue) => total + currentValue) + own;
    return total;
}

const money = calcCash(null, cash);

function makeBusiness(owner, cash, emp, director = 'Victor') {
    
    const sumSponsors = eu.concat(rus, 'unexpected sponsor');
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log('And we have a sponsors: ');

    console.log(...sumSponsors);

    console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
makeBusiness.apply(null, ['Sam', null, money, employersNames]);