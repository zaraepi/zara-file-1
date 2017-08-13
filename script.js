function makePieChart(container,data,radius,colGen){

	var pieDataGen = d3.pie()
					.sort(null)
					.value(function(d){ return d.value });
	var pieData = pieDataGen(data);
	var arcGen = d3.arc()
					.outerRadius(radius)
					.innerRadius(radius/2)
					.cornerRadius(2);
	var arcLabelGen = d3.arc()
					.outerRadius(radius)
					.innerRadius(radius/2);

	var pie = d3.select(container).append('g')
					.attr('transform','translate('+radius+','+radius+')');

	pie.selectAll('.arc')
		.data(pieData)
		.enter()
		.append('path')
		.attr('id',function(d,i){ return 'arc'+i})
		.attr('class','arc')
		.attr('d',arcGen)
		.attr('fill',function(d){ return colGen(d.data.name) })

	pie.selectAll('.size')
		.data(pieData)
		.enter()
		.append('text')
		.style('text-anchor','middle')
		.style('alignment-baseline','middle')
		.style('font-family','Verdana')
		.style('font-size','12')
		.attr('transform',function(d){ return 'translate('+arcLabelGen.centroid(d)+')'})
		.text(function(d){ return d.data.value});

}	

//--------------------------------------------------

var width = 700;
var height = 300;
var marginTop = 50;
var marginLeft = 50;

var data = [

			{
				year : 2015,
				info:[
					{
						name:'Dunedin',
						value: 20
					},
					{
						name:'Christchurch',
						value: 40
					},
					{
						name:'Wellington',
						value: 60
					},
					{
						name:'Auckland',
						value: 80
					}
				]
			},
			{
				year : 2016,
				info:[
					{
						name:'Dunedin',
						value: 40
					},
					{
						name:'Christchurch',
						value: 40
					},
					{
						name:'Wellington',
						value: 60
					},
					{
						name:'Auckland',
						value: 70
					}
				]
			},
			{
				year : 2017,
				info:[
					{
						name:'Dunedin',
						value: 40
					},
					{
						name:'Christchurch',
						value: 50
					},
					{
						name:'Wellington',
						value: 50
					},
					{
						name:'Auckland',
						value: 70
					}
				]
			}
	
		];


var colGen = d3.scaleOrdinal()
				.range(['#B4B9DF','#B95095','#71417F','#E2A1DB','#E3CBFD']);



var graphs = d3.select('#pieCharts')
						.append('g')
						.attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')');


	























