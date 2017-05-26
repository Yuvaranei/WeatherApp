# WeatherApp

Weather App uses react highcharts to display the 5 days weather forecast JSON data
JSON data is retrived using API call from  api.openweathermap.org with city ID as chennai and KEY
JSON data is placed in the constants file
Parsing the data and updating it in the react highcharts is done from the constants JSON file
Plotted Wind,Pressure and temperature metrics against the time list retrieved from JSON data

Steps to execute
=================
1. Install npm
2. cd to the WeatherApp directory
3. npm install --save (=> which installs the node_modules mentioned in the package.json)
4. npm start
5. launch http://localhost:8080/
