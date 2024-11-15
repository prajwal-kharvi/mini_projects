

async function api_data() {
        const api=fetch("https://reqres.in/api/users")
        const response=await api
        const result=await response.json()
        const jsonString = JSON.stringify(result, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json',name:"jhsbs" });
        const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'data.json';
            link.click();
             URL.revokeObjectURL(link.href);
}

api_data()