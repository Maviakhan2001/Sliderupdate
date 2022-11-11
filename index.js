var indexValue = 1;
showImage(indexValue);

function btnSlide(e){
    showImage(indexValue = e);
}

function showImage(e) {
    var i;
    const img = document.querySelectorAll('a');
    const slider = document.querySelectorAll('.btn-slider span');
    const content = document.querySelector('.content');
    
    if(e > img.length){
        indexValue = 1;
    }
    
    if(e < 1){
        indexValue = img.length;
    }
    
    for(i = 0; i < img.length; i++){
        img[i].style.border = "2px transparent"
    }
    
    // content.scrollBy(1000, 0)
    img[indexValue-1].style.border = "2px solid red";
    // img[indexValue-1].style.margin = "0rem 10rem/"

    // document.querySelectorAll('.')

}