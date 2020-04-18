module.exports = (args) => {
    const data = {
    "confidence_threshold": args.ct,
    "description": args.d,
    "name": args.n,
    "platform": "custom", // Only supporting Full Stack for now.
    "status": args.s,
    "third_party_platform": args.tpp,
    }
    return data
}