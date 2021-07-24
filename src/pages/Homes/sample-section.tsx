import React, {useState} from 'react'
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

export interface Props {
  data: any;
  heading: string;
  subheading: string;
}

function SampleSection(props: Props) {
  const samples = props.data;
  const sample1 = props.data[0];
  const sample2 = props.data[1];
  const sample3 = props.data[2];

  const [modal, setModal] = useState(false);
  const [tempSrc, setTempSrc] = useState('');
  const [tempTitle, setTempTitle] = useState('');

  const getSrc = (src, title) => {
    setTempSrc(src);
    setTempTitle(title);
    setModal(true);
  };

  return (
    <div className="sample-container">
      <div className="container">
        <div className="content-section">
          <div className="p-grid">
            <div className="sample p-col-12 p-md-7">
              <div className="video-embed p-shadow-4" >
                <img src={sample1.thumbnail} alt={sample1.title} />
                <div className="play-btn">
                  <Button icon="pi pi-play" className="p-button-rounded p-button-danger" onClick={() => getSrc(sample1.url, sample1.title)} />
                </div>
              </div>
            </div>
            <div className="sample p-col-12 p-md-5">
              <div className="video-embed p-shadow-4" onClick={() => getSrc(sample1.url, sample1.title)}>
                <img src={sample2.thumbnail} alt={sample1.title} />
                <div className="play-btn">
                  <Button icon="pi pi-play" className="p-button-rounded p-button-danger" onClick={() => getSrc(sample1.url, sample1.title)} />
                </div>
              </div>
            </div>
          </div>
          <div className="p-grid">
            <div className="sample p-col-12 p-md-6">
              <div className="video-embed p-shadow-4" onClick={() => getSrc(sample1.url, sample1.title)}>
                <img src={sample3.thumbnail} alt={sample1.title} />
                <div className="play-btn">
                  <Button icon="pi pi-play" className="p-button-rounded p-button-danger" onClick={() => getSrc(sample1.url, sample1.title)} />
                </div>
              </div>
            </div>
            <div className="sample p-col-12 p-md-6">
              <div className="heading-section">
                <h1>{ props.heading }</h1>
                <p>{props.subheading}</p>
                <ul>
                  {samples.map((data, idx) => (
                    <li key={idx}><i className="pi pi-check-circle"></i>{ data.title }</li>
                  ))}
                </ul>
                <div className="more p-d-flex p-jc-center">
                  <Link to="/services"> <Button label="Hubungi kami" /></Link>
                </div>
              </div>
            </div>
          </div>
          <div className={modal ? 'modal open' : 'modal'}>
            <iframe src={tempSrc}   allow='autoplay; encrypted-media'  title='video'/>
            <Button icon="pi pi-times" className="p-button-rounded p-button-danger" onClick={() => setModal(false)} />
            <div className="description p-justify-center p-text-center">
              <h1>{tempTitle}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SampleSection
