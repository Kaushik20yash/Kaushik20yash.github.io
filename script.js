const arr=["A carbon footprint represents the total amount of carbon dioxide (CO₂) emissions associated with an individual, organization, product, or even a nation. <br/>It's usually measured in tons of CO2 equivalent (tCO2e).<br/>It includes both direct emissions (eg :burning fossil fuels) and indirect emissions (eg: those required for electricity production).<br/> By calculating carbon footprints, we can compare environmental impacts and make informed choices. <br/>Reducing carbon footprint is crucial for fighting climate change and promoting sustainability." ,"-India is the 3rd largest coal producer in the world, accounting for around 8% of global coal production. <br /> - The coal sector accounts for around 60% of India's total greenhouse gas emissions. <br/>- In 2020, India's coal mines emitted approximately 448 million tons of CO2 equivalent (tCO2e). <br/>- The largest coal-producing states in India, such as Jharkhand, Odisha, and Chhattisgarh,contribute significantly to the country's carbon footprint.<br/>- India aims to reduce its carbon intensity by 33-35% by 2030 compared to 2005 levels, as part of its Nationally Determined Contributions (NDCs) under the Paris Agreement." , "Carbon neutrality pathways refers to the steps and strategies a country, organization,orindividual takes to reduce their net carbon emissions to zero, balancing the amount of carbon dioxide(CO2) released into the atmosphere with an equivalent amount of CO2 removed or offset.<br/>The pathway typically involves: <br/>1. Reducing emissions through energy efficiency, renewable energy, and low-carbon technologies.<br/> 2. Transitioning to low-carbon or carbon-neutral energy sources.<br/>3. Implementing carbon capture, utilization, and storage (CCUS) technologies.<br/>4. Offsetting remaining emissions through carbon sinks, like reforestation or soil carbon sequestration. <br/>5. Monitoring and reporting progress towards carbon neutralization." , "The SDG refers to the sustainable development goals and climate goals set up by the United Nations Organization in order to achieve a sustainable future by 2030. <br/>It address the environmental, economical and social challenges faced by different country. <br/> There exists a total of 17 SDG’s to be achieved by countries that are related to infrastructure, innovation,clean energy, sustainability , responsible consumption and more."]


    const changeText=function (e){
        const div= document.createElement('div')
        div.setAttribute("class","mainContent")
        if(e.target.id=="1" || e.target.id=="id1"){
            div.innerHTML=`${arr[0]}`    
        }
        else if(e.target.id=="2" || e.target.id=="id2"){
            div.innerHTML=`${arr[1]}`    
        }
        else if(e.target.id=="3" || e.target.id=="id3"){
            div.innerHTML=`${arr[2]} `   
        }
        else if(e.target.id=="4" || e.target.id=="id4"){
            // const textN=document.createTextNode(${arr[3]})
            // div.appendChild(textN)
            div.innerHTML=`${arr[3]}`
        }
        // console.log(e)
        // div.innerHtml=${arr[i]}

        this.appendChild(div)
    }


    let removeText=function (){
        const tempchild= this.querySelector(".mainContent")
        tempchild.remove()
    }
    let imgItem1=document.querySelector(".img1");
    // imgItem1.addEventListener("click",()=>{
    //     let child= this.querySelector(".mainContent")
    //     this.removeChild(child)
    // })
    imgItem1.addEventListener("click",changeText)
    imgItem1.addEventListener("mouseout",removeText)


    let imgItem2=document.querySelector(".img2");
    imgItem2.addEventListener("click",changeText)
    imgItem2.addEventListener("mouseout",removeText)


    // let imgItem2=document.querySelector(".img2");
    // imgItem2.addEventListener("click",changeText,{once:true})


    let imgItem3=document.querySelector(".img3");
    imgItem3.addEventListener("click",changeText)
    imgItem3.addEventListener("mouseout",removeText)


    let imgItem4=document.querySelector(".img4");
    imgItem4.addEventListener("click",changeText)
    imgItem4.addEventListener("mouseout",removeText)




    // let imgItem=document.querySelector(".img1");
    // imgItem.addEventListener("click",()=>{
    //     const div= document.createElement('div')
    //     div.setAttribute("class","mainContent")
    //     const textN=document.createTextNode("this is to show carbon footprint")
    //     div.appendChild(textN)
    //     imgItem.appendChild(div)
    // })