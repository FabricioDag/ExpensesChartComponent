const data = fetch('data.json')
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        return data;
    })
    .catch(error => console.log(error));

let chartContainer = document.getElementById("chart-container")

let max = 0

data.then(data =>{
    max = 0
    data.forEach(item=>{
            if(item.amount > max){
                max = item.amount
            }
        
    })
    console.log(max)
})


data.then(data =>{
    data.forEach(day=>{
        let chartW = document.createElement("div")
        chartW.classList.add("chart-wrapper")

        const height = day.amount/4

        let amount = ""
        amount = `
        <div class="pop-up">
            <small>$${day.amount}</small>
        </div>
        `
        let value = ""
        if(max == day.amount){
            value = `
                <div class="chart-value max" 
                style="height:${height}em"></div>
            `
        }else{
            value = `
                <div class="chart-value" 
                style="height:${height}em"></div>
        `
        }
        

        chartW.innerHTML = `
            ${amount}
            ${value}
            <small class="day-name">${day.day}</small>
        `
        chartContainer.appendChild(chartW);
    })
})