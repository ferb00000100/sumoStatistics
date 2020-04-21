
// if you are using the same query on the back end and the fron end you can uses forwardTo
// const { forwardTo } = require('prisma-binding')

const Query = {
    // collectors: forwardTo('db')
   async collectors(parent, args, ctx, info) {
        const collector = await ctx.db.query.collectors();
        return collector
    }
}

module.exports = Query;