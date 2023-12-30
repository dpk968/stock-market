import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import "./Dashboard.css";
import News from "./News";

const Dashboard = () => {
  const [data, setData] = useState();
  const [comp, setComp] = useState('aapl')
  const [compData, setCompData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchCompData = async (comp) => {
    try {
      const response = await fetch(
        `https://api.iex.cloud/v1/data/core/company/${comp}?token=pk_85f727a2802d4a7d9de64485baeb569b`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data1 = await response.json();
      setCompData(data1);
      console.log("data1", data1);
    } catch (error) {
      console.error("Error fetching company data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCompanytechnical = async (comp) => {
    try {
      const response = await fetch(
        `https://api.iex.cloud/v1/data/core/iex_deep/${comp}?token=pk_85f727a2802d4a7d9de64485baeb569b`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
      console.log("data", result);
    } catch (error) {
      console.error("Error fetching technical data:", error);
    }
  };
  const tradePrice =
    data && data[0] && data[0].trades ? data[0].trades.map((trade) => trade.price) : [];
  console.log("tradePrice: ", tradePrice);

  const tradeTime =
    data && data[0] && data[0].trades ? data[0].trades.map((trade) => trade.timestamp) : [];

  const convertTimestampToTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    const seconds = '0' + date.getSeconds();
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
  };

  const timestamps = tradeTime || [];
  const Times = timestamps.map(convertTimestampToTime);
  console.log(Times);

  const handleSearch = async () => {
    try {
      const companyResponse = await fetchCompData(comp);
      setCompData(companyResponse);

      const tradeResp = await fetchCompanytechnical(comp);
      setData(tradeResp);

      chart();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const chart = () => {
    if (data && data[0] && data[0].trades) {
      Highcharts.chart("ch", {
        title: {
          text: "Line Chart",
          style: {
            color: "#FFF",
          },
        },
        chart: {
          backgroundColor: "#0b1d33",
        },
        xAxis: {
          categories: Times,
        },
        yAxis: {
          labels: {
            style: {
              color: "black",
            },
          },
          title: {
            text: "Prices",
          },
        },
        series: [
          {
            name: "Series 1",
            data: tradePrice,
          },
        ],
      });
    }
  };

  useEffect(() => {
    fetchCompData(comp);
    fetchCompanytechnical(comp);
 
  }, []);

  useEffect(() => {
    if (!isLoading) {
      chart();
    }
  }, [data, isLoading]);

  return (
    <div className="dashboard">
      <div className="search-box">
        <input type="text" className="search-input" placeholder="Search by company symbol"
          value={comp}
          onChange={(e) => setComp(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>

          <div className="dashboard-container">
            <div className="left-dashboard">
              <div className="heading-container">
                <h1>Company Details section</h1>
              </div>
              <div className="table-container">
                <div className="left-table">
                   <ul>
                    <li>Name ={compData[0].companyName}</li>
                    <li>CEO ={compData[0].ceo}</li>
                    <li>Total Employees ={compData[0].employees}</li>
                  </ul>
                </div>
                <div className="center-table">
                  <ul>
                    <li>Symbol = {compData[0].symbol}</li>
                    <li>Exchange = {compData[0].exchange}</li>
                    <li>W0ebsite  =<a href={compData[0].website} target="_blank" rel="noopener noreferrer">
                      {compData[0].website}
                    </a></li>
                  </ul> 
                </div>

              </div>

            </div>

            <div className="right-dashboard">
              <div className="news-panel">
                <News />

              </div>
            </div>
          </div>
          <div id="ch" style={{ width: "100%", height: "50%" }}></div>

          <div className="dashboard-table">
            <table className="margin-table">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Last Sale Price</th>
                  <th>Market Percent</th>
                  <th>Volume</th>
                  <th>Last Sale Time</th>
                  <th>Last Sale Size</th>
                </tr>
              </thead>
              <tbody>
                 {data.map((stock, index) => (
              <tr key={index}>
                <td>{stock.symbol}</td>
                <td>{stock.lastSalePrice}</td>
                <td>{stock.marketPercent}</td>
                <td>{stock.volume}</td>
                <td>{new Date(stock.lastSaleTime).toLocaleString()}</td>
                <td>{stock.lastSaleSize}</td>
              </tr>
            ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>

  );
};

export default Dashboard;
