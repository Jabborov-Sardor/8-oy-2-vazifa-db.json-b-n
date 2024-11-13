let elList: Element | null = document.querySelector(".todo-list")

interface JSONType {

}

function renderJSON(API:string):void{
    fetch(API).then((res:any) => res.json()).then (data => {
        console.log(data.products ); 
    })
    
    
}
renderJSON("https://dummyjson.com/products")