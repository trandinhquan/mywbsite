
// chức năng tp
function zoom_img(item){
    item.classList.add('zoom');
}
function zoom_img_out(item){
    item.classList.remove('zoom');
}
function zoom_icon(item){
    item.classList.add('zoom_icon');  
}
function zoom_icon_out(item){
    item.classList.remove('zoom_icon');
    item.style.transition = 'all 0.5s'
}
// chức năng lb
function remove_b(item){
item.classList.remove('boder');
var x =item.getElementsByTagName('div')
    for(var i =0;i<x.length;i++)
    {
        if(x[i].className.toLocaleLowerCase() == 'add_rows'){
            x[i].style.visibility = 'hidden';
            x[i].style.background = 'white';
            x[i].style.opacity = '0';
            x[i].style.top = '';
        }
    }
}
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
//  chức năng hđ
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
// chức năng cuon
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// chức năng thêm
function add_b(item){
    item.classList.add('boder');
    var x =item.getElementsByTagName('div')
    for(var i =0;i<x.length;i++)
    {
        if(x[i].className.toLocaleLowerCase() == 'add_rows'){
            x[i].style.background = '#f2f2f2';
            x[i].style.top = '110%';
            x[i].style.opacity = '1';
            x[i].style.visibility = 'visible';
        }
    }
}
