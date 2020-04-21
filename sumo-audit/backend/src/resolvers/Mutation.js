const Mutations = {
   async createCollector(parent, args, ctx, info){
    //    TODO Check if they are logged in

    const collector = await ctx.db.mutation.createCollector({
        data:{
            ...args
        }
    },
        info
    )
       console.log (collector);
       return collector;
   },
}

module.exports = Mutations;