up:
	docker compose up

dup:
	docker compose up -d

stop:
	docker compose stop

down:
	docker compose down

node:
	docker compose exec -it web bash

migrate:
	docker compose exec web bash -c "npx prisma migrate dev --name init"

generate:
	docker compose exec web bash -c "npx prisma generate"

db:
	docker compose exec db bash -c "psql -d SIGBAS -U admin -W"

