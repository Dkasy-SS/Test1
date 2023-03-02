  
  async function returnBodyGet(url){
    return fetch(url).then(resp => resp.json())
    }

   async function returnBodyPost(url,bodyP,token=null){
        return await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer /* ${token} */`, 
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(bodyP)
        }).then(res=>res.json()).catch(err=>err)
    }

  async function runUrl(url){
    let responseBody = await returnBodyGet(`${url}/users`)
    let user = {
        username : responseBody.users[2].username, 
        password : responseBody.users[2].password
    }
    
    let token = await returnBodyPost(`${url}/auth/login`,user).then(resp=>resp.token).catch(err=>err)
    console.log(token)
    let itemId = await returnBodyPost(`${url}/products/add`, {title: 'ProductTitle'},token).then(resp=>resp.id).catch(err=>err)
    let ifProductExists = await returnBodyGet(`${url}/product/${itemId}`).then((resp)=>{
        if(resp.message){
            return false
        } else {
            return true
        }
    }).catch(err=>err)
    if(ifProductExists){
        console.log('Item found')
    } else {
        console.log('Item not found')
    }
  }

  runUrl(`https://dummyjson.com`)




