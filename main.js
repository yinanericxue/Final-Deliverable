var margin = { top: 10, right: 10, bottom: 100, left: 10 };
var width = 850 - margin.left - margin.right;
var height = 860 - margin.top - margin.bottom;
var innerRadius = 30;
var outerRadius = Math.min(width, height) / 2;

var svg = d3.select("#body")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + (height / 2 + 100) + ")");

var tooltip = d3.select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

var files = {"KHOU": "KHOU.csv", "KNYC": "KNYC.csv", "KSEA": "KSEA.csv", "IND": "IND.csv", "CQT": "CQT.csv", "CLT": "CLT.csv", "PHL": "PHL.csv", "MDW": "MDW.csv", "PHX": "PHX.csv", "JAX": "JAX.csv"};

var select = d3.select("body")
  .append("select")
  .on("change", function () {
    var selectedValue = d3.select(this).property("value");
    d3.csv(files[selectedValue], function (data) {
      svg.selectAll("g").remove();
      var x = d3.scaleBand()
        .range([0, 2 * Math.PI])
        .domain(data.map(function (d) { return d.date; }));

      var y = d3.scaleRadial()
        .range([innerRadius, outerRadius])
        .domain([20, 90]);

      var color = d3.scaleOrdinal()
        .domain(["July", "August", "September", "October", "November", "December", "January", "February", "March", "April", "May", "June"])
        .range(["#eb572a", "#eb942a", "#966c3f", "#99721f", "#7d6000", "#306163", "#417f82", "#52a4a8", "#66a852", "#8ae66e", "#2aeb4a", "#e7ba52"]);

        svg.append("g")
        .selectAll("path")
        .data(data)
        .enter()
        .append("path")
        .attr("fill", function (d) { return color(d3.timeFormat("%B")(d3.timeParse("%Y-%m-%d")(d.date))); })
        .attr("d", d3.arc()
          .innerRadius(innerRadius)
          .outerRadius(function (d) { return y(d.actual_mean_temp); })
          .startAngle(function (d) { return x(d.date); })
          .endAngle(function (d) { return x(d.date) + x.bandwidth(); })
          .padAngle(0.01)
          .padRadius(innerRadius))
        .on("mouseover", function (d) {
          tooltip.transition()
            .duration(200)
            .style("opacity", .9);
          tooltip.html("Date: " + d.date + "<br/>Temperature: " + d.actual_mean_temp)
            .style("left", (d3.event.pageX + 10) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
        })
        .on("mouseout", function(d) {
          tooltip.transition()
            .duration(500)
            .style("opacity", 0);
        });
      

      var legend = svg.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("text-anchor", "end")
        .selectAll("g")
        .data(color.domain().slice().reverse())
        .enter()
        .append("g")
        .attr("transform", function(d, i) { return "translate(430," + (i - (color.domain().length / 2)) * 20 + ")"; });

      legend.append("rect")
        .attr("width", 8)
        .attr("height", 18)
        .attr("fill", color);

      legend.append("text")
        .attr("x", -3)
        .attr("y", 9.5)
        .attr("dy", "0.32em")
        .text(function(d) { return d; });

      var yAxis = svg.append("g")
        .attr("text-anchor", "middle");

      var yTick = yAxis
        .selectAll("g")
        .data(y.ticks(5).slice(1))
        .enter().append("g");

      yTick.append("circle")
        .attr("fill", "none")
        .attr("stroke", "#000")
        .attr("r", y);

      yTick.append("text")
        .attr("y", function(d) { return -y(d); })
        .attr("dy", "0.35em")
        .attr("fill", "none")
        .attr("stroke", "#fff")
        .attr("stroke-width", 5)
        .text(y.tickFormat(5, "s"));

      yTick.append("text")
        .attr("y", function(d) { return -y(d); })
        .attr("dy", "0.35em")
        .text(y.tickFormat(5, "s"));

      yAxis.append("text")
        .attr("y", function() { return -y(y.ticks(5).pop()); })
        .attr("dy", "-1em")
        .text("Temperature (F)");
    });
  });

select.selectAll("option")
  .data(Object.keys(files))
  .enter()
  .append("option")
  .text(function(d) { return d; })
  .attr("value", function(d) { return d; });

var initialFile = files[Object.keys(files)[0]];
d3.csv(initialFile, function(data) {
  var x = d3.scaleBand()
  .range([0, 2 * Math.PI])
  .domain(data.map(function(d) { return d.date; }));

  var y = d3.scaleRadial()
    .range([innerRadius, outerRadius])
    .domain([20, 90]);

  var color = d3.scaleOrdinal()
    .domain(["July", "August", "September", "October", "November", "December", "January", "February", "March", "April", "May", "June"])
    .range(["#eb572a", "#eb942a", "#966c3f", "#99721f", "#7d6000", "#306163", "#417f82", "#52a4a8", "#66a852", "#8ae66e", "#2aeb4a", "#e7ba52"]);

  svg.append("g")
    .selectAll("path")
    .data(data)
    .enter()
    .append("path")
    .attr("fill", function(d) { return color(d3.timeFormat("%B")(d3.timeParse("%Y-%m-%d")(d.date))); })
    .attr("d", d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(function(d) { return y(d.actual_mean_temp); })
      .startAngle(function(d) { return x(d.date); })
      .endAngle(function(d) { return x(d.date) + x.bandwidth(); })
      .padAngle(0.01)
      .padRadius(innerRadius))
    .on("mouseover", function(d) {
        tooltip.transition()
          .duration(200)
          .style("opacity", .9);
        tooltip.html("Date: " + d.date + "<br/>Temperature: " + d.actual_mean_temp)
          .style("left", (d3.event.pageX + 10) + "px")
          .style("top", (d3.event.pageY - 28) + "px");
      })
    .on("mouseout", function(d) {
        tooltip.transition()
          .duration(500)
          .style("opacity", 0);
      });

  var legend = svg.append("g")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
    .attr("text-anchor", "end")
    .selectAll("g")
    .data(color.domain().slice().reverse())
    .enter()
    .append("g")
    .attr("transform", function(d, i) { return "translate(430," + (i - (color.domain().length / 2)) * 20 + ")"; });

  legend.append("rect")
    .attr("width", 8)
    .attr("height", 18)
    .attr("fill", color);

  legend.append("text")
    .attr("x", -3)
    .attr("y", 9.5)
    .attr("dy", "0.32em")
    .text(function(d) { return d; });

  var yAxis = svg.append("g")
    .attr("text-anchor", "middle");

  var yTick = yAxis
    .selectAll("g")
    .data(y.ticks(6).slice(1))
    .enter().append("g");

  yTick.append("circle")
    .attr("fill", "none")
    .attr("stroke", "#000")
    .attr("r", y);

  yTick.append("text")
    .attr("y", function(d) { return -y(d); })
    .attr("dy", "0.35em")
    .attr("fill", "none")
    .attr("stroke", "#fff")
    .attr("stroke-width", 5)
    .text(y.tickFormat(5, "s"));

  yTick.append("text")
    .attr("y", function(d) { return -y(d); })
    .attr("dy", "0.35em")
    .text(y.tickFormat(5, "s"));

  yAxis.append("text")
    .attr("y", function() { return -y(y.ticks(5).pop()); })
    .attr("dy", "-1em")
    .text("Temperature (F)");
});