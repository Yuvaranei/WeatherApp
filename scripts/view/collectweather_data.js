import React from 'react'
import Constants from '../util/Constants'
import ReactChart from '../view/reactchart'

export default class CollectWeatherData extends React.Component{

    constructor(props){
        super(props)
        this.data = Constants.weather_data
        this.wind = [];
        this.temperature = [];
        this.pressure = [];
        this.timelist = [];
        //console.log("data =  "+JSON.stringify(this.data.list))
    }

    componentWillMount(){
        let that = this;
        this.data.list.map(function(item){
            //console.log("iniside list "+JSON.stringify(item.wind.speed))
            that.timelist.push(item.dt*1000)
            that.wind.push(item.wind.speed)
            that.temperature.push(item.main.temp-273.15) //Converting Kelvin to Fahrenheit
            that.pressure.push(item.main.pressure)
            // that.wind.push({time : item.dt, speed : item.wind.speed, name : "wind", data_txt : item.dt_txt, symbol : "diamond"})
            // that.temperature.push({time : item.dt, temp : item.main.temp, name: "temperature", data_txt : item.dt_txt, symbol : "circle"})
            // that.pressure.push({time : item.dt, temp : item.main.pressure, name : "pressure",data_txt : item.dt_txt, symbol : "triangle"})
        })
        console.log("timelist = "+this.timelist)
        console.log("wind = "+this.wind)
        console.log("temperature = "+this.temperature)
        console.log("pressure = "+this.pressure)
    }
    render(){

        let config = {
            wind: this.wind,
            pressure : this.pressure,
            temperature : this.temperature,
            timelist : this.timelist
        }
        return(
            <ReactChart dataconfig = {config} />
        )
    }
}