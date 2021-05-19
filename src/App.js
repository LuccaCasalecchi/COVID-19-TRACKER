 import React, { useState, useEffect } from "react";
 import { Cards, CountryPicker, Chart } from "./Components";
 import { fetchData } from "./api/";
 import styles from "./App.module.css"; 
 import image from "./images/image.png";

  const App = () => {
   const [data, setData] = useState({});
   const [country, setCountry] = useState();

   const handleCountryChange = async (country) => {
     const data = await fetchData(country);
     setCountry(country);
     setData(data);
   };

   useEffect(() => {
     async function loadData() {
       const data = await fetchData();
       setData({ data });
     }
     loadData();
   }, []);

   console.log(data);

   return (
     <div className={styles.container}>
       <img className={styles.image} src={image} alt="COVID-19" />
       
       <Cards data={data} country={country} />
       <CountryPicker handleCountryChange={handleCountryChange} />
       <Chart data={data} country={country} />
       
     </div>
   );
 };

 export default App;