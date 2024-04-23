class RenderContent {

    constructor({CarsData, UserData, BrandCars}) {
        this.CarsData = CarsData;
        this.UserData = UserData;
        this.BrandCars = BrandCars;
    }
    

    renderCars (selector) {
        const data = this.CarsData;

        const CarsContainer = document.querySelector(selector);

        CarsContainer.innerHTML = null;
        CarsContainer.innerHTML += `${data.map(car => {
            return `
            <div class="testimonial-item text-center">
                <div class="car-img-container">
                    <img class="" src="${car.imgSrc}" >
                </div>
                
                <div class="testimonial-text bg-light text-center p-4">
                        <p class="mb-0">${car.description}</p>
                </div>
                <h6 class="my-2">${car.year}</h5>
                <div class="my-2">${car.price}</div>
                </div>
                `
        }).join('')}`;
    }

    renderComments(selector) {
        const data = this.UserData;

        const CommentsContainer = document.querySelector(selector);

        CommentsContainer.innerHTML = null;
        CommentsContainer.innerHTML += `${data.map(client => {
            return `
            <div class="testimonial-item testimonial-item-comments text-center">
                    ${client.linkedin ? `

                    <a href="${client.linkedin}" target="_blank" class="item-comments-img-container mb-3">
                            <img class="bg-light mx-auto item-comments-img" src="${client.imgSrc}" style="width: 200px; height: 200px;">  
                    </a>` : 
                    `
                    <div class="d-inline-block mb-3">
                        <img class="bg-light mx-auto item-comments-img" src="${client.imgSrc}" style="width: 200px; height: 200px;">  
                    </div>
                        
                    `
                    }
                    
                    <h5 class="mb-0">${client.name}</h5>
                    <p>${client.type}</p>
                    <div style="transition: all .3s ease;" data-user-id="${client.id}" class="testimonial-text testimonial-text-container bg-light p-4">
                        <p class="mb-0">${client.comment.substring(0, 60)}...</p>
                        <button class="read-more-btn" data-btn-id="${client.id}" type="button">Read more</button>
                    </div>
            </div>
                `
        }).join('')}`;
    } 

    renderBrands(selector) {
        const data = this.BrandCars;

        const BrandsContainer = document.querySelector(selector);

        BrandsContainer.innerHTML = null;
        BrandsContainer.innerHTML += `${data.map(brand => {
            return `
            <div class="testimonial-item text-center">
                    <img class="p-2  m-3" src="${brand.imgSrc}" style="width: 200px;">
            </div>
                `
        }).join('')}`;
    }
    
}


export default new RenderContent(window.AppData);