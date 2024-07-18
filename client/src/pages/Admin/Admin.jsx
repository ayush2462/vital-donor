import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
const Admin = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
            consectetur, facilis eligendi quibusdam illum perferendis sit
            repellendus earum neque minima similique cupiditate aliquam quaerat
            eos aperiam amet pariatur enim autem necessitatibus aspernatur
            doloremque. Laboriosam magni velit totam. Delectus consequuntur
            quod, quo et ex velit harum? Voluptates perferendis ab esse eos
            velit voluptate illo praesentium neque unde doloremque reiciendis
            eligendi deleniti architecto iusto aut quaerat cumque necessitatibus
            dolorum inventore explicabo fugiat, suscipit sapiente? Nostrum
            molestias ex distinctio dolorum atque fugiat nemo natus eligendi
            quas officiis doloribus eius corrupti quod dolor est magni eum,
            nihil pariatur maxime labore? Officia animi, sit quibusdam eaque
            autem dolorum debitis dolore reprehenderit neque inventore?
            Voluptatem commodi voluptatibus quis amet accusantium consequatur
            voluptates ipsa dicta, earum facere voluptas deleniti, qui ab
            asperiores error aperiam, alias quasi odio et iure ut natus illo
            delectus! Cum necessitatibus cupiditate repudiandae. Velit cumque
            assumenda odit culpa temporibus adipisci corporis iusto beatae.
            Nostrum ab molestias at quae recusandae provident esse, magnam
            cupiditate, praesentium impedit harum rerum saepe cum, laborum
            ullam. Obcaecati, repellat magni vitae voluptatum vero quaerat
            eveniet maiores ducimus? Tenetur ipsam quo sint voluptatum libero!
            Accusamus laudantium alias eligendi eos praesentium dolor suscipit.
            Cum nemo eveniet, minus mollitia placeat cumque ipsa?
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
