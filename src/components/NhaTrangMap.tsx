import React from 'react';

export const NhaTrangMap: React.FC<{ className?: string; address?: string }> = ({
  className,
  address = '20 Trần Phú, Nha Trang, Khánh Hòa',
}) => (
  <iframe
    className={className}
    title={`Bản đồ Nha Trang: ${address}`}
    src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&z=14&output=embed`}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen
    style={{ border: 0 }}
  />
);
