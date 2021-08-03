

async function getdata(url){

    let res=await fetch(url)
     var data=await res.json();
     return data;
 }


 function appenddata(recipe,parent){
      
     
         let meal=recipe.meals;
    
    meal.forEach(({strMealThumb,strMeal,strArea,strInstructions})=>{
       
      let div=document.createElement('div')
      
      let p1= document.createElement("p")
      let p2= document.createElement("p")
      let p3= document.createElement("p")
     
      let img= document.createElement("img")
      img.src=strMealThumb
      p1.innerText=strMeal
      p2.innerText=strArea
      p3.innerText=strInstructions
      div.append(img,p1,p2,p3)
      parent.append(div)
  
    })
  
  }
  export {getdata,appenddata}
  