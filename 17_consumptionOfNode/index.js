import axios from "axios";  
axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=2071f728')
.then((response) => {
    console.log(response.data.Title );
})
 