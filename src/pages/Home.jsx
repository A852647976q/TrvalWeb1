import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import images
import imgTaipei101 from '../../照片/台北101.png';
import imgTaroko from '../../照片/太魯閣.png';
import imgSunMoonLake from '../../照片/日月潭.png';
import imgXimending from '../../照片/西門町.png';

const locations = [
  { id: 'taipei101', title: '台北101', image: imgTaipei101 },
  { id: 'taroko', title: '太魯閣', image: imgTaroko },
  { id: 'sunmoonlake', title: '日月潭', image: imgSunMoonLake },
  { id: 'ximending', title: '西門町', image: imgXimending },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-hero">
      <h1 className="home-title">台灣旅遊</h1>
      <p className="home-subtitle">Taiwan Travel - 探索美麗寶島</p>
      
      <div className="cards-container">
        {locations.map((loc) => (
          <div 
            key={loc.id} 
            className="location-card"
            onClick={() => navigate(`/${loc.id}`)}
          >
            <div className="card-image-wrapper">
              <img src={loc.image} alt={loc.title} className="card-image" />
            </div>
            <div className="card-content">
              <h2 className="card-title">{loc.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
