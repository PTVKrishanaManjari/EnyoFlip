 enyo.kind({
    name:"sampleApp",
    classes:"flip",
    components:[
        { kind: "onyx.Toolbar", name:"header", tag:"div", classes:"navBar", components:[
            {
                classes:"side-div",
                components:[
                    {
                        kind:"Image",
                        src:"assets/flipkart.png",
                        classes:"flipimage",
                        allowHTML: true
                    },
                    {
                        tag:"a",
                        attributes: { href: "https://www.flipkart.com/plus" },
                        content:"Explore",
                        classes:"explore",
                        allowHTML: true
                    },
                    {
                        tag:"a",
                        attributes: { href: "https://www.flipkart.com/plus" },
                        content:" Plus",
                        classes:"Plus",
                        allowHTML: true
                    },
                    {
                        kind:"Image",
                        src:"assets/plus.png",
                        classes:"plus"
                    }
                ]
            },
            {
                classes:"searchDiv",
                components:[
                    {
                        kind:"enyo.Input",
                        type:"text",
                        placeholder:"Search for products,brands and more",
                        classes:"search"
                    },
                    {
                        kind:"Image",
                        src:"assets/images.png",
                        classes:"searchImage"
                    }
                ]
            },
            // {
            //     name:"login",
            //     content: "Login & Signup",
            //     tag:"a",
            //     attributes: { href: "https://www.flipkart.com/plus" },
            //     classes:"LSclass",
            //     allowHTML: true
            // }
            {
                classes:"LSdiv",
                components:[
                    {
                        tag:"a",
                        attributes: { href: "https://www.flipkart.com/plus" },
                        content:"Login & Signup",
                        classes:"LSclass",
                        allowHTML: true
                    },
                    {
                        tag:"span",
                        content:"More",
                        classes:"more",
                        allowHTML:true
                    },
                    {
                        tag:"i",
                        classes:"fa fa-angle-down",
                        allowHTML:true
                    },
                    {
                        tag:"i",
                        classes:"fa fa-shopping-cart",
                        allowHTML:true
                    },
                    {
                        tag:"span",
                        content:"Cart",
                        classes:"cart",
                        allowHTML:true
                    }
                ]
            } 
        ]},
        {
            name:"Fashion",
            classes:"fashion",
            components:[
                {
                    tag:"ul",
                    classes:"myUL",
                    components:[
                        {
                            tag:"li",
                            classes:"electronics",
                            components:[
                                {
                                    tag:"span",
                                    content:"Electronics",
                                    name:"electronics",
                                    classes:"electronic"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});