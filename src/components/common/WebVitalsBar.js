import { useState } from 'react';
import { getCLS, getFID, getLCP }  from 'web-vitals';
import './WebVitalsBar.css';

function WebVitalsBar() {

    const [cls, setCLS] = useState(localStorage.getItem('latestCLS') || '(measured after next full reload)');
    const [fid, setFID] = useState('(tap anywhere to measure)');
    const [lcp, setLCP] = useState('(tap anywhere to measure)');

    getCLS(cls => {
        localStorage.setItem('latestCLS', cls.value);
        setCLS(cls.value);
    });

    getFID(fid => {
        setFID(fid.value);
    });
    
    getLCP(lcp => {
        setLCP(lcp.value);
    });

    return (
        <div className="web-vitals-bar">
            <span className="heading">Latest Web Vitals </span> 
            <span className="web-vital">LCP: {lcp}</span>
            <span className="web-vital">FID: {fid}</span>
            <span className="web-vital">CLS: {cls}</span>
        </div>
    );
}

export default WebVitalsBar;
