//菜单配置
const _menu = new mSlider({
    dom: ".nav-menu",
    direction: "right",
    distance: "20%",
});

//图表加载配置
const loading = {
    text: '加载中...',
    color: '#c23531',
    textColor: '#fff',
    maskColor: 'rgba(51, 51, 51, 0.1)',
    zlevel: 0
};

resetChartsHeight();
init();
setInterval(getTime, 1000);

//重置图表高度
function resetChartsHeight() {
    $('.charts').css("height", ($('.content').height() / 2) + "px");
    $('.charts>div').css("height", ($('.content').height() / 2) + "px");
}

//初始化
function init() {
    $('.nav-menu').removeClass("layui-hide");
    getTime();
    setTheme();
}

//返回实时时间
function getTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    second = second < 10 ? '0' + second : second;
    var time = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    $('.nav-time span:eq(2)').html("当前时间：" + time);
}

let charts1 = echarts.init(document.getElementById('charts1'));
let charts2 = echarts.init(document.getElementById('charts2'));
let charts3 = echarts.init(document.getElementById('charts3'));
let charts4 = echarts.init(document.getElementById('charts4'));
let charts5 = echarts.init(document.getElementById('charts5'));
let charts6 = echarts.init(document.getElementById('charts6'));
charts1.showLoading(loading);
charts2.showLoading(loading);
charts3.showLoading(loading);
charts4.showLoading(loading);
charts5.showLoading(loading);
charts6.showLoading(loading);

let charts1_option = {
    backgroundColor: '',
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};
charts1.setOption(charts1_option);
charts1.hideLoading();

let labelRight = {
    normal: {
        position: 'right'
    }
};
let charts2_option = {
    backgroundColor: '',
    title: {

    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: 80,
        bottom: 30
    },
    xAxis: {
        type: 'value',
        position: 'top',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
    },
    yAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: ['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
    },
    series: [{
        name: '生活费',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                formatter: '{b}'
            }
        },
        data: [{
                value: -0.07,
                label: labelRight
            },
            {
                value: -0.09,
                label: labelRight
            },
            0.2, 0.44,
            {
                value: -0.23,
                label: labelRight
            },
            0.08,
            {
                value: -0.17,
                label: labelRight
            },
            0.47,
            {
                value: -0.36,
                label: labelRight
            },
            0.18
        ]
    }]
};
charts2.setOption(charts2_option);
charts2.hideLoading();

let charts3_option = {
    backgroundColor: '',

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [{
                value: 335,
                name: '直接访问'
            },
            {
                value: 310,
                name: '邮件营销'
            },
            {
                value: 274,
                name: '联盟广告'
            },
            {
                value: 235,
                name: '视频广告'
            },
            {
                value: 400,
                name: '搜索引擎'
            }
        ].sort(function (a, b) {
            return a.value - b.value;
        }),
        roseType: 'radius',
        label: {
            normal: {
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            }
        },
        itemStyle: {
            normal: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },

        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
            return Math.random() * 200;
        }
    }]
};
charts3.setOption(charts3_option);
charts3.hideLoading();

