{"filter":false,"title":"test2.js","tooltip":"/test/test2.js","undoManager":{"mark":25,"position":25,"stack":[[{"start":{"row":57,"column":15},"end":{"row":57,"column":26},"action":"remove","lines":["\"AND (1=1)\""],"id":1},{"start":{"row":57,"column":15},"end":{"row":57,"column":32},"action":"insert","lines":["req.body.queryDay"]}],[{"start":{"row":57,"column":31},"end":{"row":57,"column":32},"action":"remove","lines":["y"],"id":2},{"start":{"row":57,"column":30},"end":{"row":57,"column":31},"action":"remove","lines":["a"]},{"start":{"row":57,"column":29},"end":{"row":57,"column":30},"action":"remove","lines":["D"]}],[{"start":{"row":57,"column":29},"end":{"row":57,"column":30},"action":"insert","lines":["T"],"id":3},{"start":{"row":57,"column":30},"end":{"row":57,"column":31},"action":"insert","lines":["i"]},{"start":{"row":57,"column":31},"end":{"row":57,"column":32},"action":"insert","lines":["m"]},{"start":{"row":57,"column":32},"end":{"row":57,"column":33},"action":"insert","lines":["e"]}],[{"start":{"row":60,"column":458},"end":{"row":60,"column":459},"action":"remove","lines":[" "],"id":4}],[{"start":{"row":60,"column":458},"end":{"row":60,"column":459},"action":"insert","lines":[" "],"id":5}],[{"start":{"row":33,"column":0},"end":{"row":33,"column":3},"action":"insert","lines":["// "],"id":6},{"start":{"row":34,"column":0},"end":{"row":34,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":33,"column":0},"end":{"row":33,"column":3},"action":"remove","lines":["// "],"id":7},{"start":{"row":34,"column":0},"end":{"row":34,"column":3},"action":"remove","lines":["// "]}],[{"start":{"row":33,"column":0},"end":{"row":33,"column":3},"action":"insert","lines":["// "],"id":8},{"start":{"row":34,"column":0},"end":{"row":34,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":92,"column":28},"end":{"row":93,"column":0},"action":"insert","lines":["",""],"id":9},{"start":{"row":93,"column":0},"end":{"row":93,"column":4},"action":"insert","lines":["    "]},{"start":{"row":93,"column":4},"end":{"row":93,"column":5},"action":"insert","lines":["/"]},{"start":{"row":93,"column":5},"end":{"row":93,"column":6},"action":"insert","lines":["/"]}],[{"start":{"row":92,"column":28},"end":{"row":92,"column":29},"action":"insert","lines":["*"],"id":10}],[{"start":{"row":92,"column":29},"end":{"row":92,"column":30},"action":"insert","lines":[" "],"id":11}],[{"start":{"row":92,"column":29},"end":{"row":92,"column":30},"action":"remove","lines":[" "],"id":12},{"start":{"row":92,"column":28},"end":{"row":92,"column":29},"action":"remove","lines":["*"]}],[{"start":{"row":92,"column":28},"end":{"row":92,"column":29},"action":"insert","lines":["*"],"id":13}],[{"start":{"row":92,"column":29},"end":{"row":92,"column":30},"action":"insert","lines":[" "],"id":14},{"start":{"row":92,"column":30},"end":{"row":92,"column":31},"action":"insert","lines":["F"]},{"start":{"row":92,"column":31},"end":{"row":92,"column":32},"action":"insert","lines":["R"]},{"start":{"row":92,"column":32},"end":{"row":92,"column":33},"action":"insert","lines":["O"]},{"start":{"row":92,"column":33},"end":{"row":92,"column":34},"action":"insert","lines":["M"]}],[{"start":{"row":92,"column":34},"end":{"row":92,"column":35},"action":"insert","lines":[" "],"id":15},{"start":{"row":92,"column":35},"end":{"row":92,"column":36},"action":"insert","lines":["a"]},{"start":{"row":92,"column":36},"end":{"row":92,"column":37},"action":"insert","lines":["a"]}],[{"start":{"row":92,"column":37},"end":{"row":92,"column":38},"action":"insert","lines":["l"],"id":16},{"start":{"row":92,"column":38},"end":{"row":92,"column":39},"action":"insert","lines":["l"]},{"start":{"row":92,"column":39},"end":{"row":92,"column":40},"action":"insert","lines":["m"]},{"start":{"row":92,"column":40},"end":{"row":92,"column":41},"action":"insert","lines":["e"]},{"start":{"row":92,"column":41},"end":{"row":92,"column":42},"action":"insert","lines":["e"]}],[{"start":{"row":92,"column":42},"end":{"row":92,"column":43},"action":"insert","lines":["t"],"id":17},{"start":{"row":92,"column":43},"end":{"row":92,"column":44},"action":"insert","lines":["i"]},{"start":{"row":92,"column":44},"end":{"row":92,"column":45},"action":"insert","lines":["n"]},{"start":{"row":92,"column":45},"end":{"row":92,"column":46},"action":"insert","lines":["g"]},{"start":{"row":92,"column":46},"end":{"row":92,"column":47},"action":"insert","lines":["s"]}],[{"start":{"row":92,"column":47},"end":{"row":93,"column":0},"action":"insert","lines":["",""],"id":18},{"start":{"row":93,"column":0},"end":{"row":93,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":92,"column":28},"end":{"row":92,"column":47},"action":"remove","lines":["* FROM aallmeetings"],"id":19},{"start":{"row":92,"column":28},"end":{"row":92,"column":499},"action":"insert","lines":["latitude, longitude, address, json_agg(json_build_object('Meeting Name', meetingname, 'Meeting Title', meetingtitle, 'Day', day, 'Start Time', starttime,  'End Time', endtime, 'Metting Type', meetingtype, 'Special Interest', specialinterest, 'Address', fulllocation)) as meetings FROM aaallmeetings JOIN aaallmeetinginstances ON aaallmeetings.locationid = aaallmeetinginstances.locationid WHERE (1=1) \" + queryDay +  queryTime + \" GROUP BY latitude, longitude, address;\";"]}],[{"start":{"row":92,"column":457},"end":{"row":92,"column":458},"action":"remove","lines":["\""],"id":20},{"start":{"row":92,"column":456},"end":{"row":92,"column":457},"action":"remove","lines":[" "]},{"start":{"row":92,"column":455},"end":{"row":92,"column":456},"action":"remove","lines":["+"]},{"start":{"row":92,"column":454},"end":{"row":92,"column":455},"action":"remove","lines":[" "]},{"start":{"row":92,"column":453},"end":{"row":92,"column":454},"action":"remove","lines":["e"]},{"start":{"row":92,"column":452},"end":{"row":92,"column":453},"action":"remove","lines":["m"]},{"start":{"row":92,"column":451},"end":{"row":92,"column":452},"action":"remove","lines":["i"]},{"start":{"row":92,"column":450},"end":{"row":92,"column":451},"action":"remove","lines":["T"]},{"start":{"row":92,"column":449},"end":{"row":92,"column":450},"action":"remove","lines":["y"]},{"start":{"row":92,"column":448},"end":{"row":92,"column":449},"action":"remove","lines":["r"]},{"start":{"row":92,"column":447},"end":{"row":92,"column":448},"action":"remove","lines":["e"]},{"start":{"row":92,"column":446},"end":{"row":92,"column":447},"action":"remove","lines":["u"]},{"start":{"row":92,"column":445},"end":{"row":92,"column":446},"action":"remove","lines":["q"]},{"start":{"row":92,"column":444},"end":{"row":92,"column":445},"action":"remove","lines":[" "]},{"start":{"row":92,"column":443},"end":{"row":92,"column":444},"action":"remove","lines":[" "]},{"start":{"row":92,"column":442},"end":{"row":92,"column":443},"action":"remove","lines":["+"]},{"start":{"row":92,"column":441},"end":{"row":92,"column":442},"action":"remove","lines":[" "]},{"start":{"row":92,"column":440},"end":{"row":92,"column":441},"action":"remove","lines":["y"]},{"start":{"row":92,"column":439},"end":{"row":92,"column":440},"action":"remove","lines":["a"]}],[{"start":{"row":92,"column":438},"end":{"row":92,"column":439},"action":"remove","lines":["D"],"id":21},{"start":{"row":92,"column":437},"end":{"row":92,"column":438},"action":"remove","lines":["y"]},{"start":{"row":92,"column":436},"end":{"row":92,"column":437},"action":"remove","lines":["r"]},{"start":{"row":92,"column":435},"end":{"row":92,"column":436},"action":"remove","lines":["e"]},{"start":{"row":92,"column":434},"end":{"row":92,"column":435},"action":"remove","lines":["u"]},{"start":{"row":92,"column":433},"end":{"row":92,"column":434},"action":"remove","lines":["q"]},{"start":{"row":92,"column":432},"end":{"row":92,"column":433},"action":"remove","lines":[" "]},{"start":{"row":92,"column":431},"end":{"row":92,"column":432},"action":"remove","lines":["+"]},{"start":{"row":92,"column":430},"end":{"row":92,"column":431},"action":"remove","lines":[" "]},{"start":{"row":92,"column":429},"end":{"row":92,"column":430},"action":"remove","lines":["\""]},{"start":{"row":92,"column":428},"end":{"row":92,"column":429},"action":"remove","lines":[" "]},{"start":{"row":92,"column":427},"end":{"row":92,"column":428},"action":"remove","lines":[")"]},{"start":{"row":92,"column":426},"end":{"row":92,"column":427},"action":"remove","lines":["1"]},{"start":{"row":92,"column":425},"end":{"row":92,"column":426},"action":"remove","lines":["="]},{"start":{"row":92,"column":424},"end":{"row":92,"column":425},"action":"remove","lines":["1"]},{"start":{"row":92,"column":423},"end":{"row":92,"column":424},"action":"remove","lines":["("]},{"start":{"row":92,"column":422},"end":{"row":92,"column":423},"action":"remove","lines":[" "]},{"start":{"row":92,"column":421},"end":{"row":92,"column":422},"action":"remove","lines":["E"]},{"start":{"row":92,"column":420},"end":{"row":92,"column":421},"action":"remove","lines":["R"]}],[{"start":{"row":92,"column":419},"end":{"row":92,"column":420},"action":"remove","lines":["E"],"id":22},{"start":{"row":92,"column":418},"end":{"row":92,"column":419},"action":"remove","lines":["H"]},{"start":{"row":92,"column":417},"end":{"row":92,"column":418},"action":"remove","lines":["W"]},{"start":{"row":92,"column":416},"end":{"row":92,"column":417},"action":"remove","lines":[" "]}],[{"start":{"row":92,"column":207},"end":{"row":92,"column":208},"action":"remove","lines":["t"],"id":23}],[{"start":{"row":92,"column":207},"end":{"row":92,"column":208},"action":"insert","lines":["e"],"id":24}],[{"start":{"row":94,"column":43},"end":{"row":94,"column":44},"action":"insert","lines":[","],"id":25}],[{"start":{"row":94,"column":44},"end":{"row":94,"column":45},"action":"insert","lines":[" "],"id":26},{"start":{"row":94,"column":45},"end":{"row":94,"column":46},"action":"insert","lines":["l"]},{"start":{"row":94,"column":46},"end":{"row":94,"column":47},"action":"insert","lines":["o"]},{"start":{"row":94,"column":47},"end":{"row":94,"column":48},"action":"insert","lines":["c"]},{"start":{"row":94,"column":48},"end":{"row":94,"column":49},"action":"insert","lines":["a"]},{"start":{"row":94,"column":49},"end":{"row":94,"column":50},"action":"insert","lines":["t"]},{"start":{"row":94,"column":50},"end":{"row":94,"column":51},"action":"insert","lines":["i"]},{"start":{"row":94,"column":51},"end":{"row":94,"column":52},"action":"insert","lines":["o"]},{"start":{"row":94,"column":52},"end":{"row":94,"column":53},"action":"insert","lines":["n"]},{"start":{"row":94,"column":53},"end":{"row":94,"column":54},"action":"insert","lines":["i"]},{"start":{"row":94,"column":54},"end":{"row":94,"column":55},"action":"insert","lines":["d"]}]]},"ace":{"folds":[],"scrolltop":674.5,"scrollleft":0,"selection":{"start":{"row":94,"column":55},"end":{"row":94,"column":55},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":69,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1575224065874,"hash":"b7e3cc39b71bf81f752a2709c3dbf6d81e030b92"}