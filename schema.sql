CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255),

    customer_id VARCHAR(255) UNIQUE,
    price_id VARCHAR(255),

    status VARCHAR(50) DEFAULT 'inactive',

    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pdf_summaries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    user_id VARCHAR(255) NOT NULL,
    original_file_url TEXT NOT NULL,
    file_name TEXT,
    title TEXT,

    summary_text TEXT NOT NULL,

    status VARCHAR(50) DEFAULT 'completed',

    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    amount INTEGER NOT NULL,
    status VARCHAR(50) NOT NULL,

    stripe_payment_id VARCHAR(255) UNIQUE NOT NULL,
    price_id VARCHAR(255) NOT NULL,

    user_email VARCHAR(255) NOT NULL REFERENCES users(email),

    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_users_updated_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_pdf_summaries_updated_at
BEFORE UPDATE ON pdf_summaries
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_payments_updated_at
BEFORE UPDATE ON payments
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE INDEX idx_pdf_summaries_user_id ON pdf_summaries(user_id);
CREATE INDEX idx_pdf_summaries_created_at ON pdf_summaries(created_at DESC);
CREATE INDEX idx_pdf_summaries_status ON pdf_summaries(status);

CREATE INDEX idx_payments_user_email ON payments(user_email);
CREATE INDEX idx_users_email ON users(email);