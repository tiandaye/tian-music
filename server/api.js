// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const express = require('express');

/*tian start 2017/05/07*/
var http = require('http');
var data = require('../music-data.json');
// var musicData = data.musicData;

var apiRoutes = express.Router();

apiRoutes.get('/music-data', function (req, res) {
  res.json({
    errno: 0,
    musicData: data.musicData
  });
});

// 获取 One 的接口
apiRoutes.get('/one/:page?', function (req, res) {
  let page = +req.params.page || 0;
  let url = 'http://v3.wufazhuce.com:8000/api/onelist/idlist/?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android';
  let idList = '';
  let getIdList = new Promise((resolve, reject) => {
    http.get(url, response => {
      response.on('data', data => {
        idList += data;
      });
      response.on('end', () => {
        resolve(idList);
      });
    })
  });
  let getOne = function(id) {
    let result = '';
    let url = 'http://v3.wufazhuce.com:8000/api/onelist/' + id +'/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android';
    return new Promise((resolve, reject) => {
      http.get(url, response => {
        response.on('data', data => {
          result += data;
        });
        response.on('end', () => {
          resolve(result);
        })
      })
    });
  }
  getIdList.then(idList => JSON.parse(idList).data)
           .then(data => {
             return Promise.all( data.map((item) => {
               return getOne(item).then(data => JSON.parse(data));
             }))
           })
           .then(list => {
             list = JSON.parse(JSON.stringify(list));
             res.json(list[page]);
           })
})

apiRoutes.get('/search/:num/:name', (req, res) => {
  let num = req.params.num;
  let name = req.params.name;
  function search(n, keywords) {
    return new Promise((resolve, reject) => {
      let searchResult = '';
      let url = encodeURI('http://s.music.qq.com/fcgi-bin/music_search_new_platform?t=0&n='+ n +'&aggr=1&cr=1&loginUin=0&format=json&inCharset=GB2312&outCharset=utf-8&notice=0&platform=jqminiframe.json&needNewCode=0&p=1&catZhida=0&remoteplace=sizer.newclient.next_song&w='+ keywords);
      http.get(url, response => {
        response.on('data', data => {
          searchResult += data;
        });
        response.on('end', () => {
          resolve(searchResult);
        })
      })
    })
  }

  search(num, name)
    .then(searchResult => {
      res.json(JSON.parse(searchResult));
    })

});

apiRoutes.get('/hot', (req, res) => {
  let hotKeywords = ['歌手', '张杰', '赵雷', '李健', '林志炫', '张碧晨', '梁博', '周笔畅', '张靓颖', '陈奕迅', '周杰伦', '王力宏', 'TFBoys', '李玉刚', '魏晨', '薛之谦'];
  let rHot = new Array(6);
  for (let i = 0; i < rHot.length; i++) {
    let length = hotKeywords.length;
    let random = Math.floor(length * Math.random());
    rHot[i] = hotKeywords[random];
    hotKeywords.splice(random, 1);
  }
  res.json(rHot);

});

// app.use('/api', apiRoutes);
/*tian end 2017/05/07*/
module.exports = apiRoutes;