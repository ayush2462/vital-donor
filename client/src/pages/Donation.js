import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import API from '../services/API';
import moment from 'moment';
import Layout from '../components/shared/Layout/Layout';

const Donation = () => {
    const { user } = useSelector((state) => state.auth);
    const [data, setData] = useState([]);
    //find donor records
    const getDonors = async () => {
      try {
        const { data } = await API.post("/inventory/get-inventory-hospital", {
          filters: {
            inventoryType: "in",
            donor: user?._id,
          },
        });
        console.log(data);
        if (data?.success) {
          setData(data?.inventory);
        }
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getDonors();
    }, []);
    return (
      <Layout>
        <div className="container">
      
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">Blood Group</th>
                <th scope="col">Inventory Type</th>
                <th scope="col">Quantity</th>
                <th scope="col">Email</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((record) => (
                <tr key={record._id}>
                  <td>{record.bloodGroup}</td>
                  <td>{record.inventoryType}</td>
                  <td>{record.quantity}</td>
                  <td>{record.email}</td>
                  <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    );
}

export default Donation
