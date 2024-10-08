fetch('https://metaso.cn/api/session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      question:"如何获取elect",mode:"detail",engineType:"",scholarSearchDomain:"all"
    })
  }).then(res=>res.json()).then(r=>console.log(r))