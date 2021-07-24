import React, {useEffect, useState} from 'react';
import { Skeleton } from 'primereact/skeleton';

export interface Props {
  data: {
    id: number;
    name: string;
    heading: string;
    subheading: string;
    banner: string;
    title: string;
    description: string;
  };
  services: any;
}
function MainSection(props: Props) {
  const [services, setServices] = useState(props.services);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const load = setTimeout(() => {
      setServices(props.services);
      setLoading(false);
    }, 600);
    return () => clearTimeout(load);
  });

  return (
    <div className="main-container">
      <div className="container">
        <div className="content-container">
          {loading ? (
            <div className="heading-section">
              <Skeleton width="30%" height="30px" className="p-mb-2 p-mt-2" />
              <Skeleton width="50%" />
            </div>
          ) : (
            <div className="heading-section">
              <h1>{props.data.heading}</h1>
              <p>{props.data.subheading}</p>
              <ul className="services-heading">
                {services.map((data, idx) => (
                  <li key={idx}><i className="pi pi-check-circle"></i> {data.title}
                    <ul>
                      <li>{data.description}</li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="p-grid p-justify-center">
            {services.map((data, idx) => (
              <div key={idx} className="services p-col-12 p-md-6 ">
                <div className="pricing p-shadow-4" style={{ backgroundColor: data.background }}>
                  <div className="heading p-justify-center">
                    <img src={data.images} alt="" />
                    <h1>{data.title}</h1>
                  </div>
                  <div className="body">
                    <table className="table-service">
                      <tbody>
                        {data.services.map((service, key) => (
                          <tr key={key}>
                            <td>{service.name}</td>
                            {service.value === 'ok' ? (
                              <td><i className="pi pi-check-circle"></i></td>
                            ) : (
                              <td>{service.value}</td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="content-services">
            <div className="disclaimer">
              <p>** Free Konsultasi</p>
              <p>** Manual book</p>
            </div>
            <div className="terms">
              <ul>
                <li><i className="pi pi-check-circle"></i>Harga diluar pajak </li>
                <li><i className="pi pi-check-circle"></i>Harga tidak termasuk olah data </li>
                <li><i className="pi pi-check-circle"></i>Gratis server selama 1 bulan dari pekerjaan selesai</li>
                <li><i className="pi pi-check-circle"></i>Garansi : 3 bulan</li>
              </ul>
            </div>
            <p>Download Browsur :</p>
            <ul>
              <li>Produk dan Detail keterangan produk</li>
              <li>Cara pemesanan dan pembayaran</li>
            </ul>
            <p>Cara pemesanan :</p>
            <ul>
              <li>Form Pemesanan (Google Form)</li>
              <li>Konsultasi  (hub WA)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainSection;
