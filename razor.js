const TextRazor = require('textrazor');
const textRazor = new TextRazor('98d2b4160bce259e9e5ede577635f209f4acd81d5ca8a360ead4779f');
const content = 'Have the Wilmington city leaders considered building a minor league baseball stadium on the Convention Ctr property?';
const options = { extractors: 'entities' };


textRazor.exec(content, options)
  .then(res => parseResults(res))
  .catch(err => console.error(err));

function parseResults(res){
  const entities = res.response.entities;
  var tags = [];
  // console.log(JSON.stringify(res, null, 4))

  for (i in entities){
    tags.push(entities[i].entityId);
  }
  console.log(tags);
}
