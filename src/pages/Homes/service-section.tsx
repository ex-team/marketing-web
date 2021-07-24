import React, {useState, useEffect} from 'react'
import { Button } from 'primereact/button';
import { Skeleton } from 'primereact/skeleton';
import { Link } from 'react-router-dom';
export interface Props {
  data: any;
  heading: string;
  subheading: string;
}

function ServiceSection(props: Props) {
  const [services, setServices] = useState(props.data)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = setTimeout(() => {
      setServices(props.data);
      setLoading(false);
    }, 600);
    return () => clearTimeout(load);
  });
  return (
    <div className="service-container">
      <div className="container">
        <div className="content-section">
          <div className="p-grid">
            <div className="p-col-12 p-md-4">
              <div className="heading-section">
                <h1>{ props.heading }</h1>
                <p>{props.subheading}</p>
                <ul className="services-heading">
                {services.map((data, idx) => (
                  <li key={idx}><i className="pi pi-check-circle"></i> {data.title}
                    <ul>
                      <li>{data.description}</li>
                    </ul>
                  </li>
                ))}
                </ul>
                <div className="more p-d-flex p-jc-center">
                  <Link to="/services">{loading ? <Skeleton width="20%" height="30px" /> : <Button label="Dapatkan Sekarang!" />}</Link>
                </div>
              </div>
            </div>
            <div className="p-col-12 p-md-8">
              <div className="p-grid p-justify-center">
                {services.map((data, idx) => (
                    <div key={idx} className="services p-col-12 p-md-6">
                      <div className="pricing p-shadow-4" style={{ backgroundColor: data.background }}>
                        <div className="heading p-justify-center">
                          <img src={data.images} alt="" />
                          <h1>{ data.title }</h1>
                        </div>
                        <div className="body">
                          <table className="table-service">
                            <tbody>
                            {data.services.map((service, key) => (
                              <tr key={key}>
                                <td>{service.name}</td>
                                { service.value === 'ok' ? (<td><i className="pi pi-check-circle"></i></td>) : (<td>{ service.value}</td>) }
                              </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceSection
