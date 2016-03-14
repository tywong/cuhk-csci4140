#!/usr/bin/env node

var fs = require('fs');
var handlebars = require('handlebars');

var obj = JSON.parse(fs.readFileSync(__dirname + '/data/ai.json', 'utf8'));
var tmpl = fs.readFileSync(__dirname + '/templates/AI.h.template', 'utf8');

var function_prefix = "void ";
var function_postfix = "(char map[MAP_ROWS][MAP_COLS], char current_player, char next_player, int *row, int *column);";

var function_prototypes = "";
var player_names = "";
var ai_functions = "";

for(var i = 0; i < obj.length; i++) {
  function_prototypes +=
    function_prefix +
    obj[i]["function"] +
    function_postfix +
    "\n";

  player_names +=
    '"' +
    obj[i]["name"] +
    '"' +
    ",\n";

  ai_functions +=
    obj[i]["function"] +
    ",\n";
}

var data = {
  'function_prototypes': function_prototypes,
  'player_names': player_names,
  'ai_functions': ai_functions
};

var template = handlebars.compile(tmpl);
var result = template(data);

fs.writeFileSync(__dirname + "/dist/AI.h", result);
