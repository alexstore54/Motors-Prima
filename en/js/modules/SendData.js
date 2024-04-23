import Toast from "./Components/Toast/Toast";

const {SERVER_URL} = window.AppConfig;

export default function SendUserData(form) {      
    const modalContainer = document.querySelector('#StepByStep');
    const closeModalBtn = modalContainer.querySelector('[aria-label="Close"]');     

    modalContainer.removeAttribute('data-bs-backdrop');
    modalContainer.removeAttribute('data-bs-keyboard');
    closeModalBtn.setAttribute('data-bs-dismiss', 'modal');



    const UserData = localStorage.getItem('user_data');

    if(UserData && UserData.length > 5){
       
                fetch(SERVER_URL, {
                    method: "POST",
                    body: UserData, 
                        headers: {
                                'Accept': 'application/json'
                        }
                }).then(response => {
                    console.log(response)
                if (response.ok) {
                        Toast("Success", "green");   
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            
                            data["errors"].forEach(error => Toast(error.message, 'red'))
                    
                        } else {
                            console.log('Error');
                        }
                    })
                }
                }).catch(error => {
                        Toast('Network Error'+ error, 'red');
                }).finally(res => {
                        localStorage.removeItem("user_data");
                        form.reset();
                });

                return
        }
            
        Toast("Empty form", "red");
}


