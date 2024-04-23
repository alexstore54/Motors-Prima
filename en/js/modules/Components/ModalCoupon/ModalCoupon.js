"use strict";

import * as styles from './modalcoupon.module.css';
 
export default function () {


    
    return `
      <div class="modal fade" id="StepByStep"
           data-bs-backdrop="static" 
           data-bs-keyboard="false" 
           tabindex="-1" 
           aria-labelledby="staticBackdropLabel"
           aria-hidden="true"> 

          <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                    <div class="modal-header ${styles.headerbgcolor} justify-content-center py-2">
                        <h5 class="modal-title" id="staticBackdropLabel">UP TO -15% FOR SERVICE</h5>
                        <button type="button" class="btn-close" aria-label="Close"></button>
                    </div>

                    <div class="modal-body position-relative ${styles.popup_body_bg} pb-5">
                              
                            <a href="file/promocode.zip" download>
                                <button type="button" class="btn ${styles.download_button} p-3">Click to Download</button>
                            </a>
                             
                              <div class="${styles.img_body_container} p-5"> 
                                    <img src="img/step-by-step/Step-by-step.v4.png" >
                              </div>
                    </div>
                </div>

          </div>
    </div>
      `;

}