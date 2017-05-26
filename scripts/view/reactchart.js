import React from 'react'
import ReactHighcharts from 'react-highcharts'
import Highcharts from 'highcharts'

export default class ReactChart extends React.Component{
    constructor(props){
        super(props)

        var chartConfig = {
            chart: {
               zoomType: 'xy'
            },
            title: {
                text: 'Weather Report'
            },
            subtitle: {
                text: 'Source: OpenWeatherMap.com'
            },
            xAxis: {
                labels: {
                autoRotation: [0, -15],
                format: '{value:%b %e %I:%M:%S %p }',
                align: 'center',
            },
            categories : this.props.dataconfig.timelist,
               type: 'datetime',
                startOnTick: true,
                endOnTick: true
            },
            yAxis: [
                        { // Primary yAxis
                    labels: {
                        format: '{value}°C',
                        style: {
                            color: Highcharts.getOptions().colors[3]
                        }
                    },
                    title: {
                        text: 'Temperature',
                        style: {
                            color: Highcharts.getOptions().colors[3]
                        }
                    },
                    opposite: true

                }, { // Secondary yAxis
                    gridLineWidth: 0,
                    title: {
                        text: 'Wind',
                        style: {
                            color: Highcharts.getOptions().colors[0]
                        }
                    },
                    labels: {
                        format: '{value} mm',
                        style: {
                            color: Highcharts.getOptions().colors[0]
                        }
                    }

                }, { // Tertiary yAxis
                    gridLineWidth: 0,
                    title: {
                        text: 'Sea-Level Pressure',
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    labels: {
                        format: '{value} mb',
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    opposite: true
                }
            ],
            tooltip: {
                crosshairs: true,
                 shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series:  [{
                        name: 'Wind',
                        type: 'areaspline',
                        yAxis: 1,
                        data: this.props.dataconfig.wind,
                        tooltip: {
                            valueSuffix: ' mm'
                        },
                        marker : {
                            symbol : "diamond",

                        }

                    }, {
                        name: 'Sea-Level Pressure',
                        type: 'spline',
                        yAxis: 2,
                        data: this.props.dataconfig.pressure,
                        marker: {
                            enabled: false,
                        },
                        dashStyle: 'shortdot',
                        tooltip: {
                            valueSuffix: ' mb'
                        }

                    }, {
                        name: 'Temperature',
                        type: 'spline',
                        data: this.props.dataconfig.temperature,
                         color: Highcharts.getOptions().colors[3],
                         marker : {
                             symbol : "circle"
                         },
                        tooltip: {
                            valueSuffix: ' °C'
                        }
                        
                    }]
        }
    
                this.state = {config: chartConfig};
    }

    

 

    componentDidMount(){

    }

    render(){
       
        return(
            <ReactHighcharts config = {this.state.config} ref="chart"></ReactHighcharts>
        )
    }
}