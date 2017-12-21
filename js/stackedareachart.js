// Script
var StackedAreaChart = bb.generate({
  "data": {
    "columns": [
	["data1", 300, 350, 300, 0, 0, 120],
	["data2", 130, 100, 140, 200, 150, 50]
    ],
    "types": {
      "data1": "area-spline",
      "data2": "area-spline"
    },
    "groups": [
      [
        "data1",
        "data2"
      ]
    ]
  },
  "bindto": "#StackedAreaChart",
	size: { 
  height: 520
  }
});