# Use a imagem oficial do PostgreSQL como base
FROM postgres:latest

# Configure variáveis de ambiente para o PostgreSQL
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=password
ENV POSTGRES_DB=pscdb

# Copie um arquivo SQL inicial (opcional)
# COPY ./init.sql /docker-entrypoint-initdb.d/

# Exponha a porta padrão do PostgreSQL
EXPOSE 5432
