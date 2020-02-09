/*
* 
	需要的参数：
	myChartName:统计图名称
	myChartId:统计图id
	formatterFun:格式化tooltip
	xAxisData:数组，横坐标
	legendData: 数组，纵坐标代表意义
	seriesType: 图表类型//line,'bar'
	barGap:80%
	barCategoryGap:80%
	seriesData:数组
*/
//require.config({
//	paths: {
//		echarts: 'echarts'
//	}
//});
function getChart(myChartId,option){
//	require(
//      [		'echarts',
//				'echarts/chart/bar',
//				'echarts/chart/line',
//				'echarts/chart/pie',
//				'echarts/chart/funnel'
//      ],function (ec) {
//          var myChart = ec.init(document.getElementById(myChartId));
//          myChart.setOption(option);
//      }
//  );
    var myChart = echarts.init(document.getElementById(myChartId));
    myChart.setOption(option);
}
function myChart(myChartId,myChartName,formatterFun,legendData,xAxisData,seriesType,barGap,barCategoryGap,seriesData){
	var series=[];
	for(var i=0,len=legendData.length;i<len;i++){
		series[i]={
			name:legendData[i],
			type:seriesType,
			barGap:barGap,
			barCategoryGap:barCategoryGap,
			itemStyle: {
	            normal: {
	                label: {
	                    show: true,
	                    position: 'top',
	                    formatter: '{b}\n{c}'
	                }
	            }
	        },
			data:seriesData[i]
		}
	}
	var option={
		title : {
			text: myChartName
		},
		tooltip : {
			trigger: 'axis',
			formatter: formatterFun
		},
		legend: {data:legendData},//data:['最高气温','最低气温'
		toolbox: {
			show : true,
			feature : {
				mark : {show: false},
				dataView : {show: true, readOnly: false},
				magicType : {show: true, type: ['line', 'bar']},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		calculable : true,
		animationDuration :5000,
		xAxis : [
			  {
					type : 'category',//category  time  value  log  
					position: 'bottom',
					boundaryGap: true,
					axisLine : {    // 轴线
						show: true,
						lineStyle: {
							type: 'solid',
							width: 1
						}
					},
					axisTick : {    // 轴标记
						show:true,
						length: 10,
						lineStyle: {
							color: 'red',
							type: 'solid',
							width: 2
						}
					},
					axisLabel : {
						show:true,
						interval: 'auto',    // {number}
						rotate: 30,
						margin: 6,
						formatter: '{value}',
						textStyle: {
							fontFamily: 'Arial',
							fontStyle: 'italic',
							fontWeight : 'normal',
						}
					},
					splitLine : {
						show:true,
						lineStyle: {
							color: '#483d8b',
							type: 'dashed',
							width: 1,
							type: 'solid',
						}
					},
					splitArea : {
						show: true,
						areaStyle:{
							color:['rgba(144,238,144,0.3)','rgba(135,200,250,0.3)']
						}
					},
					data : xAxisData
				}
		],
		yAxis : [{type : 'value'}],
		series : series
	};
	getChart(myChartId,option);
}
/*
* 
	需要的参数：
	myChartName:统计图名称
	myChartId:统计图id
	max：funnel的最大值
	formatterFun:格式化tooltip
	legendData: 数组，纵坐标代表意义
	seriesData:数组
*/
function myChartPie(myChartId,max,myChartName,formatterFun,legendData,seriesData){
	option = {
	    title : {
	        text: myChartName,
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: formatterFun
	    },
	    legend: {
	        orient : 'vertical',
	        x : 'left',
	        data:legendData
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            mark : {show: false},
	            dataView : {show: true, readOnly: false},
	            magicType : {
	                show: true, 
	                type: ['pie', 'funnel'],
	                option: {
	                    funnel: {
	                        x: '25%',
	                        width: '50%',
	                        funnelAlign: 'left',
	                        max: max
	                    }
	                }
	            },
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    series : [
	        {
	            name:myChartName,
	            type:'pie',
	            radius : '55%',
	            center: ['50%', '50%'],
	            data:seriesData
	        }
	    ]
	};
	getChart(myChartId,option);
}