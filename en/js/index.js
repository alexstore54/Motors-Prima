import RenderContent from "./modules/RenderContent";
import DataCollector from "./modules/DataCollector";
import SendUserData from "./modules/SendData";
import Modal from "../js/modules/Components/ModalCoupon/ModalCoupon";
import Utils from "./modules/utils/utils";

import "toastify-js/src/toastify.css";



(function ($) {
    "use strict";  
    new WOW().init();

    //Render Content
    const bodyAppendModal = document.querySelector('body');
    
    RenderContent.renderCars('#deal-cars-container');
    RenderContent.renderBrands('#brands-container');
    RenderContent.renderComments('#comments__inner-container');
    
    bodyAppendModal.innerHTML += Modal();


    Utils.StartAll();
    



    // Collect and Send Data 
    
    const SubmitformBtns = Array.from(document.querySelectorAll('.submit-dres-form')); 
    const Forms = Array.from(document.querySelectorAll('.form'));
    let currentform;
    const downloadFileBtn = document.querySelector('[download]');


    SubmitformBtns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            currentform = Forms[index]
            DataCollector(Forms[index]);
        })
    });

    downloadFileBtn.addEventListener('click', () =>  SendUserData(currentform));


    //Show more comments

    const ReadMoreButtons = Array.from(document.querySelectorAll('.read-more-btn'));

    ReadMoreButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const parentContainer = this.closest('.testimonial-text-container');
            const userId = this.dataset.btnId;    
            Utils.ShowReadMore(parentContainer, userId);
        })
    })
})(jQuery);





