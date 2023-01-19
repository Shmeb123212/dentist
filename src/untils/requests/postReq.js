


export const postReq = async (body, url)=>{
    const response = await fetch('http://ec2-3-68-106-129.eu-central-1.compute.amazonaws.com/api/'+url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = response.json();
    return data

}