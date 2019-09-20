// only handles detecting notation like: 000-000-0000
// this could be improved to handle parens: (000)-000-000
// or spaces instead of dashes: 000 000-0000
// as well as any combination of those
// additionally phone numbers have more strict requirements than just
// any 10 digits separated into 3 3 4, but this is fine for now
export default input => /[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(input);
