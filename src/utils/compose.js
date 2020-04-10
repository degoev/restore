const compose = (...func) => (Comp) => {
     return func.reduceRight((wrapped, f) => f(wrapped), Comp)
}

export default compose;