const createClient = async ({name, email}) => {
    try{
        const response =  await fetch(`http://localhost:8080/api/v1/client/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"name" : name, "email" : email}),
        })
        if(response.ok) {
            return true;
        }
    }
    catch(error) {
        console.error(error)
        return false;
    }

}

const findAllClient = async () => {
    try{
        const response =  await fetch(`http://localhost:8080/api/v1/client/findAll`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if(response.ok) {
            const json = await response.json()
            const data = json.data
            return data
        }
        
    }
    catch(error) {
        console.error(error)
        return false;
    }

}

export default { createClient, findAllClient }