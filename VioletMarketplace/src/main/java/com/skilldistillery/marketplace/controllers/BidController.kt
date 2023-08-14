package com.skilldistillery.marketplace.controllers

@RestController
@RequestMapping("api")
@CrossOrigin("*", "http://localhost:4301")
class BidController {
    @Autowired
    private val bidService: BidService? = null

    /////////////// GET METHODS ///////////////////
    ///// GET ALL BIDS FOR A TOKEN
    @GetMapping("bids/{tokenId}")
    fun tokenBids(req: HttpServletRequest?, resp: HttpServletResponse?, @PathVariable tokenId: Int): List<Bid> {
        return bidService.userBids(tokenId)
    }

    ///// GET A ALL BIDS FOR A USER
    @GetMapping("bids/{userId}")
    fun userBids(req: HttpServletRequest?, resp: HttpServletResponse?, @PathVariable userId: Int): List<Bid> {
        return bidService.userBids(userId)
    }

    /////////////// PUT METHODS ///////////////////
    /////////////// POST METHODS ///////////////////
    // POST NEW BID
    @PostMapping("bids")
    fun create(req: HttpServletRequest?, resp: HttpServletResponse, @RequestBody bid: Bid?): Bid? {
        bidService.create(bid)
        if (bid == null) {
            resp.setStatus(404)
        }
        return bid
    }

    /////////////// DELETE METHODS ///////////////////
    //	DELETE BID BY BID ID
    @DeleteMapping("bids/delete/{bidId}")
    fun destroyBid(res: HttpServletResponse, req: HttpServletRequest?, @PathVariable bidId: Int) {
        if (bidService.destroyBid(bidId)) {
            res.setStatus(204)
        } else {
            res.setStatus(401)
        }
    }
}
