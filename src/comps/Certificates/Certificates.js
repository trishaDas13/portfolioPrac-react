import React from "react";
import "./Certificates.css";
import { nanoid } from "nanoid";
import { CertificatesData } from "./CertificatesUtils";
import Title from "../title/Title";

const Certificates = () => {
  return (
    <>
      <Title title="Certificates" />
      <br />
      <div className="certificates">
        {CertificatesData.map((data) => {
          return (
            <div key={nanoid()} className="certificate-box">
              <div className="certificate-title-wrapper">
                <div className="certificate-icon">{data.icon}</div>
                <h3 className="certificate-heading">{data.heading}</h3>
              </div>
              {data.certificates.map((certificate) => {
                return (
                  <div key={nanoid()} className="certificate">
                    <h4>{certificate.title}</h4>
                    <p>{certificate.source}</p>
                    <a href={certificate.img} target="_blank" rel="noreferrer">
                      <img src={certificate.img} alt="" />
                    </a>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Certificates;
