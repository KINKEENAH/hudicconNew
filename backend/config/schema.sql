CREATE TABLE IF NOT EXISTS contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  subject VARCHAR(200),
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  location VARCHAR(200),
  event_date DATE NOT NULL,
  event_time TIME,
  image_url TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS stats (
  id SERIAL PRIMARY KEY,
  label VARCHAR(100) NOT NULL,
  value VARCHAR(50) NOT NULL,
  sort_order INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR(150) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP DEFAULT NOW()
);

-- Seed default stats
INSERT INTO stats (label, value, sort_order) VALUES
  ('Communities Reached', '120+', 1),
  ('Beneficiaries', '5,000+', 2),
  ('Programs Running', '18', 3),
  ('Years of Impact', '10+', 4)
ON CONFLICT DO NOTHING;