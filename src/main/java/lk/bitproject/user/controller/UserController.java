package lk.bitproject.user.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import lk.bitproject.user.model.User;
import lk.bitproject.user.model.UserDao;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@SpringBootApplication
public class UserController {

    @Autowired //Automatically provides an instance of a class that implements this interface 
    private UserDao userDao;
    
    @RequestMapping(value ={"/user"})
    public ModelAndView loadUserUI() {

        ModelAndView userUI = new ModelAndView();
        userUI.setViewName("user.html");
        
        return userUI;
    }

    @GetMapping(value ={"/user/alldata"} , produces = "application/json")
    public List<User> findAllData() {

        return userDao.findAll();
    
    }

}