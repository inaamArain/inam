data=[
    {
        img:"PROFESSOR 1.jpg",
        name: "mark",
        designation:"head",
        detail:"he done a great a work in a field of education "
    },
    {
        img:"TEACHER 1 M.jpg",
        name: "anil",
        designation:"chairman",
        detail:"he done a great a work in a field of education "
    },
    {
        img:"TEACHER 3 M.jpg",
        name: "farzim",
        designation:"teacher",
        detail:"he done a great a work in a field of education "
    },
    {
        img:"teacher pp(1).jpg",
        name: "misbah",
        designation:"professor",
        detail:"he done a great a work in a field of education "
    }
    ,
    {
        img:"123.jpg",
        name: "najam",
        designation:"HOD",
        detail:"he done a great a work in a field of education "
    }
    ,
    {
        img:"654.jpg",
        name: "danial",
        designation:"ASSISTANT PROFESSOR",
        detail:"he done a great a work in a field of education "
    }
    

]




for(var i=0;i<data.length; i++){
document.getElementById("cards").innerHTML 
+=`
<div class="col-md-4 col-sm-6 col-lg-4">
<div class="box13 mt-5">
  <img class="pic-1" src="${data[i].img}">
  <div class="box-content text-center">
    
    <h3 class="title">${data[i].name}</h3>
    <span class="post">${data[i].designation}</span>
    <p class="text-white">${data[i].detail}  </p>
    
    <ul class="social">
      <li>
        <a href="#" class="text-center">
          <i class="fa-brands fa-facebook "></i>
        </a>
      </li>
      <li><a href="#" class="text-center"><i class="fa-brands fa-instagram-square"></i></a></li>
    </ul>
  </div>
</div>
</div>
`; 
}

