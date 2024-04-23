import Toastify from 'toastify-js';


export default function Toast(message, color) {
    
    Toastify({
        text: message,
        duration: 4000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: color,
          "text-transform": "uppercase",
        },
        onClick: function(){} // Callback after click
      }).showToast();
      

}