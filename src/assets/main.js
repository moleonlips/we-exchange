// product image details handle
setTimeout(() => {
     const detailImages = document.querySelectorAll('.detail-img')
     const dots = document.querySelectorAll('.fa-circle')
     const prevBtn = document.querySelector('#prev-btn')
     const nextBtn = document.querySelector('#next-btn')

     if(detailImages.length > 0){
          detailImages.forEach((img, id) => {
               if(id === 0) {
                    img.classList.add('active')
                    dots[id].classList.add('active')
               }
          })

          dots.forEach((dot, index) => {
               dot.addEventListener('click', () => {
                    dots.forEach(item => item.classList.remove('active'))
                    detailImages.forEach(detailImage => detailImage.classList.remove('active'))
                    dots[index].classList.add('active')
                    detailImages[index].classList.add('active')
               })
          })
     }

     prevBtn.addEventListener('click', () => {
          changeImg(-1);
     })
     nextBtn.addEventListener('click', () => {
          changeImg(1);
     })

     function changeImg(x) {
          let arr = Array.from(detailImages)
          let activeImg = arr.filter(a => a.classList.contains('active'))[0]
          let index = arr.indexOf(activeImg)
          
          if(x === -1){
               if(index > 0) {
                    index--;
                    activeImg.classList.remove('active');
                    arr[index].classList.add('active');
               }
     
               else {
                    index = arr.length-1;
                    activeImg.classList.remove('active');
                    arr[index].classList.add('active');
               }
          }

          if(x === 1) {

               if(index < arr.length-1) {
                    index++;
                    activeImg.classList.remove('active');
                    arr[index].classList.add('active');
               }
     
               else {
                    index = 0;
                    activeImg.classList.remove('active');
                    arr[index].classList.add('active');
               }
          }

          Array.from(dots).forEach((a) => {
               a.classList.remove('active');
          })

          dots[index].classList.add('active');
     }
}, 2000);
// end product image details handle


setTimeout(() => {
     let txtInput = document.querySelectorAll('.txt-input');
     txtInput.forEach(item => {

          item.addEventListener('focus', (e) => {
               let ctnInput = e.target.parentNode;
               let lblInput = ctnInput.querySelector('.lbl-input')
               ctnInput.classList.add('active');
               lblInput.classList.add('active');
          })

          item.addEventListener('blur', (e) => {
               let ctnInput = e.target.parentNode;
               let lblInput = ctnInput.querySelector('.lbl-input')
               if (!item.value) {
                    lblInput.classList.remove('active');
               }
               ctnInput.classList.remove('active');
          })
     })
}, 100);


function viewMoreUserInfo() {
     let viewMoreContainer = document.querySelector('.view-more-container');
     viewMoreContainer.classList.toggle('block');

     viewMoreContainer.querySelector('.view-more-sections').addEventListener('click', (e) => {
          e.stopPropagation();
     })
}


; (() => {
     let i = 0;
     setInterval(() => {
          let slideItem = document.querySelectorAll('.slide-item');
          if (slideItem.length > 0) {
               slideItem.forEach(a => {
                    a.classList.remove('active');
               })
               i++;
               if (i < slideItem.length) {
                    slideItem[i].classList.add('active');
               }
               else {
                    i = 0;
                    slideItem[i].classList.add('active');
               }
          }
     }, 3682);
})()
