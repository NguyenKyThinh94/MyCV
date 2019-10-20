let moreProject1 = document.getElementById('moreProject1');
let moreProject2 = document.getElementById('moreProject2');
let moreProject3 = document.getElementById('moreProject3');

moreProject1.addEventListener('click',loadMoreProject);                     
moreProject2.addEventListener('click',loadMoreProject);                     
moreProject3.addEventListener('click',loadMoreProject);                     

function loadMoreProject(){
    let id=this.id;
    id=parseInt(id.slice(-1))-1;

    console.log(id);
    axios.get('js/project.json')
    .then(response => Reder(response.data.project[id],id))
    .catch(error => console.log(error));
    
}
function Reder(data,id){
    for(i=0;i<=2;i++){
        let query="#project"+ (i+1).toString();
        let btquery="#moreProject"+ (i+1).toString();
        let element = document.querySelector(query);
        let button =document.querySelector(btquery);     
        if(i==id){            
            if(element.innerHTML.length < 5){
                button.setAttribute('class','fas fa-minus-circle d-inline-block mx-2 cursorAlias');
                element.innerHTML=
                "<p class='pl-5'>Description:"+data.language+"</p>"+
                "<p class='pl-5'>Source code:"+data.githubLink+"</p>";
            } else {
                element.innerHTML="";
                button.setAttribute('class','fas fa-plus-circle mx-2 d-block cursorCopy')
            }        
        } else {
            let query="#project"+ (i+1).toString();
            let element = document.querySelector(query);
            element.innerHTML="";
            button.setAttribute('class','fas fa-plus-circle mx-2 d-block cursorCopy')
        }
    }   
}