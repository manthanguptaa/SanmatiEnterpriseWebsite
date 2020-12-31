
document.getElementById('navbar').innerHTML = '<head>'+'<link rel="stylesheet" href="../css/nav.css">'+ '</head>' +'<nav class="navbar navbar-expand-lg navbar-light">' +
'<div class="container-fluid">' +
  '<a class="navbar-brand " href="#"><i class="fas fa-atom"></i>  Sanmati Enterprises</a>'+
  '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
    '<span class="navbar-toggler-icon"></span>' +
  '</button>' +
  '<div class="collapse navbar-collapse" id="navbarSupportedContent">' +
   '<ul class="navbar-nav ms-auto mb-2 mb-lg-0">' +
      '<li class="nav-item">'+
        '<a class="active nav-link" href="index.html">Home</a>'+
      '</li>'+
      '<li class="nav-item">'+
        '<a class="nav-link" href="about_us.html">About Us</a>'+
      '</li>'+
      '<li class="nav-item">'+
       '<a class="nav-link" href="contact_us.html">Contact Us</a>'+
      '</li>'+
      '<li class="nav-item">'+
        '<a class="nav-link" href="categories.html">Categories</a>'+
      '</li>'+
      
    '</ul>'+
    
  '</div>'+
'</div>'+
'</nav>';


$('nav li a').filter(function(){
  $('ul li a').removeClass('active');
  return this.href === location.href;
}).addClass('active');