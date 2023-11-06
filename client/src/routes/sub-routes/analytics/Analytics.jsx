import { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import "./Analytics.scss";
import { useTranslation } from "react-i18next";

const Analytics = () => {
  const { t } = useTranslation();
  const { token } = useSelector((state) => state.login);
  const [analytics, setAnalytics] = useState({
    bymonth: [],
    bytotal: {
      counts: [],
    },
    loading: false,
    success: false,
    error: false,
  });

  useEffect(() => {
    setAnalytics({
      ...analytics,
      loading: true,
    });
    axios
      .all([
        axios(process.env.REACT_APP_API_URL + "/analytics/allbymonth", {
          headers: {
            Authorization: token,
          },
        }),
        axios(process.env.REACT_APP_API_URL + "/analytics/alltotal", {
          headers: {
            Authorization: token,
          },
        }),
      ])
      .then(
        axios.spread((month, total) => {
          setAnalytics({
            bymonth: month.data,
            bytotal: {
              counts: total.data.counts,
              total: total.data.total,
            },
            loading: false,
            success: true,
            error: false,
          });
        })
      )
      .catch(() => {
        setAnalytics({
          ...analytics,
          loading: false,
          error: true,
        });
      });
  }, []);

  const areaOptions = {
    chart: {
      height: 350,
      type: "area",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
      width: 4,
      colors: ["#75d80392"],
    },
    title: {
      text: "Certificates by month",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#fdfdfd", "transparent"],
        opacity: 0.5,
      },
    },
    noData: {
      text: analytics.loading ? "Loading..." : "No Data present in the graph!",
      align: "center",
      verticalAlign: "middle",
      offsetX: 0,
      offsetY: 0,
      style: {
        color: "#000000",
        fontSize: "14px",
        fontFamily: "Helvetica",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        colorStops: [
          {
            offset: 10,
            color: "#75d80392",
          },
          {
            offset: 25,
            color: "#ffbf00ae",
          },
          {
            offset: 100,
            color: "#ff00008c",
          },
        ],
      },
    },
    xaxis: {
      categories: analytics.bymonth.map(
        (i) => i.month.slice(0, 3) + " " + i.year.slice(2)
      ),
    },
  };

  const areaSeries = [
    {
      name: "Certificates",
      data: analytics.bymonth.map((i) => i.count),
    },
  ];


  const pieSeries = analytics.bytotal?.counts?.map((i) => i.count);
  const pieOptions = {
    chart: {
      type: "donut",
      height: 150,
    },
    noData: {
      text: analytics.loading ? "Loading..." : "No Data present in the graph!",
      align: "center",
      verticalAlign: "middle",
      offsetX: 0,
      offsetY: 0,
      style: {
        color: "#000000",
        fontSize: "14px",
        fontFamily: "Helvetica",
      },
    },
    plotOptions: {
      pie: {
        startAngle: 10,
        donut: {
          size: "70%",
          dataLabels: {
            enabled: false,
          },
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 38,
              formatter: () => "All certificates",
            },
            value: {
              show: true,
              fontSize: "48px",
              fontFamily: "var(--rubik)",
              fontWeight: 500,
              color: "#000",
              offsetY: -10,
            },
            total: {
              show: true,
              showAlways: true,
              color: "#000",
              fontFamily: "var(--rubik)",
              fontWeight: 600,
              formatter: (w) => {
                const total = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                return `${total}`;
              },
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    labels: analytics.bytotal.counts.map((i) => i.name),
    fill: {
      type: "solid",
      colors: ["#8BD742", "#BCC1C8", "#78AEFF", "#F74D52"],
    },
    stroke: {
      width: 2,
    },
    colors: ["#8BD742", "#BCC1C8", "#78AEFF", "#F74D52"],
  };
  return (
    <div admincontent="content" className="analytics">
      <h2 className="admin-content__heading">{t("analytics.title")}</h2>
      <div className="anaylytics-data">
        <Chart
          options={areaOptions}
          series={areaSeries}
          type="area"
          height={350}
        />
        <div>
          <Chart
            options={pieOptions}
            series={pieSeries}
            type="donut"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
