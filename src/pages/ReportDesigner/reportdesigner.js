import "./reportdesigner.css";
import React,  { useState }  from 'react';
import { Designer } from '@grapecity/activereports-react';


const Reportdesigner = () => {
 

  const initDesigner = (designerHostSelector) => {
    const designer = new Designer(designerHostSelector);
    // set the pre-defined data source
    designer.setDataSource({
      id: "my-data-source",
      type: "json",
      data: {
        customers: [
          {
            name: "John Doe",
            address: "123 Main Street",
            city: "Anytown",
            state: "CA",
          },
          {
            name: "Jane Doe",
            address: "456 Elm Street",
            city: "Anytown",
            state: "CA",
          },
        ],
      },
    });
  };

  const dataSource = {
    Name: "Northwind",
    ConnectionProperties: {
      DataProvider: "JSON",
      ConnectString: "endpoint=https://demodata.grapecity.com/northwind/api/v1",
    },
  };
  
  return (
    <div id="designer-host" > <Designer dataSources={dataSource} /></div>
  )
}

export default Reportdesigner 