{"changed":true,"filter":false,"title":"week06NoSQL.js","tooltip":"/week06/week06NoSQL.js","value":"// npm install aws-sdk\nvar AWS = require('aws-sdk');\nAWS.config = new AWS.Config();\nAWS.config.region = \"us-east-2\";\n\n\nvar dynamodb = new AWS.DynamoDB();\n\nvar params = {\n    TableName : \"Dear_Diary\",\n    KeyConditionExpression: \n    \"#tp = :topicName and dt between :minDate and :maxDate\", // the query expression\n    ExpressionAttributeNames: { // name substitution, used for reserved words in DynamoDB\n        \"#tp\" : \"topic\"\n        \n    },\n    ExpressionAttributeValues: { // the query values\n        \":topicName\": { S: \"Data Structures Homework\"},\n        \":minDate\": {S: new Date(\"September 26, 2019\").toLocaleString()},\n        \":maxDate\": {S: new Date(\"September 28, 2019\").toLocaleString()}\n    }\n};\n\ndynamodb.query(params, function(err, data) {\n  if (err) {\n    console.error(\"Unable to query. Error:\", JSON.stringify(err, null, 2));\n  } else {\n    console.log(\"Query succeeded.\");\n    data.Items.forEach(function(item) {\n      console.log(\"***** ***** ***** ***** ***** \\n\", item);\n    });\n  }\n});","undoManager":{"mark":78,"position":93,"stack":[[{"start":{"row":3,"column":32},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":22}],[{"start":{"row":8,"column":2},"end":{"row":8,"column":3},"action":"remove","lines":["r"],"id":23},{"start":{"row":8,"column":1},"end":{"row":8,"column":2},"action":"remove","lines":["a"]},{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"remove","lines":["v"]}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":["v"],"id":24},{"start":{"row":8,"column":1},"end":{"row":8,"column":2},"action":"insert","lines":["a"]},{"start":{"row":8,"column":2},"end":{"row":8,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":10,"column":28},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":25},{"start":{"row":11,"column":0},"end":{"row":11,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":11,"column":26},"end":{"row":11,"column":27},"action":"insert","lines":["#"],"id":26}],[{"start":{"row":13,"column":23},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":27},{"start":{"row":14,"column":0},"end":{"row":14,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":14,"column":8},"end":{"row":14,"column":10},"action":"insert","lines":["''"],"id":28}],[{"start":{"row":14,"column":9},"end":{"row":14,"column":10},"action":"insert","lines":["#"],"id":29},{"start":{"row":14,"column":10},"end":{"row":14,"column":11},"action":"insert","lines":["d"]},{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"insert","lines":["r"]}],[{"start":{"row":14,"column":12},"end":{"row":14,"column":13},"action":"remove","lines":["'"],"id":30}],[{"start":{"row":14,"column":8},"end":{"row":14,"column":9},"action":"remove","lines":["'"],"id":31}],[{"start":{"row":14,"column":8},"end":{"row":14,"column":9},"action":"insert","lines":["\""],"id":32}],[{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"remove","lines":["r"],"id":33}],[{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"insert","lines":["t"],"id":34},{"start":{"row":14,"column":12},"end":{"row":14,"column":13},"action":"insert","lines":["\""]}],[{"start":{"row":14,"column":13},"end":{"row":14,"column":14},"action":"insert","lines":[":"],"id":35}],[{"start":{"row":14,"column":13},"end":{"row":14,"column":14},"action":"remove","lines":[":"],"id":36}],[{"start":{"row":14,"column":13},"end":{"row":14,"column":14},"action":"insert","lines":[" "],"id":37},{"start":{"row":14,"column":14},"end":{"row":14,"column":15},"action":"insert","lines":[":"]}],[{"start":{"row":14,"column":15},"end":{"row":14,"column":16},"action":"insert","lines":[" "],"id":38}],[{"start":{"row":14,"column":16},"end":{"row":14,"column":18},"action":"insert","lines":["\"\""],"id":39}],[{"start":{"row":14,"column":17},"end":{"row":14,"column":18},"action":"insert","lines":["d"],"id":40},{"start":{"row":14,"column":18},"end":{"row":14,"column":19},"action":"insert","lines":["a"]},{"start":{"row":14,"column":19},"end":{"row":14,"column":20},"action":"insert","lines":["t"]},{"start":{"row":14,"column":20},"end":{"row":14,"column":21},"action":"insert","lines":["e"]}],[{"start":{"row":13,"column":23},"end":{"row":13,"column":24},"action":"insert","lines":[","],"id":41}],[{"start":{"row":11,"column":26},"end":{"row":11,"column":27},"action":"remove","lines":["#"],"id":42}],[{"start":{"row":14,"column":7},"end":{"row":14,"column":22},"action":"remove","lines":[" \"#dt\" : \"date\""],"id":43},{"start":{"row":14,"column":6},"end":{"row":14,"column":7},"action":"remove","lines":[" "]},{"start":{"row":14,"column":5},"end":{"row":14,"column":6},"action":"remove","lines":[" "]},{"start":{"row":14,"column":4},"end":{"row":14,"column":5},"action":"remove","lines":[" "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"remove","lines":["    "]},{"start":{"row":13,"column":24},"end":{"row":14,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":13,"column":23},"end":{"row":13,"column":24},"action":"remove","lines":[","],"id":44}],[{"start":{"row":11,"column":25},"end":{"row":11,"column":28},"action":"remove","lines":[" dt"],"id":45}],[{"start":{"row":11,"column":25},"end":{"row":11,"column":26},"action":"insert","lines":[" "],"id":46},{"start":{"row":11,"column":26},"end":{"row":11,"column":27},"action":"insert","lines":["c"]},{"start":{"row":11,"column":27},"end":{"row":11,"column":28},"action":"insert","lines":["r"]},{"start":{"row":11,"column":28},"end":{"row":11,"column":29},"action":"insert","lines":["e"]},{"start":{"row":11,"column":29},"end":{"row":11,"column":30},"action":"insert","lines":["a"]},{"start":{"row":11,"column":30},"end":{"row":11,"column":31},"action":"insert","lines":["t"]},{"start":{"row":11,"column":31},"end":{"row":11,"column":32},"action":"insert","lines":["e"]},{"start":{"row":11,"column":32},"end":{"row":11,"column":33},"action":"insert","lines":["d"]}],[{"start":{"row":23,"column":40},"end":{"row":23,"column":41},"action":"remove","lines":["a"],"id":47},{"start":{"row":23,"column":39},"end":{"row":23,"column":40},"action":"remove","lines":["t"]},{"start":{"row":23,"column":38},"end":{"row":23,"column":39},"action":"remove","lines":["a"]},{"start":{"row":23,"column":37},"end":{"row":23,"column":38},"action":"remove","lines":["d"]}],[{"start":{"row":23,"column":37},"end":{"row":23,"column":38},"action":"insert","lines":["i"],"id":48},{"start":{"row":23,"column":38},"end":{"row":23,"column":39},"action":"insert","lines":["t"]},{"start":{"row":23,"column":39},"end":{"row":23,"column":40},"action":"insert","lines":["e"]},{"start":{"row":23,"column":40},"end":{"row":23,"column":41},"action":"insert","lines":["m"]}],[{"start":{"row":23,"column":37},"end":{"row":23,"column":41},"action":"remove","lines":["item"],"id":49},{"start":{"row":23,"column":37},"end":{"row":23,"column":41},"action":"insert","lines":["item"]}],[{"start":{"row":23,"column":40},"end":{"row":23,"column":41},"action":"remove","lines":["m"],"id":50},{"start":{"row":23,"column":39},"end":{"row":23,"column":40},"action":"remove","lines":["e"]},{"start":{"row":23,"column":38},"end":{"row":23,"column":39},"action":"remove","lines":["t"]},{"start":{"row":23,"column":37},"end":{"row":23,"column":38},"action":"remove","lines":["i"]}],[{"start":{"row":23,"column":37},"end":{"row":23,"column":38},"action":"insert","lines":["d"],"id":51},{"start":{"row":23,"column":38},"end":{"row":23,"column":39},"action":"insert","lines":["a"]},{"start":{"row":23,"column":39},"end":{"row":23,"column":40},"action":"insert","lines":["t"]},{"start":{"row":23,"column":40},"end":{"row":23,"column":41},"action":"insert","lines":["a"]}],[{"start":{"row":11,"column":26},"end":{"row":11,"column":34},"action":"remove","lines":["created "],"id":52},{"start":{"row":11,"column":26},"end":{"row":11,"column":27},"action":"insert","lines":["d"]},{"start":{"row":11,"column":27},"end":{"row":11,"column":28},"action":"insert","lines":["t"]}],[{"start":{"row":11,"column":28},"end":{"row":11,"column":29},"action":"insert","lines":[" "],"id":53}],[{"start":{"row":18,"column":45},"end":{"row":18,"column":46},"action":"remove","lines":["6"],"id":54}],[{"start":{"row":18,"column":45},"end":{"row":18,"column":46},"action":"insert","lines":["7"],"id":55}],[{"start":{"row":18,"column":45},"end":{"row":18,"column":46},"action":"remove","lines":["7"],"id":56}],[{"start":{"row":18,"column":45},"end":{"row":18,"column":46},"action":"insert","lines":["6"],"id":57}],[{"start":{"row":17,"column":32},"end":{"row":17,"column":42},"action":"remove","lines":["Structures"],"id":58},{"start":{"row":17,"column":32},"end":{"row":17,"column":33},"action":"insert","lines":["V"]},{"start":{"row":17,"column":33},"end":{"row":17,"column":34},"action":"insert","lines":["i"]},{"start":{"row":17,"column":34},"end":{"row":17,"column":35},"action":"insert","lines":["z"]}],[{"start":{"row":17,"column":27},"end":{"row":17,"column":44},"action":"remove","lines":["Data Viz Homework"],"id":59},{"start":{"row":17,"column":27},"end":{"row":17,"column":28},"action":"insert","lines":["M"]},{"start":{"row":17,"column":28},"end":{"row":17,"column":29},"action":"insert","lines":["a"]},{"start":{"row":17,"column":29},"end":{"row":17,"column":30},"action":"insert","lines":["j"]},{"start":{"row":17,"column":30},"end":{"row":17,"column":31},"action":"insert","lines":["j"]}],[{"start":{"row":17,"column":30},"end":{"row":17,"column":31},"action":"remove","lines":["j"],"id":60}],[{"start":{"row":17,"column":30},"end":{"row":17,"column":31},"action":"insert","lines":["o"],"id":61},{"start":{"row":17,"column":31},"end":{"row":17,"column":32},"action":"insert","lines":["r"]}],[{"start":{"row":17,"column":32},"end":{"row":17,"column":33},"action":"insert","lines":[" "],"id":62},{"start":{"row":17,"column":33},"end":{"row":17,"column":34},"action":"insert","lines":["S"]},{"start":{"row":17,"column":34},"end":{"row":17,"column":35},"action":"insert","lines":["t"]},{"start":{"row":17,"column":35},"end":{"row":17,"column":36},"action":"insert","lines":["u"]},{"start":{"row":17,"column":36},"end":{"row":17,"column":37},"action":"insert","lines":["d"]},{"start":{"row":17,"column":37},"end":{"row":17,"column":38},"action":"insert","lines":["i"]},{"start":{"row":17,"column":38},"end":{"row":17,"column":39},"action":"insert","lines":["o"]}],[{"start":{"row":17,"column":39},"end":{"row":17,"column":40},"action":"insert","lines":[" "],"id":63},{"start":{"row":17,"column":40},"end":{"row":17,"column":41},"action":"insert","lines":["H"]},{"start":{"row":17,"column":41},"end":{"row":17,"column":42},"action":"insert","lines":["o"]},{"start":{"row":17,"column":42},"end":{"row":17,"column":43},"action":"insert","lines":["e"]},{"start":{"row":17,"column":43},"end":{"row":17,"column":44},"action":"insert","lines":["m"]}],[{"start":{"row":17,"column":43},"end":{"row":17,"column":44},"action":"remove","lines":["m"],"id":64},{"start":{"row":17,"column":42},"end":{"row":17,"column":43},"action":"remove","lines":["e"]}],[{"start":{"row":17,"column":42},"end":{"row":17,"column":43},"action":"insert","lines":["m"],"id":65},{"start":{"row":17,"column":43},"end":{"row":17,"column":44},"action":"insert","lines":["w"]},{"start":{"row":17,"column":44},"end":{"row":17,"column":45},"action":"insert","lines":["o"]},{"start":{"row":17,"column":45},"end":{"row":17,"column":46},"action":"insert","lines":["r"]},{"start":{"row":17,"column":46},"end":{"row":17,"column":47},"action":"insert","lines":["k"]}],[{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"insert","lines":[" "],"id":66}],[{"start":{"row":19,"column":45},"end":{"row":19,"column":46},"action":"remove","lines":["8"],"id":67}],[{"start":{"row":19,"column":45},"end":{"row":19,"column":46},"action":"insert","lines":["7"],"id":68}],[{"start":{"row":17,"column":28},"end":{"row":17,"column":48},"action":"remove","lines":["Major Studio Homwork"],"id":69},{"start":{"row":17,"column":28},"end":{"row":17,"column":29},"action":"insert","lines":["D"]},{"start":{"row":17,"column":29},"end":{"row":17,"column":30},"action":"insert","lines":["a"]},{"start":{"row":17,"column":30},"end":{"row":17,"column":31},"action":"insert","lines":["t"]},{"start":{"row":17,"column":31},"end":{"row":17,"column":32},"action":"insert","lines":["a"]}],[{"start":{"row":17,"column":32},"end":{"row":17,"column":33},"action":"insert","lines":[" "],"id":70},{"start":{"row":17,"column":33},"end":{"row":17,"column":34},"action":"insert","lines":["S"]},{"start":{"row":17,"column":34},"end":{"row":17,"column":35},"action":"insert","lines":["t"]},{"start":{"row":17,"column":35},"end":{"row":17,"column":36},"action":"insert","lines":["r"]},{"start":{"row":17,"column":36},"end":{"row":17,"column":37},"action":"insert","lines":["u"]},{"start":{"row":17,"column":37},"end":{"row":17,"column":38},"action":"insert","lines":["c"]},{"start":{"row":17,"column":38},"end":{"row":17,"column":39},"action":"insert","lines":["t"]},{"start":{"row":17,"column":39},"end":{"row":17,"column":40},"action":"insert","lines":["u"]},{"start":{"row":17,"column":40},"end":{"row":17,"column":41},"action":"insert","lines":["r"]},{"start":{"row":17,"column":41},"end":{"row":17,"column":42},"action":"insert","lines":["e"]},{"start":{"row":17,"column":42},"end":{"row":17,"column":43},"action":"insert","lines":["s"]}],[{"start":{"row":17,"column":43},"end":{"row":17,"column":44},"action":"insert","lines":[" "],"id":71},{"start":{"row":17,"column":44},"end":{"row":17,"column":45},"action":"insert","lines":["H"]},{"start":{"row":17,"column":45},"end":{"row":17,"column":46},"action":"insert","lines":["o"]},{"start":{"row":17,"column":46},"end":{"row":17,"column":47},"action":"insert","lines":["m"]},{"start":{"row":17,"column":47},"end":{"row":17,"column":48},"action":"insert","lines":["e"]},{"start":{"row":17,"column":48},"end":{"row":17,"column":49},"action":"insert","lines":["o"]}],[{"start":{"row":17,"column":48},"end":{"row":17,"column":49},"action":"remove","lines":["o"],"id":72}],[{"start":{"row":17,"column":48},"end":{"row":17,"column":49},"action":"insert","lines":["w"],"id":73},{"start":{"row":17,"column":49},"end":{"row":17,"column":50},"action":"insert","lines":["o"]},{"start":{"row":17,"column":50},"end":{"row":17,"column":51},"action":"insert","lines":["r"]},{"start":{"row":17,"column":51},"end":{"row":17,"column":52},"action":"insert","lines":["k"]}],[{"start":{"row":18,"column":46},"end":{"row":18,"column":47},"action":"insert","lines":[","],"id":74}],[{"start":{"row":19,"column":46},"end":{"row":19,"column":47},"action":"insert","lines":[","],"id":75}],[{"start":{"row":23,"column":0},"end":{"row":32,"column":3},"action":"remove","lines":["dynamodb.query(params, function(err, data) {","    if (err) {","        console.error(\"Unable to query. Error:\", JSON.stringify(err, null, 2));","    } else {","        console.log(\"Query succeeded.\");","        data.Items.forEach(function(item) {","            console.log(\"***** ***** ***** ***** ***** \\n\", item);","        });","    }","});"],"id":76},{"start":{"row":23,"column":0},"end":{"row":32,"column":3},"action":"insert","lines":["dynamodb.query(params, function(err, data) {","  if (err) {","    console.error(\"Unable to query. Error:\", JSON.stringify(err, null, 2));","  } else {","    console.log(\"Query succeeded.\");","    data.Items.forEach(function(item) {","      console.log(\"***** ***** ***** ***** ***** \\n\", item);","    });","  }","});"]}],[{"start":{"row":27,"column":4},"end":{"row":27,"column":7},"action":"insert","lines":["// "],"id":77}],[{"start":{"row":27,"column":4},"end":{"row":27,"column":7},"action":"remove","lines":["// "],"id":78}],[{"start":{"row":19,"column":45},"end":{"row":19,"column":46},"action":"remove","lines":["7"],"id":79}],[{"start":{"row":19,"column":45},"end":{"row":19,"column":46},"action":"insert","lines":["6"],"id":80}],[{"start":{"row":18,"column":45},"end":{"row":18,"column":46},"action":"remove","lines":["6"],"id":81}],[{"start":{"row":18,"column":45},"end":{"row":18,"column":46},"action":"insert","lines":["7"],"id":82}],[{"start":{"row":19,"column":45},"end":{"row":19,"column":46},"action":"remove","lines":["6"],"id":83}],[{"start":{"row":19,"column":45},"end":{"row":19,"column":46},"action":"insert","lines":["8"],"id":84}],[{"start":{"row":18,"column":45},"end":{"row":18,"column":46},"action":"remove","lines":["7"],"id":85}],[{"start":{"row":18,"column":45},"end":{"row":18,"column":46},"action":"insert","lines":["6"],"id":86}],[{"start":{"row":19,"column":45},"end":{"row":19,"column":46},"action":"remove","lines":["8"],"id":87}],[{"start":{"row":19,"column":45},"end":{"row":19,"column":46},"action":"insert","lines":["8"],"id":88}],[{"start":{"row":18,"column":8},"end":{"row":18,"column":11},"action":"insert","lines":["// "],"id":89},{"start":{"row":19,"column":8},"end":{"row":19,"column":11},"action":"insert","lines":["// "]}],[{"start":{"row":11,"column":22},"end":{"row":11,"column":23},"action":"insert","lines":["?"],"id":91}],[{"start":{"row":11,"column":22},"end":{"row":11,"column":23},"action":"remove","lines":["?"],"id":92}],[{"start":{"row":11,"column":22},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":94},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "]},{"start":{"row":12,"column":4},"end":{"row":12,"column":5},"action":"insert","lines":["/"]},{"start":{"row":12,"column":5},"end":{"row":12,"column":6},"action":"insert","lines":["/"]}],[{"start":{"row":11,"column":21},"end":{"row":11,"column":22},"action":"insert","lines":["\""],"id":95}],[{"start":{"row":11,"column":22},"end":{"row":11,"column":23},"action":"insert","lines":[","],"id":96}],[{"start":{"row":19,"column":8},"end":{"row":19,"column":11},"action":"remove","lines":["// "],"id":97},{"start":{"row":20,"column":8},"end":{"row":20,"column":11},"action":"remove","lines":["// "]}],[{"start":{"row":19,"column":55},"end":{"row":19,"column":75},"action":"remove","lines":["valueOf().toString()"],"id":98},{"start":{"row":19,"column":55},"end":{"row":19,"column":71},"action":"insert","lines":["toLocaleString()"]}],[{"start":{"row":20,"column":55},"end":{"row":20,"column":75},"action":"remove","lines":["valueOf().toString()"],"id":99},{"start":{"row":20,"column":55},"end":{"row":20,"column":71},"action":"insert","lines":["toLocaleString()"]}],[{"start":{"row":12,"column":4},"end":{"row":12,"column":6},"action":"remove","lines":["//"],"id":100}],[{"start":{"row":12,"column":2},"end":{"row":12,"column":3},"action":"remove","lines":[" "],"id":101},{"start":{"row":12,"column":0},"end":{"row":12,"column":2},"action":"remove","lines":["  "]},{"start":{"row":11,"column":24},"end":{"row":12,"column":0},"action":"remove","lines":["",""]},{"start":{"row":11,"column":23},"end":{"row":11,"column":24},"action":"remove","lines":[" "]},{"start":{"row":11,"column":22},"end":{"row":11,"column":23},"action":"remove","lines":[","]}],[{"start":{"row":11,"column":21},"end":{"row":11,"column":22},"action":"remove","lines":["\""],"id":102}],[{"start":{"row":11,"column":26},"end":{"row":11,"column":27},"action":"insert","lines":["#"],"id":103}],[{"start":{"row":13,"column":23},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":104},{"start":{"row":14,"column":0},"end":{"row":14,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":14,"column":8},"end":{"row":14,"column":10},"action":"insert","lines":["''"],"id":105}],[{"start":{"row":14,"column":9},"end":{"row":14,"column":10},"action":"insert","lines":["#"],"id":106},{"start":{"row":14,"column":10},"end":{"row":14,"column":11},"action":"insert","lines":["d"]},{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"insert","lines":["t"]}],[{"start":{"row":14,"column":13},"end":{"row":14,"column":14},"action":"insert","lines":[" "],"id":107},{"start":{"row":14,"column":14},"end":{"row":14,"column":15},"action":"insert","lines":[":"]}],[{"start":{"row":14,"column":15},"end":{"row":14,"column":16},"action":"insert","lines":[" "],"id":108}],[{"start":{"row":14,"column":16},"end":{"row":14,"column":18},"action":"insert","lines":["\"\""],"id":109}],[{"start":{"row":14,"column":17},"end":{"row":14,"column":18},"action":"insert","lines":["d"],"id":110},{"start":{"row":14,"column":18},"end":{"row":14,"column":19},"action":"insert","lines":["a"]},{"start":{"row":14,"column":19},"end":{"row":14,"column":20},"action":"insert","lines":["t"]},{"start":{"row":14,"column":20},"end":{"row":14,"column":21},"action":"insert","lines":["e"]}],[{"start":{"row":14,"column":22},"end":{"row":14,"column":23},"action":"insert","lines":["\""],"id":111}],[{"start":{"row":13,"column":21},"end":{"row":13,"column":22},"action":"remove","lines":["c"],"id":112},{"start":{"row":13,"column":20},"end":{"row":13,"column":21},"action":"remove","lines":["i"]},{"start":{"row":13,"column":19},"end":{"row":13,"column":20},"action":"remove","lines":["p"]},{"start":{"row":13,"column":18},"end":{"row":13,"column":19},"action":"remove","lines":["o"]},{"start":{"row":13,"column":17},"end":{"row":13,"column":18},"action":"remove","lines":["t"]}],[{"start":{"row":13,"column":17},"end":{"row":13,"column":18},"action":"insert","lines":["c"],"id":113},{"start":{"row":13,"column":18},"end":{"row":13,"column":19},"action":"insert","lines":["a"]},{"start":{"row":13,"column":19},"end":{"row":13,"column":20},"action":"insert","lines":["t"]},{"start":{"row":13,"column":20},"end":{"row":13,"column":21},"action":"insert","lines":["e"]},{"start":{"row":13,"column":21},"end":{"row":13,"column":22},"action":"insert","lines":["g"]},{"start":{"row":13,"column":22},"end":{"row":13,"column":23},"action":"insert","lines":["o"]},{"start":{"row":13,"column":23},"end":{"row":13,"column":24},"action":"insert","lines":["r"]},{"start":{"row":13,"column":24},"end":{"row":13,"column":25},"action":"insert","lines":["y"]}],[{"start":{"row":13,"column":24},"end":{"row":13,"column":25},"action":"remove","lines":["y"],"id":114},{"start":{"row":13,"column":23},"end":{"row":13,"column":24},"action":"remove","lines":["r"]},{"start":{"row":13,"column":22},"end":{"row":13,"column":23},"action":"remove","lines":["o"]},{"start":{"row":13,"column":21},"end":{"row":13,"column":22},"action":"remove","lines":["g"]},{"start":{"row":13,"column":20},"end":{"row":13,"column":21},"action":"remove","lines":["e"]},{"start":{"row":13,"column":19},"end":{"row":13,"column":20},"action":"remove","lines":["t"]},{"start":{"row":13,"column":18},"end":{"row":13,"column":19},"action":"remove","lines":["a"]},{"start":{"row":13,"column":17},"end":{"row":13,"column":18},"action":"remove","lines":["c"]}],[{"start":{"row":13,"column":17},"end":{"row":13,"column":18},"action":"insert","lines":["t"],"id":115},{"start":{"row":13,"column":18},"end":{"row":13,"column":19},"action":"insert","lines":["o"]},{"start":{"row":13,"column":19},"end":{"row":13,"column":20},"action":"insert","lines":["p"]},{"start":{"row":13,"column":20},"end":{"row":13,"column":21},"action":"insert","lines":["i"]},{"start":{"row":13,"column":21},"end":{"row":13,"column":22},"action":"insert","lines":["c"]}],[{"start":{"row":11,"column":26},"end":{"row":11,"column":27},"action":"remove","lines":["#"],"id":116}],[{"start":{"row":14,"column":8},"end":{"row":14,"column":23},"action":"remove","lines":["'#dt' : \"date\"\""],"id":117},{"start":{"row":14,"column":6},"end":{"row":14,"column":8},"action":"remove","lines":["  "]},{"start":{"row":14,"column":4},"end":{"row":14,"column":6},"action":"remove","lines":["  "]},{"start":{"row":14,"column":2},"end":{"row":14,"column":4},"action":"remove","lines":["  "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"remove","lines":["  "]},{"start":{"row":13,"column":23},"end":{"row":14,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":13,"column":23},"end":{"row":13,"column":23},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1570389728528}