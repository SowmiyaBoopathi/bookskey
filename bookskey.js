
// display pop when we click the + button
var a=document.querySelector(".popup");
var b=document.querySelector(".frm");
var btn=document.querySelector("#id-btn");
btn.addEventListener("click", function ()
{
    a.style.display="block";
           b.style.display="block";

})

// cancle the popup
var can_btn=document.querySelector("#can-btn");
 can_btn.addEventListener( "click",function (event)
       {
        event.preventDefault();
        
        a.style.display="none";
          b.style.display="none";

    })


//  to delete the default one 

     function delete_par(event)
        {
            event.target.parentElement.remove();
        }
    

// create new one 
    var add_btn=document.querySelector("#add-btn");
    var par_div=document.querySelector(".container");
    var inp1=document.createElement("input");
    var inp2=document.createElement("input");
    var txt_ara=document.createElement("textarea"); 
    add_btn.addEventListener("click", function(event)
{
    var inp1 = document.querySelectorAll(".inp1")[0]; // Book Title
var inp2 = document.querySelectorAll(".inp1")[1]; // Author
var txt_ara = document.querySelector(".inp2"); 
    event.preventDefault();
    var div=document.createElement("div");
    div.className="book"
    div.innerHTML=`<h1>${inp1.value}</h1> 
                   <h3>${inp2.value}</h3>
                    <p>${txt_ara.value}</p>
                    <button class="btn" onclick="delete_par(event)">Delete</button>`
                    
    par_div.append(div);
    a.style.display="none";
          b.style.display="none";


})
    

