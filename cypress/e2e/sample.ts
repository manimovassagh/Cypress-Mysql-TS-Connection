const n: Map<string, string> = new Map()
n.set('1', '1')
n.set('2', '2')
console.log(n)
const p = n.get('1')
console.log(p)
n.delete('1')
const obj = {
    a: 1
}
const ﬂ = new Set([1, 2, 3])


const factory = () =>{
    
    return {
        name:(n:string)=>console.log(n),
        family:(f:string)=>console.log(f),
        fullName:(n:string,f:string)=>console.log(n,f)
        
    }
}

const logger=factory()
logger.family("movassagh")
