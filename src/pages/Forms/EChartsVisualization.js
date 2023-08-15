import React, { useState, useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import domtoimage from 'dom-to-image';
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  IconButton,
  Popover,
  Button,
} from '@mui/material';
import { SketchPicker } from 'react-color';
import PaletteIcon from '@mui/icons-material/Palette';

const styles = {
  container: {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  select: {
    margin: '8px',
    minWidth: '150px',
  },
  colorPickerButton: {
    marginTop: '16px',
  },
  downloadButton: {
    marginTop: '16px',
  },
};

const defaultColor = '#1890ff'; // Default blue color

const EChartsVisualization = ({ data }) => {
  const [mode, setMode] = useState('single');
  const [selectedXColumn, setSelectedXColumn] = useState('');
  const [selectedYColumn, setSelectedYColumn] = useState([]);
  const [chartColors, setChartColors] = useState({});
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [colorPickerAnchor, setColorPickerAnchor] = useState(null);
  const [chartType, setChartType] = useState('bar');
  const chartRef = useRef(null);

  useEffect(() => {
    setSelectedXColumn(Object.keys(data[0] || {})[0]);
    setSelectedYColumn([]);
    setChartColors({});
  }, [data]);

  const generateRandomColors = (count) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
      colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }
    return colors;
  };

  const getChartOptions = () => {
    if (chartType === 'pie') {
      const xData = data.map(item => item[selectedXColumn]);
      const uniqueXData = [...new Set(xData)];

      const seriesData = uniqueXData.map((x) => ({
        value: xData.filter(val => val === x).length,
        name: x,
      }));

      return {
        title: {
          text: 'ECharts Visualization',
        },
        tooltip: {},
        series: [
          {
            type: chartType,
            data: seriesData,
          },
        ],
      };
    } else {
      if (mode === 'single') {
        const selectedColumnData = data.map(item => item[selectedXColumn]);
        const uniqueData = [...new Set(selectedColumnData)];
        const xAxisConfig = {
          data: uniqueData,
          name: selectedXColumn,
        };
        
        return {
          title: {
            text: 'ECharts Visualization',
          },
          tooltip: {},
          xAxis: xAxisConfig,
          yAxis: {
            type: 'value',
            name: 'Number of Occurrences',
          },
          series: [
            {
              type: chartType,
              data: uniqueData.map(val => selectedColumnData.filter(item => item === val).length),
              itemStyle: {
                color: chartColors[selectedXColumn] || defaultColor,
              },
            },
          ],
        };
      } else if (mode === 'multiple') {
        const xData = data.map(item => item[selectedXColumn]);
        const xAxisConfig = {
          data: xData,
          name: selectedXColumn,
        };

        const seriesData = selectedYColumn.map((yCol, index) => ({
          type: chartType,
          name: yCol,
          data: data.map(item => item[yCol]),
          itemStyle: {
            color: chartColors[yCol] || defaultColor,
          },
        }));

        return {
          title: {
            text: 'ECharts Visualization',
          },
          tooltip: {},
          xAxis: xAxisConfig,
          yAxis: {
            type: 'value',
            name: 'Values',
          },
          series: seriesData,
        };
      }
    }
  };

  const handleChangeMode = (event) => {
    setMode(event.target.value);
  };

  const handleChangeSelectedXColumn = (event) => {
    setSelectedXColumn(event.target.value);
  };

  const handleChangeSelectedYColumn = (event) => {
    setSelectedYColumn(event.target.value);
  };

  const handleChangeChartType = (event) => {
    setChartType(event.target.value);
  };

  const handleOpenColorPicker = (event) => {
    setColorPickerAnchor(event.currentTarget);
  };

  const handleCloseColorPicker = () => {
    setColorPickerAnchor(null);
  };

  const handleColorChange = (color) => {
    if (mode === 'single') {
      setChartColors((prevColors) => ({
        ...prevColors,
        [selectedXColumn]: color.hex,
      }));
    } else if (mode === 'multiple') {
      setChartColors((prevColors) => ({
        ...prevColors,
        [selectedYColumn]: color.hex,
      }));
    }
  };

  const handleDownloadChart = () => {
    if (chartRef.current) {
      const downloadBackgroundColor = backgroundColor === '#ffffff' ? 'transparent' : backgroundColor;
      domtoimage
        .toJpeg(chartRef.current.getEchartsInstance().getDom(), { bgcolor: downloadBackgroundColor })
        .then((dataUrl) => {
          const anchor = document.createElement('a');
          anchor.href = dataUrl;
          anchor.download = 'chart.jpg';
          anchor.click();
        })
        .catch((error) => {
          console.error('Error while downloading chart:', error);
        });
    }
  };

  return (
    <Container style={styles.container}>
      <Typography variant="h4" gutterBottom>
        Data Visualization
      </Typography>

      <FormControl style={styles.select}>
        <InputLabel>Select Chart Mode</InputLabel>
        <Select value={mode} onChange={handleChangeMode}>
          <MenuItem value="single">Single Column</MenuItem>
          <MenuItem value="multiple">Multiple Columns</MenuItem>
        </Select>
      </FormControl>

      {mode === 'single' && (
        <FormControl style={styles.select}>
          <InputLabel>Select Column</InputLabel>
          <Select value={selectedXColumn} onChange={handleChangeSelectedXColumn}>
            {Object.keys(data[0] || {}).map((field) => (
              <MenuItem key={field} value={field}>
                {field}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {mode === 'multiple' && (
        <>
          <FormControl style={styles.select}>
            <InputLabel>Select X-Axis Column</InputLabel>
            <Select value={selectedXColumn} onChange={handleChangeSelectedXColumn}>
              {Object.keys(data[0] || {}).map((field) => (
                <MenuItem key={field} value={field}>
                  {field}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl style={styles.select}>
            <InputLabel>Select Y-Axis Columns</InputLabel>
            <Select
              multiple
              value={selectedYColumn}
              onChange={handleChangeSelectedYColumn}
              renderValue={(selected) => Array.from(selected).join(', ')}
            >
              {Object.keys(data[0] || {}).map((field) => (
                <MenuItem key={field} value={field}>
                  {field}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <IconButton
            style={styles.colorPickerButton}
            onClick={handleOpenColorPicker}
          >
            <PaletteIcon />
          </IconButton>
          <Popover
            open={Boolean(colorPickerAnchor)}
            anchorEl={colorPickerAnchor}
            onClose={handleCloseColorPicker}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <SketchPicker
              color={chartColors[selectedYColumn] || defaultColor}
              onChange={handleColorChange}
            />
          </Popover>
        </>
      )}

      <FormControl style={styles.select}>
        <InputLabel>Select Chart Type</InputLabel>
        <Select value={chartType} onChange={handleChangeChartType}>
          <MenuItem value="bar">Bar Chart</MenuItem>
          <MenuItem value="line">Line Chart</MenuItem>
          <MenuItem value="scatter">Scatter Plot</MenuItem>
          <MenuItem value="pie">Pie Chart</MenuItem>
        </Select>
      </FormControl>

      <ReactECharts ref={chartRef} option={getChartOptions()} />

      <Button
        variant="contained"
        color="primary"
        onClick={handleDownloadChart}
        style={styles.downloadButton}
      >
        Download Chart as JPEG
      </Button>
    </Container>
  );
};

export default EChartsVisualization;
