var books = [
  {
    isbn: 9780143058175,
    title: 'Pride and Prejudice',
    author: 'Jane Austen'
  },
  {
    isbn: 9780786105182,
    title: 'Persuasion',
    author: 'Jane Austen'
  },
  {
    isbn: 9780143058083,
    title: 'Sense and Sensibility',
    author: 'Jane Austen'
  }
];

console.log('value of books:', books,
  'typeof:', typeof books);

console.log('result of JSON.stringify:', JSON.stringify(books),
  'typeof:', typeof JSON.stringify(books));

console.log('value of JSONstring:', '{"id": 4173794, "name": "Junie B. Jones"}',
  'typeof:', typeof '{"name": 4173794, "name": "Junie B. Jones"}');

var student = JSON.parse('{"id": 4173794, "name": "Junie B. Jones"}');
console.log('result of JSON.parse:', student,
  'typeof:', typeof student);
