  jQuery(document).ready(function($) {

        $('#myCarousel').carousel(
        {
            interval: 5000
        });


var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 50, left: 50},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

/*
d3.tsv("data.tsv", function(d) {
  d.frequency = +d.frequency;
  return d;
}, function(error, data) {
  if (error) throw error;
*/
  var data = [
  {featuresMatched: 15, count: 20},
  {featuresMatched: 14, count: 26},
  {featuresMatched: 13, count: 37},
  {featuresMatched: 12, count: 40},
  {featuresMatched: 11, count: 42},
  {featuresMatched: 10, count: 37},
  {featuresMatched: 9, count: 30},
  {featuresMatched: 8, count: 28},
  {featuresMatched: 7, count: 20},
  {featuresMatched: 6, count: 17},
  {featuresMatched: 5, count: 30},
  {featuresMatched: 4, count: 42},
  {featuresMatched: 3, count: 50}
];


  x.domain(data.map(function(d) { return d.featuresMatched; }));
  y.domain([0, d3.max(data, function(d) { return d.count; })]);

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10, ""))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Frequency");

  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.featuresMatched); })
      .attr("y", function(d) { return y(d.count); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.count); });


 g.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Count of Images");    


 g.append("text")             
      .attr("transform",
            "translate(" + (width/2) + " ," + 
                           (height + margin.top + 20) + ")")
      .style("text-anchor", "middle")
      .text("Number of Features Matched");


});