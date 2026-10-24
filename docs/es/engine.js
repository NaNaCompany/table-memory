export const ITEMS=['Taza','Plato','Tenedor','Cuchara','Servilleta','Tetera','Botella','Cuenco','Pan','Manzana','Salero','Jarrón'];
export function shuffle(a,rng=Math.random){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}
export function makeBoard(rng=Math.random){return shuffle(ITEMS,rng)}
export function scoreBoard(board,answer,targets){const placed=answer.filter(Boolean);if(new Set(placed).size!==placed.length)throw new Error('Elemento duplicado');let items=0,positions=0;const missed=[];for(const name of targets){const index=answer.indexOf(name);if(index>=0)items++;if(index===board.indexOf(name))positions++;else missed.push(name)}return{items,positions,total:items+positions,missed}}
