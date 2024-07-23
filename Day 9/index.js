 // Activity 1

 // Task 1

 document.getElementById("name").innerHTML="Rohan";

 // Task 2

document.getElementsByClassName("course")[0].style.backgroundColor = "red";

// Activity 2

// Task 3

 let new_div = document.createElement("div");
 new_div.innerText = "Doing the Day 9 of Javascript Challenge"
 document.body.appendChild(new_div);


 // Task 4


 let new_li = document.createElement("li");
 new_li.innerText = "Mat lo rehne do"
 document.querySelector("ul").appendChild(new_li);


 // Activity 3

 // Task 5

 let remove_ele = document.querySelector("div");
 remove_ele.remove();


 // Task 6

 let remove_child = document.querySelector("ul")
 remove_child.lastChild.remove();


 // Activity 4

 // Task 7

 let link = document.querySelector("a")
link.setAttribute("href","https://wikipedia.com");

// Task 8

let list_css=document.querySelector("ul")
list_css.style.backgroundColor = "red"
list_css.removeAttribute("class")


// Activity 5

// Task 9

let btn = document.querySelector("button")

btn.addEventListener("click", ()=> {
    if(link.innerText == "Website") {
        link.innerText = "Official Website"
    }

    else {
        link.innerText="Website"
    }
})

// Task 10

btn.addEventListener("mouseover", ()=> {
    btn.style.borderColor = "blue"
})