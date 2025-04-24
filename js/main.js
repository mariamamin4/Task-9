var siteNameInput= document.getElementById('siteName');
var siteURLInput= document.getElementById('siteURL');

var submitBtn =document.getElementById('submitBtn');



var websiteContainer=[]; //array of objects


if(localStorage.getItem('websites')!=null){

    websiteContainer= JSON.parse(localStorage.getItem('websites'));
   displayWebsites(websiteContainer);
}


function submitWebsite(){

if(validateURL()==true){
    var website={
        name: siteNameInput.value,
        url: siteURLInput.value,
    }
    websiteContainer.push(website);
    localStorage.setItem("websites" , JSON.stringify(websiteContainer));
    displayWebsites(websiteContainer); 
    clearForm();
}
else{
    alert(`Site Name or Url is not valid, Please follow the rules below :

        1- Site name must contain at least 3 characters
        2- Site URL must be a valid one`);
}
   
}

   
function clearForm()
{
    siteNameInput.value = "";
    siteURLInput.value = "";

}

function displayWebsites(arr){
    var Rows=``;
    for(var i=0 ; i<arr.length;i++){ // I --> OBJECT in the arr
            Rows+=`<tr>
                <td>${i + 1}</td>
                <td>${arr[i].name}</td> 
    
                <td><button onclick="visitWebsite(${i});" class="btn btn-outline-success btn-sm"> <i class="fas fa-eye"></i> Visit</button></td>
                <td><button onclick="deleteWebsite(${i});" class="btn btn-outline-danger btn-sm "><i class="fas fa-trash"></i> Delete</button></td>
               
            </tr>`
    }
    document.getElementById('tableBody').innerHTML=Rows;
}

function visitWebsite(i)
{
    window.open(websiteContainer[i].url, "_blank");
}


function deleteWebsite(Index)
{
    websiteContainer.splice(Index,1);
    localStorage.setItem("websites" , JSON.stringify(websiteContainer));
    displayWebsites(websiteContainer);
}

function validateURL(){
    var regex=/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$ /;
    return(regex.test(siteURLInput.value));
}






