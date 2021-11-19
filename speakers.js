const projects = [
  {
    name: 'Gaston Acurio',
    description: 'Peruvian chef and ambassador of Peruvian cuisine',
    images: './img/gaston-photo.jpg',
    p: 'He owns several restaurants in various countries, and is the author of several books, in Lima he have Casa Moreina one of the best restaurant.',
  },
  {
    name: 'Pia',
    description: 'Chef and owner of Kjolle Restaurant in Lima',
    images: './img/pia-photo.jpg',
    p: 'Named the best female chef in Latin America years ago, and now have the title of the best chef in the world to The World’s 50 Best Restaurants awards.',
  },
  {
    name: 'Virgilio',
    description: 'Chef of Central Restaurant in Lima',
    images: './img/virgilio-photo.jpg',
    p: 'Virgilio is a Peruvian Chef and restaurateur, he is considered one of the new generation of Peruvian chefs.',
  },
  {
    name: 'Jose',
    description: 'Chef and founder of World Central Kitchen',
    images: './img/jose-photo.jpg',
    p: 'Jose have own cooking show "Vamos a Cocinar" which debuted in 2005. He also published his first book, Tapas.',
  },
  {
    name: 'Mitsuhara',
    description: 'Chef of Maido Restaurant in Lima',
    images: './img/mitsuhara-photo.jpg',
    p: 'Owner of one of the best restaurants in the world, blends Japanese and Peruvian traditions',
  },
  {
    name: 'Ferran',
    description: 'Chef of the El Bulli restaurant in roses',
    images: './img/ferran-photo.jpg',
    p: 'Adria is well known for creating culinary foam. Adria explored foams created without the addition of cream or egg white.',
  },
];

let num = projects.length;
const main = document.querySelector('#speaker');

function createChefs(cards) {
  const card = document.createElement('div');
  card.className = `speaker sp${num}`;
  num -= 1;
  const img = document.createElement('img');
  img.altName = "World Class Chefs";
  img.className = 'speaker-img';
  img.srcset = cards.images;
  card.appendChild(img);
  const sectionTag = document.createElement('div');
  sectionTag.className = 'project-chef';
  card.appendChild(sectionTag);
  const h2Tag = document.createElement('h2');
  h2Tag.textContent = cards.name;
  sectionTag.appendChild(h2Tag);
  const h3Tag = document.createElement('h3');
  h3Tag.className = 'flex';
  h3Tag.textContent = cards.description;
  sectionTag.appendChild(h3Tag);
  const pTag = document.createElement('p');
  pTag.className = 'flex';
  pTag.textContent = cards.p;
  sectionTag.appendChild(pTag);

  main.insertAdjacentElement('afterend', card);
}

projects.reverse().forEach((cards) => createChefs(cards));
