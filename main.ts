let elList: Element | null = document.querySelector(".todo-list")

interface JSONType {
    id:number,
    title:string,
    img: string,
    info:string
}

function rendTodo(arr:JSONType[], list:Element | null) {
    (list as HTMLUListElement).innerHTML=``
    arr.forEach((item:JSONType, index:number ) => {
        let elItem:Element | null = document.createElement('li')
        elItem.className="flex items-center justify-between p-2bg-slate-200 rounded-md "
        elItem.innerHTML = `
        <div class="flex">
        <img class = "img-render" src =${item.img}  />
        <strong>${item.title}</strong>
        <p>${item.info}</p>
        </div>
        `;
        (list as HTMLUListElement ).append(elItem)

   

    } )
} 

function renderJSON(API:string):void{
    fetch(API).then((res:any) => res.json()).then ((data:any) => {
        const products = data.products.map((item:any) =>{
            const obj = {
                id:item.id,
                title:item.title,
                // img: item.img[0],
                info:item.description
            }
            return obj
        })
        console.log(products);
        
        rendTodo(products, elList) 
    })
    
    
}
renderJSON("https://dummyjson.com/products")