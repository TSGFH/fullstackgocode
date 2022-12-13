const url = 'https://jsonplaceholder.typicode.com/todos'

fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError);

function handleErrors(res) {
    if (!res.ok) {
      throw error(res.status);
    }
    console.log(res);
    return res;
  }
  
  function parseJSON(res) {
    return res.json();
  }

  function updateProfile(profile) {
    console.log(profile)
    return 1;
  }

  function printError(error) {
    console.log(error);
  }