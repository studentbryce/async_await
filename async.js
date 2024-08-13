async function fetchData()
{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        // call displayData function
        displayData(data);
    }
    catch(error)
    {
        console.error("Failed: ", error);
        document.getElementById("dataContainer").innerHTML = '<p class = "alert alert-danger">Failed to load data...</p>';
    }
}

// function to display data in html
function displayData(data)
{
    const container = document.getElementById("dataContainer");
    // clear any existing content
    container.innerHTML = '';

    // loop through objects returned via data
    data.forEach(
        item => {
            const card = `
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class = "card-title">${item.title}</h5>
                        <p class = "card-text">${item.body}</p>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        }
    );
}

// fetch the data when page loads
window.onload = fetchData();