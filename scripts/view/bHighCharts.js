/**
 * Created by mdilli on 11/04/2016.
 */
import React, {Component} from 'react';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import SolidGaugeModule from 'highcharts/modules/solid-gauge';
import Nodata from 'highcharts/modules/no-data-to-display'


export default class ReactChart extends Component {

    constructor(props) {
        super(props);
        this.chartRef={};
        this._extends = Object.assign || function (target) {
                for (var i = 1; i < arguments.length; i++)
                {
                    var source = arguments[i];
                    for (var key in source)
                    {
                        if (Object.prototype.hasOwnProperty.call(source, key))
                        {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            };
    }

    renderChart(config) {
        var _this = this;
        if (!config) {
            throw new Error('Config must be specified for the chart component');
        }
        var chartConfig = config.chart;
        this.chartRef = new Highcharts.Chart(_this._extends({}, config, {
            chart: _this._extends({}, chartConfig, {
                renderTo: this.refs.chart
            })
        }));
       if(_this.chart) {
          global.requestAnimationFrame && requestAnimationFrame(function () {
          _this.chart.reflow();
          });
       }
    }

    shouldComponentUpdate(nextProps) {
       /*  this code is commented to avoide creating chart instance
        if (!this.props.isPureConfig || !(this.props.config === nextProps.config)) {
            this.renderChart(nextProps.config);
        }*/
        return true;
    }

    componentDidMount() {
        HighchartsMore(Highcharts);
        SolidGaugeModule(Highcharts);
        Nodata(Highcharts);
        this.renderChart(this.props.config);
    }

    componentWillUnmount() {
        this.chartRef.destroy();
    }

    render() {
        var props = this.props;
        props = this._extends({}, props, {
            ref: 'chart'
        });
        return React.createElement('div', props);
    }
}
