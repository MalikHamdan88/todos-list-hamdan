function getAndUpdate(){
    console.log("updating list....");
    tit = document.getElementById("title").value;
    desc = document.getElementById("description").value;
    let itemJsonArry = [];
    if (localStorage.getItem('itemsJson')==null) {
      itemJsonArry.push([tit, desc]); 
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArry));
    } else {
      itemJsonArryStr = localStorage.getItem('itemsJson');
      itemJsonArry = JSON.parse(itemJsonArryStr);
      itemJsonArry.push([tit, desc]);
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArry));
    }  
    update();
};
function update(){
    let itemJsonArry = [];
    if (localStorage.getItem('itemsJson')==null) {
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArry));
      } else {
        itemJsonArryStr = localStorage.getItem('itemsJson');
        itemJsonArry = JSON.parse(itemJsonArryStr);
      }  

    let tableBody = document.getElementById("tableBody")
    let str = "";
    itemJsonArry.forEach((element, index)=> {
        str += `
     <tr class="text-lg border-cyan-950 border-[1px] hover:bg-cyan-700 bg-cyan-800 duration-300  hover:scale-[1.02]">
     <td class="w-40  py-4">${index + 1}</td>
     <td class="w-40">${element[0]}</td>
     <td class="w-40">${element[1]}</td>
     <td onclick="deleted(${index})" class="w-40"><button class="border-[1px] duration-200  hover:scale-[1.04] bg-cyan-700 align-text-top text-white rounded-md text-lg px-2">Delete</button></td>
     </tr>`
    });
    tableBody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();

function deleted(itemIndex){
    console.log("Delete", itemIndex);
    itemJsonArryStr = localStorage.getItem('itemsJson')
    itemJsonArry = JSON.parse(itemJsonArryStr);
    itemJsonArry.splice(itemIndex, 1)
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArry));
update(); 
}

function clearStorage(){
    if(confirm("Do you really want to clear"))
    localStorage.clear();
    console.log("clearing the storage")
    update();
}
