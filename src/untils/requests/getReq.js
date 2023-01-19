


export const getReq = async (url)=>{
    const response = await fetch('http://ec2-3-68-106-129.eu-central-1.compute.amazonaws.com/api/'+url);
    const data = response.json();
    return data
}