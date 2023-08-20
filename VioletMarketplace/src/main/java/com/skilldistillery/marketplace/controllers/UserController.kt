package com.skilldistillery.marketplace.controllers

import com.skilldistillery.marketplace.entities.User
import com.skilldistillery.marketplace.services.UserService
import org.springframework.web.bind.annotation.*
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@RestController
@RequestMapping("api")
@CrossOrigin("*", "http://localhost:4301")
class UserController(
    private val userSvc: UserService
) {
    @GetMapping("user/{username}")
    fun returnUser(@PathVariable username: String?): User? {
        return userSvc.getUserByUsername(username!!)
    }

    @GetMapping("user/id/{userId}")
    fun returnUser(@PathVariable userId: Int): User? {
        return userSvc.show(userId)
    }

    @PostMapping("user")
    fun addUser(@RequestBody newUser: User?, req: HttpServletRequest, resp: HttpServletResponse): User? {
        var user = newUser
        try {
            user = userSvc.create(user!!)
            resp.status = 201
            val url = req.requestURL
            url.append("/").append(user.id)
            resp.setHeader("Location", url.toString())
        } catch (e: Exception) {
            System.err.println(e)
            resp.status = 400
            user = null
        }
        return user
    }

    @PutMapping("user/{userId}")
    fun updateUser(@PathVariable userId: Int?, @RequestBody user: User?): User {
        return userSvc.update(userId!!, user!!)
    }

    @DeleteMapping("user/{userId}")
    fun deleteUser(@PathVariable userId: Int?): Boolean {
        return userSvc.delete(userId!!)
    }
}
