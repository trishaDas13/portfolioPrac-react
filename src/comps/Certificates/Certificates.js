import React from "react";
import "./Certificates.css";
import { nanoid } from "nanoid";
import { CertificatesData } from "./CertificatesUtils";

const Certificates = () => {
  return (
    <div className="certificates">
      {CertificatesData.map((data) => {
        return (
          <div key={nanoid()} className="certificate-box">
            <h2 className="certificate-heading">{data.heading}</h2>
            {data.certificates.map((certificate) => {
              return (
              <div key={nanoid()} className="certificate">
                <h4>{certificate.title}</h4>
                <p>{certificate.source}</p>
                <a href={certificate.img} target="_blank" rel="noreferrer"><img src={certificate.img} alt="" /></a>
              </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Certificates;
