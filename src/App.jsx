import {useEffect,useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

// 프로젝트 정리
// 1. 첫화면 : 현재 위치 기반의 날씨가 보인다.
// 2. 날씨정보 : 도시, 섭씨/화씨, 날씨 상태
// 3. 5개의 버튼 (현재 위치, 나머지 4개의 도시상태)
// 4. 도시 버튼을 클릭할때마다 도시별 날씨가 나온다.
// 5. 현재 위치 기반 날씨 버튼을 클릭하면 다시 현재위치 기반으로 돌아온다.
// 6. 버튼 클릭시 데이터를 가져오는 동안 잠깐 사이의 로딩 스피너가 돈다.


function App() {

  const[weather,setWeather] = useState(null);

  const getCurrentLocation = () =>{
    navigator.geolocation.getCurrentPosition((position)=> {
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat,lon);
    });
  };

  const getWeatherByCurrentLocation = async(lat,lon) =>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d99f1bdce5a98595586c1b3dde9735b6&units=metric`;
    let response = await fetch(url)
    let data = await response.json();
    setWeather(data);
  };

  useEffect(()=>{
    getCurrentLocation(); // 현재위치 기반 가져오기
  },[]);
  

  return (
    <div>
      <div className ="container">
        <WeatherBox weather ={weather}/>
        <WeatherButton/>
      </div>
    </div>
    
  );
}

export default App
