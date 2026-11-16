INSERT INTO categories (name, slug) VALUES
  ('Arduino Boards', 'arduino-boards'),
  ('ESP Modules', 'esp-modules'),
  ('Sensors', 'sensors'),
  ('LED & Lighting', 'led-lighting'),
  ('Displays', 'displays'),
  ('Motors & Drivers', 'motors-drivers'),
  ('Power & Charging', 'power-charging'),
  ('Tools & Testers', 'tools-testers');

INSERT INTO products (category_id, name, sku, description, image_url, price, stock, status)
SELECT id, 'Arduino Uno R4 WiFi', 'CC-ARD-001', 'WiFi-enabled development board for IoT prototyping.', 'https://placehold.co/120x120/png?text=Arduino', 9499, 18, 'active' FROM categories WHERE slug = 'arduino-boards'
UNION ALL
SELECT id, 'ESP32-S3 Dev Board', 'CC-ESP-014', 'High-performance module with USB-C support.', 'https://placehold.co/120x120/png?text=ESP32', 1799, 42, 'active' FROM categories WHERE slug = 'esp-modules'
UNION ALL
SELECT id, 'DHT22 Temperature Sensor', 'CC-SEN-022', 'Reliable temperature and humidity sensor.', 'https://placehold.co/120x120/png?text=Sensor', 420, 9, 'low stock' FROM categories WHERE slug = 'sensors'
UNION ALL
SELECT id, 'RGB LED Strip 5m', 'CC-LED-008', 'Flexible lighting for displays and custom builds.', 'https://placehold.co/120x120/png?text=LED', 356.37, 66, 'active' FROM categories WHERE slug = 'led-lighting';

INSERT INTO customers (full_name, email, phone) VALUES
  ('Kasun Perera', 'kasun@example.com', '+94 77 000 0001'),
  ('Nimali Silva', 'nimali@example.com', '+94 77 000 0002'),
  ('Tharindu Jayasuriya', 'tharindu@example.com', '+94 77 000 0003');

INSERT INTO orders (order_number, customer_id, status, total_amount, placed_at)
SELECT 'ORD-1001', id, 'processing', 11879, '2026-07-13' FROM customers WHERE email = 'kasun@example.com'
UNION ALL
SELECT 'ORD-1002', id, 'shipped', 1799, '2026-07-12' FROM customers WHERE email = 'nimali@example.com'
UNION ALL
SELECT 'ORD-1003', id, 'delivered', 2868, '2026-07-11' FROM customers WHERE email = 'tharindu@example.com';

INSERT INTO order_items (order_id, product_id, quantity, unit_price)
SELECT o.id, p.id, 1, p.price
FROM orders o
JOIN products p ON p.sku = 'CC-ARD-001'
WHERE o.order_number = 'ORD-1001'
UNION ALL
SELECT o.id, p.id, 1, p.price
FROM orders o
JOIN products p ON p.sku = 'CC-ESP-014'
WHERE o.order_number = 'ORD-1002'
UNION ALL
SELECT o.id, p.id, 2, p.price
FROM orders o
JOIN products p ON p.sku = 'CC-LED-008'
WHERE o.order_number = 'ORD-1003';

INSERT INTO website_metrics (metric_date, sessions, page_views, conversions, revenue) VALUES
  ('2026-07-11', 1240, 3980, 46, 27680),
  ('2026-07-12', 1392, 4224, 51, 31420),
  ('2026-07-13', 1518, 4802, 59, 33998);
