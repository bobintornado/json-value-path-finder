var jsonQuery = require('json-query');
var fs = require('fs')

fs.readFile('./target.json', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  } else {
    var json = JSON.parse(data);
    
    var queryString = "pages.<items>[].layers.<items>[name=Theme].layers.<items>[name=Buttons].layers.<items>[name=Button Types].layers.<items>[name=Normal].layers.<items>";

    var result = jsonQuery(queryString, {
      data: json
    });

    console.log(result.value);
  }
})