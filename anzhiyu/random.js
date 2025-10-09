var posts=["2025/01/24/test/","2025/09/29/压缩感知(少就是多)/","2025/10/09/高尔顿板是正态分布？NO。近似罢了/","2025/02/07/旋量代数与李群、李代数/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };