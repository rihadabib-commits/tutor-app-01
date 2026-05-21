


// import { BookingCard } from '@/components/Bookingcard';
// import { auth } from '@/lib/auth';
// import { Button } from '@heroui/react';
// import { headers } from 'next/headers';
// import Image from 'next/image';
// import React from 'react';

// const DetealsPage =async ({params}) => {

//     const {id} = await params;


//     const {token}= await auth.api.getToken({
//       headers: await headers()
//     })
 

//       const res = await fetch(`http://localhost:5000/teachers/${id}`,{
//         headers: {
//           authorization: `Bearer ${token}`
//         }
//       }
       
//       )
//       const teacher = await res.json()

//       const { _id, description, imageUrl, Name, price, category, sessionStartDate } = teacher;

  

//     console.log(teacher)
//     return (




     
//         <div className='flex max-w-7xl mx-auto p-10 gap-10'>
          
//         <div className=' '>
//             <Image
            
//                 alt={Name}
//                 src={imageUrl}
//                 height={400}
//                 width={400}
            
//             />
//         </div>





//               <div className="mt-4 p-2">

//         <h2 className="text-xl font-bold">{Name}</h2>

//         <div className="text-gray-500 font-bold">{category}</div>

//         <div className="text-sm mt-2">
//           Session Start Date: {sessionStartDate}
//         </div>
//         <div className="text-sm mt-2">
//               Institute:{description}
//         </div>

//         <div className="text-sm">
//           Available: Sun - Thu 5:00 PM - 8:00 PM
//         </div>

//         <div className="font-semibold mt-2">
//           Fee: ৳{price}/hr
//         </div>
      
//             <BookingCard  tutor={teacher}  />
//       </div>




//         </div>
//     );
// };

// export default DetealsPage



import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import { BookingCard } from '@/components/Bookingcard';

const DetealsPage = async ({ params }) => {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers()
  });

  const res = await fetch(`http://localhost:5000/teachers/${id}`, {
    headers: { authorization: `Bearer ${token}` }
  });

  const teacher = await res.json();
  const { description, imageUrl, Name, price, category, sessionStartDate, areaCity, mode, dayAndTime } = teacher;

  return (
    <>
      <style>{`
        .det-wrap {
          background-color: #f5f3ff;
          min-height: 100vh;
          padding: clamp(16px, 4vw, 40px);
        }
        .det-inner { max-width: 1100px; margin: 0 auto; }

        .det-card {
          background: white;
          border-radius: 24px;
          padding: clamp(20px, 4vw, 40px);
          box-shadow: 0 4px 24px rgba(147,51,234,0.08);
          border: 1px solid #ede9fe;
          display: flex;
          gap: clamp(16px, 4vw, 40px);
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .det-img-wrap {
          flex-shrink: 0;
          width: clamp(160px, 30vw, 280px);
          height: clamp(160px, 30vw, 280px);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }

        .det-info { flex: 1; min-width: 200px; }

        .det-badge {
          display: inline-flex;
          align-items: center;
          background: #f3e8ff;
          color: #9333ea;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 12px;
        }

        .det-name {
          font-size: clamp(22px, 4vw, 32px);
          font-weight: 800;
          color: #1f1235;
          margin: 0 0 16px;
        }

        .det-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 12px;
          margin-bottom: 20px;
        }

        .det-info-box {
          background: #f9f7ff;
          border-radius: 12px;
          padding: 12px;
        }

        .det-info-label {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 4px;
          font-size: 11px;
          color: #9ca3af;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .det-info-value {
          font-size: 13px;
          font-weight: 600;
          color: #1f1235;
        }

        .det-desc {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.7;
          margin: 0 0 20px;
        }

        .det-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          border-top: 1px solid #ede9fe;
          padding-top: 20px;
        }

        .det-price {
          font-size: clamp(24px, 5vw, 32px);
          font-weight: 800;
          color: #1f1235;
        }

        .det-price span {
          font-size: 14px;
          color: #9ca3af;
          margin-left: 4px;
          font-weight: 400;
        }

        @media (max-width: 480px) {
          .det-img-wrap {
            width: 100%;
            height: 220px;
          }
        }
      `}</style>

      <div className="det-wrap">
        <div className="det-inner">
          <div className="det-card">

            {/* Image */}
            <div className="det-img-wrap">
              <Image
                alt={Name}
                src={imageUrl}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>

            {/* Info */}
            <div className="det-info">

              <div className="det-badge">{category}</div>
              <h1 className="det-name">{Name}</h1>

              <div className="det-grid">
                {[
                  { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", label: "Starts", value: sessionStartDate },
                  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Schedule", value: dayAndTime || "Sun–Thu 5–8 PM" },
                  { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", label: "Area", value: areaCity || "N/A" },
                  { icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Mode", value: mode || "Online" },
                ].map(item => (
                  <div key={item.label} className="det-info-box">
                    <div className="det-info-label">
                      <svg width="14" height="14" fill="none" stroke="#9333ea" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                      {item.label}
                    </div>
                    <div className="det-info-value">{item.value}</div>
                  </div>
                ))}
              </div>

              {description && (
                <p className="det-desc">{description}</p>
              )}

              <div className="det-footer">
                <div className="det-price">
                  ৳{price}<span>/hr</span>
                </div>
                <BookingCard tutor={teacher} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetealsPage;