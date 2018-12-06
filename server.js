/*jshint esversion: 6 */
const express = require("express"),
           bp = require("body-parser"),
          app = express(),
      db_name = "task",
         port = 8888;

app.use(bp.json());

require("./server/config/mongoose")(db_name);
require("./server/config/routes")(app);

app.listen(port, function() {
    console.log(`listening on port ${port}`);
});
