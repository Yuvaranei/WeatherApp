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
    }

    componentWillMount(){
        let that = this;
        this.data.list.map(function(item){
            that.timelist.push(item.dt*1000)
            that.wind.push(item.wind.speed)
            that.temperature.push(item.main.temp-273.15) 
            that.pressure.push(item.main.pressure)
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