let charts4_option = option = {
    backgroundColor: '',
    xAxis: {
        scale: true
    },
    yAxis: {
        scale: true
    },
    series: [{
        type: 'effectScatter',
        symbolSize: 20,
        data: [
            [172.7, 105.2],
            [153.4, 42]
        ]
    }, {
        type: 'scatter',
        data: [
            [161.2, 51.6],
            [167.5, 59.0],
            [159.5, 49.2],
            [157.0, 63.0],
            [155.8, 53.6],
            [170.0, 59.0],
            [159.1, 47.6],
            [166.0, 69.8],
            [176.2, 66.8],
            [160.2, 75.2],
            [172.5, 55.2],
            [170.9, 54.2],
            [172.9, 62.5],
            [153.4, 42.0],
            [160.0, 50.0],
            [147.2, 49.8],
            [168.2, 49.2],
            [175.0, 73.2],
            [157.0, 47.8],
            [167.6, 68.8],
            [159.5, 50.6],
            [175.0, 82.5],
            [166.8, 57.2],
            [176.5, 87.8],
            [170.2, 72.8],
            [174.0, 54.5],
            [173.0, 59.8],
            [179.9, 67.3],
            [170.5, 67.8],
            [160.0, 47.0],
            [154.4, 46.2],
            [162.0, 55.0],
            [176.5, 83.0],
            [160.0, 54.4],
            [152.0, 45.8],
            [162.1, 53.6],
            [170.0, 73.2],
            [160.2, 52.1],
            [161.3, 67.9],
            [166.4, 56.6],
            [168.9, 62.3],
            [163.8, 58.5],
            [167.6, 54.5],
            [160.0, 50.2],
            [161.3, 60.3],
            [167.6, 58.3],
            [165.1, 56.2],
            [160.0, 50.2],
            [170.0, 72.9],
            [157.5, 59.8],
            [167.6, 61.0],
            [160.7, 69.1],
            [163.2, 55.9],
            [152.4, 46.5],
            [157.5, 54.3],
            [168.3, 54.8],
            [180.3, 60.7],
            [165.5, 60.0],
            [165.0, 62.0],
            [164.5, 60.3],
            [156.0, 52.7],
            [160.0, 74.3],
            [163.0, 62.0],
            [165.7, 73.1],
            [161.0, 80.0],
            [162.0, 54.7],
            [166.0, 53.2],
            [174.0, 75.7],
            [172.7, 61.1],
            [167.6, 55.7],
            [151.1, 48.7],
            [164.5, 52.3],
            [163.5, 50.0],
            [152.0, 59.3],
            [169.0, 62.5],
            [164.0, 55.7],
            [161.2, 54.8],
            [155.0, 45.9],
            [170.0, 70.6],
            [176.2, 67.2],
            [170.0, 69.4],
            [162.5, 58.2],
            [170.3, 64.8],
            [164.1, 71.6],
            [169.5, 52.8],
            [163.2, 59.8],
            [154.5, 49.0],
            [159.8, 50.0],
            [173.2, 69.2],
            [170.0, 55.9],
            [161.4, 63.4],
            [169.0, 58.2],
            [166.2, 58.6],
            [159.4, 45.7],
            [162.5, 52.2],
            [159.0, 48.6],
            [162.8, 57.8],
            [159.0, 55.6],
            [179.8, 66.8],
            [162.9, 59.4],
            [161.0, 53.6],
            [151.1, 73.2],
            [168.2, 53.4],
            [168.9, 69.0],
            [173.2, 58.4],
            [171.8, 56.2],
            [178.0, 70.6],
            [164.3, 59.8],
            [163.0, 72.0],
            [168.5, 65.2],
            [166.8, 56.6],
            [172.7, 105.2],
            [163.5, 51.8],
            [169.4, 63.4],
            [167.8, 59.0],
            [159.5, 47.6],
            [167.6, 63.0],
            [161.2, 55.2],
            [160.0, 45.0],
            [163.2, 54.0],
            [162.2, 50.2],
            [161.3, 60.2],
            [149.5, 44.8],
            [157.5, 58.8],
            [163.2, 56.4],
            [172.7, 62.0],
            [155.0, 49.2],
            [156.5, 67.2],
            [164.0, 53.8],
            [160.9, 54.4],
            [162.8, 58.0],
            [167.0, 59.8],
            [160.0, 54.8],
            [160.0, 43.2],
            [168.9, 60.5],
            [158.2, 46.4],
            [156.0, 64.4],
            [160.0, 48.8],
            [167.1, 62.2],
            [158.0, 55.5],
            [167.6, 57.8],
            [156.0, 54.6],
            [162.1, 59.2],
            [173.4, 52.7],
            [159.8, 53.2],
            [170.5, 64.5],
            [159.2, 51.8],
            [157.5, 56.0],
            [161.3, 63.6],
            [162.6, 63.2],
            [160.0, 59.5],
            [168.9, 56.8],
            [165.1, 64.1],
            [162.6, 50.0],
            [165.1, 72.3],
            [166.4, 55.0],
            [160.0, 55.9],
            [152.4, 60.4],
            [170.2, 69.1],
            [162.6, 84.5],
            [170.2, 55.9],
            [158.8, 55.5],
            [172.7, 69.5],
            [167.6, 76.4],
            [162.6, 61.4],
            [167.6, 65.9],
            [156.2, 58.6],
            [175.2, 66.8],
            [172.1, 56.6],
            [162.6, 58.6],
            [160.0, 55.9],
            [165.1, 59.1],
            [182.9, 81.8],
            [166.4, 70.7],
            [165.1, 56.8],
            [177.8, 60.0],
            [165.1, 58.2],
            [175.3, 72.7],
            [154.9, 54.1],
            [158.8, 49.1],
            [172.7, 75.9],
            [168.9, 55.0],
            [161.3, 57.3],
            [167.6, 55.0],
            [165.1, 65.5],
            [175.3, 65.5],
            [157.5, 48.6],
            [163.8, 58.6],
            [167.6, 63.6],
            [165.1, 55.2],
            [165.1, 62.7],
            [168.9, 56.6],
            [162.6, 53.9],
            [164.5, 63.2],
            [176.5, 73.6],
            [168.9, 62.0],
            [175.3, 63.6],
            [159.4, 53.2],
            [160.0, 53.4],
            [170.2, 55.0],
            [162.6, 70.5],
            [167.6, 54.5],
            [162.6, 54.5],
            [160.7, 55.9],
            [160.0, 59.0],
            [157.5, 63.6],
            [162.6, 54.5],
            [152.4, 47.3],
            [170.2, 67.7],
            [165.1, 80.9],
            [172.7, 70.5],
            [165.1, 60.9],
            [170.2, 63.6],
            [170.2, 54.5],
            [170.2, 59.1],
            [161.3, 70.5],
            [167.6, 52.7],
            [167.6, 62.7],
            [165.1, 86.3],
            [162.6, 66.4],
            [152.4, 67.3],
            [168.9, 63.0],
            [170.2, 73.6],
            [175.2, 62.3],
            [175.2, 57.7],
            [160.0, 55.4],
            [165.1, 104.1],
            [174.0, 55.5],
            [170.2, 77.3],
            [160.0, 80.5],
            [167.6, 64.5],
            [167.6, 72.3],
            [167.6, 61.4],
            [154.9, 58.2],
            [162.6, 81.8],
            [175.3, 63.6],
            [171.4, 53.4],
            [157.5, 54.5],
            [165.1, 53.6],
            [160.0, 60.0],
            [174.0, 73.6],
            [162.6, 61.4],
            [174.0, 55.5],
            [162.6, 63.6],
            [161.3, 60.9],
            [156.2, 60.0],
            [149.9, 46.8],
            [169.5, 57.3],
            [160.0, 64.1],
            [175.3, 63.6],
            [169.5, 67.3],
            [160.0, 75.5],
            [172.7, 68.2],
            [162.6, 61.4],
            [157.5, 76.8],
            [176.5, 71.8],
            [164.4, 55.5],
            [160.7, 48.6],
            [174.0, 66.4],
            [163.8, 67.3]
        ],
    }]
};
charts4.setOption(charts4_option);
charts4.hideLoading();

//切换主题
$('.theme a').click(function () {
    let theme = $(this).attr('title');
    if (theme == getCookie('.AspNetCore.Theme')) {
        return false;
    }
    addCookie('.AspNetCore.Theme', theme);
    setTheme();
});
//菜单点击事件
$('.nav-time span:eq(0)').click(function () {
    _menu.open();
});
//监听窗口变化
window.addEventListener("resize", function () {
    resetChartsHeight();
    charts1.resize();
    charts2.resize();
    charts3.resize();
    charts4.resize();
    charts5.resize();
    charts6.resize();
});

//添加cookie
function addCookie(name, value) {
    const day = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
//获取cookie
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else return null;
}
//设置主题
function setTheme() {
    let theme = getCookie('.AspNetCore.Theme') || 'dark';
    
    console.log(theme);
}