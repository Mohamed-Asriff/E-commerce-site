git status export const adminCredentials = {
  email: 'mohamedasriff2003@gmail.com',
  password: 'DM.Asriff@2003'
}

export const initialProducts = [
  {
    id: 1,
    name: 'Arduino Uno R4 WiFi',
    sku: 'CC-ARD-001',
    category: 'Arduino Boards',
    price: 9499,
    stockStatus: 'In stock',
    imageUrl: 'https://placehold.co/120x120/png?text=Arduino',
    description: 'WiFi-enabled development board for IoT prototyping.'
  },
  {
    id: 2,
    name: 'ESP32-S3 Dev Board',
    sku: 'CC-ESP-014',
    category: 'ESP Modules',
    price: 1799,
    stockStatus: 'In stock',
    imageUrl: 'https://placehold.co/120x120/png?text=ESP32',
    description: 'High-performance module with USB-C support.'
  },
  {
    id: 3,
    name: 'DHT22 Temperature Sensor',
    sku: 'CC-SEN-022',
    category: 'Sensors',
    price: 420,
    stockStatus: 'Out of stock',
    imageUrl: 'https://placehold.co/120x120/png?text=Sensor',
    description: 'Reliable temperature and humidity sensor.'
  },
  {
    id: 4,
    name: 'RGB LED Strip 5m',
    sku: 'CC-LED-008',
    category: 'LED & Lighting',
    price: 356.37,
    stockStatus: 'In stock',
    imageUrl: 'https://placehold.co/120x120/png?text=LED',
    description: 'Flexible lighting for displays and custom builds.'
  }
]

export const initialOrders = [
  {
    id: 1001,
    customer: 'Kasun Perera',
    email: 'kasun@example.com',
    itemName: 'Arduino Uno R4 WiFi',
    quantity: 3,
    total: 11879,
    contactNumber: '+94 77 100 1001',
    date: '2026-07-13'
  },
  {
    id: 1002,
    customer: 'Nimali Silva',
    email: 'nimali@example.com',
    itemName: 'ESP32-S3 Dev Board',
    quantity: 1,
    total: 1799,
    contactNumber: '+94 77 100 1002',
    date: '2026-07-12'
  },
  {
    id: 1003,
    customer: 'Tharindu Jayasuriya',
    email: 'tharindu@example.com',
    itemName: 'RGB LED Strip 5m',
    quantity: 4,
    total: 2868,
    contactNumber: '+94 77 100 1003',
    date: '2026-07-11'
  }
]
