class NewFetch {
    test = 'test';
    constructor(name, number, url){
        this.name = name;
        this.number = number;
        this.id = Math.floor(Math.random()*10000);
        this.url = url;
    }

    get getUrl(){
        return console.log(this.url)
    }

    async fetch_getResponseBody(){
        return await fetch(this.url).then(resp => resp.json())
    }

    setUrl(value){
        this.url=value;
    }
}

async function performRequest(){
    let newFetch = new NewFetch('oleg',12,'https://dummyjson.com/carts/1');
    let response = await newFetch.fetch_getResponseBody()
    console.log(response)
    newFetch.setUrl('https://dummyjson.com/products')
    response = await newFetch.fetch_getResponseBody()
    console.log(response)
}

// performRequest()


class Fetch2 extends NewFetch{
    constructor(name, number, url, requestParam){
        super(name,number,url)
        this.request = requestParam
    }

    set requestParam(value){
        this.request = value
    }

    async makePostRequest(){
        return await fetch(this.url, this.request)
        .then((resp)=>{
            console.log(resp)
            return resp.json()
        })
        .then((data)=>{
            console.log(data)
            return data['id']
        });
    }
}

async function postRequest(){
    let postRequest = new Fetch2('oleg',12,'https://dummyjson.com/products/add');
    postRequest.requestParam = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'BMW Pencil',
      /* other product data */
    })
    }
    console.log(postRequest)
    let item1 = await postRequest.makePostRequest()
    console.log(item1)
}

postRequest()




