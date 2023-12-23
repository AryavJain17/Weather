const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const submitButton = document.getElementById('submitBtn');
const tempstatus = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp');
const datahide = document.querySelector('.middle_layer');

const getInfo =async(event)=>{
    event.preventDefault();
    let cityval = cityName.value;

    if (cityval === "") {
        city_name.innerText=`Plz write the name before search`;
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=cf1114536f372bf690c27270229463bb`;
            const response = await fetch(url);
            const data = await response.json()
            // console.log(data);
            const arrData = [data];
             city_name.innerText= `${arrData[0].name}, ${arrData[0].sys.country}`;
             temp_real_val.innerText = arrData[0].main.temp;
            tempstatus.innerText = arrData[0].weather[0].main;

            let tempMood = arrData[0].weather[0].main;

            if (tempMood == "Clear") {
                tempstatus.innerHTML='<i class="fa-solid fa-sun" style="color:#eccc68;"></i>';
            }else if(tempMood=="Clouds"){
                tempstatus.innerHTML='<i class="fa-solid fa-cloud" style="color:#fff;"></i>';
            }else if(tempstatus=="Rain"){
                tempstatus.innerHTML='<i class="fa-solid fa-cloud-showers-heavy"  style="color:#808080;"></i>';

            }else{
                tempstatus.innerHTML='<i class="fa-solid fa-cloud"style="color:#fff"></i>';
            }
        datahide.classList.remove('data_hide');

        } catch (error) {
            city_name.innerText=`Plz write the name properly`;
        datahide.classList.add('data_hide');

        }
      
    }
}
submitButton.addEventListener('click',getInfo);

