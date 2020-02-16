const path = require('path');
const json_file = path.join(__dirname + '/../data/db.storage.json');
const db = require(json_file);
const fs = require('fs');

function render(file, res) {
  return res.sendFile(path.join(__dirname + `/../views/${file}.html`));
};

class QuoteController {
  async index(req, res) {
    return render("quotes", res);
  }
  async get(req, res) {
    return res.send(db);
  }
  async add(req, res) {
    const {body: quote } = req;
    const lastQuote = db[db.length -1];
    const { id } = lastQuote;
    quote.id = id + 1;
    db.push(quote);
    fs.writeFileSync(json_file, JSON.stringify(db));
    return res.status(201).send()
  }
};
module.exports = new QuoteController();