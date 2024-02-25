let  errorsection = $('#Error');
errorsection.hide();
//api request async function
async function getApiData() {
    try{ 
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok){
                throw new Error('Api request ha fallado!');
            }
        const data = await response.json();
        let output = '';
            for (let repo of data) {
                output += `
                <div class="col-sm-3 col-12 round">
                    <div class="card m-2 border-primary  round">
                        <div class="soft card-body round">
                            <h5 class="card-title">${repo.title}</h5>
                            <hr>
                            <p class="card-text">${repo.body}</p>
                        </div>
                    </div>
                </div>
                `;
            }
            //show the data

            $('#post-data').html(output);
            
        }
    catch (error){
        console.error('Error:', error);
        errorsection.show();
        errorsection.text(error);
    }
}
//await




//call the function

let button = document.getElementById('apiRequest');
button.addEventListener('click', getApiData);
