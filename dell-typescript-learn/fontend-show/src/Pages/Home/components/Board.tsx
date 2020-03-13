import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import moment from 'moment'
import './Board.css';

interface TempLinesData {
    [key: string]: number[];
}

interface Props {
    data: responseResult.Data;
}

const Board: React.FC<Props> = (props) => {
    const {
        data
    } = props;
    console.log(data);

    const getOption: () => echarts.EChartOption = () => {
        const courseNames: string[] = [];
        const times: string[] = [];
        const tempLinesData: TempLinesData = {};
        for (let key in data) {
            times.push(moment(Number(key)).format('MM-DD HH:mm'));
            const item = data[key];
            item.forEach(innerItem => {
                const { title, count } = innerItem;
                if (courseNames.indexOf(title) === -1) {
                    courseNames.push(title);
                }
                tempLinesData[title] ? tempLinesData[title].push(count) : (tempLinesData[title] = [count]);
            });
        }

        const finalLinesData: echarts.EChartOption.Series[] = [];
        for (let key in tempLinesData) {
            finalLinesData.push({
                name: key,
                type: 'line',
                data: tempLinesData[key]
            })
        }

        return {
            title: {
                text: '学习情况统计图'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: courseNames,
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: times
            },
            yAxis: {
                type: 'value'
            },
            series: finalLinesData
        }

    }


    return (
        <div className='board-box'>
            <ReactEcharts option={getOption()} />
        </div>
    )
}

export default Board;