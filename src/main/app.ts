import 'module-alias/register'

const run = async () => {
  const app = (await import('@/main/config/app')).default
  app.listen(9000)
}

run()