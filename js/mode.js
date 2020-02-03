//数据处理,没有数据给默认数据
function oneEchartsData(data){
		if(!data.name){
			data.name = ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"];
		}
		if(!data.num){
			data.num = [5, 20, 36, 10, 10, 20];
		}
		if(!data.legend){
			data.legend = "销量";
		}
		if(!data.title){
			data.title = "入门";
		}
		if(!data.type){
			data.type = "bar";
		}
}

//图形展示 id:加载对象   data:参数集合
function oneEchartsT(element , data){
			oneEchartsData(data)
		       // 指定图表的配置项和数据
			var myChart = echarts.init(element);
	        var option = {
	            title: {
	                text: data.title 
	            },
	            tooltip: {},
	            legend: {
	                data:data.legend
	            },
	            xAxis: {
	                data: data.name
	            },
	            yAxis: {},
	            series: [{
	                name: '销量',
	                type: data.type,
	                data: data.num
	            }]
	        };
	
	        // 使用刚指定的配置项和数据显示图表。
	        myChart.setOption(option);
}