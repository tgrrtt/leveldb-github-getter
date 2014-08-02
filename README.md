1) Module A that takes an array of names as an argument (["David", "Tyler"]). 
For each name, hits the Github search API to search for that name (url is 'https://api.github.com/search/users?q=' + name) and stores the results in leveldb (the key is the name). Prints "Done", once everything has been saved (not before).

Should use these modules: request, async, level

2) Module B takes an array of names as an argument. For each name, goes into level to pull existing results and logs it (console.log).

Should use these modules: async, level

Bonus:

3) Create an http server that has an endpoint that takes a name as a query parameter /?name=david and returns the results from level.

Should use modules: http, url, level

4) Modify bonus 1 so that if results aren't found in the db, the results are fetched from Github first, stored in level second, returned in the response third.

should use above modules + request
