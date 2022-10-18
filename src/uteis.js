export function iniciais(texto) {
    let t = texto.split('')
    return t[0]
  }

export function ramdomColors(cor) {
  const colors = ['#d32f2f','#388e3c','#ab47bc','#42a5f5','#f57c00']
  
  return colors[Math.floor(Math.random()*colors.length)]
}  
const LinkLocal = 'http://localhost:4000/'
const LinkRemoto = 'https://api-site-relacionamentos.vercel.app/'
export const linkRemoto = LinkRemoto
export const linkLocal = 'http://localhost:4000/'