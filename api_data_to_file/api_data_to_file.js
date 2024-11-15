import {url} from "./settings.js"

async function api_data() {
        const api=fetch(url)
        const response=await api
        const result=await response.json()
        if(result.pagination.items?.count<=0){
            console.log("not found 404")
        }else{
        const jsonString = JSON.stringify(result, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json',name:"jhsbs" });
        const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'data.json';
            link.click();
             URL.revokeObjectURL(link.href);
        }
}

api_data()