import 'module-alias/register'

const run = async () => {
  const app = (await import('@/main/config/app')).default
  app.listen(process.env.PORT)
}

run()