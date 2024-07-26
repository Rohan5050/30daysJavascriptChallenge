
// Activity 1

 // Task 1

const changetextBtn = document.getElementById("changetextBtn");
    changetextBtn.addEventListener("click", () => {
        document.getElementById("changetext").innerHTML ="this is changed text";
    });

 // Task 2

   const toggleEvent = document.getElementById("toggleimg");
   toggleEvent.addEventListener("dblclick", ()=> {
    toggleEvent.style.display =
        toggleimg.style.display === "none" ? "block" : "none";
   }) 


// Activity 2

 // Task 3
  
 const btncolor = document.getElementById("btn");
  btncolor.addEventListener("mouseover", ()=> {
    btncolor.style.backgroundColor="red";

  })

// Task 4
  const btncolorreset = document.getElementById("btn");
  btncolorreset.addEventListener("mouseout", ()=> {
    btncolor.style.backgroundColor="white";

  })


  // Activity 3

  //  Task 5

  const keyset = document.getElementById("keytext");
  keyset.addEventListener("keydown", (e)=> {
    console.log(`${e} is pressed`);
    
  })


  // Task 6

  const keyreset = document.getElementById("keytext");
  keyreset.addEventListener("keyup", (e)=> {
    console.log(`${e} is pressed`);
    
  })



  // Activity 4

  // Task 7

  const formsub = document.getElementById("formsub");
  formsub.addEventListener("submit", (e)=> {
    e.preventDefault();
    const formdata = new FormData(formsub);
    const formobject = {};

    formdata.forEach((data,key) => {
      formobject[key]=data;
    });

    console.log("formData:",formobject);


  });


  // Task 8

  const list = document.getElementById("select");
  const option = document.getElementById("option");
  list.addEventListener("change", (e)=>{
    option.textContent = `Your Selected Option : ${e.target.value} `;
    
  });


  // Activity 5

  // Task 9

  const selectitem = document.getElementById("list");
  selectitem.addEventListener("click", (e)=> {
    if(e.target && e.target.nodeName == "LI") {
      console.log("Selected List Item:",e.target.textContent);
    }
    

  });



  // Task 10
 // Select the parent element
 const parent = document.getElementById('parent');
    
 // Function to add a new child element
 function addChild() {
   const newChild = document.createElement('div');
   newChild.className = 'child';
   newChild.textContent = 'Click me';
   parent.appendChild(newChild);
 }

 // Adding event listener to the parent element
 parent.addEventListener('click', function(event) {
   // Checking if the clicked element has the class 'child'
   if (event.target && event.target.classList.contains('child')) {
     alert('Child element clicked!');
   }
 });

 // Adding event listener to the button to add new child elements
 document.getElementById('add-child').addEventListener('click', addChild);