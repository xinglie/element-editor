window.ElementAdapter = {
    rootId: 'app',
    bindDataKeys: [{
        id: 1,
        name: '进水温度',
        dataKey: 'inTemp'
    }, {
        id: 2,
        name: '出水温度',
        dataKey: 'outTemp'
    }, {
        id: 3,
        name: '启动系统',
        dataKey: 'system'
    }, {
        id: 4,
        name: '关闭系统',
        dataKey: 'system'
    }, {
        id: 5,
        name: '温度报表',
        dataKey: 'tempReport'
    }, {
        id: 6,
        name: '测试报表',
        dataKey: 'r2Report'
    }],
    stage: {"elements":[{"id":"e_10","type":"image","props":{"width":256,"height":256,"tip":"左下房子","rotate":0,"src":"images/3.jpg","x":46,"y":523}},{"id":"e_11","type":"image","props":{"width":309,"height":209,"tip":"顶部房子","rotate":0,"src":"images/5.jpg","x":409,"y":14}},{"id":"e_12","type":"image","props":{"width":43,"height":449,"tip":"管道细","rotate":29,"src":"images/p1.png","x":451,"y":192}},{"id":"e_13","type":"image","props":{"width":975,"height":88,"tip":"管道粗","rotate":0,"src":"images/p2.png","x":311,"y":649}},{"id":"e_14","type":"image","props":{"width":256,"height":256,"tip":"右下灰房子","rotate":0,"src":"images/4.jpg","x":1221,"y":534}},{"id":"e_15","type":"ctrltext","props":{"color":"#707070","x":207,"y":111,"rotate":0,"textSize":14,"width":74,"height":25,"forceWidth":0,"backColor":"#ffffff","borderColor":"#000000","borderWidth":0,"tip":"动态文本","bindKey":2}},{"id":"e_16","type":"text","props":{"color":"#707070","x":103,"y":111,"rotate":0,"textSize":14,"forceWidth":0,"text":"当前出水温度：","tip":"文本"}},{"id":"e_17","type":"text","props":{"color":"#707070","x":103,"y":148,"rotate":0,"textSize":14,"forceWidth":0,"text":"当前进水温度：","tip":"文本"}},{"id":"e_18","type":"ctrltext","props":{"color":"#702525","x":207,"y":148,"rotate":0,"textSize":14,"width":74,"height":25,"forceWidth":0,"backColor":"#ffffff","borderColor":"#db3c3c","borderWidth":0,"tip":"动态文本","bindKey":1,"bindKeyValueList":[{"type":"3","value":"30","color":"#d42379","foreColor":"#1196db","backColor":"#afcd50"},{"type":"3","value":"40","color":"#1328a1","foreColor":"#d3217b","backColor":"#0061b2"},{"type":"2","value":"39","color":"#f6ef37","foreColor":"#e89abe","backColor":"#112079"}],"calc":"#/10+20","formatter":"#.温度"}},{"id":"e_19","type":"text","props":{"color":"#707070","x":299,"y":111,"rotate":0,"textSize":14,"forceWidth":0,"text":"C","tip":"文本"}},{"id":"e_20","type":"text","props":{"color":"#707070","x":299,"y":148,"rotate":0,"textSize":14,"forceWidth":0,"text":"C","tip":"文本"}},{"id":"e_21","type":"ctrlbutton","props":{"width":100,"height":81,"borderColor":"#000000","backColor":"#afcd50","foreColor":"#000000","borderWidth":0,"text":"启动系统","tip":"控制按钮","textSize":20,"borderRadius":4,"rotate":0,"image":"","bindKey":3,"bindKeyWriteType":"1","bindKeyWrite":"2","writeConfirm":"请输入密码：","x":103,"y":195}},{"id":"e_22","type":"ctrlbutton","props":{"width":100,"height":81,"borderColor":"#000000","backColor":"#d81e06","foreColor":"#ffffff","borderWidth":0,"text":"关闭系统","tip":"控制按钮","textSize":20,"borderRadius":4,"rotate":0,"image":"","bindKey":3,"bindKeyWriteType":"0","bindKeyWrite":"1","x":217,"y":195,"writeConfirm":"确认吗"}},{"id":"e_23","type":"ctrlimage","props":{"width":200,"height":200,"tip":"动态图片","rotate":0,"bindKey":1,"bindKeyValueList":[{"type":"3","value":"30","image":"images/34369.png"},{"type":"3","value":"40","image":"images/2.gif"},{"type":"2","value":"39","image":"images/32320.png"}],"x":473,"y":307}},{"id":"e_24","type":"ctrlmeter","props":{"radius":140,"tip":"仪表盘","rotate":0,"dialWidth":30,"dialColor":"#17abe3","ruleColor":"#ffffff","ruleTextColor":"#000000","pointerColor":"#17abe3","startAngle":145,"endAngle":395,"startNumber":0,"endNumber":100,"ruleTextSize":10,"topText":"水温","topTextSize":14,"topTextColor":"#515151","topTextOffsetX":0,"topTextOffsetY":0,"bottomText":"进水温度监控","bottomTextSize":20,"bottomTextColor":"#515151","bottomTextOffsetX":0,"bottomTextOffsetY":0,"bindKey":2,"calc":"#/10","x":682,"y":33,"centerColor":"#d6204b","showNumber":false,"numberSize":14,"numberColor":"#515151","numberOffsetX":0,"numberOffsetY":0,"numberSpacing":0,"numberBackColor":"#ffffff","numberFormatter":""}},{"id":"e_25","type":"ctrlmeter","props":{"radius":110,"tip":"仪表盘","rotate":0,"dialWidth":22,"dialColor":"#a686ba","ruleColor":"#ffffff","ruleTextColor":"#0061b0","pointerColor":"#7cba59","centerColor":"#0061b0","startAngle":145,"endAngle":395,"startNumber":0,"endNumber":100,"ruleTextSize":10,"ruleTextDecimal":0,"topText":"温度","topTextSize":14,"topTextColor":"#594d9c","topTextOffsetX":0,"topTextOffsetY":4,"topTextSpacing":8,"bottomText":"出水量监控","bottomTextSize":20,"bottomTextColor":"#1196db","bottomTextOffsetX":0,"bottomTextOffsetY":0,"bottomTextSpacing":2,"ruleLineWidth":1,"bindKey":1,"calc":"","showNumber":true,"numberSize":14,"numberColor":"#515151","numberOffsetX":0,"numberOffsetY":5,"numberSpacing":3,"numberBackColor":"#ffffff","numberFormatter":"#立方","x":713,"y":335}},{"id":"e_4736","type":"ctrlchart","props":{"width":623,"height":465,"tip":"图表","rotate":0,"backColor":"#ffffff","title":"温度监控图表","bindKey":5,"xAxis":"date","yAxis":[{"key":"value","tip":"v1","color":"#c23531"},{"key":"v2","tip":"v2","color":"#2f4554"},{"key":"v3","tip":"v3","color":"#61a0a8"},{"key":"v4","tip":"v4","color":"#d48265"}],"x":954,"y":27}}],"size":[1600,800],"bgColor":"#eeeeee","bgImage":"","bgRepeat":"repeat"},
    apiData: {
        inTemp: 20,
        outTemp: 50,
        system: 1,
        tempReport: [{
            date: '2018-02-20',
            value: 200,
            v2: (Math.random() * 1000) | 0,
            v3: (Math.random() * 1000) | 0,
            v4: (Math.random() * 1000) | 0
        }, {
            date: '2018-02-21',
            value: 300,
            v2: (Math.random() * 1000) | 0,
            v3: (Math.random() * 1000) | 0,
            v4: (Math.random() * 1000) | 0
        }, {
            date: '2018-02-22',
            value: 100,
            v2: (Math.random() * 1000) | 0,
            v3: (Math.random() * 1000) | 0,
            v4: (Math.random() * 1000) | 0
        }, {
            date: '2018-02-23',
            value: 220,
            v2: (Math.random() * 1000) | 0,
            v3: (Math.random() * 1000) | 0,
            v4: (Math.random() * 1000) | 0
        }, {
            date: '2018-02-24',
            value: 300,
            v2: (Math.random() * 1000) | 0,
            v3: (Math.random() * 1000) | 0,
            v4: (Math.random() * 1000) | 0
        }, {
            date: '2018-02-25',
            value: 100,
            v2: (Math.random() * 1000) | 0,
            v3: (Math.random() * 1000) | 0,
            v4: (Math.random() * 1000) | 0
        }, {
            date: '2018-02-26',
            value: 300,
            v2: (Math.random() * 1000) | 0,
            v3: (Math.random() * 1000) | 0,
            v4: (Math.random() * 1000) | 0
        }, {
            date: '2018-02-27',
            value: 100,
            v2: (Math.random() * 1000) | 0,
            v3: (Math.random() * 1000) | 0,
            v4: (Math.random() * 1000) | 0
        }]
    },
    imageRoot: './resources/',
    imageGallery: [
        {
            "title": "背景",
            "list": [
                {
                    "title": "a",
                    "src": "images/0505.jpg"
                },
                {
                    "title": "b",
                    "src": "images/0506.jpeg"
                },
                {
                    "title": "",
                    "src": "images/1.jpeg"
                },
                {
                    "title": "",
                    "src": "images/2.gif"
                }
            ]
        },
        {
            "title": "房子",
            "list": [
                {
                    "title": "",
                    "src": "images/3.jpg"
                },
                {
                    "title": "",
                    "src": "images/4.jpg"
                },
                {
                    "title": "",
                    "src": "images/5.jpg"
                }
            ]
        },
        {
            "title": "管道",
            "list": [
                {
                    "title": "",
                    "src": "images/p1.png"
                },
                {
                    "title": "",
                    "src": "images/p2.png"
                },
                {
                    "title": "",
                    "src": "images/p3.png"
                },
                {
                    "title": "",
                    "src": "images/p4.png"
                },
                {
                    "title": "",
                    "src": "images/p5.png"
                },
                {
                    "title": "",
                    "src": "images/p5.png"
                },
                {
                    "title": "",
                    "src": "images/p7.png"
                },
                {
                    "title": "",
                    "src": "images/p8.png"
                }
            ]
        },
        {
            "title": "家具",
            "list": [
                {
                    "title": "沙发",
                    "src": "images/34404.png"
                },
                {
                    "title": "沙发",
                    "src": "images/34369.png"
                }
            ]
        },
        {
            "title": "自然",
            "list": [
                {
                    "title": "",
                    "src": "images/16762.png"
                },
                {
                    "title": "",
                    "src": "images/17591.png"
                }
            ]
        },
        {
            "title": "衣服",
            "list": [
                {
                    "title": "",
                    "src": "images/32309.png"
                },
                {
                    "title": "",
                    "src": "images/32320.png"
                },
                {
                    "title": "",
                    "src": "images/32315.png"
                }
            ]
        }
    ],
    whenEditorSave: function (stage) {
        console.log(stage);
        console.log(JSON.stringify(stage));
    },
    whenCtrlElementExecute: function (e) {
        console.log(e);
        // $.ajax({
        //     url:'/api/sys/restart',

        // });
        setTimeout(function () {
            e.resolve();
        }, 3000);
    }
};
//--start

window.ElementSystem.init(ElementAdapter);

if (window.ElementSystem.update) {
    let i = 0;
    setInterval(function () {
        let d = ElementAdapter.apiData;
        d.inTemp++;
        d.outTemp++;
        d.tempReport.shift();
        d.tempReport.push({
            date: '2018-2-3' + (i++),
            value: (Math.random() * 300) | 0,
            v2: (Math.random() * 300) | 0,
            v3: (Math.random() * 300) | 0,
            v4: (Math.random() * 300) | 0
        });
        window.ElementSystem.update(d);
    }, 2000);
}