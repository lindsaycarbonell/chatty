var google = require('googeapis');
var googleAuth = require('google-auth-library');
var util = require('util');

//this will use the libraries to create and update our spreadsheets
var SheetsHelper = function(accessToken){
  var authClient = new googleAuth();
  var auth = new authClient.OAuth2();
  auth.credentials = {
    access_token: accessToken
  };
  this.service = google.sheets({version: 'v4', auth: auth});
}

module.exports = SheetsHelper;

//used for creating a spreadsheet (may not ever use)
SheetsHelper.prototype.createSpreadsheet = function(title, callback) {
  var self = this;
  var request = {
    resource: {
      properties: {
        title: title
      }
    },
    sheets: [
      properties: {
        title: 'Questions',
        gridProperties: {
          columnCount: 6,
          frozenRowCount: 1
        }
      }
      //, this is where another spreadsheet would go
    ]
  }


self.service.spreadsheets.create(request, function(err, spreadsheet){
  if (err) {
    return callback(err);
  }
  // TODO: Add header rows.
  return callback(null, spreadsheet);
});

};
