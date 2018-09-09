import * as c3  from 'c3';

let chart = c3.generate({
    bindto: '#chart',
    data: {
        type: 'donut',
        columns: [
            ['良い感じ', 50],
            ['ピンとこない', 50]  
        ]
    },
    donut: {
        title: 'TypeScriptの印象は？'
    }
});