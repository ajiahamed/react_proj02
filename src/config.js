export const mask = (value) => {
  if (!value) return 'not set'
  if (value.length <= 8) return '*'.repeat(value.length)
  return `${value.slice(0, 4)}${'*'.repeat(Math.max(6, value.length - 8))}${value.slice(-4)}`
}

export const appConfig = {
  name: import.meta.env.VITE_APP_NAME || 'Aurora Dashboard',
  env: import.meta.env.VITE_APP_ENV || 'development',
  apiUrl: import.meta.env.VITE_API_URL || '',
  apiKey: import.meta.env.VITE_API_KEY || '',
  authToken: import.meta.env.VITE_AUTH_TOKEN || '',
  analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  darkMode: import.meta.env.VITE_ENABLE_DARK_MODE === 'true',
}

export const envSummary = [
  { key: 'VITE_APP_NAME', value: appConfig.name, secret: false },
  { key: 'VITE_APP_ENV', value: appConfig.env, secret: false },
  { key: 'VITE_API_URL', value: appConfig.apiUrl, secret: false },
  { key: 'VITE_API_KEY', value: mask(appConfig.apiKey), secret: true },
  { key: 'VITE_AUTH_TOKEN', value: mask(appConfig.authToken), secret: true },
  { key: 'VITE_ENABLE_ANALYTICS', value: appConfig.analytics ? 'true' : 'false', secret: false },
  { key: 'VITE_ENABLE_DARK_MODE', value: appConfig.darkMode ? 'true' : 'false', secret: false },
]
