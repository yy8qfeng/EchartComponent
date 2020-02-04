//数据处理,没有数据给默认数据
function oneEchartsData(data){
		if(!data.name){
			data.name = ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"];
		}
		if(!data.num){
			data.num = [5, 20, 36, 10, 10, 20];
		}
		if(!data.numTwo){
			data.numTwo = [10, 20, 30, 40, 50, 60];
		}
		if(!data.numThree){
			data.numThree = [60, 50, 40, 30, 20, 10];
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


//双柱状图/折线图
function getCharTypeDoubleBar(element,data){
	 oneEchartsData(data)
	  chart_center_1 = echarts.init(element);
	    let option = {
	        title: {
	            text:data.title,
	            left: 'center',
	            top: '6px',
	            textStyle: {
	                color: '#fff'
	            }
	        },
	        tooltip: {
	            trigger: 'axis',
	            axisPointer: { // 坐标轴指示器，坐标轴触发有效
	                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
	            }
	        },
	        grid: {
	            left: '2%',
	            right: '4%',
	            bottom: '14%',
	            top: '16%',
	            containLabel: true
	        },
	        legend: {
	            data:data.legend,
	            right: 10,
	            top: 12,
	            textStyle: {
	                color: "#fff"
	            },
	            itemWidth: 12,
	            itemHeight: 10,
	            // itemGap: 35
	        },
	        xAxis: {
	            type: 'category',
	            data: data.name,
	            axisLine: {
	                lineStyle: {
	                    color: 'white'
	                }
	            },
	            axisLabel: {
	                // interval: 0,
	                // rotate: 40,
	                textStyle: {
	                    fontFamily: 'Microsoft YaHei'
	                }
	            },
	        },
	        yAxis: {
	            minInterval: 1,
	            max: function (value) {
	                let max = value.max+'';
	                if(max.length>1){
	                    let s  = max.substring(0,1);
	                    if(max.substring(0,1)!=='0'){
	                        s = s*10+10;
	                        return s;
	                    }
	                }
	                return  value.max+ 4;
	            },
	            type: 'value',
	            axisLine: {
	                show: false,
	                lineStyle: {
	                    color: 'white'
	                }
	            },
	            splitLine: {
	                show: true,
	                lineStyle: {
	                    color: 'rgba(255,255,255,0.3)'
	                }
	            },
	            axisLabel: {}
	        },
	        series: [{
	            name: data.legend[0],
	            type: data.type,
	            stack:"123",
	            barWidth: '15%',
	            itemStyle: {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                        offset: 0,
	                        color: '#fccb05'
	                    }, {
	                        offset: 1,
	                        color: '#f5804d'
	                    }]),
	                    // barBorderRadius: 12,
	                    label: {
	                        show: true,
	                        textStyle: {
	                            color: "#fff"
	                        },
	                        /*  position: "Center",*/
	                        formatter: function (p) {
	                            return p.value > 0 ? (p.value + '') : '';
	                        }
	                    }
	                },
	            },
	            data: data.numTwo
	        },
	            {
	                name: data.legend[1],
	                type: data.type,
	                stack:"123",
	                barWidth: '15%',
	                itemStyle: {
	                    normal: {
	                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                            offset: 0,
	                            color: '#8bd46e'
	                        }, {
	                            offset: 1,
	                            color: '#09bcb7'
	                        }]),
	                        // barBorderRadius: 11,
	                        label: {
	                            show: true,
	                            textStyle: {
	                                color: "#fff"
	                            },
	                            /*  position: "Center",*/
	                            formatter: function (p) {
	                                return p.value > 0 ? (p.value + '') : '';
	                            }
	                        }
	                    }
	
	                },
	                data: data.numThree
	            }
	        ]
	    };
	    chart_center_1.setOption(option);
}