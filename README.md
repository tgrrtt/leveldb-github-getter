
##save(usernames, callback)
Takes an array of usernames.
callback gets called with `(err, data)` where data is an array of what was saved.


##load(usernames, callback)
Takes an array of usernames
Callback gets called with `(err, data)` where data is an array of what was loaded.


#### Note:
I'm completely aware there's no tests, and thats a really bad thing, I just need to figure out how to mock this leveldb stuff.
