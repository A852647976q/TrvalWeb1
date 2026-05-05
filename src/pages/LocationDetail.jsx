import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';

// Import images
import imgTaipei101 from '../../照片/台北101.png';
import imgTaroko from '../../照片/太魯閣.png';
import imgSunMoonLake from '../../照片/日月潭.png';
import imgXimending from '../../照片/西門町.png';

// Import markdown text as raw strings
import mdTaipei101 from '../../內文/台北101.md?raw';
import mdTaroko from '../../內文/太魯閣.md?raw';
import mdSunMoonLake from '../../內文/日月潭.md?raw';
import mdXimending from '../../內文/西門町.md?raw';

const locationData = {
  taipei101: {
    title: '台北101',
    image: imgTaipei101,
    content: mdTaipei101,
  },
  taroko: {
    title: '太魯閣',
    image: imgTaroko,
    content: mdTaroko,
  },
  sunmoonlake: {
    title: '日月潭',
    image: imgSunMoonLake,
    content: mdSunMoonLake,
  },
  ximending: {
    title: '西門町',
    image: imgXimending,
    content: mdXimending,
  }
};

export default function LocationDetail() {
  const { locationId } = useParams();
  const navigate = useNavigate();
  const data = locationData[locationId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locationId]);

  if (!data) {
    return (
      <div className="detail-page" style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h2>找不到此景點</h2>
        <button className="back-btn" onClick={() => navigate('/')} style={{ position: 'static', margin: '20px auto' }}>
          返回首頁
        </button>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <div className="detail-header">
        <img src={data.image} alt={data.title} className="detail-header-image" />
        <div className="detail-header-overlay"></div>
        <button className="back-btn" onClick={() => navigate('/')}>
          <ArrowLeft size={20} /> 返回首頁
        </button>
        <h1 className="detail-title">{data.title}</h1>
      </div>
      
      <div className="detail-content">
        <ReactMarkdown>{data.content}</ReactMarkdown>
      </div>
    </div>
  );
}
