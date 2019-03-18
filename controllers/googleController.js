//dependencies
const axios = require("axios");

//google controller that allows users to only access the information from the object that I have choosen
module.exports = {
  callgoogle: function( req, res) {
    console.log(req.query)
    // console.log(re
    let q = req.query;
    axios
      .get("https://www.googleapis.com/books/v1/volumes", { params: { q: q } })
      .then(results => results.data.items)
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
    
  }
};
