$(function(){

	  let data={
		/*	 */
		/* mapData:[{ "name":"上海", "value":100},
				 { "name":"宁夏", "value":88},
				 { "name":"湖南", "value":50},
				 { "name":"湖北", "value":120},
				 { "name":"江苏", "value":160}]
		 */
		/* legend:["a","b"],
		 type:"bar" */
		  /*  num: [5, 20, 36, 10, 10, 20],
		  title:"入门", */
		  fontColor:'#ffffff'
	  }; 
		//oneEchartsT( document.getElementById("oneEcharts") , data);
		//getCharTypeDoubleBar( document.getElementById("oneEcharts") , data);
		//getCharByChinaMap(document.getElementById("oneEcharts") , data);	
		//getCharByRadar(document.getElementById("oneEcharts") , data);
		//getEcharPictorialBar(document.getElementById("oneEcharts") , data);
		//getTopMap(document.getElementById("oneEcharts") , data);
		getEchartsTimePie(document.getElementById("oneEcharts"),data)
});