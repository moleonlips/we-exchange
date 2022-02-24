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
}, 1);


function viewMore() {
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
