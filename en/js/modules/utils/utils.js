
export class Utils {

    constructor({UserData}) {
        this.CommentsData = UserData;
    }

    AnchorLinks() {
        function scrollToSection(e) {

            e.preventDefault();  // Предотвращаем стандартное действие ссылки
    
            arrOflinks.forEach(link => link.classList.remove('active'));
    
            e.target.classList.add('active');
            const targetId = e.target.getAttribute('data-scroll-to'); // Получаем ID целевой секции из атрибута href ссылки
            const targetSection = document.querySelector(targetId); // Находим целевую секцию по ID
            const headerHeight = document.querySelector('.navbar').offsetHeight; // Получаем высоту header'а
            const targetOffset = targetSection.offsetTop - headerHeight; // Вычисляем вертикальное смещение до секции с учетом высоты header'а
           
            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth' // Плавная прокрутка
            });
        }
    
        
        const arrOflinks = document.querySelectorAll('[data-scroll-to]');
        arrOflinks.forEach(link => {
            link.addEventListener('click', scrollToSection);
        });
    }

    rotateAnimation() {
        const servicesBlock = document.querySelector('#service_img-container');
        let currentDegree = 0;

        function rotateBlock() {
            currentDegree += 60; 
            servicesBlock.style.transform = `rotate(${currentDegree}deg)`;
            
            if (currentDegree >= 360) {   
                setTimeout(function() {
                    servicesBlock.classList.remove('transition');
                    currentDegree = -60;
                    rotateBlock();
                }, 1900); 
            }
            };

            setInterval(function(){ 
                        servicesBlock.classList.add('transition');
                        rotateBlock()
            
            }, 6000);
        }

        FactsCounter() {
            $('[data-toggle="counter-up"]').counterUp({
                delay: 10,
                time: 3000
            });
        }

        StickyNavbar() {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 300) {
                    $('.sticky-top').css('top', '0px');
                } else {
                    $('.sticky-top').css('top', '-100px');
                }
            });
        }

        Spinner() {
            var spinner = function () {
                setTimeout(function () {
                    if ($('#spinner').length > 0) {
                        $('#spinner').removeClass('show');
                    }
                }, 1);
            };
            spinner();
        }
        BackToTop() {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 200) {
                    $('.back-to-top').fadeIn('slow');
                } else {
                    $('.back-to-top').fadeOut('slow');
                }
            });
            $('.back-to-top').click(function () {
                $('html, body').animate({scrollTop: 0}, 100, 'easeInOutExpo');
                return false;
            });
        }
    

        CarouselConfig(selector, itemsCounter, autoSpeed) {

            $(selector).owlCarousel({
                autoplay: true,
                smartSpeed: autoSpeed,
                center: true,
                margin: 25,
                dots: true,
                loop: true,
                nav : false,
                responsive: {
                    0:{
                        items: itemsCounter[2]
                    },
                    768:{
                        items: itemsCounter[1]
                    },
                    992:{
                        items: itemsCounter[0]
                    }
                }
            });
        }

    ShowReadMore (ContainerComment, id) {
        const foundObject = this.CommentsData.find(obj => obj.id === Number(id));
        const paragraph = ContainerComment.querySelector('p'),
              HideBtn = ContainerComment.querySelector('button');

        if(HideBtn.classList.contains('hide')){
            paragraph.innerHTML = foundObject.comment.substring(0, 60);
            HideBtn.classList.remove('hide');
            HideBtn.innerHTML = 'Read more'; 
        }else {
            paragraph.innerHTML = foundObject.comment;
            HideBtn.classList.add('hide');
            HideBtn.innerHTML = 'Hide'; 
        }
    }


    StartAll() {
        this.Spinner();
        this.AnchorLinks();
        this.BackToTop();
        this.FactsCounter();
        this.rotateAnimation();
        this.CarouselConfig(".testimonial-carousel", [3, 2 ,1], 1000);
        this.CarouselConfig("#brands-container", [5, 3, 2], 500);
        // this.CarouselConfig("#deal-cars-container", [3, 2, 1], 1000);
    }
}


export default new Utils(window.AppData);


