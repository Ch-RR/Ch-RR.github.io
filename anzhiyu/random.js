var posts=["2025/01/24/test/","2025/09/29/压缩感知(少就是多)/","2025/02/07/旋量代数与李群、李代数/","2025/08/31/维纳滤波器/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };