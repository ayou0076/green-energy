    // Load your images on page-load
    function preloader() {
        const imagesPaths = [
           "./img/img-1.jpeg",
           "./img/img-2.jpeg",
           "./img/img-3.jpeg"
        ];
        const images = [];
        for (let i = 0; i < imagesPaths.length; i++) {
            images[i] = new Image();
            images[i].src = imagesPaths[i];
        }

        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);
    
    
    /* 
    Get all buttons in a NODE LIST of buttons (array like structure) */

    const nodeList = document.querySelectorAll('.content-button');
    
    /* 
    Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */
    const resourceObject = [
        {
            headingContent: "Solar Energy",
            imgUrl: "./img/se.jpeg",
            imgAlt: 'Solar Panels',
            bodyText: "Solar is a clean source of energy which comes directly from the sun. Stars, in general, produce an unimaginable amount of energy via nuclear fusion— the process by which smaller atoms are fused together by heat and pressure to create heavier atoms—with a whole lot of energy emitted in the process."
        },
        {
            headingContent: "Hydroelectric Energy",
            imgUrl: "./img/he.jpeg",
            imgAlt: 'Water Falls Generators',
            bodyText: "This is best achieved by forcing water to flow through a narrow path, thereby increasing its energy per square meter. This is commonly achieved by storing water in a reservoir or dam and selectively purging the water by opening an intake."
        },
        {
            headingContent: "Biogas",
            imgUrl: "./img/bg.jpeg",
            imgAlt: 'Waste Facility',
            imgAlt: 'Waste Facility',
            bodyText: "The beauty of biogas, if it can be described as such, is that it is not only a green energy source but that it makes use of our waste products. Produced as a byproduct when organic matter decomposes, biogas comes from materials such as sewage, food, agricultural waste, and manure."
        }
    ];

    /* 
    Get the reference to your HTML-container
    that will be dynamically loaded from the resource-object. */
    const rowContent = document.querySelector('.row.content');
    /* 
    The first button in a NODE LIST of buttons will initially 
    have the id: active-button - this will uniquely style 
    the active button (CSS rule). 
    
    The first content from the
    resource-object will be loaded on the page load:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>` */
    
    /* 
    Start your handleSelection function here. */ 
    function handleSelection(e){
        
        /* 
        Remove the id active-button from the element that
        contains it prior to the click-event. 

        This will require the loop throught the NODE LIST of buttons. 
        Inside the loop, use conditional and the element object method
        hasAttribute() to check if the current button in the loop containes the id.
        If it does, use element-object property removeAttribute()
        to remove the id. */

        for (let btn of nodeList){
            if(btn.hasAttribute('id')){
                btn.removeAttribute('id');
            }
        }

        /*
        Use the element-object method setAttribute() to set the id active-button 
        to the currently clicked button. */
        e.target.setAttribute('id', 'active-button');

        /* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the backticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection) */ 
        // console.log(e.target.className);
        if (e.target.className.includes("btn-1")) {
            rowContent.innerHTML = `<h2 class="col-xs-12">${resourceObject[0].headingContent}</h2>
                <img class="col-xs-12 col-sm-12 col-md-6 img-responsive" src="${resourceObject[0].imgUrl}" alt="${resourceObject[0].imgAlt}">
                <p class="col-xs-12 col-sm-12 col-md-6">${resourceObject[0].bodyText}</p>`;
        }else if(e.target.className.includes("btn-2")){
            rowContent.innerHTML = `<h2 class="col-xs-12">${resourceObject[1].headingContent}</h2>
                <img class="col-xs-12 col-sm-12 col-md-6 img-responsive" src="${resourceObject[1].imgUrl}" alt="${resourceObject[1].imgAlt}">
                <p class="col-xs-12 col-sm-12 col-md-6">${resourceObject[1].bodyText}</p>`;
        }else if(e.target.className.includes("btn-3")){
            rowContent.innerHTML = `<h2 class="col-xs-12">${resourceObject[2].headingContent}</h2>
                <img class="col-xs-12 col-sm-12 col-md-6 img-responsive" src="${resourceObject[2].imgUrl}" alt="${resourceObject[2].imgAlt}">
                <p class="col-xs-12 col-sm-12 col-md-6">${resourceObject[2].bodyText}</p>`;
        }
    
    /* 
    Close your handleSelection function here. */  
    }

    /* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. */  

    for (let btn of nodeList){
        btn.addEventListener('click', handleSelection);
    }