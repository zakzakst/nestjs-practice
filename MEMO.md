### 試す
https://docs.nestjs.com/recipes/prisma#use-prisma-client-in-your-nestjs-services
- import { PrismaClient } from 'generated/prisma'のところ

### 使ったコマンド
- nest new nestjs-practice
- nest g module todos
- nest g controller todos
- nest g service todos
- npx prisma init
- npx prisma migrate dev --name init